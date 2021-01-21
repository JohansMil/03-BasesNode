console.log('Inicio aplicacio.js');

//console.log('Inicio NODE multiplicar.js');
//console.log(module); // El module es un objeto GLOBAl disponible a lo largo de TODA la aplicacion
const colors = require('colors/safe');
const argv = require('./config/yargs').argv;

console.log(`Aargv._[0]: ${argv._[0]}`) 

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//let base = '5';//let argv2 = process.argv;//base = argv[2].split('=')[1];



let comando = argv._[0];

switch (comando){
	case 'listar':
		listarTabla(argv.base, argv.limite);
		break;
	case 'crear':
		crearArchivo(argv.base, argv.limite)
			.then(archivo => console.log(`Archivo creado: ${archivo}`, colors.green(archivo)) )
			.catch(err => console.log(err));
		break;

		default:
		console.log('Comando NO reconocido');

		break;
}