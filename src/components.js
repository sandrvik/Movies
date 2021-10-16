import { favouritesComp } from "./favourites.js";
import { homeComp } from "./home.js";
import { isLogedIn, showLoginForm } from "./login.js";
import { searchComp } from "./search.js";

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