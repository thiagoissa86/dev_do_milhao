function toggleMode () {
  const html = document.documentElement
 /*Exemplo para mudança de ligth ou darck de uma página*/
  // if (body.classList.contains('light')) {
 //   html.classList.remove('light')    
 // } else {
 //   html.classList.add('light')
 // }
 html.classList.toggle('light')

 // pegar a tag img
 const img = document.querySelector("#profile img")

 // substituir a imagem
 if (html.classList.contains('light')) {
  // se tiver light mode, adicionar a imagem light
  img.setAttribute("src", "./assets/avatar-light.png")
 } else {
  // set tiver sem light mode, manter a imagem normal
  img.setAttribute("src","./assets/avatar.png")
 }

 const text = document.querySelector("#profile text")

 if (html.classList.contains('light')) {
  text.setAttribute("alt","Foto de Mayk Brito sorrindo, usando óculos escuro, jaqueta preta e o fundo da imagem do lado esquerdo meio rosa e do lado direito azul")

 } else {
  text.setAttribute("alt","Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.")

 }

}