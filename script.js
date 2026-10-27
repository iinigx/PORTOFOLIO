(function () {
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, texto) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (texto !== undefined) n.textContent = texto;
    return n;
  };

  // ---------- Perfil ----------
  const partes = PERFIL.nombre.split(" ");
  const h1 = $("nombre");
  h1.appendChild(el("span", "ap", partes.slice(0, 1).join(" ")));
  h1.appendChild(el("span", "", partes.slice(1).join(" ")));
  document.title = "Portfolio de " + PERFIL.nombre;
  $("titular").textContent = PERFIL.titular;
  PERFIL.bio.forEach((p) => $("bio").appendChild(el("p", "", p)));
  PERFIL.datos.forEach((d) => {
    const fila = el("div");
    fila.appendChild(el("dt", "", d.etiqueta));
    fila.appendChild(el("dd", "", d.valor));
    $("datos").appendChild(fila);
  });
  $("logo").textContent = partes.map((p) => p[0]).join("").slice(0, 3).toUpperCase();

  const c = PERFIL.contacto;
  const enlaces = [
    c.github && ["GitHub", c.github],
    c.email && ["Correo", "mailto:" + c.email],
    c.linkedin && ["LinkedIn", c.linkedin]
  ].filter(Boolean);
  enlaces.forEach(([texto, url]) => {
    const li = el("li");
    const a = el("a", "", texto);
    a.href = url;
    if (!url.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener"; }
    li.appendChild(a);
    $("enlaces").appendChild(li);
  });
  $("pie").textContent = "© " + new Date().getFullYear() + " " + PERFIL.nombre + ". Hecho con HTML, CSS y JavaScript.";

  // ---------- Filtros ----------
  const estado = { asignatura: null, tecnologia: null };

  const hue = (txt) => {
    let h = 0;
    for (const ch of txt) h = (h * 31 + ch.charCodeAt(0)) % 360;
    return h;
  };
  const fechaBonita = (f) => {
    if (!f) return "";
    const [y, m] = f.split("-");
    const meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
    return m ? meses[parseInt(m, 10) - 1] + " " + y : y;
  };

  const conteo = {};
  PROYECTOS.forEach((p) => p.tecnologias.forEach((t) => (conteo[t] = (conteo[t] || 0) + 1)));
  const tecnologias = Object.entries(conteo).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  const maximo = tecnologias.length ? tecnologias[0][1] : 1;
  const asignaturas = [...new Set(PROYECTOS.map((p) => p.asignatura))];

  function pintarBarras() {
    const ul = $("barras");
    ul.replaceChildren();
    tecnologias.forEach(([nombre, n]) => {
      const li = el("li");
      const b = el("button");
      b.type = "button";
      b.setAttribute("aria-pressed", String(estado.tecnologia === nombre));
      b.appendChild(el("span", "", nombre));
      const pista = el("span", "pista");
      const rel = el("span", "relleno");
      rel.style.width = (n / maximo) * 100 + "%";
      pista.appendChild(rel);
      b.appendChild(pista);
      b.appendChild(el("span", "num", String(n)));
      b.addEventListener("click", () => {
        estado.tecnologia = estado.tecnologia === nombre ? null : nombre;
        refrescar(false);
      });
      li.appendChild(b);
      ul.appendChild(li);
    });
  }

  function pintarChips() {
    const cont = $("chips");
    cont.replaceChildren();
    [null, ...asignaturas].forEach((a) => {
      const b = el("button", "chip", a === null ? "Todas" : a);
      b.type = "button";
      b.setAttribute("aria-pressed", String(estado.asignatura === a));
      b.addEventListener("click", () => {
        estado.asignatura = a;
        refrescar(false);
      });
      cont.appendChild(b);
    });
  }

  function pintarProyectos() {
    const grid = $("grid");
    grid.replaceChildren();
    const lista = PROYECTOS
      .filter((p) => !estado.asignatura || p.asignatura === estado.asignatura)
      .filter((p) => !estado.tecnologia || p.tecnologias.includes(estado.tecnologia))
      .sort((a, b) => (b.fecha || "").localeCompare(a.fecha || ""));

    $("contador").textContent = lista.length + " de " + PROYECTOS.length + " proyectos";

    if (!lista.length) {
      grid.appendChild(el("p", "vacio", "Ningún proyecto coincide con estos filtros. Prueba con otra combinación."));
      return;
    }
    lista.forEach((p) => {
      const art = el("article", "ficha");
      art.style.setProperty("--h", hue(p.asignatura));
      const meta = el("div", "meta");
      meta.appendChild(el("span", "", p.asignatura));
      meta.appendChild(el("span", "", fechaBonita(p.fecha)));
      art.appendChild(meta);
      art.appendChild(el("h3", "", p.titulo));
      if (p.imagen) {
        const img = el("img");
        img.src = p.imagen;
        img.alt = "Captura de " + p.titulo;
        img.loading = "lazy";
        art.appendChild(img);
      }
      art.appendChild(el("p", "", p.descripcion));
      const tags = el("ul", "etiquetas");
      p.tecnologias.forEach((t) => tags.appendChild(el("li", "", t)));
      art.appendChild(tags);
      const acc = el("div", "acciones");
      [["Ver código", p.repo], ["Ver demo", p.demo]].forEach(([txt, url]) => {
        if (!url) return;
        const a = el("a", "", txt);
        a.href = url; a.target = "_blank"; a.rel = "noopener";
        acc.appendChild(a);
      });
      if (acc.children.length) art.appendChild(acc);
      grid.appendChild(art);
    });
  }

  function refrescar(primera) {
    if (primera) pintarBarras(); else {
      // actualiza solo el estado pulsado para no repetir la animación de las barras
      document.querySelectorAll("#barras button").forEach((b, i) => {
        b.setAttribute("aria-pressed", String(estado.tecnologia === tecnologias[i][0]));
      });
    }
    pintarChips();
    pintarProyectos();
  }
  refrescar(true);
})();
