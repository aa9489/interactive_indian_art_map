/* ============================================================
   Art form data — coordinates are approximate town/region
   centres associated with each tradition's home area.
   ============================================================ */

const ART_FORMS = [
  {
    id: "madhubani",
    name: "Madhubani",
    state: "Bihar",
    lat: 26.35, lng: 86.07,
    history: "Traditionally painted by women of the Mithila region on freshly plastered mud walls and floors during festivals and weddings, Madhubani art gained wider recognition after a 1966 drought led artists to transfer the style onto paper and canvas for sale.",
    characteristics: [
      "Bold double-line outlines with no blank space left unfilled",
      "Natural dyes and pigments from turmeric, indigo and soot",
      "Recurring motifs: fish, sun, lotus and the Tree of Life",
      "Five distinct styles including Bharni, Kachni and Godna"
    ],
    tags: ["folk", "ritual", "wall art"]
  },
  {
    id: "warli",
    name: "Warli",
    state: "Maharashtra",
    lat: 19.90, lng: 72.90,
    history: "Practised by the Warli tribe near the Maharashtra–Gujarat border, this art form is believed to date back to the 10th century. It was traditionally drawn on mud walls to mark harvests, weddings and hunts, using rice paste on a red ochre or cow-dung base.",
    characteristics: [
      "Monochrome white pigment on an earthy red-brown ground",
      "Figures built from simple triangles, circles and lines",
      "Scenes of daily life: farming, dancing and hunting",
      "The circular Tarpa dance is a signature composition"
    ],
    tags: ["tribal", "wall art"]
  },
  {
    id: "pattachitra",
    name: "Pattachitra",
    state: "Odisha",
    lat: 19.80, lng: 85.83,
    history: "Meaning 'cloth picture', Pattachitra developed alongside the Jagannath Temple cult in Puri, with artists preparing canvas by coating cloth with tamarind glue and chalk. It has been practised for over a thousand years by hereditary painter communities called Chitrakaras.",
    characteristics: [
      "Painted on treated cloth with natural mineral colours",
      "Dense, continuous floral and creeper borders",
      "Themes from Jagannath, Krishna and the Puranas",
      "No pencil sketching — outlines drawn freehand in one stroke"
    ],
    tags: ["religious", "cloth"]
  },
  {
    id: "kalamkari",
    name: "Kalamkari",
    state: "Andhra Pradesh",
    lat: 13.75, lng: 79.70,
    history: "The name comes from 'kalam' (pen) and 'kari' (work). Centred in Srikalahasti and Machilipatnam, this hand-painted or block-printed textile art flourished under temple patronage, illustrating epics like the Mahabharata and Ramayana on cloth for temple hangings.",
    characteristics: [
      "Drawn with a bamboo or date-palm pen dipped in natural dye",
      "Colours from vegetable and mineral sources — indigo, madder root",
      "Intricate vines, paisleys and narrative temple scenes",
      "Cloth undergoes repeated washing, starching and sun-drying"
    ],
    tags: ["textile", "religious"]
  },
  {
    id: "tanjore",
    name: "Tanjore",
    state: "Tamil Nadu",
    lat: 10.79, lng: 79.14,
    history: "Originating in the Maratha court of Thanjavur in the 16th century, this classical South Indian style was patronised by the Nayaka and Maratha rulers to depict Hindu deities in richly decorated shrines, becoming a hallmark of devotional home altars.",
    characteristics: [
      "Raised gesso work overlaid with genuine gold foil",
      "Inlaid glass beads and precious stones for jewellery",
      "Compact, forward-facing divine figures in ornate arches",
      "Rich, dense colour palette with a glossy, jewel-like finish"
    ],
    tags: ["classical", "religious", "gold work"]
  },
  {
    id: "kerala_mural",
    name: "Kerala Mural",
    state: "Kerala",
    lat: 10.53, lng: 76.21,
    history: "Adorning the walls of temples and palaces such as the Padmanabhapuram Palace since around the 9th century, Kerala murals depict episodes from Hindu mythology using techniques passed down through generations of temple artists.",
    characteristics: [
      "Earth-toned palette dominated by ochre, green and red",
      "Fluid, curvilinear figures with elaborate crowns",
      "Prepared on wet lime-plastered walls, akin to fresco",
      "Strict iconographic rules govern colour and gesture"
    ],
    tags: ["religious", "wall art", "classical"]
  },
  {
    id: "gond",
    name: "Gond",
    state: "Madhya Pradesh",
    lat: 22.90, lng: 80.90,
    history: "Created by the Gond tribal community, one of India's largest indigenous groups, this art was traditionally used to decorate homes and floors. It gained national attention in the 1980s through artist Jangarh Singh Shyam, who translated the tradition onto paper and canvas.",
    characteristics: [
      "Dense fields of dots, dashes and fine lines fill each shape",
      "Vivid, often non-naturalistic colours",
      "Animals, trees and forest deities as central subjects",
      "Belief that 'seeing a good image brings good luck'"
    ],
    tags: ["tribal", "nature"]
  },
  {
    id: "rajasthani_miniature",
    name: "Rajasthani Miniature",
    state: "Rajasthan",
    lat: 24.58, lng: 73.68,
    history: "Flourishing in royal courts such as Mewar, Bundi and Kishangarh from the 16th century, this school grew out of earlier Mughal miniature traditions, portraying courtly life, romantic legends and religious themes in exquisite, small-scale detail.",
    characteristics: [
      "Extremely fine brushwork, often using squirrel-hair brushes",
      "Flat perspective with richly patterned backgrounds",
      "Court scenes, hunting expeditions and Krishna legends",
      "Gold and precious-stone-derived pigments for luxury detailing"
    ],
    tags: ["classical", "courtly"]
  },
  {
    id: "kalighat",
    name: "Kalighat",
    state: "West Bengal",
    lat: 22.52, lng: 88.34,
    history: "Emerging in the 19th century around the Kalighat Kali Temple in Kolkata, this style was created by rural patuas (scroll painters) who adapted to quick, bold brushwork to sell affordable souvenir paintings to temple pilgrims.",
    characteristics: [
      "Swift, calligraphic brush strokes with minimal detail",
      "Flat washes of bright watercolour on mill paper",
      "Subjects ranging from deities to satirical social scenes",
      "Considered an early influence on modern Indian art"
    ],
    tags: ["folk", "urban", "satire"]
  },
  {
    id: "rogan",
    name: "Rogan",
    state: "Gujarat",
    lat: 23.60, lng: 69.65,
    history: "Kept alive today largely by a single family in the village of Nirona in Kutch, Rogan painting uses thick, brightly coloured castor-oil-based paint stretched into fine threads and applied to cloth freehand, a technique brought to India centuries ago by Persian craftsmen.",
    characteristics: [
      "Paint made by boiling castor oil into a sticky paste",
      "Design drawn freehand in the air before touching the cloth",
      "Motifs mirrored symmetrically, often the Tree of Life",
      "One half of the design stamped as a mirror image on the other"
    ],
    tags: ["textile", "rare craft"]
  }
];
