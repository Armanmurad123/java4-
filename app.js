let user = "Child younger than 18"
//JS sees the below block of code as false and won't execute
if (user=="Man") {
document.getElementById("message").innerHTML= "Welcome to JAVASCRIPT class sir!"
}
//also sees the block below as false
else if (user=="woman") {
document.getElementById("message").innerHTML= "Welcome to JAVASCRIPT class mam!" 
}
//JS sees the block below as true, therefore, it gets executed
else if (user=="Child younger than 18") {
document.getElementById("message").innerHTML= "Welcome to JAVASCRIPT class and Happy Children's day!!" 
}
//JS won't bother reading this next block because it has already met the given condition, unless otherwise
else{
  document.getElementById("message").innerHTML= "Sorry, you do not fall under any of the categories.!!" 
}