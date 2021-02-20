function canvasCoordinate(){
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    //горизонтальная линия
    context.beginPath();
    context.moveTo(50, 200);
    context.lineTo(650, 200);
    context.moveTo(640, 190);
    context.lineTo(650, 200);
    context.lineTo(640, 210);

    //вертикальная линия
    context.moveTo(350, 25);
    context.lineTo(350, 390);
    context.moveTo(360, 35);
    context.lineTo(350, 25);
    context.lineTo(340, 35);

    context.font = "bold 20px sans-serif";
    context.fillText("x", 655, 205);
    context.fillText("y", 345, 15);

    context.strokeStyle = "#000";
    context.stroke();

    //рисуем фигурфы
    context.beginPath();
    //прямоугольник
    context.rect(350, 200, 100, 50);

    //треугольник
    context.moveTo(350,200)
    context.lineTo(450,200)
    context.lineTo(350,150)
    context.lineTo(350,200)

    //окружность
    context.arc(350,200,50,Math.PI,3*Math.PI/2,false)
    context.lineTo(350,200)
    context.lineTo(300,200)

    context.fillStyle = "#48B";
    context.fill();

    context.lineTo(350,200)
    context.strokeStyle = "#000";
    context.stroke();

    //риски и метки на координатах
    context.beginPath();
    context.font = "bold 20px sans-serif";
    context.fillStyle = "#000";

    //горизонтальные риски
    context.moveTo(450, 190)
    context.lineTo(450, 210)
    context.fillText("R", 455, 220);

    context.moveTo(250, 190)
    context.lineTo(250, 210)
    context.fillText("-R", 225, 220);

    context.moveTo(400, 190)
    context.lineTo(400, 210)
    context.fillText("R/2", 410, 220);

    context.moveTo(300, 190)
    context.lineTo(300, 210)
    context.fillText("-R/2", 305, 220);

    //вертикальные риски
    context.moveTo(340, 100)
    context.lineTo(360, 100)
    context.fillText("R", 370, 110);

    context.moveTo(340, 300)
    context.lineTo(360, 300)
    context.fillText("-R", 370, 305);

    context.moveTo(340, 150)
    context.lineTo(360, 150)
    context.fillText("R/2", 353, 140);

    context.moveTo(340, 250)
    context.lineTo(360, 250)
    context.fillText("-R/2", 353, 270);


    context.stroke();

}