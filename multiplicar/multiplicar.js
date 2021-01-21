const fs = require('fs');

var colors = require('colors');


let listarTabla = (base, limite=10) => {
					console.log('======================= '.trap);
					console.log(`== Tabla de ${base} a ${limite} ==`.rainbow);
					console.log('======================= '.green, `\n`, `-\n`, `-\n`);
				for (let i = 1; i <= limite; i++) {

					console.log(`${i}`.red,' x '.inverse, `${base}`.white,` = ${i*base}`.yellow,`\n\n`);

				}
}




let crearArchivo = (base, limite = 10) => {
	return new Promise ((resolve, reject) => {

		if (!Number(base)) {
			reject('Valor introducido en base No es un número');
			return;
		}

			let data = '';

				for (let i = 1; i <= limite; i++) {
					data += `${base} * ${i} = ${base*i}\n`;
				}

				fs.writeFile(`tablas/aplicacio${base}al${limite}.txt`, data, (err) => {
				  if (err) 
				  		reject(err)
				  	else
				  		resolve(`aplicacio${base}al${limite}.txt`);
				});
	} )
}


module.exports = {
	crearArchivo,
	listarTabla
}
