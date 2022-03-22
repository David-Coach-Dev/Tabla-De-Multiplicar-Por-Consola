<h1 align="center">Tabla De Multiplicar Por Consola App</h1>
<p align="center"> 
  Esta es una aplicación para generar archivos de tablas de multiplicar en Node Js
</p>
<h1> </h1>
<h2 align="center">Herramientas</h2>
<p align="center"> 
  <a href="https://nodejs.org/es/" target="_blank" rel="node.js">
    <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js" width="50" height="50"/>Node.js</a><br>
  <a href="https://www.npmjs.com/package/colors" target="_blank" rel="color.js">
    <img src="https://raw.githubusercontent.com/Marak/colors.js/master/screenshots/colors.png" alt="cplusplus" width="50" height="50"/>Color.js</a><br>
  <a href="https://www.npmjs.com/package/yargs" target="_blank" rel="yargs">
    <img src="https://raw.githubusercontent.com/yargs/yargs/main/yargs-logo.png" alt="cplusplus" width="50" height="50"/>Yargs</a>
</p>
<h1> </h1>
<h2 align="center">Ejecutar este comando</h2>
<p align="center"> 
  
    npm install
  
</p>
<h1> </h1>
<p align="center">
  <h2 align="center">Gestor De Tareas App Video</h2>
    <img src="https://i.imgur.com/46CObZS.giff" alt="uuid" width="100%" height="100%"/>
</p>
<h1></h1>
<h2 align="center">Comandos de La App</h2>
<p align="center">
  
    Commands:
        app listar  Imprime en consola la tabla de multiplicar
        app crear   Genera un archivo con la tabla de multiplicar

    Options:
        --version  Show version number                                       [boolean]
        --help     Show help                                                 [boolean]
        --base, -b    Base de la tabla                                      [required]
        --limite, -l  Limite de la tabla                                 [default: 10]

  <h2 align="center">Crear Archivo</h2>

    node app crear -b5 l-10

    Archivo creado:  tabla-5-al-10.txt

  
  <h2 align="center">Listar tabla en consola</h2>

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

</p>
