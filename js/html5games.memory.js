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
});


