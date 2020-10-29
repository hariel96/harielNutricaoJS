/*Adiciona um "escutador de evento" para que dispare certas funções quando o evento em questão for atendido, 
no caso o evento é o click e a função é anônima pois está sendo declarada ali mesmo e sem nome*/
botaoAdicionar.addEventListener("click", function(event){
	//Impede todos os comportamentos default do evento para que possa executar apenas o que foi instruido 
	event.preventDefault();

	var form = document.querySelector("#form-adiciona");
	var paciente = obtemPacienteDoFormulario(form);	

	

	var erros = validaPaciente(paciente);

	var listaErros = document.querySelector("#mensagemErro");
	listaErros.innerHTML = "";

	if(erros.length != 0){
		exibeMensagensDeErro(erros);
		return;
	}

	adicionaPacienteNaTabela(paciente);
	
	//limpa os campos do formulario
	form.reset();
});

function adicionaPacienteNaTabela(paciente){
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);


}

function obtemPacienteDoFormulario(form){
	//Criando um objeto
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value,form.altura.value)
	}
	return paciente;
}

function montaTr(paciente){
	//Assim como o nome sugere, createElement() cria um elemento no HTML
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	//appendChild insere um elemento (nomeTd) no outro (pacienteTr)
	pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
	return pacienteTr
}

function montaTd(dado, classe){
	var td = document.createElement("td");

	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente){
	//inicializando um array vazio
	var erros = [];

	if(paciente.nome.length == 0){
		erros.push("O campo de Nome não pode ficar em branco")
	}

	if(paciente.altura.length == 0){
		erros.push("O campo de Altura não pode ficar em branco")
	} else{
		if(!validaAltura(paciente.altura)){
		erros.push("Altura inválida!");
		}
	}

	if(paciente.peso.length == 0){
		erros.push("O campo de Peso não pode ficar em branco")
	} else {
		if(!validaPeso(paciente.peso)){
		//inserindo dentro do array
		erros.push("Peso inválido!");
		}
	}


	if(paciente.gordura.length == 0){
		erros.push("O campo de Gordura não pode ficar em branco")
	}

	
	

	
	return erros;
}

function exibeMensagensDeErro(erros){
	var listaErros = document.querySelector("#mensagemErro");
	
	
	erros.forEach(function(erro){
		var mensagemErro = document.createElement("li");
		mensagemErro.textContent = erro;
		listaErros.appendChild(mensagemErro);
	});
}
		




