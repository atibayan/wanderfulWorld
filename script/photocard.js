window.addEventListener('DOMContentLoaded', () => {
  let unsorted_countries = [
    'spain',
    'belgium',
    'philippines',
    'south korea',
    'thailand',
    'japan',
    'italy',
    'france',
    'czech republic',
    'germany',
    'poland',
    'switzerland'
  ];
  let countries = unsorted_countries.slice().sort();
  createPhotoCards(unsorted_countries);
  let sort = document.getElementById('sortBtn');
  sort.addEventListener('click', () => {
    sort.classList.toggle('mystyle');
    if(sort.classList.contains('mystyle')){
      sort.innerText = 'Unsort';
      sortChildren(countries.sort());
    }
    else{
      sort.innerText = 'Sort';
      sortChildren(unsorted_countries);
    }
  })
});

function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}

function disableDetails(evt){
  // there is no hover in mobile devices so implement a way to hide the details on
  // click of the image
  // if(window.screen.width <= 550 || window.innerWidth <= 550){
  if(isTouchDevice()){
    let detailDiv = evt.target.nextElementSibling
    let hiddenParagrah = evt.target.nextElementSibling.children[1];
    detailDiv.classList.toggle('mystyle');
    if(detailDiv.classList.contains('mystyle')){
        detailDiv.style.height = '50%';
        detailDiv.style.bottom = '50%';
        hiddenParagrah.style.opacity = '1';
    }
    else{
      detailDiv.style.height = '15%';
      detailDiv.style.bottom = '15%';
      hiddenParagrah.style.opacity = '0';
    }
  }
}

function createPhotoCards(countries){
  const populateDivs = () => {
    dataPromise.then((data) => {
      let divRow = document.getElementsByClassName('row')[1];
      countries.forEach(country => {
        let divImage = document.createElement('div');
        divImage.className = 'image';
    
        let img = document.createElement('img');
        img.setAttribute('src', data[country]["img_src"]);
        img.setAttribute('alt', data[country]["alt"]);
        img.addEventListener('click', disableDetails);
    
        let divDetails = document.createElement('div');
        divDetails.className = 'details';
    
        let h2 = document.createElement('h2');
        h2.innerText = country;
    
        let p = document.createElement('p');
        let splitP1 = data[country]["p1"].split(" ").slice(0,59).join(" ");
        p.innerText = splitP1 + ". . .";
    
        let button = document.createElement('button');
        button.className = 'redirectBtn';
        button.innerText = 'Read More';
        let queryCountryParam = data[country]["queryCountryParam"];
        button.addEventListener('click', () => {
          let url = "page2_MTi67726.html?country=" + queryCountryParam;
          window.location.href = url
        });    
        divDetails.append(h2, p, button);
        divImage.append(img, divDetails);
        divRow.append(divImage);
      });
    });
  };

  populateDivs();
}

function sortChildren(countries){
  let itemsArray = [];
  let divs = document.getElementsByClassName('image');
  for(let country of countries){
    for (let imageDiv of divs){
      if (imageDiv.lastChild.firstChild.innerText.toLowerCase() == country){
        itemsArray.push(imageDiv);
      }
    }
  }

  let divRow = document.getElementsByClassName('row')[1];
  divRow.innerHTML = '';
  itemsArray.forEach(item => {
    divRow.append(item);
  });
}