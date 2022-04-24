const phoneNumberFormatter = function(number) {
  // 1. Menghilangkan karakter selain angka
  let formatted = number.replace(/\D/g, '');

  // 2. Menghilangkan angka 0 di depan (prefix)
  //    Kemudian diganti dengan 62
  // if (formatted.startsWith('0')) {
  //   formatted = '62' + formatted.substr(1);
  // }

  // if (!formatted.endsWith('@c.us')) {
  //   formatted += '@c.us';
  // }
  if(formatted.indexOf('-') > 0) {
    if(formatted.endsWith('@g.us')) {formatted = formatted;}
    else {formatted = formatted+'@g.us';}
  }
  else {
    if(formatted.startsWith('0')) {
        formatted = '62' + formatted.substr(1);
        if(formatted.endsWith('@c.us')) {formatted = formatted;}
        else {formatted = formatted+'@c.us';}
    }
    else {
        if(formatted.endsWith('@c.us')) {formatted = formatted;}
        else {formatted = formatted+'@c.us';}
    }
  }
 
  return formatted;
}

module.exports = {
  phoneNumberFormatter
}