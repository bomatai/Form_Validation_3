//Form Validation Project 

/*
    This project is a frontend form validation project that simulates the registeration process for a developer confrence 

    The project implemts vaiours Jquery methods to manipulate the and animate elements of the DOM

*/


   
//Some Global Variables

let total;


//Page load function Calls

//Set Focus on pageload
$(document).ready(()=> {$('#name').focus()});
pageLoadHider();
eventWatcher();
paymentMethodWatcher();

//The Page Load hider function , mainuplates the HTML on page load to 

//Neatly hide away elements we dont want to display yet

function pageLoadHider()
    {
        $('#other-title').hide();

        $('.paypal').hide();

        $('.bitcoin').hide();

        $('#payment option[value="select method"]').attr('disabled',true);

    
        
       hideColorMenu();
       $('#design').eq(0).attr('disable','disable');
       colorMenuDisplay();
       
    }

/*  Job Role Drop Down event Listner, this fuction displays an extra textbox for the user to enter a custom Job title  */
$('#title').change( ()=>
        {   
            if ($('#title').val() =='other')    
            {$('#other-title').slideDown(500);}
            else { $('#other-title').hide(); }   
                 
        })         

// Color Menu Hider function hides the Color dropdown on page load untill a user selects a shirt 
    function hideColorMenu(){ $('#colors-js-puns').hide();}

//The colorMenuDisplay() function hides and displays various shirt menu items based on the Shirt design selected in the previous menu
function colorMenuDisplay(){
            $('#design').change( ()=> {
                $('#colors-js-puns').show();
                
                if( $('#design').val() =='js puns') 
                    {   $('#color').val('');
                        $('#color option').eq(0).attr("hidden", false);
                        $('#color option').eq(1).attr("hidden", false);
                        $('#color option').eq(2).attr("hidden", false);
                        $('#color option').eq(3).attr("hidden", true);
                        $('#color option').eq(4).attr("hidden", true);
                        $('#color option').eq(5).attr("hidden", true);

                    }   

                if( $('#design').val() =='heart js') 
                    {
                        $('#color').val('');
                        $('#color option').eq(3).attr("hidden", false);
                        $('#color option').eq(4).attr("hidden", false);
                        $('#color option').eq(5).attr("hidden", false);
                        $('#color option').eq(0).attr("hidden", true);
                        $('#color option').eq(1).attr("hidden", true);
                        $('#color option').eq(2).attr("hidden", true);
                    }
                })
            return null;}   


            /* The totalCost() function 'listens' to the checkbox options in the activities 
            section and computes the the Total cost then passes the value to another function that prints it  */

            function totalCost(){
            let checkBoxesTicked = $("input:checked") ;
            total = 0;
            for(i=0; i<checkBoxesTicked.length; i++)
                { let cost= checkBoxesTicked.eq(i).attr("data-cost"); 
                let dollarRegex= /(\$)(\d+)/;
                let addedCost =parseInt(cost.replace(dollarRegex,'$2'));
                addedCost=(addedCost);
                total+=addedCost;
                } return total;}


                /*checkBox event listener  */
                function eventWatcher()
                { 
                     $('input[type=checkbox]').change(()=>
                    {
                        compareChecked();
                        printTotal();})
                    return null;
                }    

            // This printTotal() function Prints the Total Cost based on the value returned from the totalCost function

            function printTotal(){
                totalCost();    
            if (($('input[type=checkbox]:checked').length)>0)
                {
                    $('#totalCost').html('<p>' + 'Based on your selection,The Total is '+'$'+total +  '</p>')
                return null;
                }
            else{
            
                    $("#totalCost").html("");} 
                return null;
             }



            /*The compareChecked() function disables and enables clashing activities based on the checkbox selection */
            
            function compareChecked()
                {                 
                    if($('input[type=checkbox]').eq(1).prop('checked') == false)
                         { 
                        $('input[type=checkbox]').eq(3).attr('disabled',false); 
                        $('input[type=checkbox]').eq(3).parent().css('color','white');            
                                        
                         }

                        if($('input[type=checkbox]').eq(1).prop('checked'))
                            { 
                                $('input[type=checkbox]').eq(3).attr('disabled','disabled');                                                     
                                 $('input[type=checkbox]').eq(3).parent().css('color','#33201c91');
                            }

                    if($('input[type=checkbox]').eq(3).prop('checked'))
                     { 
                    $('input[type=checkbox]').eq(1).attr('disabled','disabled');                                                     
                    $('input[type=checkbox]').eq(1).parent().css('color','#33201c91');
                      }

                    if($('input[type=checkbox]').eq(3).prop('checked') == false)
                       { 
                        $('input[type=checkbox]').eq(1).attr('disabled',false);                                                     
                        $('input[type=checkbox]').eq(1).parent().css('color','white');   
                        }

                        if($('input[type=checkbox]').eq(2).prop('checked'))
                        { 
                        $('input[type=checkbox]').eq(4).attr('disabled','disabled');                                                     
                        $('input[type=checkbox]').eq(4).parent().css('color','#33201c91');
                           }

                        if($('input[type=checkbox]').eq(2).prop('checked') == false)
                        { 
                            $('input[type=checkbox]').eq(4).attr('disabled',false);                                                     
                            $('input[type=checkbox]').eq(4).parent().css('color','white'); 
                        }

                        if($('input[type=checkbox]').eq(4).prop('checked'))
                        { 
                        $('input[type=checkbox]').eq(2).attr('disabled','disabled');                                                     
                        $('input[type=checkbox]').eq(2).parent().css('color','#33201c91');
                          }

                        if($('input[type=checkbox]').eq(4).prop('checked') == false)
                        { 
                            $('input[type=checkbox]').eq(2).attr('disabled',false); 
                            $('input[type=checkbox]').eq(2).parent().css('color','white'); 

                    
                         }    return null;  
                        
                    }         

// paymentMethodWatcher() -The Function Displays the correct info based on the selected payment method

function paymentMethodWatcher(){
$('#payment').change(()=>{
    let value= $('#payment').val()
    //Event for Credit Card selection
    if(value == 'Credit Card'){
        $('.paypal').hide();
        $('.bitcoin').hide();
        $('.credit-card').slideDown(200);}

    //Event for PayPal Selection
    if(value == 'PayPal'){
        $('.credit-card').hide();
        $('.bitcoin').hide();
        $('.paypal').slideDown(200);}

    //Event for Bitcoin selection
    if(value =='Bitcoin'){
        $('.credit-card').hide();
        $('.paypal').hide();
        $( '.bitcoin').slideDown(200);}
       
    
})}


//Form Validation 

//The checkName() function performs validation for the name field , if the tests fails an the box turns red & turns green if correct
function checkName(){
    $('#name').removeClass('error_color');
    $('#name').removeClass('correctlyFilled');

    if(($('#name').val()).trim()==''){
        $('#name').addClass('error_color');
         $('#name').prop('placeholder','Please enter a Name here to continue')
        return false;}
    else{
        
        $('#name').addClass('correctlyFilled');
       
        return true;
    }
}
//The checkEmail() function performs validation for the email field , if the tests fails an the box turns red & turns green if correct 
function checkEmail(){
    let email =$("#mail").val();
    let emailFromat= /[^@\s]+@[^@\s]+\.[^@\s]+/
    $("#mail").removeClass('correctlyFilled');
    $("#mail").removeClass('error_color');

    if( emailFromat.test(email)) {
        
        $('#emailLabel').html('<span> Email :</span> <br><div style="color:dark green"> Great ! Vaild Email Address Entered </div>');
        $("#mail").addClass('correctlyFilled');
        return true;}
    else{
        $("#mail").addClass('error_color');
        $('#emailLabel').html('<span> Email :</span> <br><div style="color:red"> please enter a Vaild Email address </div>');
        return false;
    }
}
/* The checkOtherJobBox() function performs validation to ensure that when a user selects a job description of other, 
they cant submit without entering text in the text field ,  if the tests fails an the box turns red & turns green if correct*/

function checkOtherJobBox(){

    //Some tests here if the selection is other.
    $('#other-title').removeClass('correctlyFilled');    
    $('#other-title').removeClass('error_color');
    if($('#title').val()=='other')
        {if (($('#other-title').val()).trim()== ""){
            $('#other-title').addClass('error_color');
            $('#other-title').prop('placeholder','Because you Selected Other,You need to enter a title here')
            return false;
        } else {
            $('#other-title').addClass('correctlyFilled');
            return true; }

    }
    return true;}

/*checkActivities() function validation ensures that the form cannot be submitted without at least on activity selected
it also displays an error message prompting the user to select an activity to proceed  */
function checkActivities(){
    if (($('input[type=checkbox]:checked').length)>0)
            {return true;} 
                else {  
                    $('#totalCost').html('<p style="color: white ; font-size:17px ; background: red ;text-align:center; padding: 3px"> Please select an activity to submit Form </p>').delay(100).fadeOut().fadeIn('slow').delay(100).fadeOut().fadeIn('slow');
                        return false;}
                        };


/* The checkPaymentMethod() validation confirms that a payment method has been selected  , if the tests fails an the box turns red & turns green if correct*/
function checkPaymentMethod(){
    $('#payment').removeClass('error_color');
    $('#payment').removeClass('correctlyFilled');
    if ($('#payment').val() == null)
        {
        $('#payment').addClass('error_color'); 
        return false }
        else { $('#payment').addClass('correctlyFilled');return true}
         }

/* checkCreditCardNumber() validation confirms that if a credit card payment method has been selected, 
that it contains only digits btwn 13 & 16 numbers , it also displays a case specific error message,  if the tests fails an the box turns red & turns green if correct */
function checkCreditCardNumber(){
    $('#cc-num').removeClass('correctlyFilled');
    $('#cc-num').removeClass('error_color');

let ccNum = /^[1-9][0-9]{12,15}$/;
let ccInputValue = $('#cc-num').val() ; 
if (ccNum.test(ccInputValue)==true){
        $('#cc-num').addClass('correctlyFilled');
        {$('#ccLabel').html('<span> Card Number:</span>'); }
        return true}
else{
        
        let cardInputLength = $('#cc-num').val().length;
        if(cardInputLength ==0 ){$('#ccLabel').html('<span> Card Number:</span> <br><div style="color:red; font-size:12px"> The Box is Empty </div>'); }
        if(cardInputLength > 16){ $('#ccLabel').html(`<span> Card Number:</span> <br><div style="color:red ;font-size:12px"> This field contains ${cardInputLength} digits, please enter a number between 13 &16 digits </div>`); }
        if(cardInputLength > 0 && cardInputLength < 13 ){ $('#ccLabel').html(`<span> Card Number:</span> <br><div style="color:red ;font-size:12px"> This field is not empty but contains only ${cardInputLength} digits </div>`); }
        $('#cc-num').addClass('error_color');
        
                    return false}
}

/* checkCreditCardCVV() validation confirms that if a credit card payment method has been selected, 
the CVV ia a Three digit number that doesnt start with a '0' ,  if the tests fails an the box turns red & turns green if correct   */

function checkCreditCardCVV (){
        let cvv = /^\d{3}$/;
        let cvvInputValue = ($('#cvv').val()).trim();
        $('#cvv').removeClass('correctlyFilled');
        $('#cvv').removeClass('error_color');
            if (cvv.test(cvvInputValue)==true)
                     {  
                         $('#cvv').addClass('correctlyFilled');
                             return true}
            else{           
                        $('#cvv').addClass('error_color');
;                             return false}
}

/* checkZipCode() validation confirms that if a credit card payment method has been selected, 
the Zip code ia a five digit number ,if the tests fails an the box turns red & turns green if correct */

function checkZipCode(){
        let zip= /^[0-9][0-9][0-9][0-9][0-9]$/;
        let zipInputValue= $('#zip').val();
        $('#zip').removeClass('correctlyFilled');
        $('#zip').removeClass('error_color');

        if (zip.test(zipInputValue)==true)
                     {$('#zip').addClass('correctlyFilled');
                     return true}
            else{
                $('#zip').addClass('error_color');
;                    return false}}

/* The CheckCreditCard() function when called calls all the subfunctions that checkzipcode,CVV & Credit card Number */

function checkCreditCard ()
    {
        if ($('#payment').val()=='Credit Card')
        {
            checkZipCode();
            checkCreditCardCVV ();
            checkCreditCardNumber();
            if(checkZipCode()&&checkCreditCardCVV ()&&checkCreditCardNumber()){return true;}else{return false;}
        }
    return true}



// Real time & Sumbit event validation

$('#name').on('input',()=>{checkName()});
$("#mail").on('input',()=>{checkEmail()});
$('#cvv').on('input',()=>{ checkCreditCardCVV ()});
$('#cc-num').on('input',()=>{checkCreditCardNumber()});
$('#zip').on('input',()=>{checkZipCode()});
$('#other-title').on('input',()=>{checkOtherJobBox()});
$('#payment').on('change',()=>{checkPaymentMethod()});
 

function runTests (){ 
                checkPaymentMethod();
                checkCreditCard (); 
                checkActivities(); 
                checkOtherJobBox(); 
                checkEmail();
                checkName();
                     }
//The formErrorChecker () function confirms the state of all the tests that have been run on the form.

function formErrorChecker () {
   
    runTests();
    if(checkPaymentMethod() && checkCreditCard () && checkActivities() && checkOtherJobBox() && checkEmail() && checkName()==true)
        {    $('#error-msg-header').html('<p> Form submit succesful</p>').delay(3000);
        return true} 

        else
        { $('#error-msg-header').html('<p style="font-size: 18px"> There seems to be something Wrong <br>with the infromation you supplied , please check again </p>');
        return false
            }}
            //Credit card sellection hack- refactor later
            $('#payment').val('Credit Card').trigger('change');
//The submit event

    $('form').submit( (e)=>{
        
       if( formErrorChecker()){} else{e.preventDefault()}  }
    )

