$( document ).ready(function() {



	function alea(nchar){
		var chain = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];

		var result = [];

		for (i = 0; i < nchar; i++) {
			var caractere = Math.floor(Math.random()*chain.length);
        	result.push(chain[caractere]);
    	}
    	return result.join('');
	}








	var result = alea(10);
	
	console.log( result );





	
	function Generate(nbl, nbc){
		var result =[];
		var ligne = [];
		for (var i = 0; i < nbl; i++) {
			for (var j = 0; j < nbc; j++) {
				ligne.push(alea(6));
			}
			result.push(ligne);
			ligne = [];
		}
		return result;
	}


	var result2 = Generate(5, 5);
	console.log(result2);
	
})