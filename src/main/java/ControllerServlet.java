import myClasses.DateXYCoordinate;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

public class ControllerServlet extends HttpServlet {
    private ArrayList<DateXYCoordinate> arrayResult = new ArrayList<DateXYCoordinate>();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ServletContext servletContext = getServletContext();
        if (req.getParameter("r") != null && req.getParameter("x") != null && req.getParameter("y") != null
                && req.getAttribute("place") == null) {
            RequestDispatcher requestDispatcher = servletContext.getRequestDispatcher("/areaCheckServlet");
            requestDispatcher.forward(req, resp);
        }
        if(req.getParameter("r") != null && req.getParameter("x") != null && req.getParameter("y") != null
                && req.getAttribute("place") != null){
            resp.setContentType("text/html; charset=UTF-8");
            PrintWriter writer = resp.getWriter();
            Object resultObject = req.getAttribute("outputTable");
            String result = (String) resultObject;
            try {
                writer.print(result);
            } finally {
                writer.close();
            }
        }
        if(req.getParameter("startSetting").equals("true") && servletContext.getAttribute("arrayResult") != null ){
            Object arrayResultObject = servletContext.getAttribute("arrayResult");
            arrayResult = (ArrayList<DateXYCoordinate>) arrayResultObject;
            resp.setContentType("text/html; charset=UTF-8");
            PrintWriter writer = resp.getWriter();
            try {
                for (DateXYCoordinate result : arrayResult) {
                    writer.print(result.toString());
                }
            } finally {
                writer.close();
            }
        }
    }
}