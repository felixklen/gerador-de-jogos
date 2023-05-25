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
    } else if (numerosSelecionados.length < 19) {
      numerosSelecionados.push(numero.textContent);
      numero.classList.toggle('selecionado');
    }
    
    //numerosSelecionadosDiv.innerHTML = numerosSelecionados.map(numero => numero.padStart(2, '0')).join(" - ");//

    numerosSelecionadosDiv.innerHTML = numerosSelecionados.length.toString().padStart(2, '0') + "/" + "19";



  });
});

    gerarBtn.addEventListener('click', () => {
     if (numerosSelecionados.length === 19) {
      let jogos = [];
        
      jogos.push([
        numerosSelecionados[0],
        numerosSelecionados[1],
        numerosSelecionados[2],
        numerosSelecionados[3],
        numerosSelecionados[4],
        numerosSelecionados[5],
        numerosSelecionados[6],
        numerosSelecionados[7],
        numerosSelecionados[8],
        numerosSelecionados[11],
        numerosSelecionados[12],
        numerosSelecionados[15],
        numerosSelecionados[16],
        numerosSelecionados[17],
        numerosSelecionados[18]
      ]); // JOGO 01
      
      jogos.push([
        numerosSelecionados[1],
        numerosSelecionados[3],
        numerosSelecionados[4],
        numerosSelecionados[5],
        numerosSelecionados[6],
        numerosSelecionados[7],
        numerosSelecionados[8],
        numerosSelecionados[9],
        numerosSelecionados[10],
        numerosSelecionados[11],
        numerosSelecionados[12],
        numerosSelecionados[14],
        numerosSelecionados[15],
        numerosSelecionados[16],
        numerosSelecionados[18]
      ]); // JOGO 02
      
      jogos.push([
        numerosSelecionados[1],
        numerosSelecionados[3],
        numerosSelecionados[4],
        numerosSelecionados[5],
        numerosSelecionados[6],
        numerosSelecionados[7],
        numerosSelecionados[8],
        numerosSelecionados[10],
        numerosSelecionados[11],
        numerosSelecionados[12],
        numerosSelecionados[13],
        numerosSelecionados[15],
        numerosSelecionados[16],
        numerosSelecionados[17],
        numerosSelecionados[18]
      ]); // JOGO 03
      
      jogos.push([
        numerosSelecionados[0],
        numerosSelecionados[3],
        numerosSelecionados[5],
        numerosSelecionados[6],
        numerosSelecionados[7],
        numerosSelecionados[8],
        numerosSelecionados[10],
        numerosSelecionados[11],
        numerosSelecionados[12],
        numerosSelecionados[13],
        numerosSelecionados[14],
        numerosSelecionados[15],
        numerosSelecionados[16],
        numerosSelecionados[17],
        numerosSelecionados[18]
      ]); // JOGO 04
      
      jogos.push([
        numerosSelecionados[0],
        numerosSelecionados[1],
        numerosSelecionados[2],
        numerosSelecionados[3],
        numerosSelecionados[4],
        numerosSelecionados[5],
        numerosSelecionados[6],
        numerosSelecionados[8],
        numerosSelecionados[11],
        numerosSelecionados[12],
        numerosSelecionados[13],
        numerosSelecionados[14],
        numerosSelecionados[15],
        numerosSelecionados[16],
        numerosSelecionados[18]
      ]); // JOGO 05
      jogos.push([
        numerosSelecionados[1],
        numerosSelecionados[2],
        numerosSelecionados[3],
        numerosSelecionados[5],
        numerosSelecionados[6],
        numerosSelecionados[7],
        numerosSelecionados[8],
        numerosSelecionados[9],
        numerosSelecionados[11],
        numerosSelecionados[12],
        numerosSelecionados[14],
        numerosSelecionados[15],
        numerosSelecionados[16],
        numerosSelecionados[17],
        numerosSelecionados[18]
      ]); // JOGO 06
      
      jogos.push([
        numerosSelecionados[0],
        numerosSelecionados[1],
        numerosSelecionados[3],
        numerosSelecionados[5],
        numerosSelecionados[6],
        numerosSelecionados[7],
        numerosSelecionados[8],
        numerosSelecionados[9],
        numerosSelecionados[10],
        numerosSelecionados[11],
        numerosSelecionados[12],
        numerosSelecionados[13],
        numerosSelecionados[15],
        numerosSelecionados[16],
        numerosSelecionados[18]
      ]); // JOGO 07
      
      jogos.push([
        numerosSelecionados[0],
        numerosSelecionados[3],
        numerosSelecionados[4],
        numerosSelecionados[5],
        numerosSelecionados[6],
        numerosSelecionados[8],
        numerosSelecionados[9],
        numerosSelecionados[11],
        numerosSelecionados[12],
        numerosSelecionados[13],
        numerosSelecionados[14],
        numerosSelecionados[15],
        numerosSelecionados[16],
        numerosSelecionados[17],
        numerosSelecionados[18]
      ]); // JOGO 08
      
      jogos.push([
        numerosSelecionados[0],
        numerosSelecionados[1],
        numerosSelecionados[2],
        numerosSelecionados[3],
        numerosSelecionados[5],
        numerosSelecionados[6],
        numerosSelecionados[7],
        numerosSelecionados[8],
        numerosSelecionados[10],
        numerosSelecionados[11],
        numerosSelecionados[12],
        numerosSelecionados[14],
        numerosSelecionados[15],
        numerosSelecionados[16],
        numerosSelecionados[18]
      ]); // JOGO 09
      
      jogos.push([
        numerosSelecionados[2],
        numerosSelecionados[3],
        numerosSelecionados[4],
        numerosSelecionados[5],
        numerosSelecionados[6],
        numerosSelecionados[8],
        numerosSelecionados[9],
        numerosSelecionados[10],
        numerosSelecionados[11],
        numerosSelecionados[12],
        numerosSelecionados[13],
        numerosSelecionados[15],
        numerosSelecionados[16],
        numerosSelecionados[17],
        numerosSelecionados[18]
      ]); // JOGO 10
      
            

      jogosDivs.forEach((jogoDiv, index) => {
        const jogoNumerado = jogos[index];
        const textoJogo = `<div class="tttx">Jogo ${index + 1}: </div> <br>`;
        const numerosBotao = jogoNumerado
          .map(numero => `<button class="numero1">${numero}</button>`)
          .join('');

        jogoDiv.innerHTML = textoJogo + numerosBotao;
        jogoDiv.style.display = 'inline-block';
        
      });
    }
  });

        
        
        /*assim funciona também
         jogosDivs[index].innerHTML = `<button class="numero">${jogo[0]}</button><button class="numero">${jogo[1]}</button> <button class="numero">${jogo[2]}</button> <button class="numero">${jogo[3]}</button><button class="numero">${jogo[4]}</button><button class="numero">${jogo[5]}</button>`;
        jogosDivs[index].style.display = 'inline-block';
    });
    }
    });
    */

      
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
      