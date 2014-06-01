<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

$(function() {
=======
$(function() { 
>>>>>>> parent of 7ed64cc... started new track
=======
$(function() { 
>>>>>>> parent of 7ed64cc... started new track


        // Create global objects
        var memory = {}
<<<<<<< HEAD
<<<<<<< HEAD
       memory.grid = document.getElementById('grid')

        memory.srcs = [ 
          "img/card_chocolate.png",
          "img/card_coffee.png",
          "img/card_leopard.png",
          "img/card_lightning.png",
          "img/card_space.png",
          "img/card_warning.png"
        ]

        memory.li = [];
        memory.img = [];
        memory.frag = []; 


        memory.frag = document.createDocumentFragment();
        memory.srcs.forEach(function(src) {
        memory.btn = document.createElement('button');
        memory.img = new Image();
        memory.img.src = src;
        memory.img.className = 'card';
        memory.button.appendChild(memory.img);
        memory.frag.appendChild(memory.button);
        
        });
        memory.grid.appendChild(memory.frag);
=======
$(function() { 

        // create a 5x5 grid for the cards

        var rowCount = 5;

        for(var i = 0; i < rowCount; i++) {
               document.body.innerHTML += '<div class="row">'; 
        
                for(var j = 0; j < rowCount; j++) {
                        document.body.innerHTML += '<a href="#" id="card_back">[]</a>';
=======
=======
>>>>>>> parent of 7ed64cc... started new track


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
<<<<<<< HEAD
>>>>>>> parent of 7ed64cc... started new track
=======
>>>>>>> parent of 7ed64cc... started new track
                }
               
                document.body.innerHTML += '</div>'; 
        }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 1141b68... got back of the cards, need to start working on flipping them. going to try loading images WITHIN js rather than css
=======



>>>>>>> parent of 7ed64cc... started new track
=======



>>>>>>> parent of 7ed64cc... started new track
});


