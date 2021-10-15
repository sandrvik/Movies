import { favouritesComp } from "./favourites.js";
import { homeComp } from "./home.js";
import { isLogedIn, showLoginForm } from "./login.js";
import { searchComp } from "./search.js";

const FavouritesComponent = {
  render: () => {
    if (isLogedIn()) {
      favouritesComp();
    } else {
      showLoginForm();
    }
  }
}

const HomeComponent = {
  render: () => {
    if (isLogedIn()) {
      homeComp();
    } else {
      showLoginForm();
    }
  }
}

const SearchComponent = {
  render: () => {
    if (isLogedIn()) {
      searchComp();
    } else {
      showLoginForm();
    }
  }
}


export { FavouritesComponent, HomeComponent, SearchComponent }