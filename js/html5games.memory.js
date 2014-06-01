$(function() { 


        // Create global objects
        var memory = {}


        // Create array of cards
        memory.cards = ["#card_chocolate", "#card_coffee", "#card_leopard"
        , "#card_lightning", "#card_space", "#card_warning"] 

        // create a 3x10 grid for the cards 
        memory.rowCount = 3;
        memory.columnCount = 10;
/*
        // I find sorting them randomly then showing the first 4 to be the easiest, like this:
        memory.divs = $("div.Image").get().sort(function(){ 
                    return Math.round(Math.random())-0.5; //so we get the right +/- combo
                   }).slice(0,4);
        $(divs).show();
 

        //You can test it out here. If you want to also randomize the order (not just which are shown), 
        //you already have them sorted so just append them to the same parent in their new order by changing this: 
        $(divs).show();
        //to this:
        $(divs).appendTo(divs[0].parentNode).show();
*/



        for(var i = 0; i < memory.rowCount; i++) {
               document.body.innerHTML += '<div class="row">'; 
        
                for(var j = 0; j < memory.columnCount; j++) {
                        document.body.innerHTML += '<button  href="#row' 
                        + (i) + '_' + (j) +  '" id="card_back"></button>';
                }
               
                document.body.innerHTML += '</div>'; 
        }



});


