window.onload = function () {
    const burger = document.getElementsByClassName("burger")[0];
    const close = document.getElementsByClassName("close")[0];
    const nav = document.getElementsByTagName("nav")[0];
    burger.addEventListener("click", function () {
        this.style.display = "none";
        nav.style.display = "flex";
        close.style.display = "block";
    });
    close.addEventListener("click", function () {
        this.style.display = "none";
        nav.style.display = "none";
        burger.style.display = "block";
    });
};
