function toggLeMode(){
    const html = document.documentElement

   html.classList.toggle('light')


   // pegar a tag imagem 
    const img = document.querySelector("#profile img")


    // substituir a imagem
   if(html.classList.contains('light')){    
    // se tiver light mode, adcionar a imagem light
    img.setAttribute('src', 'assets/assets/img_lightMode.png')
    } else{
    // se estiver sem light mode, manter imagem normal
    img.setAttribute('src', 'assets/assets/img_nightMode.png')

    }


   
   
}