$(function() { 

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
                "card_chocolate",
                "card_chocolate",

                "card_coffee", 
                "card_coffee", 
                "card_coffee", 
                "card_coffee", 
                "card_coffee", 
                "card_coffee", 

                "card_leopard",
                "card_leopard",
                "card_leopard",
                "card_leopard",
                "card_leopard",
                "card_leopard",

                "card_lightning",
                "card_lightning",
                "card_lightning",
                "card_lightning",
                "card_lightning",
                "card_lightning",

                "card_space",
                "card_space",
                "card_space",
                "card_space",
                "card_space",
                "card_space",

                "card_warning",
                "card_warning",
                "card_warning",
                "card_warning",
                "card_warning",
                "card_warning",

        ];
        memory.temp = [];

        memory.row1 = [];
        memory.row2 = [];
        memory.row3 = [];
        
        shuffle(memory.cards);
        for(i = 0; i < 36; i++) {

                while (i < 12) {
                memory.row1.push(memory.cards.pop()); 
                i++ 
                }
                while (i >= 12 && i < 24) {
                memory.row2.push( memory.cards.pop()); 
                i++ 
                }
                while (i >= 24 && i < 36) {
                memory.row3.push(memory.cards.pop()); 
                i++ 
                }
        }


        

        memory.grid = [
                memory.row1,

                memory.row2, 

                memory.row3 
        ]


        console.log(memory.row1);
        console.log(memory.row2);
        console.log(memory.row3);
        console.log(memory.grid);
        
});
/*
        // create a 3x12 grid for the cards 
        memory.rowCount = 3;
        memory.columnCount = 10;
        // count the index for class name
        memory.slice = 0;
*/

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

/*


        // Create the grid of all face down cards 
        for(var i = 0 ; i < memory.rowCount; i++) {
               
               document.body.innerHTML += '<div class="row">'; 
        
                for(var j = 0; j < memory.columnCount; j++) {
                        document.body.innerHTML += '<img  class="' 
                        + 'card_back" " id="' + (memory.slice) + '"></img>';
                       ++ memory.slice;
                }
               
                document.body.innerHTML += '</div>'; 
        } 
        
        shuffle(memory.cards);
        console.log(memory.cards);
        memory.deck = [];
        console.log(memory.deck);
        
        /*

        memory.positon = [
        {
                suit: "card_coffee", value: "0", flipped: false, position: {x: 0, y: 0},
                suit: "card_chocolate", value: "0", flipped: false, position: {x: 0, y: 0},
                suit: "card_leopard", value: "0", flipped: false, position: {x: 0, y: 0},
                suit: "card_lightning", value: "0", flipped: false, position: {x: 0, y: 0},
                suit: "card_space", value: "0", flipped: false, position: {x: 0, y: 0},
                suit: "card_warning", value: "0", flipped: false, position: {x: 0, y: 0} 
        }
        ];
        */
  /*    
      

     
        
        // When clicking any of the elements, return className of clicked element
        
        
        $("img").click(function() {
                //alert(this.className);
                // create a css rule 
        
                i = memory.cards.pop();
                memory.deck.push(i);
                console.log(memory.cards);
                console.log(memory.deck);
       
                $(this).replaceWith('<img class="' + (i)
                        + '" id="' + (memory.slice) + '"></img>');
              
                
        }); 
*/
        // I need a way of retaining the status and position of the cards. 
        // Smething similar to:
        /*
                [{suit: "D", value: "9", flipped: false, position: {x: 1, y: 10}, ...] 
        */
        // Which creates an array of an object

//});


