export const links = {
    '#/': 'Films',
    '#/search': 'Films',
    '#/favourites': 'Favourites',
}

const tabs = document.getElementsByClassName('menu__item');

window.addEventListener('hashchange', () => {
    const activeLink = location.hash;
    for (let tab of tabs) {
        if (tab.innerText !== links[activeLink]) {
            tab.classList.remove('menu__item--active');
        } else {
            tab.classList.add('menu__item--active');
        }
    }
})

window.addEventListener('load', () => {
    const activeLink = location.hash;
    for (let tab of tabs) {
        if (tab.innerText !== links[activeLink]) {
            tab.classList.remove('menu__item--active');
        } else {
            tab.classList.add('menu__item--active');
        }
    }
})