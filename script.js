let previous = 0;
let value = '';
let operator = '';
let input = document.querySelector('.input');

document.querySelectorAll('button').forEach((el) =>
    el.addEventListener('click', (e) => {
        parseInt(e.target.innerText) ||
            parseInt(e.target.innerText) === 0 ||
            e.target.innerText === '.' ?
            ((value += e.target.innerText), (input.textContent = value)) :
            e.target.innerText === '=' ?
            (input.textContent = eval(previous + operator + parseFloat(value))) :
            e.target.innerText.toLowerCase() == 'c' ?
            ((input.innerText = ''), (value = ''), (previous = 0), (operator = '')) :
            e.target.value === '+' || '-' || '*' || '/' || '%' ?
            ((input.innerText = ''),
                (previous = eval(previous + operator + parseFloat(value))),
                (value = ''),
                (operator = e.target.value)) :
            '';
    })
);