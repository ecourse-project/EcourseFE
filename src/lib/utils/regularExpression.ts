const regex = {
	password: new RegExp(
		/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d[\]{};:=<>_+^#$@!%*?&]{8,}$/
	),
	// phoneNumber: new RegExp(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/),
	phoneNumber: new RegExp(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/),
	alphabet: new RegExp(/^[a-zA-Z ]*$/),
};
export default regex;