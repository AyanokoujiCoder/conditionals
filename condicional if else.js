// Queremos dar acceso a Pedro a nuestro sistema si es que sabemos que es de el
// let usuario = 'Pedro';
// let usuario = 'Euclides';

// Ahora digamos que tenemos un administrador y queremos darle ciertos privilegios
// Con xavier seria no autorizado
// let admin = 'Xavier';
let admin = 'Emilia';
let usuario = admin;

// Si usuario es igual a pedro va a estar autorizado.
// Si ponemos otro nombre vemos que consola no se corrio porque no era Pedro entonces ponemos el "else"

// Tambien podemos utilizar operadores logicos, esto es para asegurarte que simplemente corras el código
// que quieres que corra y no des acceso a tu programa a personas que no deberian tener acceso ya que la seguridad
// de los datos son muy importantes.

// if (false || true) { remplazar linea 20 para ver el ejemplo }

if (usuario === 'Pedro') {
    console.log('Autorizado!');
} else if (usuario === 'Emilia') {
    console.log('Autorizado con privilegios!')
} else {
    console.log('No Autorizado!');
}

// Recuerda que primero ira "if", despues los "else if" que podamos utilizar
// las cuantas veces queremos y por ultimo ira "else".