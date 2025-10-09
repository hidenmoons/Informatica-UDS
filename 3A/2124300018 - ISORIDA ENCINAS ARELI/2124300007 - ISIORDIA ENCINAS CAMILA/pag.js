document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enterBtn");
  const cafeBtn = document.getElementById("cafeBtn");

  // BOTÓN 1 -> Página "BIENVENIDO"
  enterBtn.addEventListener("click", () => {
    const nuevaVentana = window.open("", "_blank");
    nuevaVentana.document.write(`
      <h1 style="text-align:center; margin-top:20%; font-size:3rem; color:#007bff;">
        BIENVENIDO
      </h1>
    `);
  });

  // BOTÓN 2 -> Página con carrusel de café
  cafeBtn.addEventListener("click", () => {
    const nuevaVentana = window.open("", "_blank");
    nuevaVentana.document.write(`
      <!doctype html>
      <html lang="es">
      <head>
        <meta charset="utf-8" />
        <title>Café</title>
        <style>
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            height: 100vh;
          }
          header, footer {
            background: #6f4e37;
            color: white;
            text-align: center;
            padding: 1rem;
          }
          main {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #f4f4f4;
          }
          .carousel {
            position: relative;
            width: 400px;
            height: 300px;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          }
          .slides {
            display: flex;
            width: 1600px; /* 4 imágenes de 400px */
            transition: transform 0.5s ease;
          }
          .slides img {
            width: 400px;
            height: 300px;
            object-fit: cover;
          }
          .controls {
            position: absolute;
            top: 50%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
          }
          .controls button {
            background: rgba(0,0,0,0.5);
            color: white;
            border: none;
            font-size: 1.5rem;
            padding: 0.5rem 1rem;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <header><h1>Galería de Alimentos</h1></header>
        <main>
          <div class="carousel">
           <div class="slides" id="slides">
  <img src="https://images.unsplash.com/photo-1498804103079-a6351b050096" alt="Café latte arte">
  <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93" alt="Granos de café">
  <img src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03" alt="Café en mesa">
  <img src="https://images.unsplash.com/photo-1521305916504-4a1121188589" alt="Capuchino">
</div>

            <div class="controls">
              <button onclick="mover(-1)">&#10094;</button>
              <button onclick="mover(1)">&#10095;</button>
            </div>
          </div>
        </main>
        <footer><p>© 2025 Cafetería Virtual</p></footer>

        <script>
          let index = 0;
          function mover(dir) {
            const slides = document.getElementById("slides");
            index = (index + dir + 4) % 4;
            slides.style.transform = "translateX(" + (-400 * index) + "px)";
          }
        </script>
      </body>
      </html>
    `);
  });
});
