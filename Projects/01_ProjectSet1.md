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
