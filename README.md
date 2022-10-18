# Práctica Sequelize - Express - React

## EMPECEMOS!

- 1 Ejecutar comando npm i posicionado en la carpeta front.

- 2 Ejecutar comando npm i posicionado en la carpeta back.

- 3 Crear la base de datos correspondiente. Leer en el archivo index.js de la db el nombre de la base de datos.

- 4 Ejecutar comando npm run build para correr el webpack en el front. Recuerden que webpack va a estar escuchando y compilando los cambios realizados en el front.

- 5 Ejecutar comando npm start para levantar el servidor en el back.

Listo! El servidor debería estar funcionando y deberías poder ver el render en http://localhost:5000/

## CONSIGNAS

El objetivo es  que podamos cargar datos de usuarios y, luego, cargar los datos de los autos **pertenecientes** a cada usuario, y poder visualizarlos!
Para crear un usuario en la base de datos deberemos realizar un POST, desde el front hacia el back, con los datos correspondientes, utilizando la librería axios.
Lo mismo sucederá con la creación del auto en nuestra base de datos.

La parte correspondiente al modelo, rutas y renderización de usuarios se las entregamos hecha! Ustedes deberán completar el funcionamiento del programa, realizando la parte de los autos.


## REPASEMOS LAS CARPETAS!

tenemos las carpetas front y back, dentro de nuestra carpeta back tenemos el archivo server (nuestra configuracion principal de backend), carpeta routes (con las rutas de usuarios ya hechas), la carpeta public (esta no la vamos tocar pero es la que vamos a usar para que el front se comunique con el back) y por ultimo las carpetas db y models donde esta la configuracion de la db y lo modelos que vamos a usar (hasta ahora solo el user).

dentro de la carpeta front encontramos la carpeta src con su index (que es donde se va a renderizar nuestra pagina), las carpetas commons y componentes muestran formulario para crear un nuevo usuario, listar todos los usuarios y ver un usuario en particular 


## CARS (SEQUELIZE)

- antes, testiemos que la creación de usuarios funcione correctamente.
- Crea el modelo de sequelize para la creación de autos, el modelo puede llamarse Car o Auto, lo que prefieran. Deberá contener:
   a. Marca
   b. Modelo
   c. Año
   d. Precio
   Tener en cuenta que cada vez que carguemos un auto, deberemos elegir quién será su dueño. Por lo tanto, al guardarse en la base de datos, debemos declarar cuál es la relación entre el modelo Car o Auto y el modelo User.
   **¿Quién pertenece a quién?**
   **Investigar sobre los metodos de asociación:**
   https://medium.com/@julianne.marik/sequelize-associations-magic-methods-c72008db91c9

# CARS (EXPRESS)   
- Crear en el **back** la ruta para poder crear un auto en la base de datos. Realizar un pedido POST a través de Postman para chequear que esté funcionando correctamente. Nos debería devolver el auto creado en la database.
   PISTA: aquí deberemos asignar al usuario que es dueño del auto. Pueden encontrar el método necesario para hacerlo en el link que pasamos anteriormente.
- Crear  la ruta para buscar todos los autos.
- Crear la ruta correspondiente para buscar un auto en particular. Aca ademas vamos a necesitar que nos devuelva su dueño, investiga con que herramienta de sequelize podemos hacer esta consulta

## CARS (REACT)
-Crear en el **front** un componente en la carpeta commons que realice una solicitud al servidor para traer todos los autos y renderizarlos. Recuerda llamar a este componente en app para que puedas verlo!
-Crear un componente que solicite un auto en particular y lo muestre. Tener en cuenta que, entre los datos del auto, deberá mostrarse quién es el dueño.
- Crear  un componente para poder realizar la creación de un auto. Este deberá tener un componente con el formulario adecuado. El formulario deberá tener una lista desplegable que permita seleccionar el usuario que es dueño del auto que estamos cargando.
   **Prestar atención especialmente a qué dato debemos enviar al back para hacer la relación entre auto y usuario**
- En el componente SingleUser deberán renderizar los autos pertenecientes al usuario que se está viendo en pantalla. Esta parte la realizarán sin tanta guía. Tengan en cuenta de dónde traerán los datos para pasarselos a SingleUser.


## CARS (EXTRA CREDIT)
# MODULARIZAR =>
revisar en tus componentes de react y analizar si tenes que partes de tu codigo podrian volverse un nuevo compenente para hacer mas facil la lectura del código y que este mejor optimizado
# rutas de front
investigando react router poder hacer que cada componente tenga una ruta de acceso particular y no este todo en tu home
# usando links
- En la vista de todos los autos, al hacer click en un auto debería redirigir a la vista de ese auto en particular.
- Desde la vista de un auto en particular, al hacer click en el dueño del auto, deberá redireccionar hacia la vista de ese usuario.
- Desde la vista de SingleUser al hacer click en alguno de los autos pertenecientes al usuario, deberá redireccionar hacia la vista de ese auto en particular.