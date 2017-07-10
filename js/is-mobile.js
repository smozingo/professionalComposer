var isMobile = false, isiPad =false, iOS5=false;

if( navigator.userAgent.match(/Android/i) || 
	navigator.userAgent.match(/webOS/i) ||
	navigator.userAgent.match(/iPhone/i) || 
	navigator.userAgent.match(/iPad/i)|| 
	navigator.userAgent.match(/iPod/i) || 
	navigator.userAgent.match(/BlackBerry/i)){
		isMobile = true;
}

if(navigator.userAgent.match(/iPad/i)) {
	isiPad = true;
}

if (navigator.userAgent.match(/OS 5(_\d)+ like Mac OS X/i)) {
	iOS5=true;
}