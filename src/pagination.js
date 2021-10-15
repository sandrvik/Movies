import { homeComp } from "./home.js";

const currentPage = document.getElementById('currentPage');
const lastPage = document.getElementById('lastPage');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dropDown = document.getElementById('paginationDropDown');
const expandBtn = document.getElementById('expandDropDown');

export let page = 1;

function createPagination(maxPage) {
    currentPage.innerText = page;
    lastPage.innerText = maxPage;

    lastPage.addEventListener('click', () => {
        page = maxPage;
        currentPage.innerText = page;
        homeComp();
    })

    prevBtn.addEventListener('click', () => {
        if (page === 1) {
            return;
        } else {
            page -= 1;
            currentPage.innerText = page;
            homeComp();
        }
    })

    nextBtn.addEventListener('click', () => {
        if (page === maxPage) {
            return;
        } else {
            page += 1;
            currentPage.innerText = page;
            homeComp();
        }
    })

    createDropDown(maxPage);

}

function createDropDown(size) {
    for (let curr = 1; curr <= size; curr++) {
        const li = document.createElement('li');
        li.classList.add("pagination__page");
        li.innerText = curr;
        li.addEventListener('click', (e) => {
            page = +e.target.innerText;
            currentPage.innerText = page;
            homeComp();
            dropDown.classList.toggle('pagination__full--hidden');
        })
        dropDown.append(li);
    }

    expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropDown.classList.toggle('pagination__full--hidden');
    })
}

document.body.addEventListener('click', () => {
    if (!dropDown.classList.contains('pagination__full--hidden')) {
        dropDown.classList.toggle('pagination__full--hidden');
    }
})

createPagination(10);
