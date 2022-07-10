const regex = {
	password: new RegExp(
		/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d[\]{};:=<>_+^#$@!%*?&]{8,}$/
	),
	phoneNumber: new RegExp(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/),
	alphabet: new RegExp(/^[a-zA-Z ]*$/),
};
export default regex;
