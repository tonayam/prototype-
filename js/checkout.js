let FixedPage = document.querySelector(".fixedDiv");
let checkPage = document.querySelector(".checkPage");
let confirm3 = document.querySelector(".confirm3");
let btn3 = document.getElementById("confirmThreeBtn");
let confirm2 = document.querySelector(".confirm2");
let btn2 = document.getElementById("confirmTwoBtn");
let errorDiv = document.querySelector(".error");
let errorBtn = document.getElementById("errorBtn");
let successDiv = document.querySelector(".success");
let successBtn = document.getElementById("successBtn");
let sec1 = document.querySelector(".sec1");
let sec2 = document.querySelector(".sec2");
let sec3 = document.querySelector(".sec3");
let sBtn = document.getElementById("sBtn");
let motherS = document.querySelector(".mother-s");
let pBtn = document.querySelector(".p-btn");
let motherB = document.querySelector(".mother-b");
let motherP = document.querySelector(".mother-p");
let bBtn = document.querySelector(".b-btn");
let btn1 = document.querySelector("#FirstBtnCheck");

btn1.addEventListener("click", (e) => {
    e.preventDefault();
    FixedPage.classList.remove("none");
});
btn2.addEventListener("click", (e) => {
    e.preventDefault();
    sec3.classList.add("active-sec");
    confirm2.classList.add("none");
    confirm2.classList.remove("index");
    confirm3.classList.remove("none");
    confirm3.classList.add("index");
});
btn3.addEventListener("click", () => {
    confirm3.classList.add("none");
    confirm2.classList.add("none");
    successDiv.classList.remove("none");
});

sBtn.addEventListener("click", (e) => {
    motherS.style.display = "none";
    motherB.style.display = "block";
});
bBtn.addEventListener("click", () => {
    motherB.style.display = "none";
    motherP.style.display = "block";
    btn1.style.display = "block";
});
checkPage.addEventListener("click", (e) => {
    if (
        e.currentTarget.classList.contains(".mother-p") ||
        e.target.parentElement.classList.contains("p") ||
        e.target.parentElement.parentElement.classList.contains("p")
    ) {
        sec3.classList.add("active-sec");
        sec1.classList.remove("active-sec");
        sec2.classList.remove("active-sec");
    } else if (
        e.currentTarget.classList.contains(".mother-b") ||
        e.target.parentElement.classList.contains("b") ||
        e.target.parentElement.parentElement.classList.contains("b")
    ) {
        sec2.classList.add("active-sec");
        sec1.classList.remove("active-sec");
        sec3.classList.remove("active-sec");
    } else if (
        e.currentTarget.classList.contains(".mother-s") ||
        e.target.parentElement.classList.contains("s") ||
        e.target.parentElement.parentElement.classList.contains("s")
    ) {
        sec1.classList.add("active-sec");
        sec2.classList.remove("active-sec");
        sec3.classList.remove("active-sec");
    }
});