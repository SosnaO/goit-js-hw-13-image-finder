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
let searchName = '';
function onSearch(event) {
  event.preventDefault();
   searchName = event.currentTarget.elements.query.value;
  newApiService.fetchArticles(searchName);
// fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchName}&page=1&per_page=12&key=21803950-62f4c86011510fd15fe85c0d2`)
//  //fetch(url,options)
// .then(response => response.json())
// .then(console.log())
};

function onLoadMore(event){
// fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchName}&page=1&per_page=12&key=21803950-62f4c86011510fd15fe85c0d2`)
//  //fetch(url,options)
// .then(response => response.json())
// .then(console.log())
  newApiService.fetchArticles(searchName);
}
