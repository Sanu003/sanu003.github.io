let div = document.getElementById("div1")
let num = location.href.substring(44,45)
console.log(num)
CrearImatges()

//Crear Imatges/////////////////////////////////////////
/**function CrearImatges(){
    for (let i =1; i<274; i++){
        var j = document.createElement("img")
        var url = i+'.png'
        j.id=i
        j.src = url
        if(j.height!=0){
            j.width = 920
            j.height = 800
            j.style.marginLeft="20px"
            j.style.marginTop="10px"
            div.appendChild(j)
            j.addEventListener("click", algo)
        }
        function algo(){
            var pantalla= window.open(i+'.png', '_blank')
            window.focus();
            pantalla.blur()
        }    
    }
}**/

function CrearImatges() {
    let div = document.getElementById("div1");

    for (let i = 1; i < 274; i++) {
        var j = document.createElement("img");
        var url = i + '.png';

        j.id = i;
        j.src = ''; // No cargamos la imagen inmediatamente
        j.setAttribute("data-src", url); // Guardamos la URL en un atributo `data-src`
        j.width = 920;
        j.height = 800;
        j.style.marginLeft = "20px";
        j.style.marginTop = "10px";
        div.appendChild(j);

        // Usamos IntersectionObserver para cargar la imagen cuando esté cerca de la pantalla
        let observer = new IntersectionObserver(function (entries, observer) {
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

        // Evento para abrir la imagen al hacer clic
        j.addEventListener("click", function () {
            var pantalla = window.open(i + '.png', '_blank');
            window.focus();
            pantalla.blur();
        });
    }
}
