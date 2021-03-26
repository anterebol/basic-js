
const chainMaker = {
  chain : [],
  answer : '',
  count : 0,
  getLength() {
    if (this.chain == '') {
return 0;
    }
    for (let i = 0; i < this.chain.length; i++) {
      if (this.chain[i] === '~' && this.chain[i+1] === '~') {
        this.count++;
      }
    }
   return this.count++;
  },
addLink(value)  {
  if (value === undefined) {
       if (this.chain == '') {
  value = `(  )`;
   this.chain+= value;
   return this;
   }
   else {
     value = `~~(  )`;
   this.chain+= value;
   return this;
   }
  }
  else {
   if (this.chain == '') {
  value = `( ${value} )`;
   this.chain+= value;
   return this;
   }
   else {
     value = `~~( ${value} )`;
   this.chain+= value;
   return this;
   }}
},
  removeLink(position) {
    this.chain = this.chain.replace(`( ${position} )~~`, '');
    this.chain = this.chain.replace(`~~( ${position} )`, '');
    this.chain = this.chain.replace(`( ${position} )`, '');
    return this;
},
  reverseChain() {
    
  },
  finishChain () {
    this.answer = this.chain;
    this.chain = undefined;
    return this.answer;
  },
};
module.exports = chainMaker;
