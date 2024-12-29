let admin = 'Pedro';
let usuario = admin;

// Es muy parecido al if else pero tiene otra forma de escribir que es distinta.

// Esto va actuar como cascada, es decir en este caso como no tengo Break va a correr 
// este codigo y tambien va a correr el siguiente codigo y vemos que pedro ha sido
// autorizado y tambien autorizado con privilegios 

switch (usuario) {
    case 'Pedro':
        console.log('Autorizado')
        // break;
    case 'Emilia':
        console.log('Autorizado con privilegios');
        break;
    // Se aplica para todos los casos que no cayeron ni en el primero
    // ni en el sengundo ni en el numero de obsiones que tengamos.
    default:
        console.log('No Autorizado');
}