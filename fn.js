let colorButton = document.getElementById("colorButton");
let isyellow = true;

function cambiarColor() {
  let body = document.body;

  if (isyellow) {
    body.style.backgroundColor = "yellow";
    isyellow = false;
  } else {
    body.style.backgroundColor = "#C4274C";
    isyellow = true;
  }
}
//Cambia las imagenes
var images = [
  "https://www.soundpark.news/__export/1633385848721/sites/debate/img/2021/10/04/tour_twenty_one_pilots_x1x.jpg_423682103.jpg",
  "https://wp.dailybruin.com/images/2021/10/web.ae_.twentyonepilots.review.ALK_.jpg",
  "https://www.nationwidearena.com/assets/img/21Pilots_2021_1248x680-d6b9c5fec7.jpg",
  "https://gritaradio.com/wp-content/uploads/2022/07/Twenty-One-Pilots-comparten-Stranger-Things-Heathens-scaled.jpg",
  "https://d34ugyblrhxy34.cloudfront.net/wp-content/uploads/2023/04/17110447/TOP_Press2023_01_Original.jpg"
];
var indice = 0;

function nextImage(direction) {
  indice += direction;
  if (indice  < 0) {
    indice = images.length - 1;
  } else if (indice >= images.length) {
    indice = 0;
  }
  document.getElementById("mainImage").src = images[indice];
}

 
//CAMBIA EL TEXTO
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