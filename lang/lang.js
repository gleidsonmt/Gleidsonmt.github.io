var langs = {'pt' : "Português", 'en' : "English"};
var langCode = '';
var langJS = null;

langCode = navigator.language.substr (0, 2);
 // alert(langCode);
  langCode = 'en';

if (langCode in langs) {
	$.getJSON('lang/'+langCode+'.json', translate);
}

var translate = function (jsdata)
{

	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
	    $(this).html (strTr);
	});
}