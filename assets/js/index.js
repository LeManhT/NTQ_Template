const home_user = document.querySelector(".home_user");
const side_bar = document.querySelector('#side_bar');
const content_modal = document.querySelector('.content_modal');

let side_barOpen = false;
home_user.onclick = () => {
    if (side_barOpen) {
        side_bar.setAttribute("style", "transform: translateX(-100%)");
        content_modal.classList.remove('hide_modal');
        content_modal.classList.add('bg-transparent');
        side_barOpen = false;
    } else {
        content_modal.classList.add('hide_modal');
        side_bar.setAttribute("style", "transform: translateX(0);transition : transform 0.5s linear 0.2s;");
        content_modal.classList.remove('bg-transparent');
        side_barOpen = true;
    }
}



const home_bar = document.querySelector(".home_bar");
const nav_left = document.querySelector(".navbar-left")
let home_barOpen = false;
home_bar.onclick = () => {
    if (home_barOpen) {
        nav_left.setAttribute("style", "display : none");
        home_barOpen = false;
    } else {
        nav_left.setAttribute("style", "display : block;");
        home_barOpen = true;
    }
}
