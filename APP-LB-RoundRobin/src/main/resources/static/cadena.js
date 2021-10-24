function adicionarFila(item) {
    var markup = "<tr class=\"filasP\"><td>" + item.id + "</td><td>" + item.value + "</td><td>"+ item.dateRegister + "</td></tr>";
    $("#tablaCadenas").append(markup);
}

var cadena = (function () {
	var nombres;
    return {
        enviarCadena(){
        	var cadena = $("#cadena").val();
        	if(cadena===""){
        		alert("Inserte una cadena");
        	}
        	else{
        		var promesa = apiclientCadena.addCadena(cadena);
        		promesa.done(function(data){
        			$(".filasP").remove("tr");
        			JSON.parse(data).map(adicionarFila);
        		})
                .fail(function(){
                	alert(promesa.responseText);
                });
        	}
        },
        adicionarFila2(item) {
            var markup = "<tr class=\"filasP\"><td>" + item.id + "</td><td>" + item.value + "</td><td>"+ item.dateRegister + "</td></tr>";
            $("#tablaCadenas").append(markup);
        }
    };
}());

