var apiclientCadena = (function(){
    return{
    	addCadena(cadena){
            return $.ajax({
                url:  "http://localhost/loadbalancer",
                type: "POST",
                data: cadena,
                contentType: "application/json"});
        }
    };
}());