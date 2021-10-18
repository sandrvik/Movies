const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup__image');
const popupTitle = document.getElementById('popup__title');
const popupLang = document.getElementById('popup__lang');
const popupYear = document.getElementById('popup__year');
const popupDescription = document.getElementById('popup__description');
const popupGenres = document.getElementById('popup__genres');

const overlay = document.getElementById('overlay');

function handlePopUp() {
    popup.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('lock');
}

function makePopUp(target) {
    const closestCard = target.parentNode;
    popupImage.innerHTML = `<img src=${closestCard.info.image?.medium || closestCard.info.image?.original || './assets/images/noImageAvailable.jpg'}>`;
    popupTitle.innerText = closestCard.info.name;
    popupLang.innerText = closestCard.info.language;
    popupYear.innerText = closestCard.info.premiered?.slice(0, 4) || 'Sometime';
    popupDescription.innerHTML = closestCard.info.summary || 'No description available.';
    popupGenres.innerHTML = '';

    closestCard.info.genres.forEach(genre => {
        const li = document.createElement('li');
        li.innerText = genre;
        popupGenres.append(li);
    })
}

function closePopUp(e) {
    if (!e.target.closest('.popup__container') || e.target.classList.contains('popup__close')) {
        handlePopUp();
    }
}

export function showPopUp(e) {
    makePopUp(e.target);
    handlePopUp();
}

popup.addEventListener('click', closePopUp);