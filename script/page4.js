// var colors = ['#F7F6CF', '#B6D8F2', '#F4CFDF', '#5784BA', '#9AC8EB'];
var colors = ['#5784BA', '#9AC8EB'];
var emojis = {
  'superb!':0x1F601,
  'loveit!':0x1F60D,
  'pricey!':0x1F911,
  'it rocks!':0x1F918,
  'meh!':0x1F615,
  'dontgo!':0x1F621
};
const countryList = [
	"Canada", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia (Plurinational State of)", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo (the Democratic Republic of the)", "Congo", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czechia", "Côte d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Falkland Islands [Malvinas]", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (the Democratic People's Republic of)", "Korea (the Republic of)", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federated States of)", "Moldova (the Republic of)", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of North Macedonia", "Romania", "Russian Federation", "Rwanda", "Réunion", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom of Great Britain and Northern Ireland", "United States Minor Outlying Islands", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela (Bolivarian Republic of)", "Viet Nam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe", "Åland Islands"
];

var dummyComments = [
  {
    fname: "John Doe",
    country: "Spain",
    rate: "superb!",
    story: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    fname: "Jane Doe",
    country: "Vietnam",
    rate: "it rocks!",
    story: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    fname: "Jack Jill",
    country: "Austria",
    rate: "meh!",
    story: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    fname: "Rapunzel",
    country: "France",
    rate: "pricey!",
    story: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    fname: "Elizabeth Ann",
    country: "Italy",
    rate: "dontgo!",
    story: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    fname: "Antonov",
    country: "Philippines",
    rate: "loveit!",
    story: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    fname: "Miranda Bailey",
    country: "Turkey",
    rate: "it rocks!",
    story: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  }
];

window.addEventListener('resize', function(){
  arrangeComments();
});

window.addEventListener('DOMContentLoaded', function(){
  initializeOptions();
  populateComments();
  styleComments();
  arrangeComments();
  let radios = this.document.querySelectorAll("input[type='radio']");
  for(let i = 0; i < radios.length; i++){
    radios[i].addEventListener('click', formatClickEmoji);
  }
});

function populateComments(){
  for(let dComment of dummyComments){
    let article = document.createElement('article');
    article.className = 'comment';
    let emojiBg = document.createElement('p');
    emojiBg.innerText = String.fromCodePoint(emojis[dComment.rate]);

    let heading = constructHeading(dComment.country, dComment.rate);

    let citeText = document.createElement('cite');
    citeText.innerText = '"' + dComment.story;

    let from = document.createElement('p');
    from.style.textAlign = 'right';
    from.innerText = '- ' + dComment.fname;

    article.append(emojiBg, heading, citeText, from);
    let commentContainer = document.getElementById('commentContainer');
    commentContainer.prepend(article);
  }
}


function formatClickEmoji(){
  let radios = document.querySelectorAll("input[type='radio']");
  for(let i = 0; i < radios.length; i++){
    if (radios[i].checked)
    {
      document.getElementById('emoji'+(i+1)).style.transform = 'translateY(-10px)';
      document.getElementById('emoji'+(i+1)).style.cursor = 'pointer';
      document.getElementById('emoji7').innerText = radios[i].value.toUpperCase();
    }
    else
    {
      document.getElementById('emoji'+(i+1)).style.transform = 'unset';
      document.getElementById('emoji'+(i+1)).style.cursor = 'pointer';
    }
  }
}

function addComment(form){
  if(validateForm(form))
  {
    let name = form.elements['fname'];
    let country = form.elements['country'];
    let rates = form.elements['rate'];
    let story = form.elements['story'];

    let article = document.createElement('article');
    article.className = 'comment';
    let emojiBg = document.createElement('p');
    emojiBg.innerText = String.fromCodePoint(emojis[rates.value]);

    let heading = constructHeading(country.value, rates.value);

    let citeText = document.createElement('cite');
    citeText.innerText = story.value;

    let from = document.createElement('p');
    from.style.textAlign = 'right';
    from.innerText = '- ' + name.value;

    article.append(emojiBg, heading, citeText, from);
    let commentContainer = document.getElementById('commentContainer');
    commentContainer.prepend(article);
    styleComments();
    arrangeComments();
  }
}

function constructHeading(country, rate){
  let heading = document.createElement('h2');
  let strongCountry = document.createElement('span');
  strongCountry.className = 'strong-country';
  strongCountry.innerText = country.toUpperCase();
  if(rate == 'superb!'){
    heading.append(strongCountry, ' was superb!');
  }
  else if(rate == 'loveit!'){
    heading.append('I love you, ', strongCountry);
  }
  else if(rate == 'pricey!'){
    heading.append(strongCountry, ' is too pricey for me');
  }
  else if(rate == 'it rocks!'){
    heading.append(strongCountry, ', you rock!');
  }
  else if(rate == 'meh!'){
    heading.append('Love-hate relationship with, ', strongCountry);
  }
  else{
    heading.append("Sorry, ", strongCountry, ", I'm never coming back.")
  }
  return heading;
}

function validateForm(form){
  return validateName(form) &&
    validateCountry(form) &&
    validateRate(form) &&
    validateStory(form);
}

function validateName(form){
  let name = form.elements['fname'];
  if(name.validity.valueMissing){
    name.setCustomValidity("Don't be shy. Tell us your name.");
    return false;
  }
  else{
    name.setCustomValidity("");
    return true;
  }
}

function validateCountry(form){
  let country = form.elements['country'];
  if(country.validity.valueMissing){
    country.setCustomValidity("Where did you go?");
    return false;
  }
  else{
    country.setCustomValidity("");
    return true;
  }
}

function validateRate(form){
  let rates = form.elements['rate'];
  let warning = document.getElementById('emoji7');
  let check = false;
  for(let rate of rates)
  {
    check = check || rate.validity.valid;
  }
  if(!check){
    let customText = "Rate your experience " + String.fromCodePoint(0x1F92A);
    rates[0].setCustomValidity(customText);
    warning.innerText = customText;
    return false;
  }
  else{
    rates[0].setCustomValidity("");
    return true;
  }
}

function validateStory(form){
  let story = form.elements['story'];
  let wordCount = story.value.split(' ');
  console.log(wordCount.length);
  if(story.validity.valueMissing){
    story.setCustomValidity("Share a couple of words please " + String.fromCodePoint(0x1F92A));
    return false;
  }
  else if(wordCount.length < 50){
    story.setCustomValidity("You're almost there! Share a few more insights. We'd love to hear more from you.");
    return false;
  }
  else if (wordCount.length > 100){
      story.setCustomValidity("Oops! Information overload... Please make it shorter  " + String.fromCodePoint(0x1F92A));
      return false;
  }
  else{
    story.setCustomValidity("");
    return true;
  }
}

function styleComments(){
  let comments = document.querySelectorAll('.comment');
  for(let comment of comments){
    comment.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    // comment.style.border = '4px solid ' + colors[Math.floor(Math.random() * colors.length)];
  }
}

function arrangeComments(){
  let commentContainer = document.getElementById('commentContainer');
  let gridAreas2Col = [
    '1 / 1 / 3 / 2',
    '1 / 2 / 2 / 3',
    '2 / 2 / 3 / 3',
    '3 / 2 / 6 / 3',
    '3 / 1 / 4 / 2',
    '4 / 1 / 5 / 2',
    '5 / 1 / 7 / 2',
    '6 / 2 / 7 / 3',
    '7 / 1 / 8 / 3',
    '8 / 1 / 10 / 2',
    '8 / 2 / 9 / 3',
    '9 / 2 / 10 / 3',
    '10 / 2 / 12 / 3',
    '10 / 1 / 13 / 2',
    '12 / 2 / 13 / 3',
    '13 / 2 / 15 / 3',
    '13 / 1 / 14 / 2',
    '14 / 1 / 15 / 2',
    '15 / 1 / 16 / 3',
    '16 / 1 / 18 / 2',
    '16 / 2 / 17 / 3',
    '17 / 2 / 18 / 3'
  ]

  let gridAreas3Col = [
    '1 / 2 / 2 / 3',
    '1 / 3 / 3 / 4',
    '1 / 1 / 2 / 2',
    '2 / 1 / 3 / 3',
    '3 / 1 / 5 / 2',
    '3 / 2 / 4 / 4',
    '4 / 2 / 6 / 3',
    '5 / 1 / 6 / 2',
    '4 / 3 / 6 / 4',
    '6 / 1 / 8 / 2',
    '7 / 2 / 8 / 3',
    '8 / 2 / 9 / 3',
    '8 / 1 / 9 / 2',
    '7 / 3 / 9 / 4',
    '10 / 1 / 11 / 2',
    '9 / 1 / 10 / 3',
    '10 / 2 / 11 / 3',
    '9 / 3 / 11 / 4'
  ]

  let comments = commentContainer.children;
  for(let i = 0; i < comments.length; i++){
    if(window.screen.width <= 550 || window.innerWidth <= 550){
      commentContainer.style.gridTemplateColumns = '1fr';
      comments[i].style.gridArea = 'unset';
    }
    else if(window.screen.width <= 1024 || window.innerWidth <= 1024){
      commentContainer.style.gridTemplateColumns = '1fr 1fr';
      comments[i].style.gridArea = gridAreas2Col[i];
    }
    else {
      commentContainer.style.gridTemplateColumns = '1fr 0.8fr 0.5fr';
      comments[i].style.gridArea = gridAreas3Col[i];
    }
  }
}

function initializeOptions(){
  let select = document.getElementById('country');
  for(let country of countryList){
    let option = document.createElement('option');
    option.text = country;
    option.val = country.substring(0, 2);
    select.append(option);
  }
}