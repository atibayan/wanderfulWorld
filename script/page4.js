var colors = ['#F7F6CF', '#B6D8F2', '#F4CFDF', '#5784BA', '#9AC8EB'];
const countryList = [
	"Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia (Plurinational State of)", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo (the Democratic Republic of the)", "Congo", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czechia", "Côte d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Falkland Islands [Malvinas]", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (the Democratic People's Republic of)", "Korea (the Republic of)", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federated States of)", "Moldova (the Republic of)", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of North Macedonia", "Romania", "Russian Federation", "Rwanda", "Réunion", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom of Great Britain and Northern Ireland", "United States Minor Outlying Islands", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela (Bolivarian Republic of)", "Viet Nam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe", "Åland Islands"
];

window.addEventListener('DOMContentLoaded', function(){
  initializeOptions();
  styleComments();
  arrangeComments();
  let radios = this.document.querySelectorAll("input[type='radio']");
  for(let i = 0; i < radios.length; i++){
    radios[i].addEventListener('click', formatClickEmoji);
  }
});


function formatClickEmoji(){
  let radios = document.querySelectorAll("input[type='radio']");
  for(let i = 0; i < radios.length; i++){
    if (radios[i].checked)
    {
      document.getElementById('emoji'+(i+1)).style.transform = 'translateY(-15px)';
      document.getElementById('emoji'+(i+1)).style.fontSize = 'xx-large';
      document.getElementById('emoji'+(i+1)).style.cursor = 'pointer';
      document.getElementById('emoji7').innerText = radios[i].value.toUpperCase();
    }
    else
    {
      document.getElementById('emoji'+(i+1)).style.transform = 'unset';
      document.getElementById('emoji'+(i+1)).style.fontSize = 'x-large';
      document.getElementById('emoji'+(i+1)).style.cursor = 'pointer';
    }
  }
}

function addComment(form){
  let comment = form.comment;
  // let emoji = form.rate.value;
  // console.log(emoji);
  console.log(comment.value);
  let p = document.createElement('p');
  p.innerText = comment.value;
  let article = document.createElement('article');
  article.className = 'comment';
  article.append(p);
  let commentContainer = document.getElementById('commentContainer');
  commentContainer.insertBefore(article, commentContainer.firstChild);
  styleComments();
  arrangeComments();
}

function styleComments(){
  let comments = document.querySelectorAll('.comment');
  for(let comment of comments){
    comment.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    comment.style.border = '4px solid ' + colors[Math.floor(Math.random() * colors.length)];
  }
}

function arrangeComments(){
  let gridAreas = [
    '1 / 3 / 3 / 4',
    '1 / 1 / 2 / 2',
    '1 / 2 / 2 / 3',
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

  let comments = document.querySelectorAll('.comment');
  for(let i = 0; i < comments.length; i++){
    comments[i].style.gridArea = gridAreas[i]
  }
}

function initializeOptions(){
  let select = document.getElementById('countries');
  for(let country of countryList){
    let option = document.createElement('option');
    option.text = country;
    option.val = country.substring(0, 2);
    if(country == 'Canada')
      option.selected = true;
    select.append(option);
  }
}