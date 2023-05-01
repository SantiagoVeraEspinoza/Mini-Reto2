# Mini-Reto2

Esta aplicación web integra una base de datos en una aplicación utilizando Strapi y Remix en carpetas separadas. La aplicación está alojada en un VPS de DigitalOcean que ejecuta Ubuntu, y está automatizada con CI/CD de GitHub Actions.

## Requisitos previos

Antes de continuar, asegúrate de tener los siguientes requisitos previos instalados:

- Node.js (versión 14)
- NPM (versión 6 o superior)
- Git

## Instalación

1. Clona este repositorio:

```
git clone https://github.com/tu-usuario/tu-repositorio.git
```

2. Entra al directorio del proyecto:

```
cd Mini-Reto2
```

3. Instala nvm para acceder a la version 14 de node:

Instalar nvm.
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

Reejecutar .bashrc.
```
source ~/.bashrc
```

Instalar la version 14 de node.
```
nvm install 14 
```

Cambiar a node 14
```
nvm use 14
```

4. Instala las dependencias de Strapi y Remix para las carpetas correspondientes:

```
cd ../MyShop
npm i
cd ../Myshop-remix
npm i
```

5. Crea un archivo `.env` en la carpeta `api` con las credenciales de la base de datos. Asegúrate de que el archivo contenga las variables indicadas para el proyecto.

6. Inicia Strapi y Remix en carpetas separadas en diferentes terminales:

Strapi
```
npm start
```

Remix
```
npm run dev
```

## Uso

La aplicación web estará disponible en la dirección `http://134.122.30.8:3000`. Desde allí, podrás interactuar con la aplicación utilizando la interfaz de usuario.

## Hosting

Esta aplicación está alojada en un VPS de DigitalOcean que ejecuta Ubuntu. Además, el dominio de la app esta gestionado por DuckDNS.

## CI/CD

Esta aplicación está automatizada con CI/CD de GitHub Actions. El archivo de configuración de CI/CD está ubicado en `.github/workflows/deploy.yml`. Este archivo contiene una serie de pasos que se ejecutan cada vez que se hace un push a la rama `main` del repositorio.

Los pasos de CI/CD incluyen la instalación de las dependencias, la construcción de la aplicación, y la carga de la aplicación al VPS de DigitalOcean utilizando SSH.

## Contribuir

Si deseas contribuir a esta aplicación, haz un fork del repositorio y crea una rama para tus cambios. Cuando hayas terminado, haz un pull request para que podamos revisar tus cambios y fusionarlos en la rama principal.


