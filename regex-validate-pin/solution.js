function validatePIN (pin) {
  let re = /^[0-9]{4}$|^[0-9]{6}$/.test(pin);
  return re;
}