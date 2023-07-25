# RandomPosts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

This application gets a list of 100 posts from https://jsonplaceholder.typicode.com/posts and render them in squares of 10 * 10.

The app is deployed here using Netlify: https://clinquant-florentine-9446d8.netlify.app/

Highlights:

1) Angular standalone concepts are used.
2) No Angular router added.
3) Semantic HTML tags used.
4) New Angular 16 features used (e.g., required inputs).
5) By default, the title is displayed in the square. 
6) On click of the title in the square, it is toggled with the ID of the corresponding post.
7) On click of the ID again, it is toggled with the corresponding title.
8) Unit tests and E2E tests are covered!
9) Basics of Accessibility principles kept in mind.

## Development server

1) Install the dependencies using `npm i`.
2) Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run cypress:open` to execute the end-to-end tests via Cypress.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
