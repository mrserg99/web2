let valueX;
let valueY;
function mouseXYDetected(){
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    canvas.addEventListener("click", function (event) {
    if(RCorrect) {
        let x = canvas.getBoundingClientRect().x;
        let y = canvas.getBoundingClientRect().y;
        let pointX = event.clientX - x;
        let pointY = event.clientY - y;
        valueX = (pointX-350)/(100/r);
        valueY = -(pointY-200)/(100/r);
        let massage = "x=" + encodeURIComponent(valueX) +
            "&y=" + encodeURIComponent(valueY) +
            "&r=" + encodeURIComponent(r);
        let valueR = document.getElementById("valueR");
        for (let i = 0; i < valueR.length; i++) {
            if (valueR[i].disabled) {
                valueR[i].disabled = false;
            }
            if (valueR[i].checked){
                valueR[i].checked = false;
            }
        }
        RCorrect = false;
        fetch(document.location.href + "/controllerServlet", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
            body: massage
        }).then(response => response.text().then(function (serverAnswer) {
            if(serverAnswer.indexOf(("Error")) === -1) {
                document.getElementById("outputContainer").innerHTML = serverAnswer;
                document.getElementById("error").innerHTML = "";
                context.beginPath();
                context.arc(pointX, pointY, 3, 0, Math.PI * 2)
                context.fill();
            }else {
                document.getElementById("error").innerHTML = serverAnswer;
            }
        })).catch(err => createNotification(err));
    }else {
        alert("Значение R не выбранно")
    }
    })
}