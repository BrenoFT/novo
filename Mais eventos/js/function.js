$(function(){
    
    $('body').click(function(){
        $('.box').css('background-color','green')    
    })


    $('.box').click(function(e){
        e.stopPropagation();
    })

    $('.box').click(function(){
        $('.box').css('background-color','#ccc')   
    })
    
})