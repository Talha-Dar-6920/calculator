let previous = 0;
let value = '';
let operator = '';
let input = document.querySelector('.input');

document.querySelectorAll('button').forEach(function(el) {
    el.addEventListener('click', function(e) {
        if (parseInt(e.target.innerText) || parseInt(e.target.innerText) === 0 || e.target.innerText === '.') {
            value += e.target.innerText;
            input.innerHTML = value;
        } else if (e.target.innerText === '=') {
            input.innerHTML = eval(previous + operator + parseFloat(value));
        } else if (e.target.innerText.toLowerCase() == 'c') {
            input.innerText = '';
            value = '';
            previous = 0;
            operator = '';
        } else if (e.target.value === '+' || '-' || '*' || '/' || '%') {
            input.innerText = '';
            previous = value;
            value = '';
            operator = e.target.value;
        }
    })
})