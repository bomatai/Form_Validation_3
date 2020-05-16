# Form_Validation
 Form Validation project with jQuery


/*
    This project is a frontend form validation project that simulates the registeration process for a developer confrence 

    The project implemts vaiours Jquery methods to manipulate the and animate elements of the DOM

*/

The Page Load hider function , mainuplates the HTML on page load to Neatly hide away elements we dont want to display yet .

The colorMenuDisplay() function hides and displays various shirt menu items based on the Shirt design selected in the previous menu.

The totalCost() function 'listens' to the checkbox options in the activities section and computes the the Total cost then passes the value to another function that prints it.

This printTotal() function Prints the Total Cost based on the value returned from the totalCost function.

The compareChecked() function disables and enables clashing activities based on the checkbox selection.

paymentMethodWatcher() -The Function Displays the correct info based on the selected payment method.

The checkName() function performs validation for the name field , if the tests fails an the box turns red & turns green if correct.

The checkEmail() function performs validation for the email field , if the tests fails an the box turns red & turns green if correct.

The checkOtherJobBox() function performs validation to ensure that when a user selects a job description of other, 
they cant submit without entering text in the text field ,  if the tests fails an the box turns red & turns green if correct.

checkActivities() function validation ensures that the form cannot be submitted without at least on activity selected
it also displays an error message prompting the user to select an activity to proceed .

The checkPaymentMethod() validation confirms that a payment method has been selected  , if the tests fails an the box turns red & turns green if correct.

 checkCreditCardNumber() validation confirms that if a credit card payment method has been selected, 
that it contains only digits btwn 13 & 16 numbers , it also displays a case specific error message,  if the tests fails an the box turns red & turns green if correct .


checkCreditCardCVV() validation confirms that if a credit card payment method has been selected, 
the CVV ia a Three digit number that doesnt start with a '0' ,  if the tests fails an the box turns red & turns green if correct.


checkZipCode() validation confirms that if a credit card payment method has been selected, 
the Zip code ia a five digit number , if the tests fails an the box turns red & turns green if correct .


The CheckCreditCard() function when called calls all the subfunctions that checkzipcode,CVV & Credit card Number.

The formErrorChecker () function confirms the state of all the tests that have been run on the form.
