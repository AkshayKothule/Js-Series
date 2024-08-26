# projects releted to Dom

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code 

## Project 1 Solution

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
## Project 2 Solution

``` javascript
const form = document.querySelector('form');

//this usecase will give you empty
// const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault(); //default action top karo

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a vaild height ${height}`;
  }else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a vaild weight${weight}`;
  }else{
    const BMI=(weight /((height * height)/10000)).toFixed(2);
    // show the result
    results.innerHTML=`<span>${BMI}</span>`
  }
});

```
## project 3 Solution code

```javascript
const clock = document.getElementById('clock');
// const clock=document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleDateString());
  clock.innerHTML = date.toLocaleDateString();
}, 1000);
```