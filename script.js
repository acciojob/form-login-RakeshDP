// function getFormvalue() {
//     //Write your code here
// 	const form= document.getElementById("form1");
// 	const firstName = form.document.getElementsByTag("input")[0].value;
// 	const lastName = form.document.getElementsByTag("input")[1].value;
// 	alert("First name : " + firstName + "" + "Last name:" + lastName);
// 	return false;
// }
function getFormvalue() {
  // Get the form element
  var form = document.getElementById("form1");

  // Get the values of the first and last name input fields
  var firstName = form.fname.value;
  var lastName = form.lname.value;

  // Display the first and last name using alert()
  alert("First Name: " + firstName + "\nLast Name: " + lastName);

  // Prevent form submission
  return false;
}