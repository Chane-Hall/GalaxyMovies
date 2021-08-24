
//moviedb();
//document.getElementById("myButton").addEventListener("click", clicker);
//document.getElementById("2019").addEventListener("change", 9clicker);
//document.getElementById("2018").addEventListener("change", 8clicker);
//document.getElementById("2017").addEventListener("change", 7clicker);

//sort according to release date
function myFunction(){  
	var x = document.getElementById("sel").value;
	//alert(x);
	if (x==2019){
		//
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if (this.readyState ==4 && this.status == 200){
					var obj = JSON.parse(xhttp.responseText);
					console.log(obj.results[0]);
					var md = document.getElementById("movied");
					var str = "";
					for (var x = 0; x < 10; x++){
						var stri = obj.results[x]['release_date'];
						var date = stri.substring(0, 4);
						if (date == "2019"){
						str += "<div class='dm' id='"+x+"'>";
						var img = "http://image.tmdb.org/t/p/w185"+ obj.results[x]['poster_path'];
						str += "<img src='"+img+"'/><br/> <h2 class='title'>"+obj.results[x]['title']+"</h2> <p id='"+obj.results[x]['release_date']+"'>Release date : "+obj.results[x]['release_date']+"</p><p>Rating : "+obj.results[x]['vote_average']+"</p><p>"+obj.results[x]['overview']+"</p>";
						str += "</div>";
						}
					}
					
					md.innerHTML = str;

				}
			};
			xhttp.open("GET", "https://api.themoviedb.org/3/discover/movie?api_key=fd7ecdd3ce4e2b2b3c1e570e98b0c298&language=en-US", true);
			xhttp.send();
	}
	if (x==2018){
		//
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if (this.readyState ==4 && this.status == 200){
					var obj = JSON.parse(xhttp.responseText);
					console.log(obj.results[0]);
					var md = document.getElementById("movied");
					var str = "";
					for (var x = 0; x < 10; x++){
						var stri = obj.results[x]['release_date'];
						var date = stri.substring(0, 4);
						if (date == "2018"){
						str += "<div class='dm' id='"+x+"'>";
						var img = "http://image.tmdb.org/t/p/w185"+ obj.results[x]['poster_path'];
						str += "<img src='"+img+"'/><br/> <h2 class='title'>"+obj.results[x]['title']+"</h2> <p id='"+obj.results[x]['release_date']+"'>Release date : "+obj.results[x]['release_date']+"</p><p>Rating : "+obj.results[x]['vote_average']+"</p><p>"+obj.results[x]['overview']+"</p>";
						str += "</div>";
						}
					}
					
					md.innerHTML = str;

				}
			};
			xhttp.open("GET", "https://api.themoviedb.org/3/discover/movie?api_key=fd7ecdd3ce4e2b2b3c1e570e98b0c298&language=en-US", true);
			xhttp.send();
	}
	if (x==2017){
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if (this.readyState ==4 && this.status == 200){
					var obj = JSON.parse(xhttp.responseText);
					console.log(obj.results[0]);
					var md = document.getElementById("movied");
					var str = "";
					for (var x = 0; x < 10; x++){
						var stri = obj.results[x]['release_date'];
						var date = stri.substring(0, 4);
						if (date == "2017"){
						str += "<div class='dm' id='"+x+"'>";
						var img = "http://image.tmdb.org/t/p/w185"+ obj.results[x]['poster_path'];
						str += "<img src='"+img+"'/><br/> <h2 class='title'>"+obj.results[x]['title']+"</h2> <p id='"+obj.results[x]['release_date']+"'>Release date : "+obj.results[x]['release_date']+"</p><p>Rating : "+obj.results[x]['vote_average']+"</p><p>"+obj.results[x]['overview']+"</p>";
						str += "</div>";
						}
					}
					
					md.innerHTML = str;

				}
			};
			xhttp.open("GET", "https://api.themoviedb.org/3/discover/movie?api_key=fd7ecdd3ce4e2b2b3c1e570e98b0c298&language=en-US", true);
			xhttp.send();
	}
}

//search funtion
function clicker() { 
	//alert("Clicked!"); 
	var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if (this.readyState ==4 && this.status == 200){
					var obj = JSON.parse(xhttp.responseText);
					console.log(obj.results[0]);
					var md = document.getElementById("movied");
					var str = "";
					for (var x = 0; x < 10; x++){
						var inpt = document.getElementById("inp").value.toUpperCase();
						var stri = obj.results[x]['title'].toUpperCase();
						var incl = stri.includes(inpt);
						if (incl){
						str += "<div class='dm' id='"+x+"'>";
						var img = "http://image.tmdb.org/t/p/w185"+ obj.results[x]['poster_path'];
						str += "<img src='"+img+"'/><br/> <h2 class='title'>"+obj.results[x]['title']+"</h2> <p id='"+obj.results[x]['release_date']+"'>Release date : "+obj.results[x]['release_date']+"</p><p>Rating : "+obj.results[x]['vote_average']+"</p><p>"+obj.results[x]['overview']+"</p>";
						str += "</div>";
						}
					}
					
					md.innerHTML = str;

				}
			};
			xhttp.open("GET", "https://api.themoviedb.org/3/discover/movie?api_key=fd7ecdd3ce4e2b2b3c1e570e98b0c298&language=en-US", true);
			xhttp.send();
}
//populate with api data
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if (this.readyState ==4 && this.status == 200){
					var obj = JSON.parse(xhttp.responseText);
					console.log(obj.results[0]);
					var md = document.getElementById("movied");
					var str = "";
					for (var x = 0; x < 10; x++){
						str += "<div class='dm' id='"+x+"'>";
						var img = "http://image.tmdb.org/t/p/w185"+ obj.results[x]['poster_path'];
						str += "<img src='"+img+"'/><br/> <h2 class='title'>"+obj.results[x]['title']+"</h2> <p id='"+obj.results[x]['release_date']+"'>Release date : "+obj.results[x]['release_date']+"</p><p>Rating : "+obj.results[x]['vote_average']+"</p><p>"+obj.results[x]['overview']+"</p>";
						str += "</div>";
						//alert(str); 
					}
					
					md.innerHTML += str;

				}
			};
			xhttp.open("GET", "https://api.themoviedb.org/3/discover/movie?api_key=fd7ecdd3ce4e2b2b3c1e570e98b0c298&language=en-US", true);
			xhttp.send();

