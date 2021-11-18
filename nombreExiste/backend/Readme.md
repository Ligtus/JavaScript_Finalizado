
# Enunciado

> Crea una aplicación en el lado del servidor con **NodejS / express** que tenga el siguiente endpoint:
> - /existe/**XXXX**
> - donde **XXXX** será un nombre de una persona
> Nuestra tarea será consultar un excel (csv) que contendrá una lista de nombres de personas españolas,
> y determinar si el nombre buscado está en la lista.
>
> Lista disponible en el siguiente repositorio: [marcboquet](https://github.com/marcboquet/spanish-names)
>
> Para leer el fichero utilizaremos la librería [**csv-parser**](https://www.npmjs.com/package/csv-parser)

# Resultado:

En este directorio se encuentra todo el código necesario para los requisitos superiores. Una vez iniciado el servidor con **NodeJS**, se dispone de los siguientes endpoints en el puerto 4000:
- /existe/**XXXX**, donde **XXXX** es el nombre que se quiere comprobar; esta ruta devolverá una respuesta _true_ o _false_.
- /nombres, en donde se devolverán todos los nombres de la lista.
