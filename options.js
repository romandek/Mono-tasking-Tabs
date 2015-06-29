function save_options() {
  var no_tabs = document.getElementById("no_tabs").value;
  var no_wins = document.getElementById("no_wins").value;
  var status = document.getElementById("status");
  if(isNaN(no_tabs) ){
	status.innerHTML = "Number of Tabs must be a number";
	return;
  }else{
	  localStorage["no_tabs"] = no_tabs;
	  status.innerHTML = "Options Saved.";
  }
  if(isNaN(no_wins) ){
	status.innerHTML = "Number of Windows must be a number";
	return;
  }else{
	  localStorage["no_wins"] = no_wins;
	  status.innerHTML = "Options Saved.";
  }
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var no_tabs = localStorage["no_tabs"];
  var no_wins = localStorage["no_wins"];
  if (!no_tabs) {
	localStorage["no_tabs"] = 3;
    document.getElementById("no_tabs").value = 3;
	return;
  }
  if (!no_wins){
  	localStorage["no_wins"] = 3;
  	document.getElementById("no_wins").value = 3;
  	return;
  }
  document.getElementById("no_tabs").value = no_tabs;
  document.getElementById("no_wins").value = no_wins;
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);