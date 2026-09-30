const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");


// スマホメニューを開閉
menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// メニューをクリックしたら閉じる
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});