
function calcularGorjeta(calculo) {
  calculo.preventDefault();
  var bill = parseFloat(document.getElementById('bill').value);
  var serviceQual = parseFloat(document.getElementById('serviceQual').value);
  var people = parseInt(document.getElementById('people').value);

  if (people == '' || people <= 1) {
      people = 1;
      document.getElementById('each').style.display = "none";
  } else {
      document.getElementById('each').style.display = "block";
  }

  let total = (bill * serviceQual) / people;
  total = total.toFixed(2);
  document.getElementById('tip').innerHTML = 'R$ ' + total;
  document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('conta').onsubmit = calcularGorjeta;


