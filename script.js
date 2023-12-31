let setOne;
let setTwo;
let setThree;
let weekOneSets;
let results = document.querySelector('.results');
let input = document.getElementById('maxInput'); 
let actualMax = document.getElementById('actualMax');
let button = document.querySelector('.submit');


// creates new div and populates results from calculations
const popResults = (week, x, y, z) => {
   let newResults = document.createElement('div');
   let firstSet = document.createElement('p');
   let secondSet = document.createElement('p');
   let thirdSet = document.createElement('p');
   let weekNum = document.createElement('p');
   results.appendChild(newResults);
   newResults.appendChild(weekNum);
   newResults.appendChild(firstSet);
   newResults.appendChild(secondSet);
   newResults.appendChild(thirdSet);
   weekNum.textContent = 'Week ' + week
   weekNum.style.fontWeight = "bold";
   weekNum.style.fontSize = "2rem";
   firstSet.textContent = x;
   secondSet.textContent = y;
   thirdSet.textContent = z;
   newResults.style.border = "solid grey 1px";
   newResults.style.borderRadius = "5px";
   newResults.classList.add('newResults');
   newResults.setAttribute('id', 'newResults');
   newResults.style.backgroundColor = "#4B4B4B";

  
}


// returns a given percentage of of training max
const calcWeekOne = (max) => {
   let one = .65 * max;
   let two = .75 * max;
   let three = .85 * max;
   let setOne = Math.round(one) + " x 5";
   let setTwo = Math.round(two) + " x 5";
   let setThree = Math.round(three) + " x 5+";
   popResults('1', setOne, setTwo, setThree);
 }
 

 const calcWeekTwo = (max) => {
   let one = .70 * max;
   let two = .80 * max;
   let three = .90 * max;
   let setOne = Math.round(one) + " x 3";
   let setTwo = Math.round(two) + " x 3";
   let setThree = Math.round(three) + " x 3+";
   popResults('2', setOne, setTwo, setThree);
 }

 const calcWeekThree = (max) => {
   let one = .75 * max;
   let two = .85 * max;
   let three = .95 * max;
   let setOne = Math.round(one) + " x 5";
   let setTwo = Math.round(two) + " x 3";
   let setThree = Math.round(three) + " x 1+";
   popResults('3', setOne, setTwo, setThree);
 }
 
 const calcWeekFour = (max) => {
   let one = .40 * max;
   let two = .50 * max;
   let three = .60 * max;
   let setOne = Math.round(one) + " x 5";
   let setTwo = Math.round(two) + " x 5";
   let setThree = Math.round(three) + " x 5";
   popResults('4', setOne, setTwo, setThree);
 }
 

 const makeRoutine = (tM) => {
    calcWeekOne(tM);
    calcWeekTwo(tM);
    calcWeekThree(tM);
    calcWeekFour(tM);
 }
 

 

// gets the value of text input fields and populates new div with values. Disables submit button on click. 
 const submitData = () => {
  if (input.value > 1) {
    makeRoutine(input.value);
    button.setAttribute('disabled', true);
  } 
  // takes the input numbers and returns the value of 90% of that number
  if (actualMax.value > 1) {
    let adjustedMax = actualMax.value * .90;
    makeRoutine(adjustedMax);
    button.setAttribute('disabled', true);
  } 
 }


 // clears number input field and removes divs
 const clearFields = () => {
    results.innerHTML = '';
    input.value = '';
    actualMax.value = '';
    button.removeAttribute('disabled');  
  }



