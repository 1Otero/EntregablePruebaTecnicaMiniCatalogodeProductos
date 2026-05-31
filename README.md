# MiniCatalogoDeProductos

# Desarrollador
Ivan Otero

# Instrucciones de uso
npm i (Se encarga de instalar los paquetes que necesitamos para que el proyecto corra correctamente)
npm start (Encargado de iniciar el servidor de angular)

# Respuesta preguntas teoricas 

1. ¿Cuál es la forma recomendada de comunicar un componente hijo con su componente padre en Angular?
B) Mediante el decorador @Output() y un EventEmitter.

2. ¿Para qué sirve el Pipe async en Angular?
C) Para suscribirse automáticamente a un Observable dentro del HTML y liberar la memoria al destruir el componente.

3. ¿Qué comando de Angular CLI utilizas para generar un nuevo servicio llamado 'auth'?
C) ng g s auth

4. ¿Cuál es la diferencia principal entre *ngIf y la propiedad [hidden]?
B) *ngIf elimina o inserta el elemento en el DOM; [hidden] solo cambia la propiedad CSS display a none.

5. ¿Qué directiva estructural utilizarías para renderizar una lista de elementos en base a un arreglo de objetos?
C) *ngFor (o la nueva sintaxis @for)

6. ¿Qué módulo de Angular se debe importar para poder realizar peticiones HTTP (como GET o POST)?
B) HttpClientModule (o usar provideHttpClient() en configuraciones Standalone)

7. ¿Cuál es el ciclo de vida (Lifecycle Hook) ideal para realizar la primera petición HTTP al cargar un componente?
C) ngOnInit

8. ¿Para qué sirve el archivo app-routing.module.ts (o la configuración de rutas)?
B) Para definir la navegación entre las diferentes vistas o componentes según la URL.

9. En la programación reactiva con RxJS en Angular, ¿qué función cumple un Observable?
B) Representa una colección de eventos o datos futuros que se pueden escuchar a lo largo del tiempo.

10. ¿Qué significa que un componente sea "Standalone" en las versiones recientes de Angular?
C) Que puede gestionarse de forma independiente sin necesidad de estar declarado en un NgModule.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
