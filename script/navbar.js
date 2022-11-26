window.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]
  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  });

  document.querySelectorAll('.navlinkbtn').forEach(
    link => {
      if(window.location.href.startsWith(link.href)){
        link.setAttribute('aria-current', 'page');
      }
    });
  
  let topBtn = document.getElementById("topBtn");
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  topBtn.addEventListener('click', topFunction);
});

