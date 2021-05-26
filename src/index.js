import './sass/main.scss';

const refs = {
  searchForm: document.querySelector('.search-form'),
  container: document.querySelector('.articles'),


};
  console.log(refs.searchForm)
console.log(refs.container)

refs.searchForm.addEventListener('submit', onSearch);
function onSearch(event) {
  event.preventDefault();

};
