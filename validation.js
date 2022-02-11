function validatemail()
{
	event.preventDefault();
	var email = /^([a-zA-Z0-9\.-]{4,20})@([a-zA-Z0-9\-]{2,20}).([a-z]{2,5})(.[a-z]{2,5})?$/.test(mail);
}

function validatepassword()
{
	
 var Password =	/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(Pass);
}
	
function validatephone()
{	

var phone=/^[6789]\d{9}$/.test(phone);
}

function validatename()
{

var name=/^[A-Za-z\s]{25}$/.test(name);
}

function validatecity()
{

var city=/^[a-zA-z\s]{30} ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/.test(city)

}

function validatepin()
{
var pin=/^[0-9]{6}$/.test(pin)

}