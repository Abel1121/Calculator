const screen = document.querySelector('.screen');
const screen_top = document.querySelector('.screen_top');
const buttons = document.querySelectorAll('.calc-button');
const symbols = ["÷", "+","×","–"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"]
buttons.forEach(div => {
    div.addEventListener('click', e => {
        const length = document.querySelector('.screen').innerHTML.length;
        if (screen.innerHTML === "0") {
            screen.innerHTML = ""
        }
        switch (e.target.innerHTML) {
            case 'C':
                screen.innerHTML = "0";
                screen_top.innerHTML = "0"
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
            case '÷':
            case '–':
            case '×':
                if (symbols.includes(screen.innerHTML.slice(length-1)) && !(screen.innerHTML === "0")) {
                        break;
                    } else {
                        if(screen.innerHTML.length >= 1) {
                            if(screen_top.innerHTML === "0"){
                                screen_top.innerHTML = ""
                            }
                            console.log("true")
                            screen.innerHTML += e.target.innerHTML;
                            screen_top.innerHTML += screen.innerHTML;
                            screen.innerHTML = "0";
                        } else { console.log("false")
                        screen.innerHTML += e.target.innerHTML;
                    break;
                        }
                    }
        }   
        console.log(e.target.innerHTML)
        console.log(length);
    })
});
