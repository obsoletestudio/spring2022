# 2nd Session

## Last week's Exercize

Corrections and such

## Chaotic Design, an introduction to randomness in generative art

### The random function

the [random() function documentation](https://p5js.org/reference/#/p5/random) on the p5.js reference

- evaluating the random() function in the console
- using the random() function
- making a randomly placed circle at every frame

### Updating Last weeks exercise with the use of the random() function

- random positioning of objects
- the noLoop() function (creating a still)
- the frameRate() function (creating a slow animation)

## A Practical Scenario : The Random Walker

### A simple Random Walker Algorithm
initialization of the random walker

random walker algorithm

- move randomly on x
- move randomly on y
- draw walker
- start again

### Coding a simple Random Walker

code-example-1.js

## Ideas to make the code better

We need to somehow check if the random walker is going out of the frame and either :
- put them back in the center of the sketch if he goes out of the frame

## Conditions and Statements

- using the if condition
- how many cases do we need to study ?

### In-Class Exercise 1 :

Adding a custom function to reset the random walker's position when it is out of bounds

code-example-2.js

### In-Class Exercise 2 :

Adding a custom function to wrap the random walker's position to opposite walls (Snake 2 Behavior from Nokia 3310 phone)

code-example-3.js

### In-Class Exercise 3 :

Adding a custom function to contain the random walker's position to the walls

code-example-3.js

### Extra Exercise :

Create a random path by adding a new line connected to the old one at every draw loop

- create a variable to store the current position (initialize at center of sketch)
- create a variable to store the next position (add random x and random y to the current position)
- draw a line from current position to next position
- update the current position to the next position
- update the next position (add random x and random y to itself)
- repeat last three steps
