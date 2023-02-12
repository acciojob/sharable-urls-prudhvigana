document.getElementById("button").addEventListener("click", function(){
		var inputNameValue = document.getElementById("name").value;
		var inputYearValue = document.getElementById("year").value;
		if(inputNameValue!="" && inputYearValue!="")
		{
			document.getElementById("url").innerHTML = "https://localhost:8080/?name="+ inputNameValue+"&year="+inputYearValue;
		}
		
	});