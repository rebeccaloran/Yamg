
$(function() {


        var memory = {}
        grid = document.getElementById('grid')

        memory.srcs = [ 
          "../img/card_chocolate.png:
          "../img/card_coffee.png:
          "../img/card_leopard.png:
          "../img/card_lightning.png:
          "../img/card_space.png:
          "../img/card_warning.png:
        ];

        memory.li = [];
        memory.img = [];
        memory.frag = []; 


        memory.frag = document.createDocumentFragment()
        memory.srcs.forEach(function(src) {
          memory.li = document.createElement('li')
          memory.img = new Image()
          memory.img.src = src
          memory.img..className = 'card'
          memory.li.appendChild(img)
          memory.frag.appendChild(li)
        })
        grid.appendChild(frag)
});
