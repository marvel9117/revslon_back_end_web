// Temperature Conversion Function
// Usage: In the second parameter (scale), use "C" or "c" to convert Celsius to Fahrenheit
//        or use "F" or "f" to convert Fahrenheit to Celsius.
// Returns the converted temperature if valid input is provided.

function convertTemperature(temp, scale) {
  scale = scale.toUpperCase();

  if (scale === "C") { 
    return (temp * 9 / 5) + 32;
  } else if (scale === "F") {
    return (temp - 32) * 5 / 9;
  } else {
    return "Invalid scale. Use 'C' or 'F' for the scale.";
  }
}


