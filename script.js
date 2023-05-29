/*function redirecionar(jogo) {
    if (jogo === 'mega_sena') {
      window.location.href = "mega-sena/12-4-6/index1.html"; // Substitua com o caminho correto para a página Mega Sena
    } else if (jogo === 'lotofacil') {
      window.location.href = "lotofacil/index1.html"; // Substitua com o caminho correto para a página Lotofácil
    }}
    //var popup = document.getElementById("popup1");*/
    
    function exibirPopup(jogo) {
      var popup1 = document.getElementById("popup1");
      var popup2 = document.getElementById("popup2");
    
      if (jogo === 'mega-sena') {
        popup1.style.display = "block";
        popup2.style.display = "none";
      } else if (jogo === 'lotofacil') {
        popup1.style.display = "none";
        popup2.style.display = "block";
      }
    }
    function fecharPopup() {
      var popup1 = document.getElementById("popup1");
      var popup2 = document.getElementById("popup2");
      popup1.style.display = "none";
      popup2.style.display = "none"
  }
    


      
    
   // function exibirPopup1() {
     
     //   popup = document.getElementById("popup2");
   //     popup.style.display = "block";
     //   }

 //   function fecharPopup() {
      
   //   popup.style.display = "none";
 // }