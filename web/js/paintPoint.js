function paintPoint(massage) {
    const parameters = massage.split("<tr>");
    let parameter = parameters[parameters.length-1];
    parameter = parameter.replace("</table>","");
    parameter = parameter.replaceAll("</tr>","");
    parameter = parameter.replaceAll("<th>","");
    const coordinates = parameter.split("</th>");
    const x = coordinates[0];
    const y = coordinates[1];
    const r = coordinates[2];

    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    const pointX = (+x)*(100/+r)+350;
    const pointY = 200-(+y)*(100/+r);
    context.beginPath();
    context.arc(pointX, pointY, 3, 0, Math.PI * 2)
    context.fill();
}