setTimeout(console.log('waiting for page to load...'), 1000)

let scrollText = document.getElementsByClassName('moreDetails')[0]

window.addEventListener('scroll', function() {
  scrollText = document.getElementsByClassName('moreDetails')[0]
  const scrollPosition = window.scrollY
  if (scrollPosition > window.innerHeight / 2) {
    scrollText.classList.add('active')
  } else {
    scrollText.classList.remove('active')
  }
})
