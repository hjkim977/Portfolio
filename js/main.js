function functionHomeClick() {
  const searchBar = document.querySelector('.home__search__bar');
  const content = document.querySelector('.home__click__content');

  searchBar.classList.toggle('expand');
  content.classList.toggle('active');
}
