window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.image > img').forEach(img => {
    img.addEventListener('click', disableDetails, false);
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