const $screen = document.querySelector("#screen")

const operators = document.querySelectorAll(".operator")
operators.forEach(operator => {
    operator.addEventListener("click", (event) => {
        if (operator.textContent === "=") {
            const result = eval($screen.textContent)
            $screen.textContent = result === Infinity || isNaN(result) ? "Error" : result
        } else {
            $screen.textContent += event.target.innerText
        }
    })
})


const numbers = document.querySelectorAll("span:not(.operator)")
numbers.forEach(number => {
    number.addEventListener("click", (event) => {
        $screen.textContent += event.target.innerText
    })
})

const $clear = document.querySelector("#clear")
$clear.addEventListener("click", (event) => {
    $screen.textContent = ""
})
