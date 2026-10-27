# Mi portfolio

Web estática (HTML, CSS y JavaScript) lista para GitHub Pages. No necesita instalar nada.

## Archivos

- `data.js`: tus datos y tus proyectos. Es el único archivo que tienes que editar.
- `index.html`, `style.css`, `script.js`: la web. No hace falta tocarlos.
- `img/`: capturas de tus proyectos (opcional, créala tú).

## Subirlo a GitHub Pages

1. Crea un repositorio en GitHub. Si lo llamas `TU-USUARIO.github.io`, la web quedará en `https://TU-USUARIO.github.io`. Con otro nombre, quedará en `https://TU-USUARIO.github.io/NOMBRE`.
2. Sube estos archivos a la raíz del repositorio (arrastrándolos en la web de GitHub o con git).
3. En el repositorio: Settings, Pages, Source: "Deploy from a branch", rama `main`, carpeta `/ (root)`, Save.
4. Espera uno o dos minutos y abre la dirección que te muestra GitHub.

Con git:

```bash
git init
git add .
git commit -m "Primer commit del portfolio"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

## Añadir un proyecto nuevo

1. Abre `data.js` y copia uno de los bloques de `PROYECTOS`.
2. Pégalo al principio de la lista y cambia título, asignatura, fecha (`"2026-11"`), descripción y tecnologías.
3. Si quieres, rellena `repo` (enlace al código), `demo` (enlace a la web) e `imagen` (por ejemplo `"img/hotelapp.png"`).
4. Guarda y sube el cambio:

```bash
git add .
git commit -m "Añado proyecto X"
git push
```

Las tecnologías, el gráfico de barras y los filtros se actualizan solos.

## Antes de publicar

- Cambia `github`, `email` y `linkedin` en `PERFIL` dentro de `data.js`.
- Revisa que ningún proyecto incluya datos privados (claves, contraseñas, trabajos con datos de terceros).
