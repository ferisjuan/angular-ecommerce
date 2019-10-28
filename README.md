# ElBaraton

Este proyecto se generó con
[Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.

## Repositorio

Correr `git clone https://github.com/ferisjuan/el-baraton.git` para
sincronizar con el repositorio. git pull --allow-unrelated-histories

## Instalación

Correr `npm install`.

## Servidor de desarrollo (dev)

Correr `ng serve` para un servidor dev. Navegar a
`http://localhost:4200/`. archivo app será recargado si cambia alguno
de los archivos fuente.

## Pre compilado

Correr `ng build` para compilar el proyecto. Los archivos generados se
guardarán en el directorio `dist/`. Utilice el flag `--prod` para un
compilado para producción.

## Observaciones personales

El sistema de datos de entrada entrega el precio del producto como un string, como ejercicio es muy interesante pero en la práctica disminuye el rendimiento de la aplicación, lo más recomendable es entrega dicho dato como un número.

Apliqué un estilo visual sencillo, no utilicé librerías css como materialize o bootstrap.

Hice una aplicación SAP, el código está autoexplicado los comentarios fueron reducidos a los únicamente relevante y en lo posible traté de encapsular el código y hacer que cada función tuviera una sola responsabiliad.

En los requerimientos no es claro el funcionamiento del menú.

En los datos hay subniveles que tienen el mismo id que los productos así que opté por hacer que los productos se reflejaran únicamente al clickear el elemento final.
