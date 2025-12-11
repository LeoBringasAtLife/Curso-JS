const txtop1 = document.getElementById('op1');
const txtoperacion = document.getElementById('operacion');
const txtop2 = document.getElementById('op2');
const btncalcular = document.getElementById('calcular');
const pResultado = document.getElementById('resultado');

btncalcular.addEventListener('click', calcular);

function calcular() {
  const operacion = txtoperacion.value.trim();
  const op1 = Number(txtop1.value);
  const op2 = Number(txtop2.value);

  const operadoresValidos = ['+', '-', '*', '/'];

  // Validaciones
  if (!operadoresValidos.includes(operacion)) {
    return mostrarError('Operador inválido');
  }

  if (isNaN(op1) || isNaN(op2)) {
    return mostrarError('Ingresa números válidos');
  }

  // Calculadora usando un objeto en vez de switch
  const operaciones = {
    '+': op1 + op2,
    '-': op1 - op2,
    '*': op1 * op2,
    '/': op2 !== 0 ? op1 / op2 : 'Error: división por cero'
  };

  mostrarResultado(operaciones[operacion]);
}

// Helpers más limpios
function mostrarResultado(resultado) {
  pResultado.style.color = 'black';
  pResultado.innerText = resultado;
}

function mostrarError(msg) {
  pResultado.style.color = 'red';
  pResultado.innerText = msg;
}
