var buscarPaciente = document.querySelector("#buscar-paciente");

var jaAdicionado =0;
var spanError = document.querySelector("#erro-ajax");

buscarPaciente.addEventListener("click", function () {
	if(jaAdicionado == 0){
		//Faz requisições HTTP 
		var xhr = new XMLHttpRequest();
		//Fala o tipo de requisição GET/POST/PUT/DELETE e o endereço da requisição
		xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
		//Após estar devidamente configurada enviamos a requisição
		xhr.send();
		//Escuta a resposta da requisição
		xhr.addEventListener("load", function(){
			//verifica se a resposta do status diz que está tudo OK
			if(xhr.status== 200){
				spanError.textContent = "";
				//Mostra o conteudo da resposta
				var resposta = xhr.responseText;
				/*Transforma a resposta que está em JSON em objetos JS,
				como temos muitos objetos ele transforma em um Array JS*/
				var pacientes = JSON.parse(resposta);
				pacientes.forEach(function(paciente_da_resposta_do_servidor){
					adicionaPacienteNaTabela(paciente_da_resposta_do_servidor);
					jaAdicionado = 1;
				})
			} else{
				spanError.textContent = xhr.responseText;
				spanError.classList.add("paciente-invalido")

			}
		});
		
	}
});