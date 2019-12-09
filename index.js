const screen = document.querySelector('.screen');
const screen_top = document.querySelector('.screen_top');
const buttons = document.querySelectorAll('.calc-button');
const symbols = ["÷", "+","×","–"];
let value = [];
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
                value = [];
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
                value.push(e.target.innerHTML)
                screen.innerHTML += e.target.innerHTML;
                break;
            case '+':
            case '÷':
            case '–':
            case '×':
                if (symbols.includes(screen.innerHTML.slice(-1)) && !(screen.innerHTML === "0")) {
                        break;
                    } else {
                        if(screen.innerHTML.length >= 1) {
                            if(screen_top.innerHTML === "0"){
                                screen_top.innerHTML = ""
                            }
                            console.log("true")
                            if(e.target.innerHTML === "÷"){
                                value.push("÷") 
                            } else if (e.target.innerHTML === "×"){
                                value.push("×")
                            } else if (e.target.innerHTML === "–"){
                                value.push("-")
                            } 
                            else {
                                value.push(e.target.innerHTML)
                            }
                            screen.innerHTML += e.target.innerHTML;
                            screen_top.innerHTML += screen.innerHTML;
                            screen.innerHTML = "0";
                        }
                    };
                    break;
            case "=":
                if (symbols.includes(screen.innerHTML.slice(length-1)) && !(screen.innerHTML === "0")) {
                    break;
                } else {
                    for(let i=0; i <= value.length; i++){
                        if(value[i] === "÷" ) {value[i] = "/"} else if (value[i] === "×") {value[i] = "*"}
                    }
                    value.push(screen.innerHTML)
                    value.splice(-1,1)
                        screen_top.innerHTML += screen.innerHTML + "=";
                        const str = value.join('')
                        screen.innerHTML = eval(str)
                        console.log(str)
                        console.log(eval(str))
                    }
                    break;
        }   
        console.log(e.target.innerHTML)
        console.log(length);
        console.log(value);
    })
});
