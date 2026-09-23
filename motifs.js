/* ============================================================
   Stylized SVG motifs — one hand-built pattern per art form.
   These are ORIGINAL geometric/decorative renderings inspired by
   each tradition's characteristic colours & forms — not photographs
   or reproductions of any existing artwork — so the site needs no
   external images or paid image APIs and works fully offline.
   ============================================================ */

const MOTIFS = {

  madhubani: () => `
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fbf1da"/>
    <rect x="8" y="8" width="384" height="284" fill="none" stroke="#b3281a" stroke-width="4"/>
    <rect x="16" y="16" width="368" height="268" fill="none" stroke="#c99a3c" stroke-width="2"/>
    <circle cx="200" cy="150" r="70" fill="none" stroke="#b3281a" stroke-width="3"/>
    <circle cx="200" cy="150" r="52" fill="#e8a33d" opacity="0.85"/>
    ${Array.from({length:12}).map((_,i)=>{const a=i*30*Math.PI/180;const x1=200+52*Math.cos(a),y1=150+52*Math.sin(a),x2=200+70*Math.cos(a),y2=150+70*Math.sin(a);return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#7a1f2b" stroke-width="3"/>`}).join('')}
    <path d="M120 150 Q90 120 60 150 Q90 180 120 150 Z" fill="#3a5a2a" stroke="#2a1a14" stroke-width="2"/>
    <path d="M280 150 Q310 120 340 150 Q310 180 280 150 Z" fill="#3a5a2a" stroke="#2a1a14" stroke-width="2"/>
    <circle cx="200" cy="150" r="14" fill="#7a1f2b"/>
    ${Array.from({length:24}).map((_,i)=>{const a=i*15*Math.PI/180;const x=200+95*Math.cos(a),y=150+95*Math.sin(a);return `<circle cx="${x}" cy="${y}" r="3" fill="#223a5e"/>`}).join('')}
  </svg>`,

  warli: () => `
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#8a5a34"/>
    <circle cx="200" cy="150" r="75" fill="none" stroke="#f2e6cf" stroke-width="2.5"/>
    ${Array.from({length:16}).map((_,i)=>{
      const a=i*22.5*Math.PI/180;
      const x=200+75*Math.cos(a), y=150+75*Math.sin(a);
      const rot=(a*180/Math.PI)+90;
      return `<g transform="translate(${x} ${y}) rotate(${rot})">
        <circle cx="0" cy="-9" r="3.2" fill="#f2e6cf"/>
        <polygon points="0,-6 6,4 0,1 -6,4" fill="none" stroke="#f2e6cf" stroke-width="1.6"/>
        <line x1="0" y1="4" x2="-4" y2="12" stroke="#f2e6cf" stroke-width="1.6"/>
        <line x1="0" y1="4" x2="4" y2="12" stroke="#f2e6cf" stroke-width="1.6"/>
        <line x1="-6" y1="0" x2="-11" y2="-3" stroke="#f2e6cf" stroke-width="1.6"/>
        <line x1="6" y1="0" x2="11" y2="-3" stroke="#f2e6cf" stroke-width="1.6"/>
      </g>`
    }).join('')}
    <polygon points="200,110 220,150 200,190 180,150" fill="#f2e6cf" opacity="0.9"/>
    <circle cx="90" cy="60" r="4" fill="#f2e6cf"/>
    <circle cx="320" cy="240" r="4" fill="#f2e6cf"/>
  </svg>`,

  pattachitra: () => `
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#f4e3c1"/>
    <rect x="10" y="10" width="380" height="280" fill="none" stroke="#8c1f1f" stroke-width="6"/>
    <rect x="20" y="20" width="360" height="260" fill="none" stroke="#c99a3c" stroke-width="2"/>
    ${Array.from({length:20}).map((_,i)=>`<circle cx="${20+i*19}" cy="20" r="4" fill="#8c1f1f"/><circle cx="${20+i*19}" cy="280" r="4" fill="#8c1f1f"/>`).join('')}
    <path d="M200 60 C160 90 160 140 200 170 C240 140 240 90 200 60 Z" fill="#8c1f1f"/>
    <circle cx="200" cy="100" r="22" fill="#f4e3c1" stroke="#1a1a1a" stroke-width="2"/>
    <path d="M140 200 Q200 240 260 200" stroke="#223a5e" stroke-width="6" fill="none"/>
    <path d="M120 220 Q200 260 280 220" stroke="#3a5a2a" stroke-width="5" fill="none"/>
    ${Array.from({length:6}).map((_,i)=>`<path d="M${90+i*45} 60 q10 -20 20 0" stroke="#8c1f1f" stroke-width="2" fill="none"/>`).join('')}
  </svg>`,

  kalamkari: () => `
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#e9dcbd"/>
    <path d="M200 40 Q140 90 160 150 Q120 180 140 230 Q170 260 200 240" fill="none" stroke="#5b3a1e" stroke-width="3"/>
    <path d="M200 40 Q260 90 240 150 Q280 180 260 230 Q230 260 200 240" fill="none" stroke="#5b3a1e" stroke-width="3"/>
    ${[ [200,70,16],[165,120,12],[235,120,12],[150,190,10],[250,190,10],[200,220,13] ].map(([cx,cy,r])=>`
      <g>
        <path d="M${cx} ${cy-r} q${r} ${r*0.4} 0 ${r*1.6} q-${r} -${r*0.4} 0 -${r*1.6}" fill="#a5482b"/>
        <circle cx="${cx}" cy="${cy}" r="${r*0.35}" fill="#223a5e"/>
      </g>`).join('')}
    <rect x="6" y="6" width="388" height="288" fill="none" stroke="#5b3a1e" stroke-width="3"/>
  </svg>`,

  tanjore: () => `
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#4a0e12"/>
    <path d="M200 40 C130 40 110 120 130 200 L270 200 C290 120 270 40 200 40 Z" fill="#c99a3c"/>
    <path d="M200 55 C145 55 130 120 145 185 L255 185 C270 120 255 55 200 55 Z" fill="#7a1f2b"/>
    <circle cx="200" cy="120" r="34" fill="#e6c874" stroke="#c99a3c" stroke-width="3"/>
    <circle cx="200" cy="120" r="20" fill="#7a1f2b"/>
    <rect x="150" y="200" width="100" height="18" fill="#c99a3c"/>
    ${Array.from({length:9}).map((_,i)=>`<circle cx="${160+i*10}" cy="209" r="3" fill="#4a0e12"/>`).join('')}
    <path d="M100 240 h200" stroke="#c99a3c" stroke-width="4"/>
    ${Array.from({length:11}).map((_,i)=>`<circle cx="${100+i*20}" cy="240" r="5" fill="#e6c874"/>`).join('')}
  </svg>`,

  kerala_mural: () => `
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#c94b1f"/>
    <path d="M200 50 q45 10 45 60 q0 40 -20 60 q25 10 25 45 h-100 q0 -35 25 -45 q-20 -20 -20 -60 q0 -50 45 -60 Z" fill="#e9c74a" stroke="#1a1a1a" stroke-width="2.5"/>
    <circle cx="182" cy="105" r="6" fill="#1a1a1a"/>
    <circle cx="218" cy="105" r="6" fill="#1a1a1a"/>
    <path d="M175 130 q25 18 50 0" stroke="#1a1a1a" stroke-width="3" fill="none"/>
    <path d="M140 90 q-25 -10 -35 20" stroke="#1a4d2e" stroke-width="6" fill="none"/>
    <path d="M260 90 q25 -10 35 20" stroke="#1a4d2e" stroke-width="6" fill="none"/>
    ${Array.from({length:5}).map((_,i)=>`<circle cx="${150+i*25}" cy="60" r="5" fill="#1a4d2e"/>`).join('')}
    <rect x="10" y="10" width="380" height="280" fill="none" stroke="#e9c74a" stroke-width="4"/>
  </svg>`,

  gond: () => `
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#16261c"/>
    <path d="M200 250 C170 250 160 210 160 180 C160 140 175 90 200 60 C225 90 240 140 240 180 C240 210 230 250 200 250 Z" fill="none" stroke="#e6c874" stroke-width="2"/>
    ${Array.from({length:70}).map(()=>{
      const t=Math.random();
      const x=200+(Math.random()-0.5)*70*t*1.4;
      const y=250-t*190;
      const c=['#e6c874','#c1502e','#3a7a5a','#e9dcbd'][Math.floor(Math.random()*4)];
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(1.5+Math.random()*2).toFixed(1)}" fill="${c}"/>`
    }).join('')}
    <ellipse cx="200" cy="255" rx="55" ry="10" fill="#e6c874" opacity="0.5"/>
  </svg>`,

  rajasthani_miniature: () => `
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#e9dcbd"/>
    <rect x="12" y="12" width="376" height="276" fill="none" stroke="#c99a3c" stroke-width="5"/>
    <path d="M120 260 V150 Q120 100 200 90 Q280 100 280 150 V260 Z" fill="#f7ede0" stroke="#7a1f2b" stroke-width="3"/>
    <path d="M150 150 Q200 110 250 150" fill="none" stroke="#223a5e" stroke-width="3"/>
    <circle cx="200" cy="180" r="26" fill="#c1502e"/>
    <path d="M170 230 h60 v30 h-60 Z" fill="#223a5e"/>
    <circle cx="90" cy="90" r="18" fill="#e6c874" stroke="#7a1f2b" stroke-width="2"/>
    ${Array.from({length:6}).map((_,i)=>`<line x1="${90+18*Math.cos(i*60*Math.PI/180)}" y1="${90+18*Math.sin(i*60*Math.PI/180)}" x2="${90+26*Math.cos(i*60*Math.PI/180)}" y2="${90+26*Math.sin(i*60*Math.PI/180)}" stroke="#e6c874" stroke-width="3"/>`).join('')}
  </svg>`,

  kalighat: () => `
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#f7f1e2"/>
    <path d="M200 60 C150 70 140 130 160 170 C130 190 130 240 170 250 C190 255 210 255 230 250 C270 240 270 190 240 170 C260 130 250 70 200 60 Z" fill="#1a1a1a"/>
    <path d="M170 250 C190 235 210 235 230 250" fill="none" stroke="#c1502e" stroke-width="10" stroke-linecap="round"/>
    <circle cx="200" cy="115" r="4" fill="#f7f1e2"/>
    <path d="M120 200 q40 -20 0 -60" stroke="#223a5e" stroke-width="6" fill="none"/>
    <path d="M280 200 q-40 -20 0 -60" stroke="#223a5e" stroke-width="6" fill="none"/>
  </svg>`,

  rogan: () => `
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#1c1410"/>
    <g stroke="#c1502e" stroke-width="4" fill="none">
      <path d="M200 250 V90"/>
      <path d="M200 90 Q170 60 150 75 Q160 100 200 110"/>
      <path d="M200 90 Q230 60 250 75 Q240 100 200 110"/>
      <path d="M200 150 Q160 130 145 150 Q160 175 200 165"/>
      <path d="M200 150 Q240 130 255 150 Q240 175 200 165"/>
      <path d="M200 205 Q165 190 155 210 Q170 230 200 220"/>
      <path d="M200 205 Q235 190 245 210 Q230 230 200 220"/>
    </g>
    ${[ [150,75],[250,75],[145,150],[255,150],[155,210],[245,210] ].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="6" fill="#e6c874"/>`).join('')}
    <circle cx="200" cy="250" r="8" fill="#e6c874"/>
  </svg>`
};

function getMotifSVG(id){
  return (MOTIFS[id] || MOTIFS.madhubani)();
}
