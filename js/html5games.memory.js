<<<<<<< HEAD

$(function() {


        var memory = {}
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
                }
               
                document.body.innerHTML += '</div>'; 
        }
>>>>>>> parent of 1141b68... got back of the cards, need to start working on flipping them. going to try loading images WITHIN js rather than css
});
