//Defining UI
const UIcentimeter = document.querySelector('#result-Centimeter');
const UImilimeter = document.querySelector('#result-Milimeter');
const UImeter = document.querySelector('#result-Meter');
const UIfoot = document.querySelector('#result-Foot');
const UIinputValue = document.querySelector('#UIinputValue');
const UIinputValueUnit = document.querySelector('#UIinputValueUnit');

//Defining Calculating elements
const calculateBtn = document.querySelector('.calculateBtn');
const lengthUnit = document.querySelector('#lengUnit');

//Listen for value when calculated clicked
calculateBtn.addEventListener('click',calculateResult);
//Listen for value when option is clicked
lengthUnit.addEventListener('click',changeUIUnit);

//Defining variables in global scope so that it can be use in outer function.
let centimeter,milimeter,meter,foot;

//Calculate function
function calculateResult(e){
    //getting the input value
    let inputNumber = parseInt(UIinputValue.value);

    //getting the values from option
    let optionValue = (lengthUnit.options[lengthUnit.selectedIndex].text).toLowerCase();

    //Checking the input and assigning if statement according to that
    if(optionValue == "select your desire length unit" || isNaN(inputNumber)){
       alert('Please Enter Both Number / Length Value');

    }else
        if(optionValue == "centimeter"){
            centimeter = inputNumber;
            milimeter = (inputNumber * 10).toFixed(2);
            meter = (inputNumber * 0.01).toFixed(2);
            foot =(inputNumber * 0.032808399).toFixed(2);
            UIresultOutput();
        };
        if(optionValue == "milimeter"){
            centimeter = (inputNumber / 10).toFixed(2);
            milimeter = inputNumber;
            meter = (inputNumber / 1000).toFixed(2);
            foot =(inputNumber * 0.00328084).toFixed(2);
            UIresultOutput();
        };
        if(optionValue == "meter"){
            centimeter = (inputNumber * 100).toFixed(2);
            milimeter = (inputNumber * 1000).toFixed(2);
            meter = inputNumber;
            foot =(inputNumber * 3.28084).toFixed(2);
            UIresultOutput();
        }
        if(optionValue == "foot"){
            centimeter = (inputNumber * 30.48).toFixed(2);
            milimeter = (inputNumber * 304.8).toFixed(2);
            meter = (inputNumber / 3.281).toFixed(2);
            foot =inputNumber;
            UIresultOutput();
        }

    e.preventDefault();
};

//Dynamically Unit changing function
function changeUIUnit(){
    let UIoptionValue = (lengthUnit.options[lengthUnit.selectedIndex].text).toLowerCase();
        if(UIoptionValue == 'centimeter'){
            UIinputValueUnit.innerHTML ='cm';
        }
        if(UIoptionValue == 'milimeter'){
            UIinputValueUnit.innerHTML ='mm';
        }
        if(UIoptionValue == 'meter'){
            UIinputValueUnit.innerHTML ='m';
        }
        if(UIoptionValue == 'foot'){
            UIinputValueUnit.innerHTML ='f';
        }
}

// //Appending result into UI function
function UIresultOutput(){
    UIcentimeter.value = centimeter;
    UImilimeter.value = milimeter;
    UImeter.value = meter;
    UIfoot.value = foot;


    //clear Input
    UIinputValue.value = '';
    UIinputValueUnit.value = '';

}