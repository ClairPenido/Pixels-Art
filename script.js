
let getTagMainColor = document.querySelector('#color-palette');


function selectColor(event) {
    let getSelected = document.querySelector('.selected');
    getSelected.classList.remove('selected'); // toda vez que eu clicar, vai add a classe select; anterior sai
    event.target.classList.add('selected');
}
getTagMainColor.addEventListener('click', selectColor);

//* Clicar em um pixel dentro do quadro após selecionar uma cor, faz com que o pixel seja preenchido com a cor selecionada.
let getBoard = document.getElementById('pixel-board'); 
function changeColor(event) { //selected.classList.contains('alo')
    let selectedColor = document.querySelector('.selected');
    //toda vez que eu clicar em uma color, tem que mudar a classe para mudar a cor

    if (selectedColor.classList.contains('color1')) {
        event.target.className = 'pixel color1';
        event.target.style.backgroundColor = 'black';
    } else if (selectedColor.classList.contains('color2')) {
        event.target.className = 'pixel color2';
        event.target.style.backgroundColor = r2; 
    } else if (selectedColor.classList.contains('color3')) {
        event.target.className = 'pixel color3';
        event.target.style.backgroundColor = r3;
    } else if (selectedColor.classList.contains('color4')) {
        event.target.className = 'pixel color4';
        event.target.style.backgroundColor = r4;
    }
    getBoard.className = ''; // Se eu clicar fora, não reduz o quadrado
}
getBoard.addEventListener('click', changeColor);

let getButton = document.getElementById('clear-board');
function clearBoard() {
    let getPixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < getPixel.length; i += 1) {
        getPixel[i].className = 'pixel';
        getPixel[i].style.backgroundColor = '#FFF';
    }
}

getButton.addEventListener('click', clearBoard);


// olhar esse exercicio: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-logica-de-programacao-e-algoritmos/solutions/83bb1cd0-be4a-40cf-a9c2-22d71f700144/gabarito-dos-exercicios/dbef6a68-2974-4129-9de4-9031d8d30b94?use_case=calendar
function boardGenerator(n) {
    let getPixelBoard = document.querySelector('#pixel-board');
    for (let l = 0; l < n; l += 1) {
        let linha = document.createElement('div');
            linha.className = 'linha';
            getPixelBoard.appendChild(linha);
        for (let c = 0; c < n; c += 1) {
            let celula = document.createElement('div');
            celula.className = 'pixel';
            linha.appendChild(celula);
            
        }
    }
};

boardGenerator(5);
// <input type="number" id="board-size"> toda vez que eu der o clique no botão
// <button id="generate-board">VQV</button> ele tem que pegar o input e gerar a board
getInputBoard = document.getElementById('board-size');
getButtonB = document.querySelector('#generate-board');
 
getButtonB.addEventListener('click',catchInput);

function catchInput (){
let valorInput = '';
valorInput= getInputBoard.value;
console.log('peguei'+valorInput);
if (valorInput < 5 && valorInput > 0){
    resetBoard();
    boardGenerator(5);
    console.log("chegou");
} else if(valorInput > 50){
    resetBoard();
    boardGenerator(50);
    console.log('chegou 50');
} else if( valorInput === ''){
    alert('Board inválido!'); //* Verifica se nenhum valor for colocado no input ao clicar no botão, um alert é exibido com o texto: 'Board inválido!'
} else {
resetBoard();
boardGenerator(valorInput);  // toda vez que apertar no botão novamente, ele não pode add mais linhas e celulas
}
 }
 function resetBoard(){
     var clear = document.querySelectorAll('div.linha, div.pixel');
     for (let i = 0; i < clear.length; i++) {
        clear[i].remove();  
     }
 }

 // toda vez que carregar a pagina, ter novas cores aleatorias. EXCETO A PRIMEIRA COR

 function createRandomColors(){ // https://stackoverflow.com/questions/1484506/random-color-generator
        var letters = '0123456789ABCDEF';
        var randomColor = '#';
        for (var i = 0; i < 6; i++) {
          randomColor += letters[Math.floor(Math.random() * 16)];
        }
        return randomColor;
      }


let random2 = document.getElementsByClassName('color2');
let random3 = document.getElementsByClassName('color3');
let random4 = document.getElementsByClassName('color4');

random2[0].style.backgroundColor = createRandomColors();
random3[0].style.backgroundColor = createRandomColors();
random4[0].style.backgroundColor = createRandomColors();

let r2 = random2[0].style.backgroundColor;
let r3 = random3[0].style.backgroundColor;
let r4 = random4[0].style.backgroundColor;


//* Colocar cores aleatorias : https://www.w3schools.com/jsref/prop_html_style.asp
