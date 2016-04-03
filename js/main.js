current_tab = "quick-reports";
latest_search_term = "";
function Initialize() {//onload

	current_tab = window.location.hash.substring(1);
	var element = document.getElementById("input-wrap-quick-reports");
	var list = document.querySelector('#links-list01');
	var expand = document.querySelector('#expand01');
	var settings = document.getElementById("settings01");
	var frame = document.querySelector('#frame01');

	updateNotification();
	switch(current_tab) {
	    case "quick-reports":
	  	// 	var element = document.getElementById("input-wrap-quick-reports");
	 		// var settings = document.getElementById("settings01");
	  	// 	var frame = document.querySelector('#frame01');
	  	// 	list = document.querySelector('#links-list01');
	 		// expand = document.querySelector('#expand01');
	        break;
	    case "my-folders":
		    frame = document.querySelector('#frame02');
		    expand = document.querySelector('#expand02');
		    frame.src = "http://www.sport5.co.il/";
		    expand.href = "http://www.sport5.co.il/";
	        break;
	    case "my-team-folders":
	  		element = document.getElementById("input-wrap-team-folders");//check
	  		settings = document.getElementById("settings02");
	  		frame = document.querySelector('#frame03');
	  		list = document.querySelector('#links-list02');
	  		expand = document.querySelector('#expand03');
	    	break;
	    case "public-folders":
		  	frame = document.querySelector('#frame04');
		 	expand = document.querySelector('#expand04');
		    frame.src = "http://www.one.co.il/";
		    expand.href = "http://www.one.co.il/";
	    	break;
	   //  case "":
	  	// 	element = document.getElementById("input-wrap-quick-reports");
	 		// settings = document.getElementById("settings01");
	  	// 	frame = document.querySelector('#frame01');
	  	// 	list = document.querySelector('#links-list01');
	 		// expand = document.querySelector('#expand01');
	   //  	break;
	    default:
	}


	//onresize
	
  	for(var i=list.options.length-1;i>=0;i--)
  	{
    	list.remove(i);
  	}


 //  	var expandObj = { exp: expand};
 //  	var frameObj = { frm: frame};
	// ShowLinks(expandObj,frameObj);
	// expand.href = expandObj.exp;
	// frame.src = frameObj.frm;
	var check_flag=0;
	for (var i = 0; i < localStorage.length; i=i+2){
		
	    var name = localStorage.getItem(localStorage.key(i));
	    var search = document.getElementById("search");
	    var t_name = localStorage.key(i).split("+", 1);
	    var t_url = localStorage.key(i+1).split("+", 2).pop();

	    var url = localStorage.getItem(localStorage.key(i+1));
	    var type = localStorage.key(i).split("+").pop();
	    var url_name =  document.getElementById(t_name);
	    var url_link =  document.getElementById(t_url);

		if(check_flag==0){
	  		expand.href = url;
	   		frame.src = url;
		}
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

	}
	InitKeyEvents();



	// TabDisplay(frame,list,expand,element,settings);
	if(frame.src!="about:blank"){
	    list.style.display = "block"
	    Cancel();
	    if(expand.href!=null){
	   		expand.style.display = "block"
	    }
		if(frame.src!=null){
      	    frame.style.display = "block"
		}
	}
	else {
	    list.style.display = "none"
	    element.style.display ="block";
	    settings.style.background="white";
	    frame.style.display = "none"
	}
  
}






function Search() {//onsearch
 

    for (var i = 0; i < localStorage.length; i=i+2){

        var curr_tab = window.location.hash.substring(1);
   		var search_box = document.getElementById("search_box");
   		var name = localStorage.getItem(localStorage.key(i));
   		var t_name = localStorage.key(i).split("+", 1);
   		var url = localStorage.getItem(localStorage.key(i+1));
   		var t_url = localStorage.key(i+1).split("+", 2).pop();
   		var type = localStorage.key(i).split("+").pop();
		// if(search_box!=null){
	    	if(name==search_box.value){
	   			
	    		if(type == "report"){
	     
			      	if((curr_tab == "quick-reports")||(curr_tab=='')){ 
			        	SwitchTab(curr_tab);
			        	var list = document.querySelector('#links-list01');    
			        	t_name =t_name + "";
			        	var num = t_name.substring(5, 6);	     
			        	list.selectedIndex = (num-1);
			        	// current_tab = "quick-reports";
			        }
			        else{
			      		window.location.hash = "quick-reports";
			        }
			    	return;
		   		}else{ 
			      	if(curr_tab =="my-team-folders" ){
			  
			        	SwitchTab(curr_tab);
			      		var list = document.querySelector('#links-list02');
			        	t_name =t_name + "";
			        	var num = t_name.substring(6, 7); 
			        	list.selectedIndex = (num-1);
			        	// current_tab = "my-team-folders";
			        } 
			        else{
			        	window.location.hash ="my-team-folders";
			        }
			    	return;
		   		}
				current_tab = curr_tab;
			}
 		// }
	}
	   
  	var search = document.querySelector('#search_box');

	var tab = window.location.hash.substring(1);
	// var list = document.querySelector('#links-list01');
	var frame = document.querySelector('#frame01');
	var expand = document.querySelector('#expand01');
	switch(tab) {
	    case "quick-reports":
	        var list = document.querySelector('#links-list01');
	     	// var frame = document.querySelector('#frame01');
	      // 	var expand = document.querySelector('#expand01');
	      	current_tab = "quick-reports";
	        break;
	    case "my-folders":
	  		frame = document.querySelector('#frame02');
	  		expand = document.querySelector('#expand02');
	  		current_tab = "my-folders";
	        break;
	    case "my-team-folders":
	   		list = document.querySelector('#links-list02');
	  		frame = document.querySelector('#frame03');
	  		expand = document.querySelector('#expand03');
	  		current_tab = "my-team-folders";
	    	break;
	    case "public-folders":   
	  		frame = document.querySelector('#frame04');
	  		expand = document.querySelector('#expand04');
	  		current_tab = "public-folders";
	    	break;
	    case "":
	        ist = document.querySelector('#links-list01');
	     	// var frame = document.querySelector('#frame01');
	      // 	var expand = document.querySelector('#expand01');
	      	current_tab = "quick-reports";
	    	break;
	    default:
	}
	if(list != null){
  		list.style.display = "none";
  	}
	latest_search_term = search_box.value;
	var notif = document.getElementById("notification").innerHTML;
	var res = notif.replace("The data of UTF BI would be updated at 16:00 pm.", "The search term: "+
		search_box.value+" was Not found.");
    document.getElementById("notification").innerHTML = res;

  
  // var google_search_url = "https://www.google.co.il/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=";
  // var full_url = google_search_url.concat(search_box.value);
  // frame.src = full_url;
  // expand.href = full_url;
    
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
  	if(name.value != null && !URLValidation(url)) {
    	url.style.border = "1px solid red";
    	name.style.border = "none";
  	}
  	else if(name.value == null && URLValidation(url)){
    	url.style.border = "none";
    	name.style.border = "1px solid red";
  	}
  	else if(name.value == null && !URLValidation(url)){
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
	  	if(current_tab == "quick-reports"){
	    	var name = document.querySelectorAll('.link-name');
	    	var url = document.querySelectorAll('.link-url');
	  	}else{
	   		var name = document.querySelectorAll('.flink-name');//check
	   		var url = document.querySelectorAll('.flink-url');//check
	 	}

	 	if(name != null){
	  		for (var i = 0; i < name.length; ++i) {
	    		if (name[i].value) {
	      			localStorage.setItem(name[i].id+"+"+start, name[i].value);
	    		}
	    		if (url[i].value) {
	      			localStorage.setItem(name[i].id+"+"+url[i].id+"+"+start, url[i].value);
	    		}
	     	}

	     	Initialize();
	   	} 


	// }

}

window.onhashchange = function(element){
    if(window.location.hash) {
    	var prev_tab = element.oldURL.split("#")[1];
    	var curr_tab = element.newURL.split("#")[1];
  	} 
  	var element =element.originalEvent;

  	var child_num=0;
  	var elem =document.getElementById(curr_tab);
  	var tabs =document.getElementById("tabs");
	// var curr_tab_id = elem.id;
  	if(prev_tab==null){
    	prev_tab ="quick-reports";
  	}
  	var li = tabs.querySelector("ul li");
  	if(prev_tab == "quick-reports"){
  	 	child_num =1;
	}
  	else if (prev_tab == "my-folders"){
  	 	child_num =2;
  	}
  	else if (prev_tab == "my-team-folders"){ 
  		child_num =3;
  	}
  	else if (prev_tab == "public-folders"){ 
  		child_num =4;
  	}
  	if(elem!= null){
	  	var curr_child_num=0;
	  	if(elem.id == "quick-reports"){
	  	 	curr_child_num =1;
		}
	  	else if (elem.id == "my-folders"){
	  	 	curr_child_num =2;
	  	}
	  	else if (elem.id == "my-team-folders"){ 
	  		curr_child_num =3;
	  	}
	  	else if (elem.id == "public-folders"){ 
	  		curr_child_num =4;
	  	}
		// var list_itemObj = { list_item: li};
		
			if(elem.id == "quick-reports" || elem.id == "my-folders" ||
			elem.id == "my-team-folders" || elem.id == "public-folders"){
			    // OnHashAux(tabs,prev_tab,elem.id,1,li);
			    setTabStyle(prev_tab, {'display':'none', 'background':'rgb(80, 80, 80)'});
				if(child_num != 0){
				    li = tabs.querySelector("ul a:nth-child("+child_num+")");
				    if(li!=null){
					    li.style.background = "rgb(80, 80, 80)";
					    li.style.color =  "white";
					}
				}
				li = tabs.querySelector("ul a:nth-child("+curr_child_num+")");
	 			if(li!=null){
					li.style.color =  "black";
					li.style.background = "rgb(235, 235, 235)";
				}
				setTabStyle(elem.id , {'display':'block', 'background':'rgb(235, 235, 235)'});
				Initialize();		
			}

		elem.style.height = "740px";	
	}
	updateNotification();

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

function updateNotification()
{
	var notif = document.getElementById("notification").innerHTML;
	var res = notif.replace("The search term: "+latest_search_term+" was Not found.",
		"The data of UTF BI would be updated at 16:00 pm.");
    document.getElementById("notification").innerHTML = res;
}
// function ShowLinks(expandObj,frameObj){//todo

// 	for (var i = 0; i < localStorage.length; i=i+2){
// 		var check_flag=0;
// 	    var name = localStorage.getItem(localStorage.key(i));
// 	    var search = document.getElementById("search");
// 	    var t_name = localStorage.key(i).split("+", 1);
// 	    var t_url = localStorage.key(i+1).split("+", 2).pop();

// 	    var url = localStorage.getItem(localStorage.key(i+1));
// 	    var type = localStorage.key(i).split("+").pop();
// 	    var url_name =  document.getElementById(t_name);
// 	    var url_link =  document.getElementById(t_url);

// 	    if((type == "report")&&((current_tab == "quick-reports")||(current_tab == ''))){
// 		    var option = document.createElement('option');
// 		    url_name.value = name;
// 		    url_link.value = url;
// 		    option.value = url;
// 		    option.innerHTML = name;
// 		    list.appendChild(option);
// 		    check_flag=1;

// 		}
// 	 	else if ((type == "folder")&&(current_tab == "my-team-folders")){		
// 		  	var option = document.createElement('option');
// 			url_name.value = name;
// 			url_link.value = url;
// 			option.value = url;
// 			option.innerHTML = name;
// 		 	list.appendChild(option);
// 		 	check_flag=1;
// 		}
// 		if(check_flag==0){
// 	  		expandObj.exp = url;
// 	   		frameObj.frm = url;
// 		}
// 	}

// }

// function TabDisplay(frame,list,expand,element,settings){

// 	if(frame.src!="about:blank"){
// 	    list.style.display = "block"
// 	    Cancel();
// 	    expand.style.display = "block"
//         frame.style.display = "block"
// 	}
// 	else {
// 	    list.style.display = "none"
// 	    element.style.display ="block";
// 	    settings.style.background="white";
// 	    frame.style.display = "none"
// 	}
// }

// function OnHashAux(tabs,prev_tab,curr_tab_id,child_num,list_item){
// setStyle(prev_tab, {'display':'none', 'background':'rgb(80, 80, 80)'});
// 	if(child_num){
// 	    list_item = tabs.querySelector("ul a:nth-child("+child_num+")");
// 	    list_item.style.background = "rgb(80, 80, 80)";
// 	    list_item.style.color =  "white";
// 	}
// 	list_item = tabs.querySelector("ul a:nth-child("+child_num+")");
// 	list_item.style.color =  "black";
// 	list_item.style.background = "rgb(235, 235, 235)";
// 	setStyle(curr_tab_id , {'display':'block', 'background':'rgb(235, 235, 235)'});
// 	Initialize();
// }
