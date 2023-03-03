document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert() {
    
    var farenheit = document.getElementById("farenheit").value;
    var celsius = document.getElementById("celsius").value;

    if (farenheit !='') {
        celsius = (parseFloat(farenheit) -32) /1.8;
    }
    else{
        farenheit = (parseFloat(celsius) *1.8) + 32;
    }

    document.getElementById('farenheit').value = parseFloat(farenheit).toFixed(1);
    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
}

function clearForm() {
    document.getElementById('farenheit').value = '';
    document.getElementById('celsius').value = '';

}
