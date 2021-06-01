
export default class NewsApiService {
  constructor() {
    this.searchName = '';
    this.page = 1;
  }
  fetchArticles() {
    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchName}&page=${this.page}&per_page=12&key=21803950-62f4c86011510fd15fe85c0d2`)
      .then(response => response.json())
      .then(data => {
        // if(data.hits<12) {
        //  show();
        // }
        this.incrementPage();
        return data.hits;
      });
    //.catch(error => console.log(error));


  }
  // if(data.hits<12) {
  //   return
  //  }



  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchName;

  }
  set query(newQuery) {
    this.searchName = newQuery;
  }

}

