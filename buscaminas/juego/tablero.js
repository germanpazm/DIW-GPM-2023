let tablero = []
const TAM_MAX = 10

function generartablero(){
    for(let i=0; i<TAM_MAX; i++){
        tablero[i] = new Array(TAM_MAX);
        for(let j = 0; j<TAM_MAX; j++){
            tablero[i][j]=0;
        }
    }
}

let numeroAletorio = () => {
    return parseInt(10*Math.random())
}


function colocarbombas(){
    let cont = 0
    let i = 0
    let j =0
    while(cont <= (TAM_MAX*TAM_MAX)/2){
        i = numeroAletorio()
        j = numeroAletorio()
        if(tablero[i][j] == 0){
            tablero[i][j] = 1;
            cont++;
        }
    }
}
// generartablero()
// colocarbombas()
//document.write(tablero);

function dibujarTablero(){

let tableroHTML = document.getElementById("a");

let tabla = document.createElement("table");
tabla.setAttribute("border",1)
tableroHTML.appendChild(tabla)

for(let i = 0 ; i < TAM_MAX ; i++){
    let fila = document.createElement("tr");
    for(let j = 0 ; j < TAM_MAX ; j++){
        
        let celda = document.createElement("td");
        celda.innerHTML=" --------  "
        celda.id=`idCelda_${i}_${j}`
        fila.appendChild(celda)
        
    }    
    tabla.appendChild(fila)
}

}
function calcularMinas(e){

console.log(e)
console.log(`Has pulsado la celda ${e.target.id}`);

let coordenadas = e.target.id.split("_")
let x = coordenadas[1]
let y = coordenadas[2]
}

function asociarEventClick(){
    
    let celdas = document.querySelectorAll(('td[id^="idCelda"]') ) 
    
    celdas.forEach(e => e.addEventListener("click",mostrarCoordenadas))

    celdas.forEach(e => e.addEventListener("contextmenu",colocarbandera))
    
}

function mostrarCoordenadas(event){

    let coordenadas = event.target.id.split("_")
    let x = coordenadas[1]
    let y = coordenadas[2]

    console.log(x,y)

    event.target.style.background = "grey"

}

function colocarbandera(event){

event.preventDefault()

event.target.style.background = "red"

console.log("vas a colocar una bandera")


}



generartablero()
colocarbombas()
dibujarTablero()
asociarEventClick()

