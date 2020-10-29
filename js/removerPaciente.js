var tabela = document.querySelectorAll("table");

tabela.forEach(function(paciente){
	paciente.addEventListener("dblclick", function(event){
		//prompt faz uma pergunta na tela do usuario 
		var pergunta = prompt("Deseja realmente excluir esse paciente da tabela s/n?");
		//.remove() remove um elemento do HTML.
		//event.target é quem foi alvo do evento
		//.parentNode sobe 1 na hierarquia, ou seja o pai do event.target
		if(pergunta == "s")	{
			event.target.parentNode.classList.add("fadeOut");
			setTimeout(function(){
				event.target.parentNode.remove();
			}, 600);
		}
	});
});