# ezwn-react-app

This package provides a suggestion of structure for a react project (js or native). The first part ("Project structure") describes a way of organizing your source code. You don't need to use the tools described in the second part to follow my structure recommendation, but they might make your life much easier !

## Project structure

The application is composed of functionnal entities called "modules". There are : core application modules, feature modules, shared modules and libraries.

In order to keep modules as decoupled as possible, they contain everything required to achieve a given goal.

They sould provide :

* a README.md file
* a manifest.js file

But they might also contain :

* data providers (contexts, reducers, action providers, ...)
* components
* data models
* services, including external api clients.

etc.

Modules are dispatched in the following folders :

### core

This part provides the requirement for running the application : a root component, a combined centralized data provider (reducer or context), a router, a module loader, ...

### features

Each folder in "features" contains a highest level feature of the application. Inside, there is :

* a manifest.js file exporting routes and navigation components to connect the feature to the core.
* a "roots" directory containing the hight level feature components.
* a "shared" directory with feature wide shared components, data contexts, ...
* integration mocks and tests.

A feature module should not directly refer to another feature module. Instead, they communicate through shared modules, libraries or application core (routing or accessing feature metadata).

### shared (application internally shared modules)

"shared" folder contains application wide shared modules. They usually are business modules providing data contexts or components used in the whole application.

Shared modules can refer to other shared modules (in a non-cyclic way) or to libraries, but not to core or features.

### lib (cross application shared modules)

Finally "lib" directory contains very generic modules (that could be used in several projects). They should be standalone projects, but for convinience it is often nice to be able to alter them directly while improving an application. Having them inside the project will also promote the good habit of making libraries.

Libraries can refer to other libraries, but only non-cyclically.

## Provided tools

### AppContext

A global context to share information about the modules of the application.

```html
<AppProvider features={features}>
</AppProvider>
```

It provides methods to query module informations :

* hasModule.

Here the setting button will only be displayed if the "MaintenanceFeature" exists :

```html
<TitleBar
    text='Bilan'
    left={hasModule("MaintenanceFeature") && <TitleBar.SettingsButton />}
/>
```

* findModuleById

### AppRoutes

A component using AppContext to export the routes of all the features :

```html
  <AppProvider features={features}>
    [...]
    <NativeRouter>
        <AppRoutes />
    </NativeRouter>
    [...]
  </AppProvider>
```

## The author

This project has been developed by Nicolas Enzweiler.

E-Mail address: [nicolas.enzweiler@gmail.com](mailto:nicolas.enzweiler@gmail.com)

Github : [https://github.com/ezwn](https://github.com/ezwn)
