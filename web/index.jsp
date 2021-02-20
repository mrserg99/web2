<%@ page import="java.util.ArrayList" %>
<%@ page import="myClasses.DateXYCoordinate" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%!
  String makeTable(Object obj){
    ArrayList<DateXYCoordinate> dates = (ArrayList<DateXYCoordinate>) obj;
    String massage = "<table id ='outputTable'>" +
            "<tr>" +
            "<th>x</th>" +
            "<th>y</th>" +
            "<th>r</th>" +
            "<th>Точка входит в ОДЗ</th>" +
            "</tr>";
    for (DateXYCoordinate data: dates) {
      massage = massage + "<tr>" +
              "<th>" + data.getStringX() + "</th>" +
              "<th>" + data.getStringY() + "</th>" +
              "<th>" + data.getStringR() + "</th>" +
              "<th>" + (data.getResult() ? "да" : "нет") + "</th>" +
              "</tr>";
    }
    massage = massage + "</table>";
    return massage;
  }
%>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <link   rel="icon" type="image" href="images/Logo.jpg"/>
  <title>Лаба 2</title>
  <style>
    textarea { resize: none; }
  </style>
  <script type="text/javascript" src="js/canvasCoordinate.js"></script>
  <script type="text/javascript" src="js/mouseXYDetected.js"></script>
  <script type="text/javascript" src="js/startSettings.js"></script>
  <script type="text/javascript" src="js/validation.js"></script>
  <script type="text/javascript" src="js/paintPoint.js"></script>
  <link rel="stylesheet" href="css/page.css" />
</head>
<body onload="canvasCoordinate(); mouseXYDetected(); startSettings()">
<header>
  <h1 class="head">Лесных С.И. P3210 2110</h1>
</header>
<table class="table" width="100%" border="1" align="center" cellpadding="4" cellspacing="0">
  <tr>
    <td valign="top">
      <!-- X start-->
      <p id="resX">Выберете X</p>
      <form id="valueX" onchange="validationX(event); return false">
        <div class="column1">
          <label class="checkbox-other">
            <div><input type="checkbox" name="valueX" value="-5">-5</div>
          </label>
          <label class="checkbox-other">
            <div><input type="checkbox" name="valueX" value="-4">-4</div>
          </label>
          <label class="checkbox-other">
            <div><input type="checkbox" name="valueX" value="-3">-3</div>
          </label>
          <label class="checkbox-other">
            <div><input type="checkbox" name="valueX" value="-2">-2</div>
          </label>
        </div><div class="column2">
        <label class="checkbox-other">
          <div><input type="checkbox" name="valueX" value="-1">-1</div>
        </label>
        <label class="checkbox-other">
          <div><input class="checkbox_X" type="checkbox" name="valueX" value="0">0</div>
        </label>
        <label class="checkbox-other">
          <div><input type="checkbox" name="valueX" value="1">1</div>
        </label>
        <label class="checkbox-other">
          <div><input type="checkbox" name="valueX" value="2">2</div>
        </label>
        <label class="checkbox-other">
          <div><input type="checkbox" name="valueX" value="3">3</div>
        </label>
      </div>
      </form>
      <!-- X end -->

      <!-- Y start -->
      <p>Введите Y</p>
      <p><textarea class="text_Y" rows="1" placeholder="промежуток от -5 до 5" cols="45" name="valueY" id="Y" maxlength="13" ></textarea></p>
      <form>
        <input type = 'button' class='buttonY' value = 'Проверить' onclick = "validationY()"><img src="#" alt="" id="resY">
      </form>
      <!-- Y end -->

      <!-- R start -->
      <p>Введите R</p>
      <form id="valueR" onchange="validationR(event); return false">
        <div class="column1">
          <label class="checkbox-other">
            <div><input class="checkbox_R" type="checkbox" name="valueR" value="1">1</div>
          </label>
          <label class="checkbox-other">
            <div><input class="checkbox_R" type="checkbox" name="valueR" value="1.5">1.5</div>
          </label>
        </div><div class="column2">
        <label class="checkbox-other">
          <div><input class="checkbox_R" type="checkbox" name="valueR" value="2">2</div>
        </label>

        <label class="checkbox-other">
          <div><input class="checkbox_R" type="checkbox" name="valueR" value="2.5">2.5</div>
        </label>
        <label class="checkbox-other">
          <div><input class="checkbox_R" type="checkbox" name="valueR" value="3">3</div>
        </label>
      </div>
      </form>
      <!-- R end -->

      <!-- main button start -->
      <form>
        <p><input type="button" value="Нажми меня нежно..." class="Neshno" onclick="validation()"></p>
      </form>
      <div id="error"></div>
      <!-- main button end -->
    </td>
    <td width="700" rowspan="2" >
      <canvas id="canvas" width="700" height="400"></canvas>
    </td>
  </tr>
</table>
<div id="outputContainer">
  <%
    if(application.getAttribute("arrayResult") != null){
      out.print(makeTable(application.getAttribute("arrayResult")));
    }
  %>
</div>
</body>
</html>