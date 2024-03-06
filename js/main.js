wow = new WOW(
{
boxClass:     'wow',      // default
animateClass: 'animate__animated', // default
offset:       0,          // default
mobile:       true,       // default
live:         true        // default
}
)
wow.init();

// $(window).stellar();


$(document).ready(function(){

$(".has-megamenu").mouseover(function(e){
	$("#overlay").show();
});


$(".has-megamenu").mouseout(function(e){
	$("#overlay").hide();
});


    if($("#test-slider").length > 0 ) {
   
        var testslider = $("#test-slider").find('.owl-carousel');


        testslider.on('initialized.owl.carousel', function(property) {
            // its important to place initialized.owl.carousel before attaching owl-carousel
            var current = property.item.index;
            var prev = $(property.target).find(".owl-item").eq(current).prev().find("img").attr('src');
            var next = $(property.target).find(".owl-item").eq(current).next().find("img").attr('src');
            
            $('.navPrev').find('img.thumb').attr('src', prev);
            $('.navNext').find('img.thumb').attr('src', next);
        
        });

        testslider.owlCarousel({
            stagePadding: 130,
            loop:true,
            dots:false,
            margin:20,
            nav:false,
            // animateOut: 'animate__slideOutDown',
            // animateIn: 'animate__flipInX',
            autoplay:true,
            smartSpeed:450,
            touchDrag  : false,
            mouseDrag  : false,
            items:1,
            autoWidth:false,
            center:true,
        });

        testslider.on('changed.owl.carousel', function(property) {
            var current = property.item.index;
            var prev = $(property.target).find(".owl-item").eq(current).prev().find("img").attr('src');
            var next = $(property.target).find(".owl-item").eq(current).next().find("img").attr('src');
            $('.navPrev').find('img.thumb').attr('src', prev);
            $('.navNext').find('img.thumb').attr('src', next);
        });
        
        $('.navNext').on('click', function() {
            testslider.trigger('next.owl.carousel', [300]);
            return false;
        });
        
        $('.navPrev').on('click', function() {
            testslider.trigger('prev.owl.carousel', [300]);
            return false;
        });
    }


});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 114) {
        //clearHeader, not clearheader - caps H
        $(".top_navBar").addClass("sticky-fixed");
    }
    else {
    	  $(".top_navBar").removeClass("sticky-fixed");	
    }
}); //missing );


if($(".quiz-carousel").length > 0) {
    $('.quiz-carousel').owlCarousel({
        stagePadding: 80,
        loop:false,
        dots:false,
        margin:20,
        nav:false,
        touchDrag  : false,
        mouseDrag  : false,
        // navText: ["<i class='fas fa-arrow-left'></i>","Next"],
        // navContainer: '.owl-container .custom-nav',
        // navClass: ["owl-prev rounded-circle d-none","owl-next rounded-circle"],
        items:3,
        autoWidth:false,
        center:true,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        responsive:{
            0:{
                items:1,
                stagePadding:0
            },
            768:{
                items:3,
                stagePadding:0
            },
            992:{
                items:3,
                stagePadding:60
            },
            1200:{
                items:3
            }
        }
});
}







$('.btnJump').click(function(){

           if ($('input[name="people-use"]:checked').length == 0) {
             alert('please choose the answer.');
             return false; } 
              else {
               $('.owl-carousel').trigger('to.owl.carousel', 1)
           }
           return false;
  });

$('.btnJump2').click(function(){
    if ($('input[name="how-many-device-use-the-internet"]:checked').length == 0) {
      alert('please choose the answer.');
      return false; } 
       else {
        
        var indexToRemove = 0;
        $('.owl-carousel').owlCarousel('remove', indexToRemove).owlCarousel('update');
        $('.owl-carousel').trigger('to.owl.carousel', 1);
        $('.owl-carousel').owlCarousel('remove', [0]).owlCarousel('update');
    }
         return false;
  });

// $("#enroll-wrapper form").submit(function(e){
//     e.preventDefault();
    
// });

var nextTab;

function nextForm(obj) {

    var tabVal = $(obj).attr('nexttab');  
    // if(tabVal == 1){
    //     $("#otp-box").show();
    //     return false;
    // }   
    tabShowHide(tabVal);
    $("#step-"+tabVal).hide();
    var nextTab =  Number(1) + Number(tabVal);
    $("#step-"+nextTab).show();
    $(".tab-progress li").eq(nextTab - 1).addClass('active');
    $(obj).attr('nexttab',nextTab);
    var prevTabVal = $("#prevBtn").attr("prevtab");
    $("#prevBtn").attr("prevtab", Number(prevTabVal) +  Number(1));
    
    if(tabVal == 8) {
        $(obj).hide();
        $("#register-btn").show();
    } 
    $("#prevBtn").attr("href",'#');
    
}

$("#prevBtn").attr("href",'login.html');


function tabShowHide(tabVal){
    if(tabVal === 0 ) {
        $("#prevBtn").hide();
    }else {
        $("#prevBtn").show();
    }
}

function backForm(obj) {
    var tabVal = $(obj).attr('prevtab'); 
    var nextBtnVal = $("#nextBtn").attr("nexttab");
    // alert(tabVal);
    if(tabVal == 1 ) {
        $(obj).attr('href',"login.html");
    }   
    var prevIndex = tabVal - Number(1);
    
    $(obj).attr("prevtab",prevIndex);
    $("#nextBtn").attr("nexttab",Number(nextBtnVal) - Number(1));
    $("#step-"+tabVal).show();
    $("#step-"+ nextBtnVal).hide();
    $(".tab-progress li").eq(nextBtnVal - 1).removeClass('active');
    tabShowHide(prevIndex);
 
        $("#nextBtn").show();
        $("#register-btn").hide();
    
}

// Add More Btn

// $("span#add-more-input").click(function () {
//     var html = '';
//     html += '<div class="input-add-more w-100 position-relative mt-3" id="inputFormRow">';
//     html += '<span id="remove-input">';
//     html += '<img src="images/minus-sign.png" width="18px" alt="">';
//     html += '</span>';
//     html += '<input type="text" name="add-contact-no[]" placeholder="Add Contact No." class="border-dashed" id="">';
//     html += '</div>';
//     if($(".input-add-more").length < 6){
//         $('#more').append(html);
//     } 
// });

$("#add-more-usage").click(function(){

    var html = '';
        html += '<div id="more-usage-box" class="position-relative mt-3 mb-2">';
        html += '<input type="text" name="more-usage" class="w-100" id="more-usage">';
        html += '<span class="close-btn" style="display: block;"><img src="images/login/close-btn.png" width="24px" alt=""></span>';
        html += '</div>';
    $("#before-usage").before(html);

});


$(document).on('click','.close-btn', function (){
    $(this).parent().remove();
});

$("#add-more-contact-btn").click(function(){

    if($("#more_contact > .other-device-box").length < 4) {
        $('#add-more-contact-btn').hide();
        $("#add-more-textbox").show();
    }
});


$("#add-more-contact").keyup(function(){

    
    if($(this).val() == "") {
        $('.save-more-btn').hide();
        
    }
    else{ $('.save-more-btn').fadeIn(); }
        
});

$(".save-more-btn").click(function(){
        var html = '';
        var contact_number = $(this).prev("input#add-more-contact").val();
            // console.log(contact_number);
        if($("#more_contact > .other-device-box").length < 4) {
            html += '<div class="bg-white other-device-box mb-3">';
            html += '<span>'+contact_number+'</span>';
            html += '<input type="hidden" name="other-contact[]" value="'+contact_number+'" />'
            html += '<span id="close"><img src="images/login/close-btn.png" width="25px"/></span>';
            html += '</div>';
            $(this).hide();
            $(this).parent().hide();
            $(this).prev("input#add-more-contact").val('');
            $("#more_contact").append(html);
            $('#add-more-contact-btn').show();
        } 
        
            
});

$(document).on('click','#close', function (){

    $(this).parent(".other-device-box").remove();
});


$(document).on('click', '.remove-usage', function () {
    $(this).closest('#more-usage-row').remove();
});

$(document).on('click', '#remove-input', function () {
    $(this).closest('#inputFormRow').remove();
});


$('.add').on('click',function(){
    var $qty=$(this).closest('div').find('.qty');
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal)) {
        $qty.val(currentVal + 1);
    }
});
$('.minus').on('click',function(){
    var $qty=$(this).closest('div').find('.qty');
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal > 0) {
        $qty.val(currentVal - 1);
    }
});

if($("#urgent-date").length > 0){

$('#urgent-date').datepicker();

}

$("#makePayment").click(function(e){
    e.preventDefault();
    $(this).toggleClass('disabled');
    $("#payment-content").toggle();
    
    $('html, body').animate({
        scrollTop: $("#payment-content").offset().top
    }, 100);

});

$(".call-my-modal").click(function(e){
    e.preventDefault();

    var targetmodal = $(this).attr("target-modal");
    $("#"+targetmodal).show();

});

$(".modal-close-btn").click(function(e){
    e.preventDefault();
    // $(this).find(".payment-detail").hide();
    $(this).parent('div').parent('div').parent('section').parent('div').parent('div').hide();

});

if($("#inline_cal").length > 0 ) {
    rome(inline_cal, { time: false }).on('data',function(value){
        $("#curvalue").val(value);
    });
}

$("#pack-detail div#packs,#normal-ug-packs div#packs").click(function(e){
    e.preventDefault();
    
    var targetpack = $(this).attr("target-pack");

    $("div#packs").each(function(index, element){
        $(this).removeClass('active').addClass(" ");
       
       //dashboard and normal
        if($(this).parent("div").parent().attr("id") == "pack-detail" ) {
            console.log($(this).parent("div").parent().attr("id"));
            $(this).find('.card-img').hide();
            $(this).find('.card-img:first-child').show();
        }
        else {
            $(this).addClass("inactive");
        }
    });

    //dashboard and normal
    if($(this).parent("div").parent().attr("id") == "pack-detail" ) {
    $(this).find(".card-img").toggle();
    }else {
        $(this).removeClass("inactive");
    }
    
    $(this).addClass("active");

    $( "div.packlist" ).each(function( index, element ) {
       
        if ( $( this ).is(':visible') ) {
            $( this ).hide();
          return false;
        }
      });

      var fisrt_left_pos = $("#packs").first().offset().left;
      var cur_left_pos = $(this).offset().left+1;
      var parent_width = $(this).parent("div").parent(".row").width();
      $("#"+targetpack).slideDown().css({left:fisrt_left_pos-cur_left_pos,width:parent_width});  
});

ShowDown = (element) => { 

    $("#login-box").hide();
    const targetElement = $(element).attr("targetElement");
    $('.faq-toggle-box').map(function(){
        if($(this).is(":visible")){
            $(this).hide();
        }
    });
    $(targetElement).fadeIn(400);
    
    $('html, body').animate({
        scrollTop: $(targetElement).offset().top
    }, 300);
    
};

$(".job-submit-btn").click(function(e){
    e.preventDefault();

    $("#complete-job-popup").fadeIn();
});


if($(".filter-col-group").length > 0 ){
    var $grid = $('.filter-col-group').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
      });
}

  // filter functions
//   var filterFns = {
//     // show if number is greater than 50
//     numberGreaterThan50: function() {
//       var number = $(this).find('.number').text();
//       return parseInt( number, 10 ) > 50;
//     },
//     // show if name ends with -ium
//     ium: function() {
//       var name = $(this).find('.name').text();
//       return name.match( /ium$/ );
//     }
//   };
  // bind filter button click
  $('.filter-btn-group').on( 'click', '.filter-btn', function(e) {
    e.preventDefault();
    var filterValue = $( this ).attr('data-filter');

    // use filterFn if matches value
    filterValue = filterValue;
    // alert(filterValue);
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.filter-btn-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', '.filter-btn', function() {
      $buttonGroup.find('.is-filter').removeClass('is-filter');
      $( this ).addClass('is-filter');
    });
  });

  $("ul.left-nav li.nav-item.has-dropdown").click(function(e){
        e.preventDefault();
        $(this).children('.dropdown').slideToggle();
  });

  function OTPInput() {
    const inputs = document.querySelectorAll('#otp > *[id]');
    for (let i = 0; i < inputs.length; i++) { inputs[i].addEventListener('keydown', function(event) { if (event.key==="Backspace" ) { inputs[i].value='' ; if (i !==0) inputs[i - 1].focus(); } else { if (i===inputs.length - 1 && inputs[i].value !=='' ) { return true; } else if (event.keyCode> 47 && event.keyCode < 58) { inputs[i].value=event.key; if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } else if (event.keyCode> 64 && event.keyCode < 91) { inputs[i].value=String.fromCharCode(event.keyCode); if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } } }); }
 } 
 
 OTPInput();

 var timer2 = "2:01";
var interval = setInterval(function() {


  var timer = timer2.split(':');
  //by parsing integer, I avoid all extra string processing
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = (seconds < 0) ? --minutes : minutes;
  seconds = (seconds < 0) ? 59 : seconds;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  //minutes = (minutes < 10) ?  minutes : minutes;
  $('.countdown').html('0'+minutes + ':' + seconds);
  if (minutes < 0) clearInterval(interval);
  //check if both minutes and seconds are 0
  if ((seconds <= 0) && (minutes <= 0)) clearInterval(interval);
  timer2 = minutes + ':' + seconds;
}, 1000);


$('select.cus-dropdown').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
        if ($this.children('option').eq(i).is(':selected')){
            // $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected');
            $styledSelect.text($this.children('option').eq(i).text()).removeClass('active');
        }
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        
        $listItems.removeClass('is-selected');
    
         $(this).addClass('is-selected');
        if($this.attr("id")=="other-device"){
           
            OtherDevice($(this).text());
            
        }
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});



$("input[name='copy-address']").click(function(){

    var value = $(this).val();
 
     var home_no = $("#home-no").val();
     var street = $("#street").val();
     var region = $("#region").val();
     var city = $("#city").val();
     var township = $("#township").val();
     var ward = $("#ward").val();
     var zip_code = $("#zip-code").val();
    
     if(value==1){
        $("#billing-home-no").val(home_no).addClass("disabled");
        $("#billing-street").val(street).addClass("disabled");
        $("#billing-ward").val(ward).addClass("disabled");
        $("#billing-zip-code").val(zip_code).addClass("disabled");
        SetSelected("#billing-region",region);
        SetSelected("#billing-city",city);
        SetSelected("#billing-township",township);
     } else {
        $("#billing-home-no").val(home_no).removeClass("disabled");
        $("#billing-street").val(street).removeClass("disabled");
        $("#billing-ward").val(ward).removeClass("disabled");
        $("#billing-zip-code").val(zip_code).removeClass("disabled");
        removeSelected("#billing-region",region);
        removeSelected("#billing-city",city);
        removeSelected("#billing-township",township);
     }
     
     

     
 
 });

 removeSelected = (target) => {
    $(target).removeClass("disabled");
    $(target).next(".select-styled").removeClass("disabled");
 }

 SetSelected = (target,value) => {
    $(target+" option[value="+value+"]").attr('selected', 'selected');
     $(target).next(".select-styled").html(value).addClass("disabled");
 }
 

$(".add-more-card").click(function(){
    $("#other-to-show").toggle();
});

    var device = [];

OtherDevice = (text) => {
    //  device.push(text);
     if (device.includes(text) === false) {device.push(text) } else { alert("This device was already choosen.") };
     
     var html = showHideDevice(device);
    var count = device.length;
    $("#other-device-qty").val(count);
    $("#device-box").html(html);
    $("#other-to-show").hide();
    
}

showHideDevice = (device) => {
    var html ="";
    $(device).each(function(index,value){
       
        if(index < 2 ) {
            html += '<div class="bg-white other-device-box my-3">';
            html += '<span>'+value+'</span>';
            html += '<span id="close"><img src="images/login/close-btn.png" width="25px"/></span>';
            html += '</div>';
            $(".more_count").hide();
        }else {
            html += '<div class="bg-white other-device-box my-3" style="display:none;">';
            html += '<span>'+value+'</span>';
            html += '<span id="close"><img src="images/login/close-btn.png" width="25px"/></span>';
            html += '</div>';
            $(".more_count > .number").html(device.length - 2);
            $(".more_count").show();
        }
    });

    return html;
}

$('body').on('click', '.other-device-box span#close', function() {
    $(this).parent('div').remove();
    var cur_value = $(this).prev('span').text();
    device = $.grep(device, function(value) {
        return value != cur_value;
      });
      var html = showHideDevice(device);
      $("#device-box").html(html);
      var count = device.length;
      $("#other-device-qty").val(count);
});

$("body").on("click",'.more_count', function(e){
    e.preventDefault();
    $(".other-device-box").slideDown();
    $(this).hide();
});


$(".optional-header .optional-toggle").click(function(){
    $(this).children("span").find("img").toggle();
    $(this).parent(".row").parent(".optional-header").next(".optional-body").slideToggle();
});

$(".info-click").click(function(){
    $(this).children("img").toggle();
    $(this).children(".info-box").toggleClass("fadein");
});

$("input[name='month-cost']").click(function(){
    var val = $(this).next('label').children("h3").html();
    var month = $(this).next('label').children("span").html();
    console.log(val);

    $("h3 span#setup-price").html(val);
    $("p span#setup-month").html(month);
    $("#setup-charges-box").fadeIn();
    $('html, body').animate({
        scrollTop: $("div#setup-charges-box").offset().top
    }, 300);

});


$("input[name='payment-setup']").click(function(){

    var val = $(this).val();
   
    
    if( val == 'all-at-once') {

       $("#setup-charges-box").hide();
        $("#over-time-box").hide();
        $("#all-at-once-box").show();
    }
    else {
        $("#over-time-box").show();
        $("#all-at-once-box").hide();
    }

});




function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
    alert("Geolocation is not supported by this browser.");
    }
  }


  function showPosition(position) {
    // x.innerHTML = "Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude;
    $("#lat-long").val(position.coords.latitude + ", " + position.coords.longitude);
  }

$("#lat-long").click(function(){
    getLocation();    
});




