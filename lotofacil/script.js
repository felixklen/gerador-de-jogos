const numeros = document.querySelectorAll('.numero');
const numerosSelecionadosDiv = document.querySelector('.numeros-selecionados');
const jogosDivs = document.querySelectorAll('.jogo');
const gerarBtn = document.querySelector('#gerar');
const limparBtn = document.querySelector('#limpar');
const jogo = document.querySelector('#jogo');



let numerosSelecionados = [];

numeros.forEach(numero => {
  numero.addEventListener('click', () => {
    if (numerosSelecionados.includes(numero.textContent)) {
      numerosSelecionados.splice(numerosSelecionados.indexOf(numero.textContent), 1);
      numero.classList.toggle('selecionado');
    } else if (numerosSelecionados.length < 17) {
      numerosSelecionados.push(numero.textContent);
      numero.classList.toggle('selecionado');
    }
    numerosSelecionadosDiv.innerHTML = numerosSelecionados.join(" ");
    numerosSelecionadosDiv.innerHTML = numerosSelecionados.map(numero => numero.padStart(2, '0')).join(" ");

    //jogosDivs[index].innerHTML = jogo.map(numero => `<button class="numero">${numero.toString().padStart(2, '0')}</button>`).join('');


  });
});

    gerarBtn.addEventListener('click', () => {
     if (numerosSelecionados.length === 17) {
      let jogos = [];
        
      
        jogos.push([numerosSelecionados[0], numerosSelecionados[1], numerosSelecionados[2], numerosSelecionados[3], numerosSelecionados[4], numerosSelecionados[5], numerosSelecionados[6], numerosSelecionados[7], numerosSelecionados[8], numerosSelecionados[10], numerosSelecionados[11], numerosSelecionados[12], numerosSelecionados[14], numerosSelecionados[15], numerosSelecionados[16]]); //jogo 01
      
        jogos.push([numerosSelecionados[0], numerosSelecionados[1], numerosSelecionados[2], numerosSelecionados[4], numerosSelecionados[5], numerosSelecionados[6], numerosSelecionados[7], numerosSelecionados[8], numerosSelecionados[9], numerosSelecionados[10], numerosSelecionados[11], numerosSelecionados[12], numerosSelecionados[13], numerosSelecionados[15], numerosSelecionados[16]]); //jogo 02
        
        jogos.push([numerosSelecionados[0], numerosSelecionados[1], numerosSelecionados[2], numerosSelecionados[3], numerosSelecionados[4], numerosSelecionados[6], numerosSelecionados[8], numerosSelecionados[9], numerosSelecionados[10], numerosSelecionados[11], numerosSelecionados[12], numerosSelecionados[13], numerosSelecionados[14], numerosSelecionados[15], numerosSelecionados[16]]); //jogo 03
        
        jogos.push([numerosSelecionados[0], numerosSelecionados[1], numerosSelecionados[2], numerosSelecionados[3], numerosSelecionados[4], numerosSelecionados[5], numerosSelecionados[6], numerosSelecionados[7], numerosSelecionados[8], numerosSelecionados[9], numerosSelecionados[11], numerosSelecionados[12], numerosSelecionados[13], numerosSelecionados[14], numerosSelecionados[16]]); //jogo 04
       
        jogos.push([numerosSelecionados[0], numerosSelecionados[1], numerosSelecionados[2], numerosSelecionados[3], numerosSelecionados[4], numerosSelecionados[5], numerosSelecionados[6], numerosSelecionados[7], numerosSelecionados[8], numerosSelecionados[9], numerosSelecionados[10], numerosSelecionados[12], numerosSelecionados[13], numerosSelecionados[14], numerosSelecionados[15]]); //jogo 05
       
        jogos.push([numerosSelecionados[0], numerosSelecionados[3], numerosSelecionados[4], numerosSelecionados[5], numerosSelecionados[6], numerosSelecionados[7], numerosSelecionados[8], numerosSelecionados[9], numerosSelecionados[10], numerosSelecionados[11], numerosSelecionados[12], numerosSelecionados[13], numerosSelecionados[14], numerosSelecionados[15], numerosSelecionados[16]]); //jogo 06

        jogos.push([numerosSelecionados[0], numerosSelecionados[1], numerosSelecionados[2], numerosSelecionados[3], numerosSelecionados[4], numerosSelecionados[5], numerosSelecionados[6], numerosSelecionados[8], numerosSelecionados[9], numerosSelecionados[10], numerosSelecionados[11], numerosSelecionados[12], numerosSelecionados[13], numerosSelecionados[14], numerosSelecionados[15]]);

    
      jogos.forEach((jogo, index) => {
        jogosDivs[index].innerHTML = jogo.map(numero => `<button class="numero">${numero.toString().padStart(2, '0')}</button>`).join('');

        jogosDivs[index].style.display = 'inline-block';
        
        // assim funciona também
        // jogosDivs[index].innerHTML = `<button class="numero">${jogo[0]}</button><button>${jogo[1]}</button> <button>${jogo[2]}</button> <button>${jogo[3]}</button><button>${jogo[4]}</button><button>${jogo[5]}</button><button>${jogo[6]}</button><button>${jogo[7]}</button><button>${jogo[8]}</button><button>${jogo[9]}</button><button>${jogo[10]}</button><button>${jogo[11]}</button><button>${jogo[12]}</button><button>${jogo[13]}</button><button>${jogo[14]}</button>`;
    });
    }
    });
    

      
      limparBtn.addEventListener('click', () => {
      numerosSelecionados = [];      
      numeros.forEach(numero => {
      numero.classList.remove('selecionado'); });
      numerosSelecionadosDiv.innerHTML = "";
      jogosDivs.forEach(jogoDiv => {
      jogoDiv.innerHTML = "";
      jogosDivs.forEach(jogoDiv => 
      jogoDiv.style.display = 'none');

      
      
      });
     
      });
      