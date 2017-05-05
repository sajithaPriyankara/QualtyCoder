class Calculator {
    input: Array<number>;
    constructor(input: Array<number>) {
        this.input = input ;
    }
    calcMax() {
        let max = this.input[0];        
        for (let item of this.input) {
            if (item > max) { 
                max = item
            }
         }
        return max;
    }

    calcMin() {
        let min = this.input[0];        
        for (let item of this.input) {
            if (item < min) { 
                min = item
            }
         }
        return min;
    }
}
let inputElem = document.createElement('input');
let input: Array<number>;
inputElem.onblur = function() {
    alert(parseFloat(inputElem.value));
}
document.body.appendChild(inputElem);


let input1 = [53, 23, 124, 53, 44, 32, 53, 12, 34, 54];
let input2 = [87, 67, 89, 76, 45, 23, 90, 89, 67, 78];
let calculator = new Calculator(input2);

let buttonClacMax = document.createElement('button');
buttonClacMax.textContent = "Calculate Max";
buttonClacMax.onclick = function() {
    alert(calculator.calcMax());
}
document.body.appendChild(buttonClacMax);


let buttonClacMin = document.createElement('button');
buttonClacMin.textContent = "Calculate Min";
buttonClacMin.onclick = function() {
    alert(calculator.calcMin());
}
document.body.appendChild(buttonClacMin);


