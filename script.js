const redButton = document.getElementById('red');
const greenButton = document.getElementById('green');
const coralButton = document.getElementById('coral');
const blueButton = document.getElementById('blue');
const body = document.body;
const innerMask = document.getElementById('inner-mask');
const fields =  document.querySelectorAll('.point');
redButton.addEventListener('click', () => {
  body.style.backgroundColor = 'pink';
  innerMask.style.backgroundColor = 'pink';
  fields.forEach(point => point.style.backgroundColor = 'red');
});
greenButton.addEventListener('click', () => {
  body.style.backgroundColor = 'lightgreen';
  innerMask.style.backgroundColor = 'lightgreen';
  fields.forEach(point => point.style.backgroundColor = 'green');
});
coralButton.addEventListener('click', () => {
  body.style.backgroundColor = 'lightcoral';
  innerMask.style.backgroundColor = 'lightcoral';
  fields.forEach(point => point.style.backgroundColor = 'coral');
});
blueButton.addEventListener('click', () => {
  body.style.backgroundColor = 'lightblue';
  innerMask.style.backgroundColor = 'lightblue';
  fields.forEach(point => point.style.backgroundColor = 'blue');
});