var result_value = 0;//Store the calculation result
var pre_result = 0;//Getting last calcualtion result
var first_digit = true;//Check if the input entered is first time. So that clear the result text

function calculate(input) {

	first_digit = true;
	document.getElementById("dot").disabled = false;

	strExpression = document.getElementById("expression").value;
	let lastChar = strExpression.charAt(strExpression.length - 1);

	if(strExpression!=""){
		if (!lastChar.match(/^\d$/)) {
			if(input!="=")
				document.getElementById("expression").value += document.getElementById("result").value + input;
			else
				document.getElementById("expression").value += document.getElementById("result").value;
			switch (lastChar) {
				case "+":
					result_value = pre_result + parseFloat(document.getElementById("result").value);
					document.getElementById("result").value = result_value;
					break;
				case "-":
					result_value = pre_result - parseFloat(document.getElementById("result").value);
					document.getElementById("result").value = result_value;
					break;
				case "*":
				
					result_value = pre_result * parseFloat(document.getElementById("result").value);
					document.getElementById("result").value = result_value;
					break;
				case "/":
					result_value = pre_result / parseFloat(document.getElementById("result").value);
					document.getElementById("result").value = result_value;
					break;
				case "%":
					result_value = pre_result % parseFloat(document.getElementById("result").value);
					document.getElementById("result").value = result_value;
					break;
			}
		}
		else {
			alert("Syntax Error")
		}
	}
	else{
		document.getElementById("expression").value=document.getElementById("result").value+input;
		result_value=parseFloat(document.getElementById("result").value);
	}

	pre_result = result_value;
}


function display(input) {
	strExpression = document.getElementById("expression").value;

	if (strExpression != "") {
		if (first_digit == true){
			document.getElementById("result").value = 0;
		}
		
	}

	pre_result = result_value;
	if (input == ".") {
		document.getElementById("result").value = document.getElementById("result").value + input;
		document.getElementById("dot").disabled = true;
	}
	else {
		if (document.getElementById("result").value == '0')
			document.getElementById("result").value = input;
		else
			document.getElementById("result").value = document.getElementById("result").value + input;
	}
	first_digit = false;

}


function clearResult() {
	var result_value = 0;
	var pre_result = 0;
	document.getElementById("result").value = 0;
	document.getElementById("expression").value = "";
	document.getElementById("dot").disabled = false;

}
