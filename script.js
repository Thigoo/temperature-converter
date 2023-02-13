const celsius = document.getElementById("celsius");
const kelvin = document.getElementById("kelvin");
const fahrenheit = document.getElementById("fahrenheit");
const reset = document.getElementById("reset");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", (e) => {
        let value = parseFloat(e.target.value);

        switch (e.target.name) {
            case "celsius":
                kelvin.value = (value + 273.15).toFixed(2);
                fahrenheit.value = (value * ((9 / 5) + 32)).toFixed(2);
                break;
            case "kelvin":
                celsius.value = (value - 273.15).toFixed(2);
                fahrenheit.value = (((value - 273.15) * 1.8) + 32).toFixed(2);
                break;
            case "fahrenheit":
                celsius.value = ((value - 32) / 1.8).toFixed(2);
                kelvin.value = (((value -32) / 1.8) + 32).toFixed(2);
                break;
        };
    });
    reset.addEventListener("click", () => {
        input.value = "";
    })
};


