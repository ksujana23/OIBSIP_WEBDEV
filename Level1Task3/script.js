function convertTemperature(){

    let temp =
    document.getElementById("temperature").value;

    let unit =
    document.getElementById("unit").value;

    let result =
    document.getElementById("result");

    if(temp === ""){

        result.innerHTML =
        "Please enter a value";

        return;
    }

    temp = Number(temp);

    let converted;

    // Celsius to Fahrenheit

    if(unit === "cToF"){

        converted =
        (temp * 9/5) + 32;

        result.innerHTML =
        `${temp}°C = ${converted.toFixed(2)}°F`;
    }

    // Fahrenheit to Celsius

    else if(unit === "fToC"){

        converted =
        (temp - 32) * 5/9;

        result.innerHTML =
        `${temp}°F = ${converted.toFixed(2)}°C`;
    }

    // Celsius to Kelvin

    else if(unit === "cToK"){

        converted =
        temp + 273.15;

        result.innerHTML =
        `${temp}°C = ${converted.toFixed(2)}K`;
    }

}
