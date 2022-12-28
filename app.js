const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a");

const header = document.querySelector(".header.container");
//TRYING AUTOPLAY
// const clip = document.querySelectorAll(".projects .all-projects video");
// trying to fix video gitch
//const vid = document.querySelectorAll(".projects .all-projects video");



hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
})
document.addEventListener("scroll",()=>{
    var scroll_position= window.scrollY;
    if(scroll_position>250){
        header.style.backgroundColor ="#29323c";
   }else{
    header.style.backgroundColor="rgba(31, 30, 30, 0.24)";
   }
});
menu_item.forEach((item)=>{
    item.addEventListener("click",()=>{
        hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active"); 
    });
});
// trying to fix video gitch
// vid.addEventListener("click", (e)=>{
//     let player = e.target;
//     player.width = player.clientWidth;
//     player.height = player.clientHeight;
// })

// for(let i =0; i<clip.length; i++){
//     clip[i].addEventListener("mouseenter", function(e){
//         clip[i].play()
//     })
// }