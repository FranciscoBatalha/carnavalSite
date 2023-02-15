let select = document.querySelector("#Dhelmise");
        select.addEventListener("change", setDhelmise);

        function setDhelmise() {

            if (select.value == "Certo") {
                pontos += 20
            } else if (select.value == "Errado") {
            }
        }


let result = document.querySelector('#result')
let verificarResultado = document.querySelector('#verificarResultado')
verificarResultado.addEventListener('click', verificar)

function verificar(){
    console.log("Verificar: " + pontos)
    
    result.innerHTML = "<h2>Resultado </h2><br> Pontos: " + pontos
}
let select1 = document.querySelector("#Eternatus");
        select1.addEventListener("change", setEternatus);

        function setEternatus() {

            if (select1.value == "Errado") {
         
            } else if (select1.value == "Certo") {
                pontos += 20
            }
        }

let result1 = document.querySelector('#result')
let verificarResultado1 = document.querySelector('#verificarResultado')
verificarResultado1.addEventListener('click', verificar)

function verificar(){
    console.log("Verificar: " + pontos)
    
    result.innerHTML = "<h2>Resultado </h2><br> Pontos: " + pontos
}
let select2 = document.querySelector("#Steven");
        select2.addEventListener("change", setSteven);

        function setSteven() {
        
            if (select2.value == "Errado") {
              
            } else if (select2.value == "Certo") {
                pontos += 20
            }
        }
let result2 = document.querySelector('#result')
let verificarResultado2 = document.querySelector('#verificarResultado')
verificarResultado2.addEventListener('click', verificar)

function verificar(){
    console.log("Verificar: " + pontos)
    
    result.innerHTML = "<h2>Resultado </h2><br> Pontos: " + pontos
}
let select3 = document.querySelector("#Diantha");
select3.addEventListener("change", setDiantha);

function setDiantha() {

    if (select3.value == "Gardevoir") {
        pontos += 20

    } else if (select3.value == "Gallade") {
    }
    else if (select3.value == "Clefable") {
    }
    else if (select3.value == "Mr.Mime") {
     
    }
}
let result3 = document.querySelector('#result')
let verificarResultado3 = document.querySelector('#verificarResultado')
verificarResultado3.addEventListener('click', verificar)

function verificar(){
    console.log("Verificar: " + pontos)
    
    result.innerHTML = "<h2>Resultado </h2><br> Pontos: " + pontos
}
let select4 = document.querySelector("#Palkia");
        select4.addEventListener("change", setPalkia);

        function setPalkia() {

            if (select4.value == "Kanto") {

            } else if (select4.value == "Kalos") {
            }
            else if (select4.value == "Sinnoh") {
                pontos += 20
            }
            else if (select4.value == "Alola") {
            }
        }
        let result4 = document.querySelector('#result')
        let verificarResultado4 = document.querySelector('#verificarResultado')
        verificarResultado4.addEventListener('click', verificar)
        
        function verificar(){
            console.log("Verificar: " + pontos)
            
            result.innerHTML = "<h2>Resultado </h2><br> Pontos: " + pontos
        }
        function verificar(){
            console.log("Verificar: " + pontos)
            
            result.innerHTML = "<h2>Resultado </h2><br> Pontos: " + pontos
        }