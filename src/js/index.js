const inputs = document.querySelectorAll('.input-box');
const spans = document.querySelectorAll('.span')
const submit = document.getElementById('btnSubmit');


function validarInput(index) {
    const inputValue = inputs[index].value;
    const inputBox = inputs[index]

    if (inputValue.trim() !== '') {
        inputBox.style.border = 'solid 1px #00C22B'
        spans[index].style.opacity = 0
    } else {
        inputBox.style.border = 'solid 1px #F52E2E';
        spans[index].style.opacity = 1
    }
}

submit.addEventListener('click', () => {
    for (let meuIndice = 0; meuIndice < inputs.length; meuIndice++) {
        validarInput(meuIndice)
    }
});

//tentativa de tirar a validação ao digitar

// inputs.forEach(function (input) {

//     input.addEventListener('input', () => {
//         for (let index = 0; index < inputs.length; index++) {
//             setDefault(index)
//         }

//     })
// })

// function setDefault(i) {
//     let meuInput = inputs[i]
//     let valueInput = inputs[i].value
//     if (valueInput.trim() ) {
//         meuInput.style.border = 'solid 1px #000000'
//     }
// }
