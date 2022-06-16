const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");

nav = document.querySelector("nav"),
modeToggle = document.querySelector(".dark-light"),
searchToggle = document.querySelector(".searchToggle"),
sidebarOpen = document.querySelector(".sidebarOpen"),
siderbarClose = document.querySelector(".siderbarClose");

let getMode = localStorage.getItem("mode");
    if(getMode && getMode === "dark-mode"){
        body.classList.add("dark");
    }

modeToggle.addEventListener("click" , () =>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if(!body.classList.contains("dark")){
        localStorage.setItem("mode" , "light-mode");
    }else{
        localStorage.setItem("mode" , "dark-mode");
    }
});
//old (for sidebar-opening)
toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})
searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

function checkInput() {
    var query = document.getElementById('search').value;
    window.find(query);
    return true;
}