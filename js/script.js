const navBar = document.getElementById("container__btns");
const buttonBurguer = document.querySelector(".hamburguer-select");
const dropButton = document.querySelectorAll(".dropdown");
const dropContent = document.querySelectorAll(".dropdown-content");

let posicao = -650;

buttonBurguer.addEventListener("click", touchedHamburguer);
dropButton.forEach(item => {
    item.addEventListener("click", (event)=>{content(event)});
});

function touchedHamburguer(){
    const posicaoInicial = -650;
    const posicaoFinal = 150;
    buttonBurguer.classList.forEach((item)=>{
        if(item == 'hamburguer'){
            buttonBurguer.classList.remove("hamburguer");
            buttonBurguer.classList.add("hamburguer-x");
            
            navBar.classList.remove("container__btns-hidden");
            navBar.classList.add("container__btns");
        }else if(item =='hamburguer-x'){
            buttonBurguer.classList.remove("hamburguer-x");
            buttonBurguer.classList.add("hamburguer");
            
            navBar.classList.remove("container__btns");
            navBar.classList.add("container__btns-hidden");
        }
    })
    
     
}

function content(event){
    for(let i=0; i < dropButton.length; i++){
        if(event.target === dropButton[i]){
            dropContent[i].classList.forEach((item)=>{
                if(item == "dropdown-content-hidden"){
                    dropContent[i].classList.remove("dropdown-content-hidden");
                    dropContent[i].classList.add("dropdown-content-show");
                
                }else if(item == "dropdown-content-show"){
                    dropContent[i].classList.remove("dropdown-content-show");
                    dropContent[i].classList.add("dropdown-content-hidden");        
                }
            })
        }
    }
}
