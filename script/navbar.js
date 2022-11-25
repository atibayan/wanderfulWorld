window.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]
  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  })

  document.querySelectorAll('.navlinkbtn').forEach(
    link => {
      if(window.location.href.startsWith(link.href)){
        link.setAttribute('aria-current', 'page');
      }
    })
})

