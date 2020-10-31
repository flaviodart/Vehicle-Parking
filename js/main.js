var cadastrar = document.querySelector("#cadastrar");

cadastrar.addEventListener("click", function(event) {
   event.preventDefault();
 
   var form = document.querySelector("#formulario");

   var modelo = form.modelo.value.trim().toUpperCase()
   var placa = form.placa.value.trim().toUpperCase()
   var horaEntrada = new Date();
   var horaFormat = `${horaEntrada.getHours()}:${horaEntrada.getMinutes()}`

   if (!modelo || !placa){
      alert("Preencha todos os campos!");
		return false;
   }

   else if (!modelo && !placa){
      alert("Preencha todos os campos!");
		return false;
   }

   var veiculoTr = document.createElement("tr");

   var modeloTd = document.createElement("td");
   var placaTd = document.createElement("td");
   var horaTd = document.createElement("td")
   var finalizarTd = document.createElement("td")
   var excluirTd = document.createElement("td")

   //finalizarTd.className = 'btnTime';
   //var img = document.createElement('div');
   //img.className = 'image';
   //img.style.backgroundImage = 'url(images/time.png)';
   //finalizarTd.appendChild(img);

   modeloTd.textContent = modelo;
   placaTd.textContent = placa;
   horaTd.textContent = horaFormat;

   veiculoTr.appendChild(modeloTd);
   veiculoTr.appendChild(placaTd);
   veiculoTr.appendChild(horaTd)
   veiculoTr.appendChild(finalizarTd);
   veiculoTr.appendChild(excluirTd)
   
   var tabela = document.querySelector("#garagem");

   tabela.appendChild(veiculoTr);

});


