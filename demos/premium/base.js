// ATLANTIK WEB · comportements des démos premium
(() => {
  const WA = document.body.dataset.wa || "2290142128262";
  const NOM = document.body.dataset.nom || "";

  // barre de navigation
  const top = document.querySelector(".top");
  const onScroll = () => top && top.classList.toggle("scrolled", scrollY > 40);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  const burger = document.querySelector(".burger"), menu = document.querySelector(".menu");
  if (burger) burger.addEventListener("click", () => menu.classList.toggle("open"));
  if (menu) menu.addEventListener("click", e => e.target.tagName === "A" && menu.classList.remove("open"));

  // apparition au défilement
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: .14 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  // chiffres animés
  const co = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, fin = +el.dataset.count, suf = el.dataset.suf || "", t0 = performance.now();
    const tick = t => { const p = Math.min(1, (t - t0) / 1600), v = Math.round(fin * (1 - Math.pow(1 - p, 3)));
      el.textContent = v.toLocaleString("fr-FR") + suf; if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick); co.unobserve(el);
  }), { threshold: .5 });
  document.querySelectorAll("[data-count]").forEach(el => co.observe(el));

  // filtres
  document.querySelectorAll(".chips").forEach(ch => ch.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    ch.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
    const f = b.dataset.filter, zone = document.querySelector(ch.dataset.target);
    zone.querySelectorAll("[data-cat]").forEach(it => it.classList.toggle("hide", f !== "tout" && !it.dataset.cat.split(" ").includes(f)));
  }));

  // formulaires -> WhatsApp
  document.querySelectorAll("form[data-wa]").forEach(f => {
    f.querySelectorAll('input[type="date"]').forEach(d => { d.valueAsDate = new Date(); d.min = d.value; });
    f.addEventListener("submit", e => {
      e.preventDefault();
      const lignes = [...f.querySelectorAll("[data-label]")].filter(x => x.value).map(x => {
        let v = x.value; if (x.type === "date") v = new Date(v).toLocaleDateString("fr-FR");
        return `${x.dataset.label} : ${v}`; });
      const msg = `Bonjour ${NOM}, ${f.dataset.wa}\n` + lignes.join("\n");
      open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    });
  });

  // liens WhatsApp simples
  document.querySelectorAll("[data-wa-msg]").forEach(a => {
    a.href = `https://wa.me/${WA}?text=${encodeURIComponent(a.dataset.waMsg)}`; a.target = "_blank"; a.rel = "noopener";
  });
  document.querySelectorAll(".an").forEach(x => x.textContent = new Date().getFullYear());
})();
