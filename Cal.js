let input = document.getElementById("input");

let button = document.querySelectorAll(".funckey div");
output = "";


let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            output = eval(output);
            input.value = output;
        }
        else if (e.target.innerHTML == "RESET") {
            output = "";
            input.value = output;
        }
        else if (e.target.innerHTML == "DEL") {
            output = output.substring(0, output.length - 1)
            input.value = output;
        }

        else {
            output += e.target.innerHTML;
            input.value = output;
        }
    })
})  

