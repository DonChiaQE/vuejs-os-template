# [OS Website Template for Vue.js](https://main-preview-site.netlify.app/)

| [Blueprint Theme](https://blueprint-template.netlify.app/) | [Windows Theme](https://windows-template.netlify.app/) | [MacOS Theme](https://macos-template.netlify.app/) |
| --------- | --------| ----- |
| <img width="1440" alt="Screenshot 2021-12-21 at 5 16 53 PM" src="https://user-images.githubusercontent.com/24926784/146904065-05513a29-261b-4f35-b952-5bde1599a35d.png"/> | <img width="1440" alt="Screenshot 2021-12-21 at 5 16 53 PM" src="https://user-images.githubusercontent.com/24926784/147592582-8caa82c1-1d01-400c-b34e-e5fef7fdfbaf.png"/> | <img width="1440" alt="Screenshot 2021-12-29 at 3 06 44 PM" src="https://user-images.githubusercontent.com/24926784/147636162-cc095413-a099-4b59-baf0-36467fbfee99.png"> |


## Table of contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies](#technologies)
4. [Pre-Requisites](#pre-requisites)
5. [Setup Instructions](#setup-instructions)
6. [Register Windows](#register-windows)

<a name="project-overview"></a>
## Project Overview
This project aims to create an interactive web OS template for Vue. Included in the template are all necessary logic for individual window components, navbars and app grids. Users are able to register new components (custom or otherwise) easily. 

<a name="features"></a>
## Features
- Interactable and Draggable Windows
- Built-in Navigation Bar (+ logic)
- Window Logic
- Themes (Blueprint, Windows, MacOS)

<a name="technologies"></a>
## Technologies
- Vue 2
- Vuex 
- InteractJS
- MomentJS

<a name="pre-requisites"></a>
## Pre-requisites
- Vue 2 
- CSS 
- Patience with CSS

<a name="setup-instruction"></a>
## Setup Instructions

1. Clone the project

```bash
$ git clone https://github.com/dhs17y2adonchia/vuejs-os-template.git
```


2. Make sure you have Vue.js installed 

[Official Documentation from Vue](https://vuejs.org/v2/guide/installation.html)


3. Cd into project folder and install packages + dependencies


```bash
$ cd vuejs-os-template && npm install
```

4. Serve project

```bash
$ npm run serve
```

<a name="register-windows"></a>
## Register Windows (slots method)
1. Head to /src/store/index.js 

2. Register a new window by pasting the following snippet within the windows state array

```js
{
     windowId: "UniqueWindowID", 
     windowState: "close",
     displayName: "Unique Window",
     windowComponent: 'window',
     windowContent: 'Placeholder',
     windowContentPadding: {
         top: null,
         right: null,
         bottom: null,
         left: null
     },
     position: "absolute",
     positionX: "10vw",
     positionY: "10vh",
     iconImage: "placeholder.png",
     altText: "Placeholder Icon",
     fullscreen: false
 },
 ```
 
3. Change 'windowId' to a unique window ID and 'displayName' to a preferred name for the window.

```js
windowId: "MyNewWindow"
```

```js
displayName: "New Window"
```

4. The content displayed within the window is registered to the 'Placeholder' component. Simply create a new content component under ```/src/components/views``` folder and replace 'windowContent' with the name of the new component created. 

```js
windowContent: 'MyNewWindowContent"
```

/src/components/views/MyNewWindowContent.vue
```js
<template>
  <p>this is my new window's content!</p>
</template>
```

5. Head over to /src/App.vue and import and register the new components under the <script> section.
  
```js
  import MyNewWindowContent from './components/views/MyNewWindowContent'
```
  
```js
  components: {
    ...,
    MyNewWindowContent
  }
```

6. Save all changed or created files and head to localhost to see changes.
