let t0;
let t1;
let t2;

const formEuros = document.createElement('form');
formEuros.addEventListener('submit', function(event) {
  event.preventDefault();
})

const labelEuros = document.createElement('label');
labelEuros.textContent = 'Prix en euros:';
formEuros.appendChild(labelEuros);

const inputEuros = document.createElement('input');
inputEuros.type = 'number';
inputEuros.value = 0
inputEuros.addEventListener('input', function() {
  if(isNaN(parseInt(inputEuros.value))) {
    inputEuros.value = 0;
  }
  const prixEnDollars = parseInt(inputEuros.value) * 1.05;
  if(prixEnDollars > 100){
    labelDollars.style.color = 'red';
  }
  else {
    labelDollars.style.color = 'black';
  }
  labelDollars.innerText = "Prix en dollars: " + prixEnDollars;
});

formEuros.appendChild(inputEuros);

document.body.appendChild(formEuros);

const labelDollars = document.createElement('p');
labelDollars.textContent = 'Prix en dollars: 0';
document.body.appendChild(labelDollars);

// ---------------------------------------------------------

const buttons = document.createElement('div');

const buttonMoinsUnEuro = document.createElement('button');
buttonMoinsUnEuro.textContent = '-1€';
buttonMoinsUnEuro.style.color = 'red';
buttonMoinsUnEuro.addEventListener('click', function() {
  if(!t0){
    t0 = Date.now()
  }
  else if (!t1) {
    t1 = Date.now();
  }
  else {
    t2 = Date.now();
    const diff = t2 - t0;
    if(diff < 2000){
      const btn = document.createElement('button');
      btn.textContent = 'Bravo';
      btn.addEventListener('click', function() {
        alert('Bravo');
      })
      document.body.appendChild(btn);
      t0 = t1
      t1 = t2
      t2 = undefined
    }
  }
  
  inputEuros.value = parseInt(inputEuros.value) - 1;
  const prixEnDollars = parseInt(inputEuros.value) * 1.05;
  if(prixEnDollars > 100){
    labelDollars.style.color = 'red';
  }
  else {
    labelDollars.style.color = 'black';
  }
  if(parseInt(inputEuros.value) === 42) {
    document.body.innerHTML = "";
  }
  labelDollars.innerText = "Prix en dollars: " + (parseInt(inputEuros.value) * 1.05).toFixed(2);
});

const buttonPlusUnEuro = document.createElement('button');
buttonPlusUnEuro.textContent = '+1€';
buttonPlusUnEuro.style.color = 'green';
buttonPlusUnEuro.addEventListener('click', function() {
  inputEuros.value = parseInt(inputEuros.value) + 1;
    const prixEnDollars = parseInt(inputEuros.value) * 1.05;
  if(prixEnDollars > 100){
    labelDollars.style.color = 'red';
  }
  else {
    labelDollars.style.color = 'black';
  }
  labelDollars.innerText = "Prix en dollars: " + parseInt(inputEuros.value) * 1.05;
});

buttons.appendChild(buttonMoinsUnEuro);
buttons.appendChild(buttonPlusUnEuro);

document.body.appendChild(buttons);