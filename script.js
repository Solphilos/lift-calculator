let setOne;
let setTwo;
let setThree;
let weekOneSets;
let results = document.querySelector('.results');





 // creates new divs for each weeks routine calculations
const makeResultTable = () => {
   let weekOne = document.createElement('div');
   let weekTwo = document.createElement('div');
   let weekThree = document.createElement('div');
   let weekFour = document.createElement('div');
   results.appendChild(weekOne);
   results.appendChild(weekTwo);
   results.appendChild(weekThree);
   results.appendChild(weekFour);
} 

// creates new div and populates results from calculations
const popResults = (week, x, y, z) => {
   let newResults = document.createElement('div');
   let firstSet = document.createElement('p');
   let secondSet = document.createElement('p');
   let thirdSet = document.createElement('p');
   let weekNum = document.createElement('h1');
   results.appendChild(newResults);
   newResults.appendChild(weekNum);
   newResults.appendChild(firstSet);
   newResults.appendChild(secondSet);
   newResults.appendChild(thirdSet);
   weekNum.textContent = 'Week' + week
   firstSet.textContent = x;
   secondSet.textContent = y;
   thirdSet.textContent = z;
   newResults.style.border = "solid grey 1px";
   newResults.classList.add('newResults');
  
}



const calcWeekOne = (max) => {
   let setOne = .65 * max + " x 5";
   let setTwo = .75 * max + " x 5";
   let setThree = .85 * max + " x 5+";
   popResults('1', setOne, setTwo, setThree);
 }
 

 const calcWeekTwo = (max) => {
   let setOne = .70 * max + " x 3";
   let setTwo = .80 * max + " x 3";
   let setThree = .90 * max + " x 3+";
   popResults('2', setOne, setTwo, setThree);
 }

 const calcWeekThree = (max) => {
   let setOne = .75 * max + " x 5";
   let setTwo = .85 * max + " x 3";
   let setThree = .95 * max + " x 1+";
   popResults('3', setOne, setTwo, setThree);
 }
 
 const calcWeekFour = (max) => {
   let setOne = .40 * max + " x 5";
   let setTwo = .50 * max + " x 5";
   let setThree = .60 * max + " x 5";
   popResults('4', setOne, setTwo, setThree);
 }
 

 const makeRoutine = (tM) => {
    calcWeekOne(tM);
    calcWeekTwo(tM);
    calcWeekThree(tM);
    calcWeekFour(tM);
 }
 

 

// gets the value of text input field and populates new div with values
 const submitData = () => {
    let input = document.getElementById('maxInput').value;
    makeRoutine(input);
    
 }



