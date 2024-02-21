const form = document.getElementById('formulario');

let primeiroNumber = document.getElementById('campo-a');
let segundoNumber = document.getElementById('campo-b');

function validarNumber(num1, num2){
    const validacao = num1 < num2
    return validacao;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let formEValido = false;

    let result = segundoNumber.value;




    formEValido = validarNumber(primeiroNumber.value,segundoNumber.value)
    if(!formEValido){
        document.querySelector('.erro').style.display = 'block';

    }else{
        document.querySelector('.final').style.display = 'block';     
    };
})




