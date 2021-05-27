//https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
//fetch('')
// const options = {
//   headers: {
//    key:'21803950-62f4c86011510fd15fe85c0d2',
//   },
// };
// const url ='https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12
export default class NewsApiService {
  constructor() {
    this.searchName = '';
   }
  fetchArticles() {
      fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchName}&page=1&per_page=12&key=21803950-62f4c86011510fd15fe85c0d2`)
      .then(response => response.json())
      .then(console.log());

  }
  get query() {
    return this.searchName;
  }
  set query(newQuery) {
    this.searchName = newQuery;
  }

}

