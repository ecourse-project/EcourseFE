const regex = {
  password: new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d[\]{};:=<>_+^#$@!%*?&]{8,}$/),
  phoneNumber: new RegExp(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/),
  phoneNumberVN: new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/),

  alphabet: new RegExp(/^[a-zA-Z ]*$/),
};
export default regex;
