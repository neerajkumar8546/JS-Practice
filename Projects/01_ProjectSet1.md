# Project related to Dom

## Project Link

[Click here](https://github.com/neerajkumar8546/JS-Practice)

### Solution Code

## Project 1

```javascript

const button = document.querySelectorAll('.button');

button.forEach(
  (
    button //console.log(button)
  ) =>
    button.addEventListener('click', function (e) {
      //console.log(e);

      if (e.target.id === 'Gray') {
        document.body.style.backgroundColor = 'gray';
        const ChangeLiColor = document.querySelector('.Gray');
        ChangeLiColor.style.color = 'red';
        console.log(ChangeLiColor);
        //ChangeLiColor.style.color = 'red';
      }
      if (e.target.id === 'Navyblue') {
        console.log(e.target);
        document.body.style.backgroundColor = 'Blue';
      }
      if (e.target.id === 'Green') {
        console.log(e.target);
        document.body.style.backgroundColor = 'Green';
      }
      if (e.target.id === 'black') {
        console.log(e.target);
        document.body.style.backgroundColor = 'Black';
        document.body.style.color = 'white';
      }
    })
);

```


## Project 2 BMI Calculator

```javascript

const form = document.querySelector('form');
//console.log(form);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const Weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('.result');

  const lilistmain = document.querySelectorAll('li');
  //console.log(`Height: ${height} && Weight: ${Weight}`);

  if (isNaN(height) || isNaN(Weight) || height < 0 || Weight < 0) {
    result.innerHTML = `Please enter valid weight and height values.`;
    return;
  } else {
    //Convert height to meters
    const heightInMeters = height / 100;
    // Calculate BMI
    const bmi = Weight / (heightInMeters * heightInMeters);

    result.textContent = `BMI Calculate : ${bmi.toFixed(1)}`;

    if (bmi < 18.6) {
      const lilist = document.querySelectorAll('li:nth-child(1)');
      lilistmain.forEach(function (item) {
        item.style.color = 'black';
      });
      lilist.forEach(function (item) {
        item.style.color = 'red';
      });
    } else if (bmi >= 18.6 && bmi < 24.9) {
      const lilist = document.querySelectorAll('li:nth-child(2)');
      lilistmain.forEach(function (item) {
        item.style.color = 'black';
      });
      lilist.forEach(function (item) {
        item.style.color = 'red';
      });
    } else {
      const lilist = document.querySelectorAll('li:nth-child(3)');
      lilistmain.forEach(function (item) {
        item.style.color = 'black';
      });
      lilist.forEach(function (item) {
        item.style.color = 'red';
      });
    }
  }
});

```
