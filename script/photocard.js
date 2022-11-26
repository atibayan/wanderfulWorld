window.addEventListener('DOMContentLoaded', () => {
  createPhotoCards();
  document.querySelectorAll('.image > img').forEach(img => {
    img.addEventListener('click', disableDetails);
  });
});

function disableDetails(evt){
  // there is no hover in mobile devices so implement a way to hide the details on
  // click of the image
  if(window.screen.width <= 550 || window.innerWidth <= 550){
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

function createPhotoCards(){
  let countries = [
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

  const populateDivs = () => {
    dataPromise.then((data) => {
      let divRow = document.getElementsByClassName('row')[0];
      countries.forEach(country => {
        let divImage = document.createElement('div');
        divImage.className = 'image';
    
        let img = document.createElement('img');
        img.setAttribute('src', data[country]["img_src"]);
        img.setAttribute('alt', data[country]["alt"]);
    
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
        // button.onclick = "location.href='page2_MTi67726.html?country=" + queryCountryParam +"'";
    
        divDetails.append(h2, p, button);
        divImage.append(img, divDetails);
        divRow.append(divImage);
      });
    });
  };

  populateDivs();
}