import './sass/main.scss';
import './style.css';
import articlesTpl from './articles.hbs';
import NewsApiService from './apiService.js';
import '@pnotify/core/dist/BrightTheme.css';
import "@pnotify/core/dist/PNotify.css";
import {error } from '@pnotify/core';

const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn:document.querySelector('.btn-primary'),

};
const newApiService = new NewsApiService();
//hide();
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);


function onSearch(event) {
  event.preventDefault();
  newApiService.query = event.currentTarget.elements.query.value;
  if (newApiService.query === '' || newApiService.query === ' ') {
    clearArticlesContainer();
    //hide();
    return error({
      text: `The search is empty`,
      delay: 2000
    });
  };

//   if (newApiService.query === '"total":0" {
//     clearArticlesContainer();
//   hide();
//   return error({
//     text: `The search is empty`,
//     delay: 2000
//   });
// }
  newApiService.resetPage();
  newApiService.fetchArticles().then(articles => {
    clearArticlesContainer();
    appendArticlesMarkup(articles);
    show();
  });
}
function onLoadMore(event) {
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
  hide();
}

function show() {
  refs.loadMoreBtn.classList.remove('is-hidden')
 }
function hide() {
  refs.loadMoreBtn.classList.add('is-hidden')
 }
