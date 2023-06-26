let div = document.getElementById("contenidor")
let input = document.getElementById("input")
let boto = document.getElementById("boto")

boto.addEventListener("click",funcio)
function funcio(){
  div.innerHTML=""
  let nom = input.value
  fetch("https://e621.net/posts?limit=600&page=1&tags=fav%3A"+nom)
  .then(response => response.text())
  .then(html => {
    // Analizar el HTML en busca de las URL de las imágenes
    let regex = /<img[^>]+src="([^">]+)/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
      // console.log(html.img.src)
      console.log("----------------------------------------------------")
      let imageUrl = match[1];
      


      //obtenir el sample en comptes del preview
      let part1=imageUrl.slice(0,29)
      let part2=imageUrl.slice(37)
      let urlSample = part1+"sample"+part2
      //obtenir normal en comptes del preview
      let urlSample2 = part1+part2
      //Afegir imagen
      let href = document.createElement("a")
      href.href=urlSample2
      buscar(urlSample2)
      let imagen = document.createElement("img")
      imagen.src=imageUrl
      imagen.style.marginLeft="20px"
      imagen.style.marginTop="10px"
      href.appendChild(imagen)
      div.appendChild(href)
    }
})
}

function buscar(url) {
  try{
    let miUrl = new URL(url);
    let miUrl2 = miUrl.href.slice(0, miUrl.href.length-3)
    // console.log(miUrl2);
    comprovarUrl(miUrl2)
  }catch{
    console.log("algo")
  }  
}

function comprovarUrl(url){
  urlpng = url+"png"
  try{
    fetch(urlpng, {
    mode: 'no-cors'
  })
  .then(resposta => resposta.text())
  .then(algo => {
    console.log(urlpng)
  })
  }catch{
    urljpg = url+"jpg"
    try{
      fetch(urljpg, {
      mode: 'no-cors'
    })
    .then(resposta => resposta.text())
    .then(algo => {
      console.log(urljpg)
    })
    }catch{
      urlwebm = url+"webm"
      try{
        fetch(urlwebm, {
        mode: 'no-cors'
      })
      .then(resposta => resposta.text())
      .then(algo => {
        console.log(urlwebm)
      })
      }catch{
        urlgif = url+"gif"
        try{
          fetch(urlgif, {
          mode: 'no-cors'
        })
        .then(resposta => resposta.text())
        .then(algo => {
          console.log(urlgif)
        })
        }catch{
          console.log("no se")
        }
      }
    }  
  }  
}
