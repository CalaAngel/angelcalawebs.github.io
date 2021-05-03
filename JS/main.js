let ubicPrin=window.pageYOffset;
window.addEventListener("scroll", function(){
    let despAct= window.pageYOffset;
    if(ubicPrin>=despAct){
        document.getElementsByTagName("nav")[0].style.top="0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top="-100px"
    }
    ubicPrin=despAct;
})
//RESPONSIVE NAVBAR
let HeaderEnlac=document.querySelectorAll(".enlaces-header")[0];
let temp=true;

document.querySelectorAll(".barras")[0].addEventListener("click", function(){
    HeaderEnlac.classList.toggle("menu2")
})
