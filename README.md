**What is Angular**
Angular is a TypeScript-based free and open-source web application framework lead by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS. 

**Concepts**
The architecture of an Angular application relies on certain fundamental concepts. The basic building blocks of the Angular framework are Angular components that are organized into NgModules. NgModules collect related code into functional sets; an Angular application is defined by a set of NgModules. An application always has at least a root module that enables bootstrapping, and typically has many more feature modules.

    Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data
    Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.

**Modules**
Angular NgModules differ from and complement JavaScript (ES2015) modules. An NgModule declares a compilation context for a set of components that is dedicated to an application domain, a workflow, or a closely related set of capabilities. An NgModule can associate its components with related code, such as services, to form functional units.

Every Angular application has a root module, conventionally named AppModule, which provides the bootstrap mechanism that launches the application. An application typically contains many functional modules.

Like JavaScript modules, NgModules can import functionality from other NgModules, and allow their own functionality to be exported and used by other NgModules. For example, to use the router service in your app, you import the Router NgModule.

Organizing your code into distinct functional modules helps in managing development of complex applications, and in designing for reusability. In addition, this technique lets you take advantage of lazy-loading —that is, loading modules on demand— to minimize the amount of code that needs to be loaded at startup.

**components**
Every Angular application has at least one component, the root component that connects a component hierarchy with the page document object model (DOM). Each component defines a class that contains application data and logic, and is associated with an HTML template that defines a view to be displayed in a target environment.

The @Component() decorator identifies the class immediately below it as a component, and provides the template and related component-specific metadata.

**How They Are Related**
Modules, components and services are classes that use decorators. These decorators mark their type and provide metadata that tells Angular how to use them.

    The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.

    The metadata for a service class provides the information Angular needs to make it available to components through dependency injection (DI)

An application's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.

**split the page into multiple components**
Right-click on the location and select Split. Or you can click on the Split button right above the timeline.

**group the components into multiple modules**
In order to use a component from another module, you need to do two simple tasks:

    1.Export the component in the other module.
    2.Import the other module, into the current module.
    
**describe the end result as a file structure in the angular project**
Inside the src folder, the app folder contains your project's logic and data. Angular components, templates, and styles go here. src/app/ files. Purpose. app/app.component.ts.
