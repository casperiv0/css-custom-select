const selectBtn = document.querySelector(".select-btn");
const selectBtnText = document.querySelector(".select-btn-text")
const selectList = document.querySelector(".select-items");
const arrow = document.querySelector(".arrow");
const selectItems = document.querySelectorAll(".select-items");
const form = document.querySelector(".form");

selectBtn.addEventListener("click", toggleList)

function toggleList() {
    arrow.classList.toggle("active")
    selectList.classList.toggle("active")
}

selectItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        selectBtnText.value = e.target.textContent;
        toggleList();
    })
})