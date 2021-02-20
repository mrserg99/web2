import myClasses.DateXYCoordinate;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

public class AreaCheckServlet extends HttpServlet {
    private ArrayList<DateXYCoordinate> arrayResult = new ArrayList<DateXYCoordinate>();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ServletContext servletContext = getServletContext();
        String r = req.getParameter("r");
        String x = req.getParameter("x");
        String y = req.getParameter("y");
        DateXYCoordinate dateXYCoordinate = new DateXYCoordinate(r, x, y, checkODZ(r, x, y, resp));
        if(resp.getStatus() != 502) {
            if (servletContext.getAttribute("arrayResult") != null) {
                Object arrayResultObject = servletContext.getAttribute("arrayResult");
                try {
                    arrayResult = (ArrayList<DateXYCoordinate>) arrayResultObject;
                } catch (Exception e) {
                    System.out.println("");
                }
                arrayResult.add(dateXYCoordinate);

            } else {
                servletContext.setAttribute("arrayResult", new ArrayList<DateXYCoordinate>());
                Object arrayResultObject = servletContext.getAttribute("arrayResult");
                arrayResult = (ArrayList<DateXYCoordinate>) arrayResultObject;
                arrayResult.add(dateXYCoordinate);
            }
        }
        req.setAttribute("outputTable", makeHTMLResp(arrayResult));
        req.setAttribute("place", "AreaCheckServlet");
        RequestDispatcher requestDispatcher = servletContext.getRequestDispatcher("/controllerServlet");
        requestDispatcher.forward(req, resp);
    }

    private boolean checkODZ(String stringR, String stringX, String stringY, HttpServletResponse resp) throws IOException {
        float r = Float.parseFloat(stringR);
        float x = Float.parseFloat(stringX);
        float y = Float.parseFloat(stringY);
        if(x > 2){
            resp.sendError(502,"X больше 2");
            return false;
        }
        if(x < -5){
            resp.sendError(502,"X меньше -5");
            return false;
        }
        if(y > 5){
            resp.sendError(502,"Y больше -5");
            return false;
        }
        if(y < -5){
            resp.sendError(502,"Y меньше -5");
            return false;
        }
        return x <= 0 && x >= -(r / 2) && y >= 0 && y <= r/2 && Math.pow(x, 2) + Math.pow(y, 2) <= r / 2 || // проверка окружности
                x > 0 && x <= r && y > 0 && y <= r/2 && y <= -(x/r) + r || // проверка треугольника
                x > 0 && x <= r && y < 0 && y > -(r/2); // проверка прямоугольника
    }
    private String makeHTMLResp(ArrayList<DateXYCoordinate> dates){
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
}

