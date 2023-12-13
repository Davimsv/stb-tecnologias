
//voltar para o topo
function backToHome(){
    window.scrollTo({
        top: 0,
        behavior:"smooth" 
    })
}
// mostrar o botão
function mostrarScrollButton(){
    if (window.scrollY === 0){
        document.querySelector('.scrollbutton').style.display='none';
    } else{
        document.querySelector('.scrollbutton').style.display='block';
    }

}
//gatilho do botão
window.addEventListener('scroll', mostrarScrollButton);