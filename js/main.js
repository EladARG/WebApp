current_tab = "quick-reports";

function Initialize() {//onload

	current_tab = window.location.hash.substring(1);
	switch(current_tab) {
	    case "quick-reports":
	  		var elem = document.getElementById("input-wrap-quick-reports");
	 		var settings = document.getElementById("settings");
	  		var frame = document.querySelector('#frame01');
	  		var list = document.querySelector('#links-list01');
	 		var expand = document.querySelector('#expand01');
		    var cancel = 'cancel';
	        break;
	    case "my-folders":
		    var frame = document.querySelector('#frame02');
		    var expand = document.querySelector('#expand02');
		    frame.src = "http://www.sport5.co.il/";
		    expand.href = "http://www.sport5.co.il/";
	        break;
	    case "my-team-folders":
	  		var elem = document.getElementById("input-wrap-team-folders");//check
	  		var settings = document.getElementById("settings");
	  		var frame = document.querySelector('#frame03');
	  		var list = document.querySelector('#links-list02');
	  		var expand = document.querySelector('#expand03');
	  		var cancel = 'fcancel';
	    	break;
	    case "public-folders":
		  	var frame = document.querySelector('#frame04');
		 	var expand = document.querySelector('#expand04');
		    frame.src = "http://www.one.co.il/";
		    expand.href = "http://www.one.co.il/";
	    	break;
	    case "":
	  		var elem = document.getElementById("input-wrap-quick-reports");
	 		var settings = document.getElementById("settings");
	  		var frame = document.querySelector('#frame01');
	  		var list = document.querySelector('#links-list01');
	 		var expand = document.querySelector('#expand01');
		    var cancel = 'cancel';
	    	break;
	    default:
	}


	//onresize
	
   //  var i;
  	// for(i=list.options.length-1;i>=0;i--)
  	// {
   //  	list.remove(i);
  	// }
	ShowLinks();

	InitKeyEvents();


	if(frame.src!="about:blank"){
	    list.style.display = "block"
	    cancel_input(cancel);
	    expand.style.display = "block"
        frame.style.display = "block"
	}
	else {
	    list.style.display = "none"
	    elem.style.display ="block";
	    settings.style.background="white";
	    frame.style.display = "none"
	}
  
}






function Search() {//onsearch
 

    for (var i = 0; i < localStorage.length; i=i+2){
        // var curr_tab = window.location.hash.substring(1);

   		var search = document.getElementById("search");
   		var name = localStorage.getItem(localStorage.key(i));
   		var t_name = localStorage.key(i).split("->", 1);
   		var url = localStorage.getItem(localStorage.key(i+1));
   		var t_url = localStorage.key(i+1).split("->", 2).pop();
   		var type = localStorage.key(i).split("->").pop();

    	if(name==search.value){
   			current_tab = url;
    		if(type == "report"){
     
		      	if((current_tab == "quick-reports")||(current_tab=='')){ 
		        	SwitchTab(current_tab);
		        	var list = document.querySelector('#links-list01');    
		        	t_name =t_name + "";
		        	var num = t_name.substring(4, 5);	     
		        	list.selectedIndex = (num-1);
		        	current_tab = "quick-reports";
		        }
		        else{
		      		window.location.hash = "quick-reports";
		        }
		    	return;
	   		}else{ 
		      	if(current_tab =="my-team-folders" ){
		  
		        	SwitchTab(current_tab);
		      		var list = document.querySelector('#links-list02');
		        	t_name =t_name + "";
		        	var num = t_name.substring(4, 5); 
		        	list.selectedIndex = (num-1);
		        	current_tab = "my-team-folders";
		        } 
		        else{
		        	window.location.hash ="my-team-folders";
		        }
		    	return;
	   		}

		}
 
	}
	   
  	var search = document.querySelector('#search');

	var tab = window.location.hash.substring(1);
	switch(tab) {
	    case "quick-reports":
	        var list = document.querySelector('#links-list01');
	     	var frame = document.querySelector('#frame01');
	      	var expand = document.querySelector('#expand01');
	      	current_tab = "quick-reports";
	        break;
	    case "my-folders":
	    	current_tab = "my-folders";
	  		var frame = document.querySelector('#frame02');
	  		var expand = document.querySelector('#expand02');
	        break;
	    case "my-team-folders":
	   		var list = document.querySelector('#links-list02');
	  		var frame = document.querySelector('#frame03');
	  		var expand = document.querySelector('#expand03');
	  		current_tab = "my-team-folders";
	    	break;
	    case "public-folders":
	        current_tab = "public-folders";
  		var frame = document.querySelector('#frame04');
  		var expand = document.querySelector('#expand04');
	    	break;
	    case "":
	        var list = document.querySelector('#links-list01');
	     	var frame = document.querySelector('#frame01');
	      	var expand = document.querySelector('#expand01');
	      	current_tab = "quick-reports";
	    	break;
	    default:
	}

  	return;

}


function AdjustDisplay() {//temp





}

function SwitchTab(tab) {//onchange
  	if (this.selectedIndex!==0) {
    	current_tab = window.location.hash.substring(1);
	    if((current_tab == "quick-reports")||(current_tab=='')){
	      	var frame = document.querySelector('#frame01');
	      	var expand = document.querySelector('#expand01');
	    }else {
	      	var frame = document.querySelector('#frame03');
	      	var expand = document.querySelector('#expand03');
	    }
	    expand.href = tab;
	    expand.style.display = "block"
	    frame.src = tab;
	    Cancel();
	    frame.style.display = "block"

  }

}

function URLValidation(url) {
    if(url.value.slice(0,7) != "http://" || url.value.slice(0,4) != "www."
    	|| url.value.slice(0,11) != "http://www.")
    	return false;
    return true;
}

function SetURLAndNameDisplay(name, url) {
  	var name = document.getElementById(name);
  	var url = document.getElementById(url);
  	if(name.value != "" && !URLValidation(url)) {
    	url.style.border = "1px solid red";
    	name.style.border = "none";
  	}
  	else if(name.value=="" && URLValidation(url)){
    	url.style.border = "none";
    	name.style.border = "1px solid red";
  	}
  	else if(name.value == "" && !URLValidation(url)){
  		url.style.border = "1px solid red";
  		name.style.border = "1px solid red";
  	}else{
    	url.style.border = "none";
    	url.style.border = "none";
  	}


}
function Cancel() {//onclick
	current_tab = window.location.hash.substring(1);
  	if(current_tab == "quick-reports"){
    	var elem = document.getElementById("input-wrap-quick-reports");
    	var settings = document.getElementById("settings01");
  	}else{
   		var elem = document.getElementById("input-wrap-team-folders");//check
    	var settings = document.getElementById("settings02");//check
  	}

  	settings.style.background="rgb(235, 235, 235)";
  	elem.style.display ="none";


}

function SaveLink() {//onclick
	current_tab = window.location.hash.substring(1);
	// if(URLValidation(url) && name != ""){

		if(current_tab == "quick-reports"){
		  	var start = "report"
		  	var elem = document.getElementById("input-wrap-quick-reports");
		  	var settings = document.getElementById("settings01");
		}else{
		  	var start = "folder"
		  	var elem = document.getElementById("input-wrap-team-folders");//check
		  	var settings = document.getElementById("settings02");//check
		}

	  	settings.style.background="rgb(235, 235, 235)";
	  	elem.style.display ="none";
		var len = localStorage.length;
	  	if(current_tab == "quick-reports"){
	    	var name = document.querySelectorAll('.link-name');
	    	var url = document.querySelectorAll('.link-url');
	  	}else{
	   		var name = document.querySelectorAll('.flink-name');//check
	   		var url = document.querySelectorAll('.flink-url');//check
	 	}
	 	var i;

	 	if(name != null){
	  		for (i = 0; i < name.length; ++i) {
	    		len = localStorage.length;
	    		if (name[i].value) {
	      			localStorage.setItem(name[i].id+"->"+start, name[i].value);
	    		}
	    		if (url[i].value) {
	      			localStorage.setItem(name[i].id+"->"+url[i].id+"->"+start, url[i].value);
	    		}
	     	}

	     	Initialize();
	   	} 


	// }

}

window.onhashchange = function(element){



	var curr_tab = element.newURL.split("#")[1];
	var nth=0;
	var elem =document.getElementById(curr_tab);
	var tabs =document.getElementById("tabs");

  	if(curr_tab == null){curr_tab ="quick-reports";}

  	var li = tabs.querySelector("ul li");
  	if(curr_tab == "quick-reports"){nth =1;}
  	else if (curr_tab == "my-folders"){nth =2;}
  	else if (curr_tab == "my-team-folders"){nth =3;}
  	else if (curr_tab == "public-folders"){nth =4;}

	li = tabs.querySelector("ul a:nth-child("+nth+")");
	setTabStyle(curr_tab, {'display':'block', 'background':'rgb(80, 80, 80)'});
	li.style.background = "rgb(80, 80, 80)";
	li.style.color =  "white";
	
	for(var i = 1; i < 5; i=i+1){
		if(nth != i){
			li = tabs.querySelector("ul a:nth-child("+i+")");
			li.style.color =  "black";
			li.style.background = "rgb(235, 235, 235)";
			setTabStyle(elem.id , {'display':'none', 'background':'rgb(235, 235, 235)'});
		}
	}
	current_tab = curr_tab;
	Initialize();
	elem.style.height = "740px";

}


function ShowSettings(wrapInput,settings) {//onclick

  	var element = document.getElementById(wrapInput);
  	var v_settings = document.getElementById(settings);
  	if((element.style.display == "none")||((element.style.display == ""))){
    	element.style.display ="block";
    	v_settings.style.background="white";
  	}
  	else{
    	v_settings.style.background="rgb(235, 235, 235)";
    	element.style.display ="none";
  	}

}


window.onload = function() {
  	var path = window.location.pathname;
  	var ttl = document.title;
  	history.pushState("", ttl,path);
};



/*************************************/
/**********Auxilary Functions*********/
/*************************************/
function InitKeyEvents(){
//handle right and left keys - rotate between tabs cicley wise
	document.body.onkeydown = function handleKeyDownEvents(event) {
	    var curr_tab = window.location.hash.substring(1);
	    switch(event.which){
		    case 37: // Left-arrow key pressed   
		    	if(curr_tab == "quick-reports"){
				window.location.hash = "public-folders";
		    	}
		        else if(curr_tab == "my-folders"){
			 	    window.location.hash = "quick-reports";
			    }
			    else if(curr_tab == "my-team-folders"){
			            window.location.hash = "my-folders";
			    }
			    else if(curr_tab == "public-folders"){
			      	window.location.hash = "my-team-folders";
			    }
		        break;
		    case 39:// Right-arrow key pressed  

			    if(curr_tab == "quick-reports"){
			        window.location.hash = "my-folders";
			    }
			    else  if(curr_tab == "my-folders"){
			        window.location.hash = "my-team-folders";
			    }
			    else if(curr_tab == "my-team-folders"){
			        window.location.hash = "public-folders";
			    }
			    else if(curr_tab == "public-folders"){
					window.location.hash = "quick-reports";
		    	}
		        break;
		    case 9://Tab key pressed
			    if(curr_tab == "quick-reports"){
			        window.location.hash = "my-folders";
			    }
			    else  if(curr_tab == "my-folders"){
			        window.location.hash = "my-team-folders";
			    }
			    else if(curr_tab == "my-team-folders"){
			        window.location.hash = "public-folders";
			    }
			    else if(curr_tab == "public-folders"){
					window.location.hash = "quick-reports";
		    	}
		    	break;

		    default:
		}

	}
}

function setTabStyle( elementId, elementProperties )
{

 	var element = document.getElementById (elementId);
 	var element2 = document.querySelectorAll(elementId);
 	if(element != null) { 
    	for (var p in elementProperties)
    		element.style[p] = elementProperties[p];
	}
	else if(element2 != null){
  		for (var i = 0; i < element2.length; ++i) {
   			for (var p in elementProperties)
    			element2[i].style[p] = elementProperties[p];
		}
	}

}

function ShowLinks(){//todo

	for (var i = 0; i < localStorage.length; i=i+2){
		var check_flag=0;
	    var name = localStorage.getItem(localStorage.key(i));
	    var search = document.getElementById("search");
	    var t_name = localStorage.key(i).split("->", 1);
	    var t_url = localStorage.key(i+1).split("->", 2).pop();

	    var url = localStorage.getItem(localStorage.key(i+1));
	    var type = localStorage.key(i).split("->").pop();
	    var url_name =  document.getElementById(t_name);
	    var url_link =  document.getElementById(t_url);

	    if((type == "report")&&((current_tab == "quick-reports")||(current_tab == ''))){
		    var option = document.createElement('option');
		    url_name.value = name;
		    url_link.value = url;
		    option.value = url;
		    option.innerHTML = name;
		    list.appendChild(option);
		    check_flag=1;

		}
	 	else if ((type == "folder")&&(current_tab == "my-team-folders")){		
		  	var option = document.createElement('option');
			url_name.value = name;
			url_link.value = url;
			option.value = url;
			option.innerHTML = name;
		 	list.appendChild(option);
		 	check_flag=1;
		}
		if(check_flag==0){
	  		expand.href = url;
	   		frame.src = url;
		}
	}

}
