 //Write your code here
function getFormvalue() {
  // Get the form element
  var form = document.getElementById("form1");

  // Get the values of the first and last name input fields
  var firstName = form.fname.value;
  var lastName = form.lname.value;

  // Display the first and last name using alert()
  alert("First Name: " + firstName + "Last Name: " + lastName);

  // Prevent form submission
  return false;
}

// const Formele=document.getElementById("form1");
// 	const name=Formele.elements['fname'].value;
// 	const lname=Formele.elements['lname'].value;
// 	alert(`${name} ${lname}`);
