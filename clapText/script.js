var emoji ="👏";
function setEmoji(){
	emoji = document.getElementById("emoji").value;
}
function clapClapClap() {
//var emoji = "👏";		
  var x = document.getElementById("myInput").value;
  document.getElementById("gen").innerHTML = x.split(/\s+/).join(` ${emoji} `);
}
function copy(){
	 var copyText = document.getElementById("gen");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
}
