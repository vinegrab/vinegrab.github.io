
function Validations()
	{
		var ErrorMsg = "Following fields must be completed.. \n\n";
		var Error = 0;
		
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = document.getElementById('gp_email').value;
		
		//name validation start
		if(document.getElementById('gp_name').value == "" ){
			ErrorMsg = ErrorMsg + "Please Provide Your  Name \n\n";
			Error = 1;
		}
		//name validation end
		
		//email validation start
		if(document.getElementById('gp_email').value == "" )
		{
			ErrorMsg = ErrorMsg + "Please Provide Your Email \n\n";
			Error = 1;
		}
		else
		{
			if(reg.test(address) == false) {
				ErrorMsg = ErrorMsg + "Please Provide Your Valid Email Address \n\n";
				Error = 1;
			}
		}
		//email validation end
		
		//phone validation start
		//if(document.getElementById('phone').value.search(/\d{3}\-\d{3}\-\d{4}/)==-1 && document.getElementById('phone').value.search(/\d{3}\s{1}\d{3}\s{1}\d{4}/)==-1 && document.getElementById('phone').value.search(/\d{10}/)==-1){
		//	ErrorMsg = ErrorMsg + "Enter Valid Phone : e.g. (xxx-xxx-xxxx or xxx xxx xxx or xxxxxxxxxx) \n\n";
	//		Error = 1;
		//		
	//	}
		//phone validation end
		
		//comments validation start
		if(document.getElementById('gp_message').value == "" ){
			ErrorMsg = ErrorMsg + "Please Provide Your Comments \n\n";
			Error = 1;
		}
		//comments validation end		
			
		if(Error == 1){
			alert(ErrorMsg);
			return false;
		}
		else{
			return true;
		}
	}