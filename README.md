# Proyecto: ScoreShareHub API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descripción

ScoreShareHub es un repositorio inicial de TypeScript para el framework [Nest](https://github.com/nestjs/nest).

## Instalación

```bash
$ npm install
```

## Ejecutar la aplicación

```bash
# modo desarrollo
$ npm run start

# modo observador
$ npm run start:dev

# modo producción
$ npm run start:prod
```

## Pruebas

```bash
# pruebas unitarias
$ npm run test

# pruebas e2e
$ npm run test:e2e

# cobertura de pruebas
$ npm run test:cov
```

## Convenciones de Commits

Utiliza la siguiente nomenclatura en tus commits:

- **feat:** Implementa nueva funcionalidad.
- **fix:** Resuelve problemas o errores.
- **chore:** Tareas de mantenimiento y mejoras en el proceso de desarrollo.
- **docs:** Actualizaciones o adiciones a la documentación.
- **style:** Cambios que no afectan el significado del código (formato, punto y coma, etc.).
- **refactor:** Cambios en el código que no arreglan errores ni añaden nuevas características.
- **test:** Añade o mejora pruebas.

Ejemplos:

- "feat: implementar nuevo endpoint de usuarios"
- "fix: resolver problemas con la autenticación"

## Funcionalidades y Reglas

### Autenticación de Usuarios

La API debe gestionar la autenticación de usuarios, incluyendo registro, inicio de sesión y recuperación de contraseñas.

### Subida de Partituras

- Cada usuario registrado puede subir partituras.
- La información asociada a las partituras debe incluir el autor, la fecha, los instrumentos, el nombre de la partitura y la dificultad.
- Se utilizará la API de GitHub como almacenamiento de archivos.

### Visualización y Descarga de Partituras

- Los usuarios pueden ver todas las partituras subidas, buscarlas y descargarlas.
- Filtrado por categorías como música clásica, anime, fantasía, videojuegos, rock, pop, etc.

### Reportes y Denuncias

- Los usuarios pueden reportar o denunciar partituras.
- Si una partitura recibe un cierto número de reportes, se debe considerar su eliminación o bloqueo de acceso.

## Soporte

ScoreShareHub es un proyecto de código abierto con licencia MIT. Puede crecer gracias a los patrocinadores y el respaldo de personas increíbles. Si deseas unirte a ellos, [lee más aquí](https://docs.nestjs.com/support).

## Mantente en contacto

- Autor - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Sitio web - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## Licencia

ScoreShareHub tiene licencia [MIT](LICENSE).