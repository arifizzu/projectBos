var name1=prompt("Enter Your Name");
 var name2=prompt("What Did I Call You");
 var a = name1.toLowerCase();
 var b = name2.toLowerCase();
  	if( (a== "dalila" || a== "diyana" || a== "dalila diyana" || a== "dalila diyana binti yusdi" || a== "dalila diyana bt yusdi" || a== "del") 
	  && (b=="diyana" || b=="yoda" || b=="yodalila" || b=="kak dila" || b=="del") )
  	{
  	    window.location.href="birthday.html";
  	}
  	else
  	{
  		alert("Invalid Details");
  		window.location.href="index.html";
  	}
  	