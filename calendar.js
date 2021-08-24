var cal = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			var index = 0;
			var year = 2019;
			var mon = document.getElementById("month");
			//populate jan 2019
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if (this.readyState ==4 && this.status == 200){
					var obj = JSON.parse(xhttp.responseText);
					console.log(obj.results[0]);
					//var md = document.getElementById("movied");
					var str = "";
					for (var x = 0; x < 10; x++){
						console.log(obj.results[x]['release_date']);
						var stri = obj.results[x]['release_date'];
						var date = stri.substring(0, 4);
						var datemo = stri.substring(5, 7);
						var dateda = stri.substring(8, 10);
						console.log(date + datemo + dateda);
						var mo = index+1;
						if (mo <10){mo = "0"+mo;}
						if (date == year && datemo==mo){
						str = "<br/> "+obj.results[x]['title'];
						for (var g = 1; g<=31;++g){
							var calday = g;
							var cald = g;
							if (calday <10){cald = "0"+calday;}

							if (dateda == cald){
								document.getElementById(calday).innerHTML += str;
							}
						}
					}
					
					//md.innerHTML += str;
					}
				}
			};
			xhttp.open("GET", "https://api.themoviedb.org/3/discover/movie?api_key=fd7ecdd3ce4e2b2b3c1e570e98b0c298&language=en-US", true);
			xhttp.send();



			//var thismon = cal[index];
			//console.log(cal[index]);
			//mon.innerHTML = thismon;

			function next(){
				for (var h = 1; h<=31;++h){
					document.getElementById(h).innerHTML = h;
					document.getElementById(h).style.backgroundColor = "white";
				}
				index++;
				if (index == 12){ 
					index = 0;
					++year;
				}
				document.getElementById("month").innerHTML = cal[index];
				document.getElementById("year").innerHTML = year;
				var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if (this.readyState ==4 && this.status == 200){
					var obj = JSON.parse(xhttp.responseText);
					console.log(obj.results[0]);
					//var md = document.getElementById("movied");
					var str = "";
					for (var x = 0; x < 10; x++){
						console.log(obj.results[x]['release_date']);
						var stri = obj.results[x]['release_date'];
						var date = stri.substring(0, 4);
						var datemo = stri.substring(5, 7);
						var dateda = stri.substring(8, 10);
						console.log(date + datemo + dateda);
						var mo = index+1;
						if (mo <10){mo = "0"+mo;}
						if (date == year && datemo==mo){
						str = "<br/> "+obj.results[x]['title'];
						for (var g = 1; g<=31;++g){
							var calday = g;
							var cald = g;
							if (calday <10){cald = "0"+calday;}

							if (dateda == cald){
								document.getElementById(calday).innerHTML += str;
							}
						}
					}
					}
				}
			};
			xhttp.open("GET", "https://api.themoviedb.org/3/discover/movie?api_key=fd7ecdd3ce4e2b2b3c1e570e98b0c298&language=en-US", true);
			xhttp.send();
			}
			function prev(){
				for (var h = 1; h<=31;++h){
					document.getElementById(h).innerHTML = h;
					document.getElementById(h).style.backgroundColor = "white";
				}
				index--;
				if (index == -1){ 
					index = 11;
					--year; }
				document.getElementById("month").innerHTML = cal[index];
				document.getElementById("year").innerHTML = year;
				var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if (this.readyState ==4 && this.status == 200){
					var obj = JSON.parse(xhttp.responseText);
					console.log(obj.results[0]);
					//var md = document.getElementById("movied");
					var str = "";
					for (var x = 0; x < 10; x++){
						console.log(obj.results[x]['release_date']);
						var stri = obj.results[x]['release_date'];
						var date = stri.substring(0, 4);
						var datemo = stri.substring(5, 7);
						var dateda = stri.substring(8, 10);
						console.log(date + datemo + dateda);
						var mo = index+1;
						if (mo <10){mo = "0"+mo;}
						if (date == year && datemo==mo){
						str = "<br/> "+obj.results[x]['title'];
						for (var g = 1; g<=31;++g){
							var calday = g;
							var cald = g;
							if (calday <10){cald = "0"+calday;}

							if (dateda == cald){
								document.getElementById(calday).innerHTML += str;
							}
						}
					}
					}
				}
			};
			xhttp.open("GET", "https://api.themoviedb.org/3/discover/movie?api_key=fd7ecdd3ce4e2b2b3c1e570e98b0c298&language=en-US", true);
			xhttp.send();
			}

function today(){
	var today = new Date();
var dd = today.getDate();
var mm = today.getMonth(); //January is 0!

var yyyy = today.getFullYear();
console.log(yyyy+mm+dd); 

			index = mm;
			year = yyyy;
			//var mon = document.getElementById("month");
			//populate jan 2019
			document.getElementById(dd).style.backgroundColor = "grey";

			for (var h = 1; h<=31;++h){
					document.getElementById(h).innerHTML = h;
				}
				document.getElementById("month").innerHTML = cal[index];
				document.getElementById("year").innerHTML = year;
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if (this.readyState ==4 && this.status == 200){
					var obj = JSON.parse(xhttp.responseText);
					console.log(obj.results[0]);
					//var md = document.getElementById("movied");
					var str = "";
					for (var x = 0; x < 10; x++){
						console.log(obj.results[x]['release_date']);
						var stri = obj.results[x]['release_date'];
						var date = stri.substring(0, 4);
						var datemo = stri.substring(5, 7);
						var dateda = stri.substring(8, 10);
						console.log(date + datemo + dateda);
						var mo = index+1;
						if (mo <10){mo = "0"+mo;}
						if (date == year && datemo==mo){
						str = "<br/> "+obj.results[x]['title'];
						for (var g = 1; g<=31;++g){
							var calday = g;
							var cald = g;
							if (calday <10){cald = "0"+calday;}

							if (dateda == cald){
								document.getElementById(calday).innerHTML += str;
							}
						}
					}
					}
				}
			};
			xhttp.open("GET", "https://api.themoviedb.org/3/discover/movie?api_key=fd7ecdd3ce4e2b2b3c1e570e98b0c298&language=en-US", true);
			xhttp.send();

}