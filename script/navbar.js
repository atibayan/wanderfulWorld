window.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]
  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  })

  document.querySelectorAll('.navlinkbtn').forEach(
    link => {
      console.log(link.href, window.location.href)
      if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page');
      }
    })
})

