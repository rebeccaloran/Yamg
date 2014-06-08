$(function() { 

        function shuffle(cards) {
                var remaining = cards.length, current, i;

                // While there remains elements to shuffle
                while (remaining) { 
                        // Pick a remaining element
                        i = Math.floor(Math.random() * remaining--);

                        // And swap it with the current element
                        current = cards[remaining];
                        cards[remaining] = cards[i];
                        cards[i] = current; 
                }

                return cards;
        }

        // Create global objects
        var memory = {}

        memory.cards = []; 

        // Create array of cards
        // (I could hardcode the array to have 30 cards with the defined set...)
        // Bt I will instead use a set of card `types` that will be used in a for
        // loop to create an array of 36 cards
        memory.cardTypes = [ 
                "card_chocolate", 
                "card_coffee", 
                "card_leopard", 
                "card_lightning", 
                "card_space", 
                "card_warning", 
        ]; 

        for (i = 0; i < 36; i++) {
                for (j =0; j < memory.cardTypes.length; j++) {

                        memory.cards.push(memory.cardTypes[j]);
                }
        }

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
        var x = 0

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
                        var back = document.createElement("img"); 
                        
                        card.className = currentRow[j]; 

                        back.className = "card_back"; 
                        back.id = x;
                        
                       
                        // store the value of the card but only use when clicked 

                        // *add* this `card` as the next child of `rowDiv` 
                        rowDiv.appendChild(back); 
                        x++;
                        
                } 

        // now that this row is fully formed, add it to the DOM 
                document.body.appendChild(rowDiv); 
        } 

        // When clicking on a card, change the className to the corresponding
        // card in memory.cards according to the number of each card

        // Stores className of card clicked
        memory.cardsClicked = [];

        // Stores element of card clicked
        memory.currentCard = [];
        
        // Stores id number of card clicked to splice from memory.cards
        memory.card_id;
       
        $(document).click(function(event) {
         // if the element clicked has the name "card_back"
         if (event.target.className == "card_back") {
                 console.log(event.target);
                 memory.card_id = event.target.id;
                 // Add the class of the card
                 $(event.target).addClass(memory.cards[parseInt(memory.card_id)]); 

                 // remove the class "card_back"
                 $(event.target).removeClass("card_back");

                 // Keep track of the cards clicked
                 memory.currentCard.push(event.target); 
                 memory.cardsClicked.push(memory.cards[memory.card_id]); 
         
                if (memory.cardsClicked.length == 2) { 

                        $(".card_back").css("pointer-events", "none");
                        
                        if (memory.cardsClicked[0] == memory.cardsClicked[1]) { 
                                 setTimeout(function() { 
                                         $(memory.currentCard[0]).removeClass(
                                                 memory.cardsClicked[0]);

                                         $(memory.currentCard[1]).removeClass(
                                                 memory.cardsClicked[1]); 

                                         $(memory.currentCard[0]).addClass("card_blank"); 
                                         $(memory.currentCard[1]).addClass("card_blank"); 

                                         memory.cardsClicked = [];
                                         memory.currentCard = []; 

                                         $(".card_back").css("pointer-events", "");

                                 }, 2000); 
                        } 
                         
                        else if (memory.cardsClicked[0] != memory.cardsClicked[1]) { 
                                 setTimeout(function() { 

                                         $(memory.currentCard[0]).removeClass(
                                                 memory.cardsClicked[0]);

                                         $(memory.currentCard[1]).removeClass(
                                                 memory.cardsClicked[1]); 

                                         $(memory.currentCard[0]).addClass("card_back");
                                         $(memory.currentCard[1]).addClass("card_back");

                                         memory.cardsClicked = [];
                                         memory.currentCard = []; 
                                 
                                         $(".card_back").css("pointer-events", "");
                                 }, 2000); 
                                         
                        }
                }
         } 
        });
});
        

