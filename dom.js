let titulo = document.getElementById("tituloP");
console.log(titulo.innerHTML);
titulo.innerHTML = "Juego de Tronos";
console.log(titulo.innerHTML);

let parrafos = document.getElementsByClassName("parrafo");
console.log(parrafos.length);

let texto = document.getElementById("analisis-texto");
console.log(texto);

let subtitulo = document.getElementById("subt");
subtitulo.style.backgroundColor = 'skyblue';
subtitulo.style.borderRadius = '8px';
subtitulo.style.color = 'white';
subtitulo.style.width = '450px';
subtitulo.style.textAlign = 'center';