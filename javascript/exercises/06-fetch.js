const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

const addBookToDOM = item => {
  let element = document.createElement('div');
  let title = document.createElement('h3');
  let author = document.createElement('p');
  let released = document.createElement('p');
  let pages = document.createElement('p');

  title.textContent = item.name;
  author.textContent = item.authors[0];
  released.textContent = item.released.substr(0, 4);
  pages.textContent = `${item.numberOfPages} pages`;

  element.append(title);
  element.append(author);
  element.append(released);
  element.append(pages);

  //if bootstrap is not used
  element.style.display = 'flex';
  element.style.flexDirection = 'column';
  element.style.alignItems = 'center';
  element.style.marginTop = '20px';

  app.append(element);
}

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach(book => {
          addBookToDOM(book);
      });
      
      //let loader = document.querySelector('#loading');
      //app.removeChild(loader);
    })
    .catch((error) => {
      console.error(error)

      let element = document.createElement('div');
      element.textContent = 'An error occured. Please reload the page.';
      app.append(element);

      //let loader = document.querySelector('#loading');
      //app.removeChild(loader);
    })
    .finally(() => {
      let loader = document.querySelector('#loading');
      app.removeChild(loader);
    });
};

fetchData(url);