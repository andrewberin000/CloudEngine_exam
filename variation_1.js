$( document ).ready(function() {
	
// styles
$('head').append('<style>input {margin: 30px 41px;}.catteg{background-color:#1dc99d;color:#fff;text-transform:uppercase;border-radius:5px;border:none;padding:17px 51px;font-size: 13px;font-weight:bold;margin:30px 41px,font-family: arial;}</style>')

// adding new buttons
$('.tabbed-overview__copy').after('<input type="button" class="catteg" id="getStronger" value="Get Stronger"/><input type="button" class="catteg" id="getLearner"value="Get Learner"/><input type="button" class="catteg" id="getFaster" value="Get Faster"/>');

//All les mills workouts" to "what is your fitness goal"
$('.tabbed-overview__title').text('What is your fitness goal?');
$('.tabbed-overview__copy').text('From flexibility to HIIT and everything inbetween. choose type exercise you enjoy and we can then personalise our program suggestion to suit your needs.');

//adding ID of Parent categories and class of each category.---filtering class.
$("ul.class-list__list").attr("id","lessMillscategories");
$(".class-list__item:nth-child(4), .class-list__item:nth-child(1), .class-list__item:nth-child(13)").addClass("getStronger");
$(".class-list__item:nth-child(2), .class-list__item:nth-child(3), .class-list__item:nth-child(5),.class-list__item:nth-child(6), .class-list__item:nth-child(7), .class-list__item:nth-child(8), .class-list__item:nth-child(8), .class-list__item:nth-child(10), .class-list__item:nth-child(11)").addClass("getLearner");
$(".class-list__item:nth-child(12), .class-list__item:nth-child(14), .class-list__item:nth-child(15), .class-list__item:nth-child(16), .class-list__item:nth-child(17), .class-list__item:nth-child(18), .class-list__item:nth-child(19), .class-list__item:nth-child(20)").addClass("getFaster");

//fitness goals list----filtered
var $lesmillsCateg = $('.catteg').click(function() {
    var $buttonCatteg = $('.'+ this.id).show();
    $('#lessMillscategories > li').not($buttonCatteg).hide();

      $lesmillsCateg.removeClass('active');
      $(this).addClass('active');

    })

});
