var $frontend = $('.front_end');
var $backend = $('.back_end');
var $technologies = $('.technologies');
var $front = $('#front');
var $back = $('#back');
var $tech = $('#tech');

$backend.hide();
$technologies.hide();

$front.click(function(){
	if (document.body.scrollTop < 200 )
	{
		$('html,body').animate({scrollTop: 200}, 1000);
	}
	$frontend.addClass('animated fadeInLeft');
	$frontend.show();
	$backend.hide();
	$technologies.hide();
});

$back.click(function(){
	if (document.body.scrollTop < 200 )
	{
		$('html,body').animate({scrollTop: 200}, 1000);
	}
	$backend.addClass('animated fadeInLeft');
	$backend.show();
	$frontend.hide();
	$technologies.hide();
});

$tech.click(function(){
	if (document.body.scrollTop < 200 )
	{
		$('html,body').animate({scrollTop: 200}, 1000);
	}
	$technologies.addClass('animated fadeInLeft');
	$technologies.show();
	$backend.hide();
	$frontend.hide();
});
	


$('.toProjects, .toHome, .toContact').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
&& location.hostname == this.hostname) {
  var $target = $(this.hash);
  $target = $target.length && $target
  || $('[name=' + this.hash.slice(1) +']');
  if ($target.length) {
    var targetOffset = $target.offset().top;
    $('html,body')
    .animate({scrollTop: targetOffset}, 1000);
   return false;
  }
}
});

if(navigator.vendor != 'Apple Computer, Inc.')
{
	$('#span1').cycleText();
}








