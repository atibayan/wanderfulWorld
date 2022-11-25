var targetCountry;
var picCount;
var imageInterval;
var activeSlide = 1;
var sliderWidth = 800;

window.addEventListener('DOMContentLoaded', function(){
  //let countries = ['thailand', 'paris', 'japan', 'spain', 'austria'];
  //let picCountArr = [5,5,5,5,5];
  //let countries_count = 5;
  //let random = Math.floor(Math.random() * countries_count);
  //targetCountry = countries[random];
  //picCount = picCountArr[random];
  targetCountry = 'thailand';
  picCount = 8;
  let header = this.document.getElementById('page1_h1');
  header.innerText = targetCountry.toUpperCase();

  // let desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " + 
  //             "Duis pretium porta purus, non sagittis neque ultrices at. " + 
  //             "Quisque venenatis orci nibh, ac sollicitudin justo mollis vitae. " + 
  //             "Maecenas nec risus arcu. Vestibulum nulla tellus, blandit in " + 
  //             "hendrerit id, facilisis nec nisl. In odio quam, lacinia sed " + 
  //             "turpis sed, vehicula auctor est. Aliquam sed congue arcu, sit " + 
  //             "amet varius orci. Fusce porttitor vitae sem vel iaculis. Fusce " + 
  //             "elementum ipsum et consectetur scelerisque. Nulla tincidunt " + 
  //             "pellentesque nisl, a vestibulum neque condimentum eu. Donec " + 
  //             "purus lectus, tristique vel consectetur quis, eleifend nec velit. " + 
  //             "Mauris tempor mattis neque, vel imperdiet erat. Vestibulum a " + 
  //             "gravida quam. Pellentesque habitant morbi tristique senectus " + 
  //             "et netus et malesuada fames ac turpis egestas. Nulla lacinia " + 
  //             "iaculis porttitor. Pellentesque interdum pulvinar mauris in " + 
  //             "posuere. Aliquam eget varius sapien, at luctus justo. " + 
  //             "Proin consequat elit magna, id dignissim nibh efficitur " + 
  //             "nec. In tincidunt, ipsum vel sagittis bibendum, magna nisi " + 
  //             "bibendum dolor, et tristique neque turpis elementum ante. Morbi " + 
  //             "scelerisque auctor tellus ac rhoncus. Aenean viverra libero suscipit " + 
  //             "diam gravida, at ultrices dui bibendum. Aliquam eu sapien in mauris " + 
  //             "scelerisque facilisis. Nunc volutpat auctor ante, ut fringilla leo congue " + 
  //             "eu. Suspendisse luctus odio quam. In leo ligula, pellentesque a lacinia " + 
  //             "sed, sollicitudin eu elit. Quisque in nulla odio.";

  let countryDesc = this.document.getElementById('countryDescription');
  // countryDesc.innerText = desc;
  countryDesc.innerText = "";

  createImageSlider();
  imageInterval = setInterval(changeSlide, 5000);
});


function createImageSlider(){
  let width = sliderWidth * picCount;
  let slides = document.getElementById('slides');
  slides.style.width = width + "px";

  for(let i = 1; i <= picCount; i++){
    let radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'radio-btn';
    radio.id = 'radio' + (i);
    slides.append(radio);
  }

  for(let i = 1; i <= picCount; i++){
    let slideDiv = document.createElement('div');
    slideDiv.className = 'slide';
    if (i == 1)
      slideDiv.classList.add('first')
    let img = document.createElement('img');
    let src = "images/" + targetCountry +"/" + i + ".JPG";
    img.src = src;
    img.setAttribute('alt', targetCountry + i + ".JPG");
    slideDiv.append(img)
    slides.append(slideDiv)
  }

  let navigationDiv = document.getElementById('navigation');

  for(let i = 1; i <= picCount; i++){
    let label = document.createElement('label');
    label.for = "radio" + i;
    label.className = 'sliderBtn';
    label.id = 'labelRadio' + i;
    label.addEventListener('click', function(){
      console.log(this.id);
      let radioId = this.id[this.id.length - 1]
      console.log(radioId);
      activeSlide = radioId;
      formatSliderNavigation();
    });
    navigationDiv.append(label);
  }
  document.getElementById('labelRadio' + activeSlide).style.opacity = '1';
  document.getElementById('labelRadio' + activeSlide).style.backgroundColor = colors.colorLightAccent;
  document.getElementById('labelRadio' + activeSlide).style.border = '1px solid ' + colors.colorLightAccent;
}

function changeSlide(){
  if(activeSlide >= picCount){
    activeSlide = 0;
  }
  activeSlide++;
  formatSliderNavigation();
}

function formatSliderNavigation(){
  document.getElementById('radio' + activeSlide).checked = true;
  document.querySelectorAll('.sliderBtn').forEach(btn=>{
    btn.style.backgroundColor = colors.colorDarkAccent;
    btn.style.border = '1px solid ' + colors.colorDarkAccent;
    btn.style.opacity = '0.7';
  });
  document.getElementById('labelRadio' + activeSlide).style.opacity = '1';
  document.getElementById('labelRadio' + activeSlide).style.backgroundColor = colors.colorLightAccent;
  document.getElementById('labelRadio' + activeSlide).style.border = '1px solid ' + colors.colorLightAccent;
}
