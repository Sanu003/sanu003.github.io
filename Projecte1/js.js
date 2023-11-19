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
function CrearImatges(){
    let num = 0
    for (let i =1; i<279; i++){
        var j = document.createElement("img")
        if (enllac==""){
        var url = 'imatges/'+i+'.png'
        }else{
            var url = 'imatges/'+num+'/'+i+'.png'
        }
        j.id=i
        try{
            j.src = url
        }catch{}     
        if(j.height!=0){
            j.width = 600
            j.height = 800
            j.style.marginLeft="20px"
            j.style.marginTop="10px"
            div.appendChild(j)
            j.addEventListener("click", algo)
        }
        function algo(){
            var pantalla= window.open("imatges/"+i+".png", '_blank')
            window.focus();
            pantalla.blur()
        }    
    }
}
