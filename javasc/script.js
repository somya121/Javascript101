var start = new Date().getTime();
//function declaration for random sizes 
function shapes() {
    var top = Math.random() * 500;
    var left = Math.random() * 500;
    var width = Math.random() * 500;
    var height = Math.random() * 200;
    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";
    }
    else {
        document.getElementById("shape").style.borderRadius = "0";
    }
    //Random Colour Generation
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    document.getElementById("shape").style.backgroundColor = getRandomColor();
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = height + "px";

    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();

}
//Function declaration for delay in reappearance
function appearDelay() {

    setTimeout(shapes, Math.random() * 1000);

}

appearDelay();

document.getElementById("shape").onclick = function () {

    document.getElementById("shape").style.display = "none";
    //We get the time when clicked
    var end = new Date().getTime();
    //Time Difference
    var timeTaken = (end - start) / 1000;//To calculate the time in seconds
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    appearDelay();
}