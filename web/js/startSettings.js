function startSettings() {
    const canvas = document.getElementById("canvas");
    pointFromCool(canvas);
}

function pointFromCool(canvas) {
    let massage = "startSetting=" + encodeURIComponent("true");
    fetch(document.location.href + "/controllerServlet", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
        body: massage
    }).then(response => response.text().then(function (serverAnswer) {
        if(serverAnswer.indexOf(("Error")) === -1) {
            let objects = serverAnswer.split(";");
            for (let i = 0; i < objects.length - 1; i++ ){
                let object = objects[i].split(",");

                const r = object[0];
                const x = object[1];
                const y = object[2];
                const canvas = document.getElementById("canvas");
                const context = canvas.getContext("2d");
                const pointX = (+x)*(100/+r)+350;
                const pointY = 200-(+y)*(100/+r);
                context.beginPath();
                context.arc(pointX, pointY, 3, 0, Math.PI * 2)
                context.fill();
            }
        }else {
            document.getElementById("error").innerHTML = serverAnswer;
        }
    })).catch(err => createNotification(err));
}