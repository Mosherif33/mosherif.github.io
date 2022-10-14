// Show on scroll icon

const icon = document.querySelector(".up");

window.onscroll = function(){
    console.log(this.scrollY);
this.scrollY >= 80 ? icon.classList.add("show") : icon.classList.remove("show");

}
