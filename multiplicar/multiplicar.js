// requireds
const fs = require('fs');
const colors = require('colors');
//Lista la tabla en pantalla
let listarTabla = (base, limite = 10, hasta = 10) =>
{
    console.log('========================='.red);
    console.log(`${"= ".green}${"Tablas de Multiplicar".green}${" =".green}`);
    console.log('========================='.green);
    if(base < 10)
    {
        console.log(`${"=     ".green}${"Tabla del # ".red}${`${base}`.red}${"     =".green}`);
    }
    else if(base < 100)
    {
        console.log(`${"=    ".green}${"Tabla del # ".red}${`${base}`.red}${"    =".green}`);
    }
    else if(base < 1000)
    {
        console.log(`${"=     ".green}${"Tabla del # ".red}${`${base}`.red}${"    =".green}`);
    }
    else if(base < 10000)
    {
        console.log(`${"=    ".green}${"Tabla del # ".red}${`${base}`.red}${"   =".green}`);
    }
    else if(base < 100000)
    {
        console.log(`${"=   ".green}${"Tabla del # ".red}${`${base}`.red}${"   =".green}`);
    }
    else
    {
        console.log(`${"=  ".green}${"Tabla del # ".red}${`${base}`.red}${"   =".green}`);
    }
    console.log('========================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(` ${base} ${" * ".red} ${ i } ${" = ".red} ${ base * i }`)
    }
    console.log('========================='.green);
}
//Crear la tabla en archivo
let crearArchivo = (base, limite = 10) =>
{
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${ limite } no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });
    });
}
module.exports = {
    crearArchivo,
    listarTabla
}