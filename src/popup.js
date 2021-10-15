const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

function handlePopUp() {
    popup.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('lock');
}

function makePopUp(target) {
    const closestCard = target.parentNode;
    popup__image.innerHTML = `<img src=${closestCard.info.image?.medium || closestCard.info.image?.original || './assets/images/noImageAvailable.jpg'}>`;
    popup__title.innerText = closestCard.info.name;
    popup__lang.innerText = closestCard.info.language;
    popup__year.innerText = closestCard.info.premiered?.slice(0, 4) || 'Sometime';
    popup__description.innerHTML = closestCard.info.summary || 'No description available.';
    popup__genres.innerHTML = '';
    closestCard.info.genres.forEach(genre => {
        const li = document.createElement('li');
        li.innerText = genre;
        popup__genres.append(li);
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