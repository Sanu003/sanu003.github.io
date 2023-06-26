let div = document.getElementById("div1")
let num = location.href.substring(44,45)
console.log(num)
CrearImatges()

//Crear Imatges/////////////////////////////////////////
function CrearImatges(){
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
}
