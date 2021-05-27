import './sass/main.scss';
import NewsApiService from './apiService.js'

const refs = {
  searchForm: document.querySelector('.search-form'),
  container: document.querySelector('.articles'),
  loadMoreBtn:document.querySelector('.btn-primary'),

};
  console.log(refs.searchForm)
console.log(refs.container)

console.log(refs.loadMoreBtn)

const newApiService = new NewsApiService();


refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
//let searchName = '';
function onSearch(event) {
  event.preventDefault();
 newApiService.query = event.currentTarget.elements.query.value;
  newApiService.fetchArticles();

};

function onLoadMore(event){
  newApiService.fetchArticles();
}
