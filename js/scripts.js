$(document).ready(function(){
    
    $('#submitButton').click(function(event){
        event.preventDefault();
        $("#wordPuzzle").empty();
        $("#user-input").toggle();
        var userInput = $('input#user-input').val();
        // console.log(input)
        for (var i=0; i < userInput.length; i++){
            if (userInput.charAt(i) === "a" || userInput.charAt(i) === "e" ||userInput.charAt(i) === "i" ||userInput.charAt(i) === "o" || userInput.charAt(i) === "u"){
                $("#wordPuzzle").append("-");
            }
            else {
            $("#wordPuzzle").append(userInput.charAt(i));
            };
        
        
        
        
        }
                
        });
        
    });
