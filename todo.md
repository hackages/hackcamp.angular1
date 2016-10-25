HackCamp Day 2: Getting it right with Angular 1

### Core concepts in Angular
- Bootstrapping
- Module
- Controller
- Scope, template syntax and bindings
- Component
- Directive
- Routing
- Service
- Forms
- Filters

### Build a simple application with Angular1

#### Controllers in Angular
MenuController
- Should contain a property 'categories' that contains the list of categories from the mocks folder
- Should have a property `changeCategory`, which is a function that receives the selected category as argument
- `changeCategory` should accept one argument: the selected category
- `changeCategory` should assign a new list of categories while changing the selected category
- Should dynamically change the selected class to 'selected' when the its category is selected
- `changeCategory` should emit an event `category_changed` with the value of the selected category

NavController
- Should have a property `title` with the value 'Bookstore by Hackages'

BooksController
- Should have a property `books` that contains the list of books from the mock folder
- When the category changes, the list of books should update
- When the sidebar open, the class `filter-is-visible` should be applied to the section that contains the books: `class="gallery filter-is-visible"`

SideBarController
- Should contain a property 'navClosed' of type boolean with 'true' as default value
- Should contain a property 'toggleSideBar' of type function which switch the value of 'navClosed' to opposite value
- The function toggleSidebar should emit an event 'sidebar_open'
- Should contain a property `seach` of type function with will filter books by title and category

#### Services in Angular
AppService
- Should contain 2 properties:
  - `getBooks`, a function that return the list of books
  - `getCategories`, a function that return the list of categories

> All operations in the service should be asynchronous
- Use the service where needed in your application

#### Components in Angular

Let's turn our application into small and more maintainable pieces.

> Let's discuss first which components are we going to build

- Build these components and make sure your application is still working

#### Directives in Angular

#### Pipe or Filter in Angular

#### Routing in Angular

#### Forms in Angular

#### Testing in Angular
