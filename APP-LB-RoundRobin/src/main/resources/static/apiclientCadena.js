var apiclientCadena = (function(){
    return{
    	addCadena(cadena){
            return $.ajax({
                url:  "http://localhost:80/loadbalancer",
                type: "POST",
                data: cadena,
                contentType: "application/json"});
        }
    };
}());