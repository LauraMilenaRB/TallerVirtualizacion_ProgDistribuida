function adicionarFila(item) {
    var markup = "<tr class=\"filasP\"><td>" + item.name + "</td><td>" + item.id + "</td></tr>";
    $("#tablaCadenas").append(markup);
}

function inicializarElementos() {
    $(".filasP").remove("tr");
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
        		var promesa = apiclientCadena.addCadenas(cadena);
        		promesa.done(function(data){
        			inicializarElementos();
        			JSON.parse(data).map(adicionarFila);
        		})
                .fail(function(){
                	alert(promesa.responseText);
                });
        	}
        },
        adicionarFila2(item) {
            var markup = "<tr class=\"filasP\"><td>" + item.name + "</td><td>" + item.id + "</td></tr>";
            $("#tablaCadenas").append(markup);
        }
    };
}());

