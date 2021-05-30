import './sass/main.scss';
import './style.css';
import articlesTpl from './articles.hbs';
import NewsApiService from './apiService.js';
import '@pnotify/core/dist/BrightTheme.css';
import "@pnotify/core/dist/PNotify.css";

const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn:document.querySelector('.btn-primary'),

};
const newApiService = new NewsApiService();
hide();
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
//refs.loadMoreBtn.disabled = true;
function onSearch(event) {
  event.preventDefault();
  //clearArticlesContainer();
  newApiService.query = event.currentTarget.elements.query.value.trim();
  newApiService.resetPage();
  newApiService.fetchArticles().then(articles=> {
    clearArticlesContainer();
    appendArticlesMarkup(articles);
    show();


  });
  //show();
  //refs.loadMoreBtn.disabled = false;

};


function onLoadMore(event) {
  newApiService.fetchArticles().then(appendArticlesMarkup);

  //show();
  //refs.loadMoreBtn.disabled = true;
  //loadMoreBtn.show();
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

    //refs.loadMoreBtn.disabled = true;
}

function show() {
  refs.loadMoreBtn.classList.remove('is-hidden')
 }
function hide() {
  refs.loadMoreBtn.classList.add('is-hidden')
 }
