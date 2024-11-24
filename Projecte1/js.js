let enllac = location.href.substring(47,48)
let imatgesenllac="./imatges/"

console.log(location.href)

console.log(enllac)

let div = document.getElementById("div1")

//Crear Comics//////////////////////////////////////////
if (enllac==""){
    for (let i =1; i<14;i++){
        var k = document.createElement("img")
        k.src = 'imatges/'+i+'/1.png'
        k.width = 600
        k.height = 800
        k.style.marginLeft="20px"
        k.style.marginTop="10px"
        div.appendChild(k)
        k.addEventListener("click", algo)
            
        function algo(){
            open("imatges/"+i+"/index1.html")
        }  
    }
    CrearImatges()
}else
CrearImatges()


//Crear Imatges/////////////////////////////////////////
/*function CrearImatges(){
    let num = 0
    for (let i =1; i<279; i++){
        var j = document.createElement("img")
        if (enllac==""){
        var url = 'imatges/'+i+'.png'
        }else{
            var url = 'imatges/'+num+'/'+i+'.png'
        }
        j.id=i
        j.loading = "lazy";
        try{
            j.src = url
        }catch{}     
        //if(j.height!=0){
            j.width = 600
            j.height = 800
            j.style.marginLeft="20px"
            j.style.marginTop="10px"
            div.appendChild(j)
            j.addEventListener("click", algo)
        //}
        function algo(){
            var pantalla= window.open("imatges/"+i+".png", '_blank')
            window.focus();
            pantalla.blur()
        }    
    }
}*/
function CrearImatges() {
    let num = 0;
    let div = document.getElementById("div1");

    for (let i = 1; i < 279; i++) {
        var j = document.createElement("img");
        var url;
        if (enllac == "") {
            url = 'imatges/' + i + '.png';
        } else {
            url = 'imatges/' + num + '/' + i + '.png';
        }

        j.id = i;
        j.src = ''; // No cargar la imagen de inmediato
        j.setAttribute("data-src", url); // Guardar la URL en un atributo personalizado
        j.width = 600;
        j.height = 800;
        j.style.marginLeft = "20px";
        j.style.marginTop = "10px";
        div.appendChild(j);

        // Usamos IntersectionObserver para cargar la imagen cuando esté cerca de la pantalla
        let observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Cargar la imagen cuando entra en la vista
                    entry.target.src = entry.target.getAttribute("data-src");
                    observer.unobserve(entry.target); // Dejar de observar la imagen una vez cargada
                }
            });
        }, {
            rootMargin: '1500px', // Activar la carga antes de que entre completamente en la vista
            threshold: 0 // Cargar la imagen cuando esté al 10% visible
        });

        observer.observe(j); // Comienza a observar la imagen
    }
}
