import './sass/main.scss';
import './style.css';
import articlesTpl from './articles.hbs';
import NewsApiService from './apiService.js';

const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn:document.querySelector('.btn-primary'),

};
  console.log(refs.searchForm)
console.log(refs.gallery)

console.log(refs.loadMoreBtn)

const newApiService = new NewsApiService();


refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
function onSearch(event) {
  event.preventDefault();
  clearArticlesContainer();
  newApiService.query = event.currentTarget.elements.query.value;
  newApiService.resetPage();
  newApiService.fetchArticles().then(appendArticlesMarkup);

};

function onLoadMore(event){
  newApiService.fetchArticles().then(appendArticlesMarkup);
}



function appendArticlesMarkup(articles) {
  refs.gallery.insertAdjacentHTML('beforeend', articlesTpl(articles));
   refs.gallery.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
  };

function clearArticlesContainer() {
  refs.gallery.innerHTML = '';
}

