# 1st Session

## What is Creative Coding

To create a program that is expressive in contrast to functional

## p5.js

### what is p5.js

> p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else! p5.js is free and open-source because we believe software, and the tools to learn it, should be accessible to everyone.

> Using the metaphor of a sketch, p5.js has a full set of drawing functionality. However, you’re not limited to your drawing canvas. You can think of your whole browser page as your sketch, including HTML5 objects for text, input, video, webcam, and sound.

### p5.js community

> We are a community of, and in solidarity with, people from every gender identity and expression, sexual orientation, race, ethnicity, language, neuro-type, size, disability, class, religion, culture, subculture, political opinion, age, skill level, occupation, and background. We acknowledge that not everyone has the time, financial means, or capacity to actively participate, but we recognize and encourage involvement of all kinds. We facilitate and foster access and empowerment. We are all learners.

### how to use p5.js

- the [p5.js website](https://p5js.org/) : the project's official website
- the [p5.js online editor](https://editor.p5js.org/) : an online tool to write and execute code
- the [p5.js documentation](https://p5js.org/reference/) : a reference for all existing functions

To have the ability to save sketches you will need to [create an account](https://editor.p5js.org/signup) on the p5.js website

## Basics

### The Online Editor Interface

- the sketch
- the preview
- the console

### Functions

- setup() and the draw()
- console.log()
- circle()

### Variables

- text
- numbers
- expressions

### Global Variables

- width and height
- mouseX and mouseY

## Drawing Some Shapes

- the coordinate system
- basic shapes : circles, lines, rectangles, ellipses
- placing shapes relative to width and height
- placing shapes relative to mouse position
- graphics : the stroke() and fill() functions
- colors : labels and hex codes

- Example 1 : Drawing a circle of radius 10 that follows the mouse position

`circle(mouseX, mouseY, 10);`

- Example 2 : Drawing a circle of radius 10 at the center of the sketch, whose radius varies depending on mouse x-position

`circle(width/2, height/2, mouseX);`

## Introduction to Interactive Design

### In-Class Exercise 1 :

code-example-1.js

### In-Class Exercise 2 :

code-example-2.js

### Correction of Exercize 2

- correcting things if needed
- factoring into two functions : drawSun() and drawEnvironment()

### Assignments for next week
Draw your own landscape from abstract shapes
- use different shape types : rect / circle / ellipse / line / triangle
- use different colors from a color palette
- use the width and height variable to position the objects
- make some of the objects interactive
