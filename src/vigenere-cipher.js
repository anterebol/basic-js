const CustomError = require("../extensions/custom-error");
/*const directMachine = new VigenereCipheringMachine(value);*/
module.exports = class VigenereCipheringMachine {
  constructor (value) {
    this.value = value;
  } 
  choise () {
    if (this.value === true) {
    encrypt();
    }
    else if (this.value === false) {
    decrypt();
    }
}
  encrypt ( text, key) {
    if (lang === "all") cypher.language.joinAll ();
          else if (!Array.isArray(cypher.language[lang])) return;
          this.genSqViz(lang);
          var sText = text;

          text = text.toUpperCase();
          key  = key.toUpperCase();

          var s = "", l = cypher.language[lang];
          for (var i = 0; i < text.length; i++) {
              s += this.square[l.indexOf(text[i])][l.indexOf(key[i])];
          }
          return s.split ("").map (function (e, i, a) {return register (sText[i]) ? e : e.toLowerCase();}).join("");
      }
  decrypt (lang, key, cipher) {  
    if (lang === "all") cypher.language.joinAll ();
  else if (!Array.isArray(cypher.language[lang])) return;
  this.genSqViz(lang);

  var sCipher = cipher;

  cipher = cipher.toUpperCase();
  key    = key.toUpperCase();
  var s = "",  l = cypher.language[lang];
  for (var i = 0; i < cipher.length; i++) {
      var row = l.indexOf(key[i])
      coll = this.square[row].indexOf(cipher[i]);
      s += l[coll];
  }
  return s.split ("").map (function (e, i, a) {return register (sCipher[i]) ? e : e.toLowerCase();}).join("");
}
  }
 
