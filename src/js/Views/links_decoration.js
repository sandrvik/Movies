const links = {
    '#/': 'Films',
    '#/search': 'Films',
    '#/favourites': 'Favourites',
}

function handleLinksDecoration() {
    const tabs = document.getElementsByClassName('menu__item');
    const activeLink = location.hash;
    for (let tab of tabs) {
        if (tab.innerText !== links[activeLink]) {
            tab.classList.remove('menu__item--active');
        } else {
            tab.classList.add('menu__item--active');
        }
    }
}

window.addEventListener('hashchange', handleLinksDecoration);
window.addEventListener('load', handleLinksDecoration);