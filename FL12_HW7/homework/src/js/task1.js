let email, pass, oldPass, newPass;
const NUM5 = 5, NUM6 = 6;
if ( !(email = prompt('Input your email') ) ) {
	alert('Canceled');
} else if (email.length < NUM5) {
	alert('I don\'t know any emails having name length less than 5 symbols');
} else if (email !== 'user@gmail.com' && email !== 'admin@gmail.com') {
	alert('I don\'t know you');
} else if ( !(pass = prompt('Input your password') ) ) {
	alert('Canceled');
} else if ( (email !== 'user@gmail.com' || pass !== 'UserPass') &&
		(email !== 'admin@gmail.com' || pass !== 'AdminPass') ) {
	alert('Wrong password');
} else if ( !confirm('Do you want to change your password?') ) {
	alert('You have failed the change.');
} else if ( !(oldPass = prompt('Input your old password') ) ) {
	alert('Canceled');
} else if (oldPass !== pass) {
	alert('Wrong old password');
} else if ( !(newPass = prompt('Input your new password') ) ) {
	alert('Canceled');
} else if (newPass.length < NUM6) {
	alert('It\'s too short password. Sorry.');
} else if ( prompt('Input your new password again') !== newPass ) {
	alert('You wrote the wrong password.');
} else {
	alert('You have successfully changed your password.');
}
