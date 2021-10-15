var apiclientCadena = (function(){
    var ipBackEnd = "http://localhost"
    return{
    	addCadenas(cadena){
            return $.ajax({
                url:  ipBackEnd+"/loadbalancer",
                type: "POST",
                data: '{"name":"'+cadena+'"}',
                contentType: "application/json"});
        }
    };
}());