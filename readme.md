# Corso Website

Demo Link: &ensp; **https://corso-training.onrender.com**

Bootstrap website for training courses, workshops, seminars from the [Bootstrap 5 From Scratch ](https://www.udemy.com/course/bootstrap-from-scratch/?kw=bootstrap&src=sac&couponCode=LETSLEARNNOW) `Traversy Media` Udemy Course.

It has a mixed design with both light and dark colors and a modern look.

<img src="./src/assets/images/screenshot.png" />

## Features

- Modern layout with custom colors/styles/backgrounds
- Responsive design
- Sticky navbar with style changes on scroll
- Carousel image slider
- Register & email subscribe forms
- Font Awesome icons

## Usage

This website is built using [Webpack](https://webpack.js.org/) with [Bootstrap](https://getbootstrap.com/) and [Sass](https://sass-lang.com/). It uses [Font Awesome](https://fontawesome.com/) for icons.

In order to customize this website, you need to install [Node.js](https://nodejs.org/en/). Then, clone this repository and run:

```bash
npm install
```

This will install Webpack, Bootstrap, Sass and Font Awesome. To build your CSS files run:

```bash
npm run build
```

Build files will go into the `dist/` folder.

To watch your Sass files for changes, run:

```bash
npm run dev
```

You can add Bootstrap variables to the `bootstrap.scss` file. You can look at the file `node_modules/bootstrap/dist/scss/_variables.scss` for a list of all the variables. Do NOT edit the `variables.scss` file directly, as it will be overwritten when you update Bootstrap.

To add your own custom styles, use the `styles.scss` file.
