/* ============================================================================
   CONFIGURATION DU PORTFOLIO : c'est le SEUL fichier à modifier.
   ============================================================================ */

const PROFIL = {
  nom: "Wafik Adouko",
  initiales: "WA",
  metier: "développeur web",
  whatsapp: "2290140778806",
  telephone: "01 40 77 88 06",
  telephoneInternational: "+229 01 40 77 88 06",
  email: "adoukowafik@gmail.com",
  github: "https://github.com/adoukowafik-cloud",
  messageWhatsapp: "Bonjour Wafik, je souhaite un site web pour mon entreprise.",
  annee: new Date().getFullYear(),
};

/* Vos réalisations, dans l'ordre d'affichage. Les trois premières illustrent aussi le haut de la page.
   type : "client" (site d'un vrai client), "produit" (votre propre produit) ou "demo" (entreprise fictive).
   NOTE : les démos sont en premier tant que vos vrais projets n'ont pas de captures. Remettez-les en tête ensuite.
   TODO : remplacez les liens "#" par les vrais liens et les images exemple.svg par vos captures (dossier img/) :
     image   : capture de toute la page, en hauteur (elle défile au survol), ex. 1280 x 4000 px
     apercu  : capture du haut de la page, ex. 1280 x 800 px
     mobile  : capture sur téléphone, ex. 390 x 844 px                                              */
const REALISATIONS = [
  {
    titre: "Maquis Ayizo",
    type: "demo",
    categorie: "Démo · Restaurant",
    lien: "demos/restaurant/index.html",
    adresse: "démo · restaurant",
    description: "Démo d'un restaurant fictif à Cotonou : menu avec prix en FCFA, horaires avec statut ouvert ou fermé en temps réel, commande et réservation par WhatsApp.",
    points: ["Menu", "Horaires en direct", "Commande WhatsApp"],
    image: "img/restaurant.jpg",
    apercu: "img/restaurant-apercu.jpg",
    mobile: "img/restaurant-m.jpg",
  },
  {
    titre: "Studio Nafi",
    type: "demo",
    categorie: "Démo · Salon de coiffure",
    lien: "demos/salon/index.html",
    adresse: "démo · salon",
    description: "Démo d'un salon de coiffure fictif : tarifs clairs et réservation en 3 clics (prestation, jour, heure), qui prépare le message de rendez-vous sur WhatsApp.",
    points: ["Tarifs", "Réservation en ligne", "WhatsApp"],
    image: "img/salon.jpg",
    apercu: "img/salon-apercu.jpg",
    mobile: "img/salon-m.jpg",
  },
  {
    titre: "Kaba Mode",
    type: "demo",
    categorie: "Démo · Boutique en ligne",
    lien: "demos/boutique/index.html",
    adresse: "démo · boutique",
    description: "Démo d'une boutique de mode fictive : catalogue filtrable, panier et commande envoyée par WhatsApp avec le détail et le total.",
    points: ["Catalogue", "Panier", "Commande WhatsApp"],
    image: "img/boutique.jpg",
    apercu: "img/boutique-apercu.jpg",
    mobile: "img/boutique-m.jpg",
  },
  {
    titre: "FootStats Pro",
    type: "produit",
    categorie: "Produit · Statistiques de football",
    lien: "https://footstats.gt.tc/",
    adresse: "footstats.gt.tc",
    description: "Application de statistiques de football : interface responsive mobile et ordinateur, vérification des comptes par code OTP envoyé par email, base de données MySQL.",
    points: ["Statistiques", "Vérification email OTP", "MySQL", "Responsive"],
    image: "img/exemple.svg",
    apercu: "img/exemple.svg",
    mobile: "img/exemple-m.svg",
  },
  {
    titre: "Kings Barber Shop",
    type: "client",
    categorie: "Client · Salon de coiffure",
    lien: "#",
    adresse: "kings-barber-shop",
    description: "Site vitrine pour un salon de coiffure, avec un panneau d'administration en PHP/MySQL pour gérer le contenu, et une attention particulière à la sécurité.",
    points: ["Panneau admin", "PHP / MySQL", "Sécurisé"],
    image: "img/exemple.svg",
    apercu: "img/exemple.svg",
    mobile: "img/exemple-m.svg",
  },
  {
    titre: "Éclat",
    type: "produit",
    categorie: "Produit · E-commerce",
    lien: "#",
    adresse: "eclat",
    description: "Boutique en ligne de produits numériques et de matériel informatique.",
    points: ["Catalogue", "Commande", "Produits numériques"],
    image: "img/exemple.svg",
    apercu: "img/exemple.svg",
    mobile: "img/exemple-m.svg",
  },
];

/* ============================================================================
   Ne rien modifier en dessous : applique la configuration à la page.
   ============================================================================ */
function appliquerConfig() {
  const P = PROFIL, wa = n => `https://wa.me/${P.whatsapp}?text=${encodeURIComponent(P.messageWhatsapp)}`;
  const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const valeurs = { ...P, nbsites: REALISATIONS.length };
  document.querySelectorAll("[data-v]").forEach(el => { el.textContent = valeurs[el.dataset.v] ?? ""; });
  document.querySelectorAll("[data-copy-v]").forEach(el => { el.dataset.copy = P[el.dataset.copyV] || ""; });
  document.querySelectorAll("[data-wa]").forEach(a => { a.href = wa(); a.target = "_blank"; a.rel = "noopener"; });
  document.querySelectorAll("[data-mail]").forEach(a => { a.href = "mailto:" + P.email; });
  document.querySelectorAll("[data-github]").forEach(a => { if (P.github) { a.href = P.github; a.target = "_blank"; a.rel = "noopener"; } else a.remove(); });
  document.title = `${P.nom} · ${P.metier.charAt(0).toUpperCase() + P.metier.slice(1)}`;
  const meta = (sel, v) => { const m = document.querySelector(sel); if (m) m.content = v; };
  meta('meta[name="description"]', `${P.nom}, ${P.metier} : sites rapides sur mobile pour salons, cliniques, écoles, hôtels et agences.`);
  meta('meta[property="og:title"]', document.title);

  const genre = { client: "k-client", produit: "k-prod", demo: "k-demo" };
  const bar = '<div class="bar"><b style="background:#ff5f57"></b><b style="background:#febc2e"></b><b style="background:#28c840"></b>';
  document.getElementById("projets").innerHTML = REALISATIONS.map((r, i) => `
        <article class="proj rv">
          <a class="shot" href="${esc(r.lien)}" target="_blank" rel="noopener" aria-label="Visiter ${esc(r.titre)}">
            <div class="browser">${bar}<span class="url">${esc(r.adresse)}</span></div><div class="screen" style="background-image:url('${esc(r.image)}')"></div></div>
            <div class="mob"><img src="${esc(r.mobile)}" alt="" loading="lazy"></div>
            <span class="hint">↕ Survolez pour défiler</span>
          </a>
          <div class="info">
            <span class="num">${String(i + 1).padStart(2, "0")}</span>
            <span class="kind ${genre[r.type] || "k-client"}">${esc(r.categorie)}</span>
            <h3>${esc(r.titre)}</h3>
            <p>${esc(r.description)}</p>
            <div class="feats">${r.points.map(x => `<span>${esc(x)}</span>`).join("")}</div>
            <a class="btn btn-dark" href="${esc(r.lien)}" target="_blank" rel="noopener">${r.type === "demo" ? "Voir la démo" : "Visiter le site"} ↗</a>
          </div>
        </article>`).join("");
  document.getElementById("pied-projets").innerHTML = REALISATIONS.map(r => `<li><a href="${esc(r.lien)}" target="_blank" rel="noopener">${esc(r.titre)}</a></li>`).join("");
  document.querySelectorAll("[data-fan]").forEach(img => { const r = REALISATIONS[+img.dataset.fan] || REALISATIONS[0]; if (r) { img.src = r.apercu; img.alt = "Site " + r.titre; } });
  document.querySelectorAll("[data-fan-m]").forEach(img => { const r = REALISATIONS[0]; if (r) { img.src = r.mobile; img.alt = "Version mobile du site " + r.titre; } });
}
