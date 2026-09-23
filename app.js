(function(){
  "use strict";

  let map, markers = {}, activeId = null, indiaLayer = null;
  const INDIA_GEOJSON =
    "https://cdn.jsdelivr.net/gh/AbhinavSwami28/india-official-geojson@main/india-states-simplified.geojson";

  function init(){
    buildMap();
    buildChips();
    buildGallery();
    wireSearch();
  }

  function buildMap(){
    map = L.map("map", {
      scrollWheelZoom: true,
      zoomControl: true,
      minZoom: 4,
      maxZoom: 8,
      zoomSnap: 0.25,
      zoomDelta: 0.5,
      preferCanvas: true
    }).setView([22.5, 79.5], 5);

    // No raster tile layer is used here. This avoids third-party tile
    // blocking/403 errors and keeps the assignment map clean. The real
    // India state/UT boundaries are drawn from GeoJSON below.
    loadIndiaStates();

    ART_FORMS.forEach(art => {
      const icon = L.divIcon({
        className: "",
        html: `<div class="art-marker" data-id="${art.id}"></div>`,
        iconSize: [20,20],
        iconAnchor: [10,10]
      });

      const marker = L.marker([art.lat, art.lng], {
        icon,
        title: art.name
      }).addTo(map);

      marker.bindTooltip(
        `<b>${art.name}</b><br>${art.state}`,
        {direction:"top", offset:[0,-8], opacity:.96}
      );

      marker.on("click", () => selectArt(art.id, true));
      markers[art.id] = marker;
    });

    // Fix Leaflet sizing when the page/browser has just loaded.
    setTimeout(() => map.invalidateSize(), 250);
    window.addEventListener("resize", () => map.invalidateSize());
  }

  async function loadIndiaStates(){
    const status = document.getElementById("mapStatus");

    try{
      const response = await fetch(INDIA_GEOJSON, {cache:"force-cache"});
      if(!response.ok) throw new Error("Map data could not be loaded.");
      const geojson = await response.json();

      indiaLayer = L.geoJSON(geojson, {
        style: {
          className: "india-state",
          fillColor: "#ead9a9",
          fillOpacity: .72,
          color: "#7a1f2b",
          weight: 1.15
        },
        onEachFeature: (feature, layer) => {
          const props = feature.properties || {};
          const name =
            props.ST_NM || props.NAME_1 || props.name ||
            props.State || props.state || "Indian region";

          layer.bindTooltip(name, {
            sticky:true,
            direction:"center",
            className:"india-state-tooltip"
          });

          layer.on({
            mouseover: e => e.target.setStyle({
              fillColor:"#e6c874",
              fillOpacity:.96,
              weight:2
            }),
            mouseout: e => indiaLayer.resetStyle(e.target),
            click: () => {
              const art = ART_FORMS.find(a =>
                a.state.toLowerCase() === String(name).toLowerCase()
              );
              if(art) selectArt(art.id, true);
            }
          });
        }
      }).addTo(map);

      // Fit the real India state map, while leaving room for markers.
      const bounds = indiaLayer.getBounds();
      if(bounds.isValid()){
        map.fitBounds(bounds.pad(.055), {padding:[15,15], maxZoom:6});
      }

      if(status) status.classList.add("ready");
    }catch(err){
      console.warn("India GeoJSON failed:", err);
      if(status){
        status.textContent = "India state boundaries could not load. Please check your internet connection.";
        status.classList.add("error");
      }
    }
  }

  function buildChips(){
    const states = [...new Set(ART_FORMS.map(a => a.state))].sort();
    const row = document.getElementById("stateChips");
    row.appendChild(makeChip("All States", "", true));
    states.forEach(s => row.appendChild(makeChip(s, s, false)));
  }

  function makeChip(label, value, active){
    const b = document.createElement("button");
    b.className = "chip" + (active ? " active" : "");
    b.textContent = label;
    b.dataset.value = value;
    b.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      b.classList.add("active");
      applyFilters();
    });
    return b;
  }

  function buildGallery(){
    const grid = document.getElementById("galleryGrid");
    grid.innerHTML = "";

    ART_FORMS.forEach(art => {
      const card = document.createElement("div");
      card.className = "art-card";
      card.dataset.id = art.id;
      card.dataset.name = art.name.toLowerCase();
      card.dataset.state = art.state;
      card.tabIndex = 0;

      card.innerHTML = `
        <div class="art-thumb">${getMotifSVG(art.id)}</div>
        <div class="art-card-body">
          <h4>${art.name}</h4>
          <div class="state">${art.state}</div>
        </div>`;

      card.addEventListener("click", () => selectArt(art.id, true));
      card.addEventListener("keypress", e => {
        if(e.key === "Enter") selectArt(art.id, true);
      });

      grid.appendChild(card);
    });
  }

  function wireSearch(){
    document.getElementById("searchInput")
      .addEventListener("input", applyFilters);
  }

  function applyFilters(){
    const q = document.getElementById("searchInput").value.trim().toLowerCase();
    const activeChip = document.querySelector(".chip.active");
    const stateFilter = activeChip ? activeChip.dataset.value : "";
    let visibleCount = 0;

    document.querySelectorAll(".art-card").forEach(card => {
      const matchesText =
        !q ||
        card.dataset.name.includes(q) ||
        card.dataset.state.toLowerCase().includes(q);

      const matchesState =
        !stateFilter || card.dataset.state === stateFilter;

      const show = matchesText && matchesState;
      card.classList.toggle("hidden", !show);

      const marker = markers[card.dataset.id];
      if(marker){
        const el = marker.getElement();
        if(el) el.style.opacity = show ? "1" : ".18";
      }

      if(show) visibleCount++;
    });

    const grid = document.getElementById("galleryGrid");
    let noRes = grid.querySelector(".no-results");

    if(visibleCount === 0){
      if(!noRes){
        noRes = document.createElement("div");
        noRes.className = "no-results";
        noRes.textContent =
          "No art forms match your search — try a different name or state.";
        grid.appendChild(noRes);
      }
    }else if(noRes){
      noRes.remove();
    }
  }

  function selectArt(id, flyTo){
    const art = ART_FORMS.find(a => a.id === id);
    if(!art || !markers[id]) return;

    activeId = id;

    document.querySelectorAll(".art-marker")
      .forEach(el => el.classList.remove("active"));

    const markerEl = markers[id].getElement();
    if(markerEl) markerEl.classList.add("active");

    document.querySelectorAll(".art-card")
      .forEach(c => c.classList.toggle("selected", c.dataset.id === id));

    if(flyTo){
      map.flyTo([art.lat, art.lng], 6.2, {duration:.9});
      markers[id].openTooltip();
    }

    renderInfoPanel(art);
  }

  function renderInfoPanel(art){
    const panel = document.getElementById("infoPanel");

    panel.innerHTML = `
      <div class="info-motif">${getMotifSVG(art.id)}</div>
      <span class="info-tag">${art.tags.join(" · ")}</span>
      <h2>${art.name}</h2>
      <div class="state-line">${art.state}</div>
      <h3>History</h3>
      <p>${art.history}</p>
      <h3>Characteristics</h3>
      <ul>${art.characteristics.map(c => `<li>${c}</li>`).join("")}</ul>
    `;
  }

  document.addEventListener("DOMContentLoaded", init);
})();
