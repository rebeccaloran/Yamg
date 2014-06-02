$(function() { 


        // Create global objects
        var memory = {}


        // Create array of cards
        // (I could hardcode the array to have 30 cards with the defined set...)
        memory.cards = [
                // 4 of each card
                "card_chocolate",
                "card_chocolate",
                "card_chocolate",
                "card_chocolate",

                "card_coffee", 
                "card_coffee", 
                "card_coffee", 
                "card_coffee", 

                "card_leopard",
                "card_leopard",
                "card_leopard",
                "card_leopard",

                "card_lightning",
                "card_lightning",
                "card_lightning",
                "card_lightning",

                "card_space",
                "card_space",
                "card_space",
                "card_space",

                "card_warning",
                "card_warning",
                "card_warning",
                "card_warning",

                // Plus 2 sets of 3 of the cards, 
                "card_warning",
                "card_warning",

                "card_space",
                "card_space",

                "card_lightning",
                "card_lightning"
        ];

        // create a 3x10 grid for the cards 
        memory.rowCount = 3;
        memory.columnCount = 10;
        // count the index for class name
        memory.slice = 0;


        /*
        setInterval(function() {
        memory.random = memory.cards[Math.floor(Math.random()*memory.cards.length)];
        });

        memory.deck = [];
        // Loop to create deck
        for (var i = 0; i < 30; i++) {
                memory.deck.push(memory.random); 
        }
        */

        // There are 30 cards total in deck
        //      [] There must be at least 2 of each card
        //      [] 2 * 6 = 12
        //              :: if there are 2 dets of 2 cards
        //                      () 2(2 * 6) = 24 r6;
        //              :: MUST pick 2 cards from 3 of the possible card choices
        //                      () 2 * 3 = 6;
        //
        function shuffle(cards) {
                var remaining = memory.cards.length, current, i;

                // While there remains elements to shuffle
                while (remaining) {

                        // Pick a remaining element
                        i = Math.floor(Math.random() * remaining--);

                        // And swap it with the current element
                        current = memory.cards[remaining];
                        memory.cards[remaining] = memory.cards[i];
                        memory.cards[i] = current; 
                }

                return cards;
        }

        
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


        // Create the grid of all face down cards 
        for(var i = 0 ; i < memory.rowCount; i++) {
               
               document.body.innerHTML += '<div class="row">'; 
        
                for(var j = 0; j < memory.columnCount; j++) {
                        document.body.innerHTML += '<img  class="' 
                        + (memory.slice) +  '" id="card_back"></img>';
                       ++ memory.slice;
                }
               
                document.body.innerHTML += '</div>'; 
        } 
        
        shuffle(memory.cards);
        console.log(memory.cards);
        memory.deck = [];
        console.log(memory.deck);
        
        
        // When clicking any of the elements, return className of clicked element
        
        
        $("img").click(function() {
                //alert(this.className);
                // create a css rule 
        
                i = memory.cards.pop();
                memory.deck.push(i);
                console.log(memory.cards);
                console.log(memory.deck);
       
                $(this).replaceWith('<img class="' + (memory.slice)
                        + '" id="' + (i) + '"></img>');
              
                
        }); 
             
});


