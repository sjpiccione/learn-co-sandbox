document.addEventListener ("DOMContentLoaded", function() {
  console.log("==  DOMContentLoaded  ==");
  console.log("movie:", movies);
  
  let movieData
  let titanicBtn = document.getElementById ("Titanic");
  let terminator_2Btn = document.getElementById ("Terminator_2");
  
  titanicBtn.addEventListener('click', function(e) {
    loadMovieData("Titanic");
  })
  terminator_2Btn.addEventListener('click', function(e) {
    loadMovieData("Terminator_2");
  })

   function loadMovieData (whichMovie) {
    console.log("==  loadMovieData  ==");
    console.log("whichMovie:", whichMovie);
    
    if (whichMovie === "Titanic"){
      console.log("--  Titanic  --");
      movieData = movies.Titanic;
    } else {
      console.log("Terminator_2");
      movieData = movies.Terminator_2;
    }
    console.log("movieData:", movieData);
    let title = document.getElementById ("title");
    title.innerHTML = movieData.title;
   
    let cast = document.getElementById ("cast");
    
    let listHtml = "<ul>";
    
    for (let i = 0; i < movieData.cast.length; i++) {	
     listHtml += "<li>" + movieData.cast[i].role  + "  _  " + movieData.cast[i].actor +"</li>";
    }
    
    listHtml += "</ul>";
    cast.innerHTML = listHtml;
      
    
     
     
     
     
     
     
     
     
     
     
     
     
   }
   
     
  })