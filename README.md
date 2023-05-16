# Introducción
**Zifris** es un proyecto de práctica que implementa tecnologías tales como:
- [React js](https://create-react-app.dev/)
- [Mui](https://mui.com/material-ui)

# 🏃 Pasos iniciales
## 👨‍💻 Instalar NODE JS
Dirigete a la pagina oficial de [NodeJS](https://nodejs.org/es/download), descarga e instala el instalador acorde a tu sistema operativo.

## ⚙️ Correr el proyecto en modo desarrollo
En una terminal dirigete al root del proyecto (donde esta localizado este archivo) por lo regular basta con `cd /home/<your_user>/zifris/README.md` pero esto depende de dónde se localice el proyecto.
Luego ejecuta los siguientes comandos:

```
npm i
npm start
```

Este modo sirve para correr el proyecto en modo desarrollo para agregar nuevas caracteristicas y debbuguear las funcionalidades. También es importante mencionar que el comando `npm i` solo se debe correr una vez, ya que este comando sirve para instalar las dependencias necesarias para inicializar correctamente el proyecto, generando una carpeta **node_modules**.

## ⚙️ Compilar el proyecto en modo productivo
Para generar este proyecto con un mejor rendimiento y ligero, optimo para ambientes productivos. Basta con correr el comando en la terminal `npm run build`, esto generará una carpeta llamada **build** con el proyecto.

## 🏃 Correr el proyecto en modo productivo
Para poder correr el proyecto a través de la carpeta **build** hay que instalar un servidor de archivos estaticos, en este caso se puede instalar **serve** mediante el comando `npm install -g serve`, una vez instalado basta con ejecutar `serve -s build` y ya tendremos el proyecto productivo corriendo.

