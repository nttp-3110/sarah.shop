window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btt_pc").style.display = "block";
    } else {
        document.getElementById("btt_pc").style.display = "none";
    }

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("btt_mb").style.display = "block";
  } else {
      document.getElementById("btt_mb").style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunctionPC() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function topFunctionMB() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// dropdown menu
function dropdownMenu() {
  document.getElementById("menuDropdown").classList.toggle("show");
  document.getElementById("btndropdown").classList.toggle("btnClick");
  
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btndropdown')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        document.getElementById("btndropdown").cremoveClass("btnClick");
        openDropdown.classList.remove('show');
      }
    }
  
  }
}



// responsive
$(window).resize(function(event){
 
     var width = $(window).width();
     if (width <= 768){
        //  header
    $('.l_header .container').addClass('container-fluid');
    $('.l_header .container').removeClass('container');
    
    
        $('.character .container').addClass('container-fluid');
        $('.character .container').removeClass('container');
        //  page index
        $('.p_content_01 .wrapper').addClass('container-fluid');
        $('.p_content_01 .wrapper').removeClass('wrapper');
        $('.p_content_01 .container-fluid .element').addClass('container');
        //  page consult
        $('.p_content_04 .wrapper').addClass('container-fluid');
        $('.p_content_04 .wrapper').removeClass('wrapper');
    
        $('.p_content_04 .menu_top ').addClass('container');
        $('.p_content_04 .title_head  ').addClass('container');
        $('.p_content_04 .content  ').addClass('container');

        // $('.p_content_04 #section_03 .info').addClass('container');
        // $('.p_content_04 #section_03 .line').addClass('container');
        
   
     }
    else{
      $('.l_header .container-fluid').addClass('container');
      $('.l_header .container-fluid').removeClass('container-fluid');
      
        $('.character .container-fluid').addClass('container');
        $('.character .container-fluid').removeClass('container-fluid');
        //  page index
        $('.p_content_01 .container-fluid').addClass('wrapper');
        $('.p_content_01 .container-fluid').removeClass('container-fluid');
        $('.p_content_01 .wrapper .element').removeClass('container');
        
        //  page consult
        $('.p_content_04 .container-fluid').addClass('wrapper');
        $('.p_content_04 .container-fluid').removeClass('container-fluid');

        $('.p_content_04 .menu_top ').removeClass('container');
        $('.p_content_04 .title_head  ').removeClass('container');
         $('.p_content_04 .content  ').removeClass('container');
        // $('.p_content_04 #section_03 .info').removeClass('container');
        // $('.p_content_04 #section_03 .line').removeClass('container');
        
   
     }
     
 });
 var width = $(window).width();
 console.log(width);
 if (width <= 768){
    //  header
    $('.l_header .container').addClass('container-fluid');
    $('.l_header .container').removeClass('container');

    // character
     $('.character .container').addClass('container-fluid');
     $('.character .container').removeClass('container');

    //  page index

    $('.p_content_01 .wrapper').addClass('container-fluid');
    $('.p_content_01 .wrapper').removeClass('wrapper');
    $('.p_content_01 .container-fluid .element').addClass('container');
    
    
    //  page consult
    $('.p_content_04 .wrapper').addClass('container-fluid');
    $('.p_content_04 .wrapper').removeClass('wrapper');

    $('.p_content_04 .menu_top ').addClass('container');
    $('.p_content_04 .title_head  ').addClass('container');
    $('.p_content_04 .content  ').addClass('container');
    
    
    // $('.p_content_04 #section_03 .info').addClass('container');
    // $('.p_content_04 #section_03 .line').addClass('container');


   
   
 }
 else{
  $('.l_header .container-fluid').addClass('container');
  $('.l_header .container-fluid').removeClass('container-fluid');
  
  $('.character .container-fluid').addClass('container');
  $('.character .container-fluid').removeClass('container-fluid');
  //  page index
  $('.p_content_01 .wrapper .element').removeClass('container');
  $('.p_content_01 .wrapper').addClass('wrapper');
  $('.p_content_01 .wrapper').removeClass('container-fluid');
  
   //  page consult
   $('.p_content_04 .container-fluid').addClass('wrapper');
   $('.p_content_04 .container-fluid').removeClass('container-fluid');
   

   $('.p_content_04 .menu_top ').removeClass('container');
   $('.p_content_04 .title_head  ').removeClass('container');
   $('.p_content_04 .content  ').removeClass('container');
   
  //  $('.p_content_04 #section_03 .info').removeClass('container');
  //  $('.p_content_04 #section_03 .line').removeClass('container');
   
   
 }



//  causeRepaintsOn = $("h1, h2, h3, p, span");
 
//  $(window).resize(function() {
//    causeRepaintsOn.css("z-index", 1);
//  });



//  /////fontsize

// function fontSizeBtnClickHandler(event)
// {