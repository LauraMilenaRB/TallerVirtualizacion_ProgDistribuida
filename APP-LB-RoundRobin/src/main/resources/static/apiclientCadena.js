var apiclientCadena = (function(){
    var apiUrl= "http://"+document.location.hostname+":80";
    return{
    	addCadena(cadena){
            return $.ajax({
                url:  apiUrl+"/loadbalancer",
                type: "POST",
                data: cadena,
                contentType: "application/json"});
        }
    };
}());