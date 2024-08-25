# projects releted to Dom

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code 

## Project 1

```javascript 
console.log("Akshay");

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
  const colorChange=e.target.id;
    switch(colorChange){
       case "grey":
         body.style.backgroundColor=e.target.id;
         break;
      case "white":
        body.style.backgroundColor=e.target.id;
      case "blue":
          body.style.backgroundColor=e.target.id;
      case "yellow":
            body.style.backgroundColor=e.target.id;
    }

  });
});


```