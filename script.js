document.getElementById("button").addEventListener("click", function(){
		var inputsNameValue = document.getElementById("name").value;
		var inputsYearValue = document.getElementById("year").value;
		if(inputsNameValue!="" && inputsYearValue!="")
		{
			document.getElementById("url").innerHTML = "https://localhost:8080/?name="+ inputNameValue+"&year="+inputYearValue;
		}
		
	});