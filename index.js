const screen = document.querySelector('.screen');
const screen_top = document.querySelector('.screen_top');
const buttons = document.querySelectorAll('.calc-button');
const length = document.querySelector('.screen').innerHTML.length;

buttons.forEach(div => {
    div.addEventListener('click', e => {
        if (screen.innerHTML === "0") {
            screen.innerHTML = ""
        }
        switch (e.target.innerHTML) {
            case 'C':
                screen.innerHTML = "0";
                break;
            case '←': 
            screen.innerHTML = screen.innerHTML.slice(0, -1);
                if (screen.innerHTML === "") {
                    screen.innerHTML = "0"
                }
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                screen.innerHTML += e.target.innerHTML;
                break;
            case '+':
                if (screen.innerHTML.slice(document.querySelector('.screen').innerHTML.length-1) === "+" || "÷") {
                    console.log("true")
                    break;
                } else {
                    console.log("false")
                    screen.innerHTML += "+";
                break;
                };
            case '÷':
                if (screen.innerHTML.slice(document.querySelector('.screen').innerHTML.length-1) === "÷" || "+") {
                    console.log("true")
                    break;
                } else {
                    console.log("false")
                    screen.innerHTML += "÷";
                break;
                };
        }   
        console.log(e.target.innerHTML)
        console.log(length);
    })
});
