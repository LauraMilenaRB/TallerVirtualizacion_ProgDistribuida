package edu.aygo.logservice;

import static spark.Spark.get;

import com.google.gson.Gson;

public class Api {

    public static CadenaService cadenaService = new CadenaService();
    /*http://localhost:8080/cadena/hola*/
    public static void main(String[] args){
        Gson gson = new Gson();

        get("/cadena/:valor", (req, res) -> {
            res.type("application/json");
            return cadenaService.getCadena(req.params(":valor"));
        },gson ::toJson);
    }
}