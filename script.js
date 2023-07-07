

 let results = document.querySelector('.results');


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



const calcWeekOne = (max) => {
    let setOne = .65 * max;
    let setTwo = .75 * max;
    let setThree = .85 * max;
    
 }
 

 const calcWeekTwo = (max) => {
    let setOne = .70 * max;
    let setTwo = .80 * max;
    let setThree = .90 * max;
   console.log(setOne + " x 5", setTwo + " x 5", setThree + " x 5")
 }

 const calcWeekThree = (max) => {
    let setOne = .75 * max;
    let setTwo = .85 * max;
    let setThree = .95 * max;
   console.log(setOne, setTwo, setThree)
 }
 
 const calcWeekFour = (max) => {
    let setOne = .40 * max;
    let setTwo = .50 * max;
    let setThree = .60 * max;
   console.log(setOne, setTwo, setThree)
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


