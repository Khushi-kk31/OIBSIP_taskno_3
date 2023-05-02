function tempConverter(){
    var input = document.getElementById("degree").value;
    // console.log(input)
    var selectionInputDegree = document.querySelector("#selectInputDegreeType").value;
    // console.log(selectionInputDegree)
    var selectionOutputDegree = document.querySelector("#select-conversion-field").value;
    // console.log(selectionOutputDegree)
    var result;
    switch (selectionInputDegree) {
        case "C":
            result = cTo(input,selectionOutputDegree);
            break;
        
        case "F":
            result = fTo(input,selectionOutputDegree);
            break;

        case "K":
            result = kTo(input,selectionOutputDegree);
            break;
    }
    console.log(selectionOutputDegree)
    document.getElementById("result").innerText = parseFloat(result).toFixed(4);
    if (selectionOutputDegree == 'K'){
        document.getElementById("deg").style.display = "none";
    }
    else{
        document.getElementById("deg").style.display = "inline-block";
    }
    document.getElementById("unit").innerText = selectionOutputDegree;
}

//Faranheit converter
function fTo(input, selectionOutputDegree) {
    var temperature;

  switch (selectionOutputDegree) {
    case 'F':
      temperature = input;
      break;
    case 'C':
      temperature = eval((input - 32) * (5 / 9));
      break;
    case 'K':
      temperature = eval((input + 459.67) * (5 / 9));
      break;

  }
//   console.log(temperature)
  return temperature;
}

//Celsius Converter

function cTo(input, selectionOutputDegree) {

    let temperature ;
  
    switch (selectionOutputDegree) {
  
      case 'C':
        temperature = input;
        break;
      case 'F':
        temperature = eval((input * (9 / 5)) + 32);
        break;
      case 'K':
        temperature = eval(input + 273.15);
        break;
  
    }
  
    return temperature;
}

//Kelvin Converter

function kTo(input, selectionOutputDegree) {

    let temperature ;
    
    switch (selectionOutputDegree) {
      case 'K':
        temperature = input;
        break;
      case 'F':
        temperature = eval((input - 273.15) * (9 / 5) + 32);
        break;
      case 'C':
        temperature = eval((input - 273.15));
        break;
    
    }
    return temperature;
}