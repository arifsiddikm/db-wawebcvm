const phoneNumberFormatter = function(number) {
  // 1. Menghilangkan karakter selain angka
  let formatted = number.replace(/\D/g, '');
  if(formatted.startsWith('0')) {
    formatted = '62' + formatted.substr(1);
  }
  else {
    formatted = formatted
  }
  return formatted;
}
module.exports = {
  phoneNumberFormatter
}