# Getting started with Angular 2

[HackJam Angular 2](hackjam.hackages.io)


The goal of this second HackJam will  be to learn more about:
- Architecture
- Relationship betwen parent and child components
- Use service for passing data
- Add Navigation and learn about Angular routing
- [Property Binding] (https://angular.io/docs/ts/latest/guide/cheatsheet.html):

You can find the [repo on Github](https://github.com/hackages/hackjam.angular.git)

Clone it: `git clone https://github.com/hackages/hackjam.angular.git`

`cd routing-architecture-angular2`and run `npm start`

!oops

Just focus on the `app.template.html` and learn more about property binding!

This application doesn't work :(

## Important: Fix the app before implementing new feature

## TODO: Features to implement in part 2
- Architecture: split the app into small components; Use the components folder for spliting your app:
  Now you'll have to split `app.template.html` to match this architecture:
    - book component
    - header component
    - menu component
    - sidebar component
- Using pipe to filter books and categories
- Create a service to manage your data
    - AppService class with 2 methods: getCategories, getBooks
    - Introducting lifecycle hooks
        - Use ngOnInit to bootstrap your data
- Add navigation (when you reach this level just pause and wait)


