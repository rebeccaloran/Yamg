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
                // 6 of each card
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

        // Initialize 3 rows; each row will hold 12 cards
        memory.row1 = [];
        memory.row2 = [];
        memory.row3 = [];
        
        // shuffle the deck
        shuffle(memory.cards);
        // count until 35, giving us 36 values for i
        for(i = 0; i < 36; i++) {

                // add 12 cards from index i (0-11) into row1 
                while (i < 12) {
                memory.row1.push(memory.cards[i]); 
                i++ 
                }
                // add 12 cards from index i (12-23) into row2 
                while (i >= 12 && i < 24) {
                memory.row2.push(memory.cards[i]); 
                i++ 
                }
                // add 12 cards from index i (24-35) into row3 
                while (i >= 24 && i < 36) {
                memory.row3.push(memory.cards[i]); 
                i++ 
                }
        }

        // Create a "grid" which is an array of the 3 arrays we just made
        memory.grid = [
                memory.row1,

                memory.row2, 

                memory.row3 
        ]


        // Display the contents of the arrays to the console
        console.log(memory.row1);
        console.log(memory.row2);
        console.log(memory.row3);
        console.log(memory.grid);
        

        // Iterate through the rows 
        for (var i = 0; i < memory.grid.length; i++) {

                // Store this row 
                var currentRow = memory.grid[i];

                // create a new div (with a “row” class) 
                var rowDiv = document.createElement("div"); 
                rowDiv.className = "row";


                // Iterate through each column (each card) 
                for (var j = 0; j < memory.grid[i].length; j++) {

                // generate an <img class="card_name"> 
                        var card = document.createElement("img"); 
                        /*
                        card.className = currentRow[j];
                        */
                        card.className = "card_back";

                        // *add* this `card` as the next child of `rowDiv` 
                        rowDiv.appendChild(card); 
                }

        // now that this row is fully formed, add it to the DOM 
                document.body.appendChild(rowDiv); 
        } 

        // Somehow I need to store the grid and have their className = card_back until clicked
        //     [] when clicked
        //              :: "flip" the card, revealing its card_class
});

