function Calculate(){
    // alert("Button Test");
    let radius = parseFloat(document.getElementById("txtRadius").value);
    let perimeter=(2*(22/7)*radius).toFixed(2);
    let Area=((22/7)*radius*radius).toFixed(2);
    console.log(perimeter);
    document.getElementById("txtP").value= perimeter;
    document.getElementById("txtA").value= Area;
}
