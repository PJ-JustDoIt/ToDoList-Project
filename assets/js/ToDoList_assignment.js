

//strike off - gray , no strike - black for the todo clicked, unclicked
$("ul").on("click","li",function(){    					   
   $(this).toggleClass("completed") ;
});


// to remove the html element if the X is clicked
$("ul").on("click","span",function(event){
   event.stopPropagation();                                    
   $(this).parent().fadeOut(400,function(){					   
   	          $(this).remove();								   
   }) ;								   
});


// to add a new to-do task in the input box and add it to the list at the bottom
$("input").keypress(function(event){

 	if(event.which===13){
 		var newtodo=$(this).val();
 	    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>"+newtodo+" </li>");  
 	    														
 	    // Below to empty the input box   
 	    $(this).val("");           }    
});


// for the input form to vanish or come back if + sign clicked
$(".fa-plus").on("click",function(){
	$("input").fadeToggle();
});
