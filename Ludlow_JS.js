//Created by Esteban Araujo-Fervenza 
//Responsive Menu JS. The window.onload deals with the null error from trying to operate in a DOM before being loaded
window.onload = function(){
	const menu = document.querySelector(".menu-list");
	const menuBtn = document.querySelector(".menu-btn");
	const offBtn = document.querySelector(".off-btn");
	menuBtn.onclick = () =>{ 
		menu.classList.add("active"); //adds a css mode for the menu_list when active tthat shows a hiden element
		menuBtn.classList.add("hide"); //hides the three bar menu icon when it's active
	}
	offBtn.onclick = () =>{ 
		menu.classList.remove("active"); //remove a css mode for the menu_list hiding the displayed element
		menuBtn.classList.remove("hide"); //shows the three bar menu icon when the side panel is closed
	}
}

//=======================================================================================================================

// Created by Jose Carlos Kuzolitz Garcia - x20164840

//Jquery with validates the entry in the Contact.html Form

//Based on the following tutorial - (https://www.youtube.com/watch?v=xNSQ3i-BWMo)

$(function(){	

	
	$("#send-message").validate({

		/* Validation Rules */
		rules:{
			/* Contact.html Validation Form */
			
			/* Name Field is required */
			fname:{
				required: true
			},
			/* Just accepts numbers max 10 length (not required) */
			phone:{
				required:true,
				digits: true,
			},
			/* Email field is required and it inspects whether it has the standard layout or not */
			email:{
				required: true,
				email: true
			},
			/* textArea is required, in order to send a request just when data is input */
			textArea:{
				required:true
			},

			/* ShoppingCart.html Validation Form */
			billName:{
				required: true
			},
			/* Email field is required and it inspects whether it has the standard layout or not */
			billEmail:{
				required: true,
				email: true
			},
			/* All the fields below are required */
			billAdress:{
				required: true
			},

			billCity:{
				required: true
			},
			
			billCounty:{
				required: true
			},

			billPostCode:{
				required: true
			},
			/* Just Accepts Numbers*/
			cardName:{
				required: true,
			},

			cardNumber:{
				required: true,
				digits: true
			},

			expMonth:{
				required: true
			},

			expYear:{
				required: true
			},

			cvv:{
				required: true,
				digits: true
			}

		},

		/* Error Messages (it uses the "Name" of the element) */
		messages:{
			fname:{
				required: 'Please, What is your name?'
			},
			
			phone:{
				required: 'Please, what is your phone number?',
				digits: 'Only numbers, please.'
			},

			email:{
				required: 'Please, enter an email address',
				email: 'Please, enter a <em>valid</em> email address.'
			},

			textArea:{
				required: "Don't you want to leave a message?"
			},

			billName:{
				required:""
			},

			billEmail:{
				required:""
			},
			
			billAdress:{
				required:""
			},

			billCity:{
				required:""
			},

			billCounty:{
				required:""
			},

			billPostCode:{
				required:""
			},

			cardName:{
				required:""
			},
			
			cardNumber:{
				required:""
			},

			expMonth:{
				required:""
			},

			expYear:{
				required:""
			},

			cvv:{
				required:""	
			}

		}

	});

});