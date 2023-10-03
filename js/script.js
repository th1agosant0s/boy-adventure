const personagem = document.getElementById('personagem');
const trem = document.getElementById("trem");
let posicaoHorizontal = 0;
let posicaoVertical = 0;
const step = 10;

//função que atualiza a posição do personagem no DOM
function updatePersonagemPosition(params) {
    //Definindo a posição horizontal do personagem
    personagem.style.left = posicaoHorizontal + 'px';


    //Definindo a posição vertical do personagem
    personagem.style.top = posicaoVertical + 'px';
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowUp':
        posicaoVertical -= step;
        break;
      case 'ArrowDown':
        posicaoVertical += step;
        break;
      case 'ArrowLeft':
        posicaoHorizontal -= step;
        break;
      case 'ArrowRight':
        posicaoHorizontal += step;
        break;
    }
  
    updatePersonagemPosition();
  });

back = 0
function update(){
  back += 20
  document.body.style.backgroundPositionX =  back + "px";
  trem.style.left = trem.offsetLeft - 20 + "px";
  sth1 = trem.style.left

  updatePersonagemPosition();
  setTimeout(() => {
    update();
  }, 20);
}

update()
