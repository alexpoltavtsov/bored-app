
const CHANGED_TITLE = 'Ура, теперь не скучно 🔥';


const bannerNode = document.querySelector('.js-banner');
const titleNode = document.querySelector('.js-title');
const textNode = document.querySelector('.js-text');
const btnNode = document.querySelector('.js-btn');




function caseRecuest() {
    fetch("http://www.boredapi.com/api/activity/")
    .then(data => data.json())
    .then((res) => {
        const classText = res.activity;

        textNode.innerHTML = classText;
    });

}

function getChangedTBanner() {
    bannerNode.style.background = 'linear-gradient(180deg, rgba(0, 176, 28, 0.2) 24.48%, rgba(255, 255, 255, 0) 100%)';
}

function getChangedTitle() {
    titleNode.innerHTML = CHANGED_TITLE;
}

function btnHandler() {

    caseRecuest();
    getChangedTBanner();
    getChangedTitle();
}


btnNode.addEventListener("click", btnHandler);