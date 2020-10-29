// var é apenas uma variavel. No JS não é preciso declarar o seu tipo (int, double, String)
/*document.querySelector() faz a busca de um elemento dentro do HTML,
 no caso a class .titulo e guardando dentro da variavel titulo */
var titulo = document.querySelector(".titulo");
titulo.textContent = "Hariel Nutrição";

var botaoAdicionar = document.querySelector("#adicionar-paciente");

//document.querySelectorAll seleciona todos os elementos daquele tipo no HTML.
var pacientes = document.querySelectorAll(".paciente");

//For que está percorrendo o tamanho (length) do Arry pacientes. No caso o for calcula o IMC de cada paciente
for (var i = 0; i < pacientes.length; i++) {
		var pesoPaciente = pacientes[i].querySelector(".info-peso").textContent;
		var alturaPaciente = pacientes[i].querySelector(".info-altura").textContent;
		var IMCPaciente = calculaImc(pesoPaciente, alturaPaciente);
		pacientes[i].querySelector(".info-imc").textContent = IMCPaciente;

		var pesoEhValido = validaPeso(pesoPaciente);
		var alturaEhValida = validaAltura(alturaPaciente);


		
		if (pesoEhValido == false) {
			pacientes[i].querySelector(".info-peso").textContent = "Peso invalido";
			pacientes[i].querySelector(".info-imc").textContent = "Não foi possivel calcular o imc";
			//classList mostra a lista de classes CSS do objeto, e .add adiciona mais uma classe a ela.
			pacientes[i].classList.add("paciente-invalido");
		} 
		// o ! antes da variavel booleana inverte seu valor, no caso transformando o alturaEhValida em False
		if (!alturaEhValida) {
			pacientes[i].querySelector(".info-altura").textContent = "Altura invalida";
			pacientes[i].querySelector(".info-imc").textContent = "Não foi possivel calcular o imc";
			pacientes[i].classList.add("paciente-invalido");
		} 
}


function calculaImc(peso, altura){
	var imc = 0;
	imc = peso/(altura*altura);
	
	return imc.toFixed(2);
}

function validaPeso (peso){
	if (peso > 0 && peso < 200) {
		return true
	} else{
		return false
	} 
}

function validaAltura(altura){
	if (altura > 0 && altura < 3) {
		return true
	} else{
		return false
	} 
};





