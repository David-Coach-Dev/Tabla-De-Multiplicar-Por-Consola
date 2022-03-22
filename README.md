<h1 align="center">Tabla De Multiplicar Por Consola App</h1>
<p align="center"> 
  Esta es una aplicación para generar archivos de tablas de multiplicar en Node Js
</p>
<h1> </h1>
<h2 align="center">Librerias</h2>
<p align="center"> 
  <a href="https://nodejs.org/es/" target="_blank" rel="noreferrer">
  <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js" width="50" height="50"/>
  Node.js</a>
  <br>
  <br>
  <a href="https://www.npmjs.com/package/colors" target="_blank" rel="noreferrer"> 
  <img src="https://raw.githubusercontent.com/Marak/colors.js/master/screenshots/colors.png" alt="cplusplus" width="50" height="50"/> 
  Colors.js</a>
  <br>
  <br>
  <a href="https://www.npmjs.com/package/yargs" target="_blank" rel="noreferrer"> 
  <img src="https://raw.githubusercontent.com/yargs/yargs/main/yargs-logo.png" alt="cplusplus" width="50" height="50"/> 
  Yargs</a>
  <br>
</p>
<h1> </h1>
<h2 align="center">Ejecutar este comando</h2>
<p align="center"> 
  <code>
    npm install
  </code>
</p>
<h1> </h1>
<h2 align="center">Comando de La App</h2>
<p align="center">
  <code>

    Commands:
        app listar  Imprime en consola la tabla de multiplicar
        app crear   Genera un archivo con la tabla de multiplicar

    Options:
        --version  Show version number                                       [boolean]
        --help     Show help                                                 [boolean]
        --base, -b    Base de la tabla                                      [required]
        --limite, -l  Limite de la tabla                                 [default: 10]

  </code>
  <h2 align="center">Crear Archivo</h2>
  <code>

    node app crear -b5 l-10

    Archivo creado:  tabla-5-al-10.txt

  </code>
  <h2 align="center">Listar tabla en consola</h2>
  <code>

    node app listar -b5 l-10

    =========================
    = Tablas de Multiplicar =
    =========================
    =     Tabla del # 5     =
    =========================
    5  *1  =  5
    5*  2  =  10
    5  *3  =  15
    5*  4  =  20
    5  *5  =  25
    5*  6  =  30
    5  *7  =  35
    5*  8  =  40
    5  *9  =  45
    5*  10  =  50
    =========================

  
  </code>
</p>
