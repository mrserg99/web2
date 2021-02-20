package myClasses;

import java.io.Serializable;

public class DateXYCoordinate implements Serializable {
    private String stringR;
    private String stringX;
    private String stringY;
    private boolean result;

    public DateXYCoordinate(){
        this.stringR = "0";
        this.stringX = "0";
        this.stringY = "0";
        this.result = false;
    }

    public DateXYCoordinate(String stringR, String stringX, String stringY, boolean result){
        this.stringR = stringR;
        this.stringX = stringX;
        this.stringY = stringY;
        this.result = result;
    }


    public String getStringR() {
        return stringR;
    }

    public String getStringX() {
        return stringX;
    }

    public String getStringY() {
        return stringY;
    }

    public boolean getResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public void setStringR(String stringR) {
        this.stringR = stringR;
    }

    public void setStringX(String stringX) {
        this.stringX = stringX;
    }

    public void setStringY(String stringY) {
        this.stringY = stringY;
    }

    @Override
    public String toString() {
        return stringR + "," + stringX + "," + stringY + "," + result + ";";
    }
}
