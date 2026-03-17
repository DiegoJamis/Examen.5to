const alumnos = [
  {nombre:"José Sebastian Morales Sacomoló",rol:"Programador", clave:"011", edad:17, correo:"Jmoralessacomolo@gmail.com", foto:"imagenesexamen/jose.webp"},
  {nombre:"Diego Alexander Simaj Boteo",rol:"Diseñador", clave:"014", edad:18, correo:"Jamisboteo23@gmail.com", foto:"imagenesexamen/diego.jpeg"},
];

const contenedorBotones = document.getElementById("botones");
const contenedor = document.getElementById("contenedor");

// Crear botones automáticamente
alumnos.forEach((alumno, i) => {
  const btn = document.createElement("button");
  btn.textContent = alumno.nombre;
  btn.className = "btn";
  btn.onclick = () => mostrar(i);
  contenedorBotones.appendChild(btn);
});

function mostrar(i) {
  const a = alumnos[i];
  contenedor.innerHTML = `
    <div class="card">
      <img src="${a.foto}">
      <h2>${a.nombre}</h2>
      <p><b>Rol:</b> ${a.rol}</p>
      <p><b>Clave:</b> ${a.clave}</p>
      <p><b>Edad:</b> ${a.edad}</p>
      <p><b>Correo:</b> ${a.correo}</p>
    </div>
  `;
}

function filtrar() {
  const texto = document.getElementById("buscador").value.toLowerCase();
  const botones = document.querySelectorAll(".btn");

  botones.forEach((btn, i) => {
    btn.style.display = alumnos[i].nombre.toLowerCase().includes(texto)
      ? "block"
      : "none";
  });
}
