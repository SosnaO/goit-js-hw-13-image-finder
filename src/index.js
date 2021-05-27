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
  const searchName = event.currentTarget.elements.query.value;
  console.log(searchName);



fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchName}&page=1&per_page=12&key=21803950-62f4c86011510fd15fe85c0d2`)
 //fetch(url,options)


.then(response => response.json())
  .then(console.log())


};
