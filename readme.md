### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

-  Answer:- The difference is

            getElementByID() find element by element's id

            getElementsByClassName() find all element that matches the given class (returns HTMLCollection)

            querySelector() find the first matching element using CSS selectors

           querySelectorAll() find the all matching elements using CSS selectors (returns NodeList)

---


### 2.How do you create and insert a new element into the DOM? 

- Answer:- I do create new element by using document.createElement("tagName") and insert it to DOM by using appendChild()
            Example:- const newDiv = document.createElement("div");
            document.getElementById('id of parent element').appendChild(newDiv);

---

### 3.What is Event Bubbling and how does it work? 

- Answer:- It means , when an event happens on a element it first runs the event handler on that elemen, and then it bubbles up to it's parent , then to parent's parent untill it reaches to the root .
---



### 4.What is Event Delegation in JavaScript? Why is it useful? 

- Answer:- event Delegation is a technique in JS where we add a single event listener on parent elements to handle events on child elements, it is useful beacuse Delegation works for dynamically added elements . 

---

### 5.What is the difference between preventDefault() and stopPropagation() methods?

- Answer:- preventDefault() stop default action of an element and stopPropagation() stop event bubbling

---
