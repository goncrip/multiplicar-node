// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    let data = '';

    for (let index = 1; index <= limite; index++) {
        data += `${base} * ${index} = ` + base * index + '\n';
    }

    console.log(data.red);
}

let crearArchivo = (base, limite = 10) => {
    let data = '';

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número');
            return;
        }

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ` + base * index + '\n';

        }

        fs.writeFile(`tablas/table-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);

        });
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}