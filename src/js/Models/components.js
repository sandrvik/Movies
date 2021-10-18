import { favouritesComp } from "../Pages/favourites.js";
import { homeComp } from "../Pages/home.js";
import { isLogedIn, showLoginForm } from "../Pages/login.js";
import { searchComp } from "../Pages/search.js";

function render(fn) {
  if (isLogedIn()) {
    fn();
  } else {
    showLoginForm();
  }
}

const FavouritesComponent = {
  render: () => render(favouritesComp)
}

const HomeComponent = {
  render: () => render(homeComp)
}

const SearchComponent = {
  render: () => render(searchComp)
}

export { FavouritesComponent, HomeComponent, SearchComponent }