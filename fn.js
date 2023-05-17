let colorButton = document.getElementById("colorButton");
let isyellow = true;

function cambiarColor() {
  let body = document.body;

  if (isyellow) {
    body.style.backgroundColor = "yellow";
    isyellow = false;
  } else {
    body.style.backgroundColor = "white";
    isyellow = true;
  }
}

function cambiarImagen() {
    var imagen = document.getElementById("miImagen");
    imagen.src = "https://lastfm.freetls.fastly.net/i/u/770x0/8f4b888b6391595ec694ce29d35e606b.jpg";
  }

  function restablecerImagen() {
    var imagen = document.getElementById("miImagen");
    imagen.src = "https://www.soundpark.news/__export/1633385848721/sites/debate/img/2021/10/04/tour_twenty_one_pilots_x1x.jpg_423682103.jpg";
  }
  
function cambiarTexto() {
    document.getElementById("texto").innerHTML = "Twenty One Pilots es un dúo musical estadounidense de Columbus, Ohio";
}

function ocultarMostrarMensaje() {
    var mensaje = document.getElementById("mensaje");
    if (mensaje.style.display === "none") {
      mensaje.style.display = "block";
    } else {
      mensaje.style.display = "none";
    }
  }

  const texto2 = document.getElementById("texto2");
  function generarTexto() {
    let texto = document.getElementById("texto2");
    texto.innerHTML += "Este texto no lo genero Vulmaro lo genero JavaScript" + "<br>";
  }