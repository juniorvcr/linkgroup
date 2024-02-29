function toggleMode() {
   const html = document.documentElement
   html.classList.toggle('light')

   const img = document.querySelector('.self')
   
   if(html.classList.contains('light')) {
       img.setAttribute('src', '/avatar-light.png')
    } else {
       img.setAttribute('src', '/avatar.png')
   }

   const alt = document.querySelector('.self')

   if(html.classList.contains('light')) {
    alt.setAttribute('alt', 'Avatar sorrindo com backgroud amarelo')
   } else {
    alt.setAttribute('alt', 'Avatar sorrindo usando óculos escuro')
   }
}