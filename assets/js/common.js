
function scrollFunctionPC() {
    var heightHeader= $('header').height();
    var heightSlider= $('.c-slider').height();
    var heightNavi=$('.c-navi').height();
    var height= heightHeader+heightSlider +heightNavi;
    $(window).scroll(function(){
        if($(this).scrollTop()>=height){
            $("#navUp").css({
                'position':'fixed',
                'z-index':'1000',
                'bottom':'30px',
                'left':'0',
                'overflow':'initial',
                'width':'100%',
                'background-color': '#e5ded1',
                'padding':'25px 0'
            })
            $(".c-navi__top").css({
                'width':"1140px",
                'margin':'0 auto',
                'overflow':'initial',
                'padding':'0'

            })
            $(".c-navi__bottom").css({
                'width':"1140px",
                'margin':'0 auto',
            })
            $('.c-navi__title').css({'display':'none'})
            $('.c-navi__form--right .c-btn--red').css({
                'display':'block'
            })
            $('.c-navi__btn').removeClass("icon");
            $('.c-navi__form').css({
                'width':'500px'
            })
            $('.c-navi__form--right').css({
                'width':'340px',
                'display':'inline-flex'
            })
            $('.c-navi__btn').css({
                'padding':'10px'
            })
            $('.c-navi__btn:nth-child(2)').css({
                'margin-left':'20px'
            })
            
        }
        else{
            $("#navUp").css({
                'position':'inherit',
                'display':'block',
                'padding':'0'
            })
            $(".c-navi__top").css({
                'overflow':'hidden',
                'padding': '10px 40px 20px 40px'
            })
            $('.c-navi__title').css({'display':'block'})
            $('.c-navi__form--right .c-btn--red').css({
                'display':'none'
            })
            $('.c-navi__btn').addClass("icon");
            $('.c-navi__form').css({
                'width':'420px'
            })
            $('.c-navi__form--right').css({'width':'240px'})
        }
    })
}
function scrollFunctionMB() {
    var heightHeader= $('header').height();
    var heightSlider= $('.c-slider').height();
    var heightNavi=$('.c-navi').height();
    var height= heightHeader+heightSlider +heightNavi;
    $(window).scroll(function(){
        if($(this).scrollTop()>=height){
            $("#navUp").css({
                'position':'fixed',
                'z-index':'1000',
                'bottom':'30px',
                'left':'0',
                'display':'block',
                'background': 'none',
            })
            $(".c-navi__top").css({
                'width':"100%",
                'padding':'2%'

            })
        }
        else{
            $("#navUp").css({
                'display':'none'
            })
        
        }
    })
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// dropdown menu
$('.drawer').drawer();
$('#btnClose').click(function(){
    $('.drawer-hamburger-icon-nadrawerv').click();
})
  
// slider

$(".single-item").slick({
    dots: true,
    autoplay: true,
});

// tab

// Tab
function openTab(evt, name) {
	var i, tabcontent, tablinks;
	tabcontent = $(".c-tab--panes");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = $(" .c-tab__link");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

// dropdown

function dropDownMenu() {
    $("#dropdown").addClass("show");
    $('.dropDownMenu').css({
        'margin': '0 20px',
        'background': '#d5c5a7',
        'border': '1px solid rgba(255, 255, 255, 0.65)'
    })
    $('.dropDownMenu .c-section3__btnL').css({
        'margin':'5px 5px 10px 5px',
        'width':'98.8%',
        'background':'#333',
        'border':'0'
    })
    $(".dropDownMenu .c-section3__btnL").removeClass("plus");
    $(".dropDownMenu .c-section3__btnL").addClass("minus");
}
window.onclick = function(event) {
    if (!event.target.matches('.c-section3__btnL')) {
  
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            $('.dropDownMenu').css({
                'margin': '0',
                'background': 'none',
                'border': '0'
            })
            $('.dropDownMenu .c-section3__btnL').css({
                'margin':'25px 20px',
                'width':'94%',
                'background':'#d5c5a7',
                'border':'1px solid #fff'
            })
            $(".dropDownMenu .c-section3__btnL").removeClass("minus");
            $(".dropDownMenu .c-section3__btnL").addClass("plus");
          } 
      }
    
    }
}
$('#dropdown').click(function(){
    if (!event.target.matches('.c-section3__btnL')) {
        
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            } 
        }
        
        }
})
// add class responsive
$(window).resize(function(event){
    var width = $(window).width();
    console.log(width)
    if (width <= 767){
        console.log('aaa')
        // slider
        $('.c-section2__content li').addClass('sliderSection');
        $('.c-section2__content li').css({'display':'none'});
        $('.c-section2__content li.active').css({'display':'block'});
        window.onscroll = function() {scrollFunctionMB()};
    }else{
        $('.c-section2__content li').removeClass('sliderSection');
        $('.c-section2__content li').css({
            'display':'block'
        });
        window.onscroll = function() {scrollFunctionPC()};
    
    }
})
var width = $(window).width();

console.log(width);
if (width <= 767){
    // slider
    $('.c-section2__content li').addClass('sliderSection');
     $('.c-section2__content li').css({'display':'none'});
        $('.c-section2__content li.active').css({'display':'block'});
    window.onscroll = function() {scrollFunctionMB()};
    
}else{
    $('.c-section2__content li').removeClass('sliderSection');
    $('.c-section2__content li').css({
        'display':'block'
    });
    window.onscroll = function() {scrollFunctionPC()};
}
// slider content

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("sliderSection");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


// modal
// When the user clicks the button, open the modal 
function popup1() {
    // modal.style.display = "block";
    $('#modal1').css({'display':'block'})
}
function closePopup1(){
    $('#modal1').css({'display':'none'})
}
function popup2() {
    // modal.style.display = "block";
    $('#modal2').css({'display':'block'})
}
function closePopup2(){
    $('#modal2').css({'display':'none'})
}