function tempConverter() {

            let error = false;

            let celsius = document.querySelector(".celsius1");
            let celsius2 = document.querySelector(".celsius2");
            let fahrenheit = document.querySelector(".fahrenheit1");
            let fahrenheit2 = document.querySelector(".fahrenheit2");
            
            let temperature = document.querySelector(".tempValue");
            let fahrenheitValue = document.querySelector(".fahrenheitValue");
            let celsiusValue = document.querySelector(".celsiusValue");
            let errorMsg = document.querySelector(".errorMsg");

            if (celsius.selected && fahrenheit2.selected) {
                fahrenheitResult = ((temperature.value * 1.8) + 32);
                fahrenheitResult = fahrenheitResult.toFixed(2);
                fahrenheitValue.innerHTML = fahrenheitResult;
                celsiusValue.innerHTML = temperature.value;
            }

            if (fahrenheit.selected && celsius2.selected) {
                celsiusResult = ((temperature.value - 32) / 1.8);
                celsiusResult = celsiusResult.toFixed(2);
                celsiusValue.innerHTML = celsiusResult;
                fahrenheitValue.innerHTML = temperature.value;
            }

            if (fahrenheit.selected && fahrenheit2.selected) {
                error = true;
                errorMsg.innerHTML = "You cannot convert from Fahrenheit to Fahrenheit! Change one to Celsius."
            }

            if (celsius.selected && celsius2.selected) {
                error = true;
                errorMsg.innerHTML = "You cannot convert from Celsius to Celsius! Change one to Fahrenheit."
            }

            if (error === false) {
                errorMsg.innerHTML = "";
            }
        }