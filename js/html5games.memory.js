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

        // create a 5x5 grid for the cards

<<<<<<< HEAD
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
=======
        var rowCount = 5;
>>>>>>> parent of 1141b68... got back of the cards, need to start working on flipping them. going to try loading images WITHIN js rather than css

        for(var i = 0; i < rowCount; i++) {
               document.body.innerHTML += '<div class="row">'; 
        
<<<<<<< HEAD
                for(var j = 0; j < memory.columnCount; j++) {
                        document.body.innerHTML += '<button  href="#row' 
                        + (i) + '_' + (j) +  '" id="card_back"></button>';
<<<<<<< HEAD
>>>>>>> parent of 7ed64cc... started new track
=======
>>>>>>> parent of 7ed64cc... started new track
=======
                for(var j = 0; j < rowCount; j++) {
                        document.body.innerHTML += '<a href="#" id="card_back">[]</a>';
>>>>>>> parent of 1141b68... got back of the cards, need to start working on flipping them. going to try loading images WITHIN js rather than css
                }
               
                document.body.innerHTML += '</div>'; 
        }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 1141b68... got back of the cards, need to start working on flipping them. going to try loading images WITHIN js rather than css
=======



>>>>>>> parent of 7ed64cc... started new track
=======



>>>>>>> parent of 7ed64cc... started new track
=======
>>>>>>> parent of 1141b68... got back of the cards, need to start working on flipping them. going to try loading images WITHIN js rather than css
});


