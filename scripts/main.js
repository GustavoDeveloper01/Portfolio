const btn = document.getElementById("btn-top")

btn.addEventListener("click",function(){
    window.scrollTo(0,0)
})

document.addEventListener("scroll", ocultar)

function ocultar(){
    if(window.scrollY > 10){
        btn.style.display = "flex"
    }
    else{
        btn.style.display = "none"
    }
}

ocultar()

function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra,i) =>{
        setTimeout(() => elemento.innerHTML += letra ,85*i)
    });
}

const titulo = document.querySelector("#texto-nome p");
typeWriter(titulo);