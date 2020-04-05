const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.content');

for (let content of cards) {
    content.addEventListener("click", function(){
        const pageID = content.getAttribute("id");
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${pageID}`;
    })
};

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src = "";
})

document.querySelector(".maximize-modal").addEventListener("click", function(){
    if (modal.classList.contains("maximized")) {
        modal.classList.remove("maximized");
    } else {
        modal.classList.add("maximized");
    }
})