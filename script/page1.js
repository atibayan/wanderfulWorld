var targetCountry;
var picCount;
var imageInterval;
var activeSlide = 1;
var sliderWidth = 600;

const jsonAddr = 'https://atibayan.github.io/data.json'
// const jsonAddr = './data.json'

window.addEventListener('DOMContentLoaded', function(){
  const dataPromise = fetch(jsonAddr).then(results => results.json()).then(
    (data) => {return data;}
  ); // retrieves the json data from file and returns a Promise instance

  const populateText = () => { // access the object returned from promise
    dataPromise.then((data) => {
      let params = new URLSearchParams(this.window.location.search);
      if(params.has('country')){ // means it was redirected from browse page
        targetCountry = params.get('country');
      }
      else{ // means we will generate country at random
        let random = Math.floor(Math.random() * Object.keys(data).length);
        targetCountry = Object.keys(data)[random];
      }
      let header = this.document.getElementById('page1_h1');
      header.innerText = targetCountry.toUpperCase();

      let leadingText = data[targetCountry]["p1"][0]; //get the first letter of the p1
      let p1Text = " " + data[targetCountry]["p1"].slice(1);
      let quoteText = data[targetCountry]["quote"];
      let p2Text = data[targetCountry]["p2"];
      let span1 = document.getElementsByClassName('biggest')[0];
      span1.innerText = leadingText;
      let p1 = document.getElementsByClassName('p1')[0];
      p1.innerText = p1Text;
      let span2 = document.getElementsByClassName('bigger')[0];
      span2.innerText = quoteText;
      let p2 = document.getElementsByClassName('p2')[0];
      p2.innerText = p2Text;

      let pic_count = data["thailand"]['pic_count'];
      createImageSlider(pic_count);
      // cannot call the function changeslide(pic_count) directly so need to create anonymous func to call the method with params
      imageInterval = setInterval(() => {changeSlide(pic_count)}, 5000);
    });
  }; 
  populateText(); // need to call function to tell promise what to do when it fully completes
});


function createImageSlider(pic_count){
  let width = sliderWidth * pic_count;
  let slides = document.getElementById('slides');
  slides.style.width = width + "px";

  for(let i = 1; i <= pic_count; i++){
    let radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'radio-btn';
    radio.id = 'radio' + (i);
    slides.append(radio);
  }

  for(let i = 1; i <= pic_count; i++){
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

  for(let i = 1; i <= pic_count; i++){
    let label = document.createElement('label');
    label.for = "radio" + i;
    label.className = 'sliderBtn';
    label.id = 'labelRadio' + i;
    label.addEventListener('click', function(){
      let radioId = this.id[this.id.length - 1]
      activeSlide = radioId;
      formatSliderNavigation();
    });
    navigationDiv.append(label);
  }
  document.getElementById('labelRadio' + activeSlide).style.backgroundColor = colors.colorLightAccent;
}

function changeSlide(pic_count){
  if(activeSlide >= pic_count){
    activeSlide = 0;
  }
  activeSlide++;
  formatSliderNavigation();
}

function formatSliderNavigation(){
  document.getElementById('radio' + activeSlide).checked = true;
  document.querySelectorAll('.sliderBtn').forEach(btn=>{
    btn.style.backgroundColor = '';
  });
  document.getElementById('labelRadio' + activeSlide).style.backgroundColor = colors.colorLightAccent;
}
