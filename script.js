let burger = document.querySelector(".fa-bars");
let xMark = document.querySelector(".fa-circle-xmark");
let nav = document.querySelector(".headerNav");

// When the burger icon is clicked
burger.addEventListener("click", () => {
    burger.style.display = "none"; 
    xMark.style.display = "block"; 
    nav.style.left = "0";
});

// When the xMark icon is clicked
xMark.addEventListener("click", () => {
    xMark.style.display = "none";
    burger.style.display = "block"; 
    nav.style.left = "-200px"; 
});
