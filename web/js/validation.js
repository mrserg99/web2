let YCorrect = false;
let RCorrect = false;
let XCorrect = false;

let x;
let y;
let r;

function validationY(){
    const Y = document.getElementById("Y").value.replace(",",".");
    const resY = document.getElementById("resY");
    if(Y >= -5 && Y <= 5 && Y !== "" ){
        YCorrect = true;
        resY.src = "images/greenCheckMark.png";
        resY.height = "15";
        resY.width = "15";
        y = Y;
    }else {
        YCorrect = false;
        resY.src = "images/redCheckMark.png";
        resY.height = "15";
        resY.width = "15";
    }
}

function validationR(event){
    if(event.target.checked) {
        r = event.target.value;
        RCorrect = true;
        for (let i = 0; i < event.currentTarget.length; i++) {
            if (event.currentTarget[i].value !== r) {
                event.currentTarget[i].disabled = true;
            }
        }
    }else {
        RCorrect = false;
        for (let i = 0; i < event.currentTarget.length; i++) {
            if (event.currentTarget[i].value !== r) {
                event.currentTarget[i].disabled = false;
            }
        }
    }
}

function validationX(event){
    if(event.target.checked) {
        x = event.target.value;
        XCorrect = true;
        for (let i = 0; i < event.currentTarget.length; i++) {
            if (event.currentTarget[i].value !== x) {
                event.currentTarget[i].disabled = true;
            }
        }
    }else {
        XCorrect = false;
        for (let i = 0; i < event.currentTarget.length; i++) {
            if (event.currentTarget[i].value !== x) {
                event.currentTarget[i].disabled = false;
            }
        }
    }
}

function validation(){
    if(XCorrect && YCorrect && RCorrect) {
        XCorrect = false;
        YCorrect = false;
        RCorrect = false;
        let valueR = document.getElementById("valueR");
        for (let i = 0; i < valueR.length; i++) {
            if (valueR[i].disabled) {
                valueR[i].disabled = false;
            }
            if (valueR[i].checked){
                valueR[i].checked = false;
            }
        }
        let valueX = document.getElementById("valueX");
        for (let i = 0; i < valueX.length; i++) {
            if (valueX[i].disabled) {
                valueX[i].disabled = false;
            }
            if (valueX[i].checked){
                valueX[i].checked = false;
            }
        }
        document.getElementById("Y").value = "";
        document.getElementById("resY").style.display='none';
        let massage = "x=" + encodeURIComponent(x) +
            "&y=" + encodeURIComponent(y) +
            "&r=" + encodeURIComponent(r);
        fetch(document.location.href + "/controllerServlet", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
            body: massage
        }).then(response => response.text().then(function (serverAnswer) {
            if(serverAnswer.indexOf(("Error")) === -1) {
                document.getElementById("outputContainer").innerHTML = serverAnswer;
                document.getElementById("error").innerHTML = "";
                paintPoint(serverAnswer);
            }else {
                document.getElementById("error").innerHTML = serverAnswer;
            }
        })).catch(err => createNotification(err));
    }else {
        XCorrect = false;
        YCorrect = false;
        RCorrect = false;
    }
}

function createNotification(message) {
    let outputContainer = document.getElementById("outputContainer");
    if (outputContainer.contains(document.querySelector(".notification"))) {
        let stub = document.querySelector(".notification");
        stub.textContent = message;
        stub.classList.replace("outputStub", "errorStub");
    } else {
        let notificationTableRow = document.createElement("h4");
        notificationTableRow.innerHTML = "<span class='notification errorStub'></span>";
        outputContainer.prepend(notificationTableRow);
        let span = document.querySelector(".notification");
        span.textContent = message;
    }
}

