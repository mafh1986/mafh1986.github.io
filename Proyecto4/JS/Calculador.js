function calcularIMC() {
	var campoP = document.getElementById("peso");
	var peso = Number(campoP.value);

	var campoE = document.getElementById("estatura");
	var altura = Number(campoE.value);

	var imc = peso/(altura*altura);

	var campoR = document.getElementById("resultado");
	campoR.value = imc;

	var textoMayor = document.getElementById("mayoromenor");
	if(imc<18.5){
		textoMayor.innerHTML=" BAJO";
	} else {
		if (imc<25){
			textoMayor.innerHTML=" NORMAL";
		} else {
			if (imc<30) {
				textoMayor.innerHTML=" SOBREPESO";
			} else{
				if (imc<35) {
					textoMayor.innerHTML=" OBESIDAD I";
				} else{
					if (imc<40) {
						textoMayor.innerHTML=" OBESIDAD II";
					} else{
						textoMayor.innerHTML=" OBESIDAD III O MÓRBIDA";
					}
				}
			}
		}
	}

}