// This javascript file is about building pyramids


     document.body.innerHTML = "<p>Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?</p>"
     console.log("Svp faire entrer nombre des étages.");
     var x = parseInt(prompt('nombre des étages'));
    
if(x<=1 ||  x>25)
   {
          console.info("ERREUR. Veuillez Choisir un nombre supérieur à 1 et  inférieur à 25.");
    }

else
  {
        for (var i = 0; i < x; i++) 
        {
            for (var j = 0; j < x - i; j++) 
            {    document.body.innerHTML = "<p>&nbsp;</p>";       }

            for (var k = 0; k <= i; k++) 
            {    document.body.innerHTML = "<p>*&nbsp;</p>";     }

            document.body.innerHTML = "<br>";  
        
         }

  }




