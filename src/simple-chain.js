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
 if (this.chain[0] == undefined) {
  value = `( ${value} )`;
   this.chain.push(value);
   return this;
   }
   else {
     value = `~~( ${value} )`;
   this.chain.push(value);
   return this;
   }
},
  removeLink(position) {
    if(position < 0) {
      throw new Error();
    }
    let n = position - 1 ;
    this.chain.splice(n, 1);
    return this;
},
  reverseChain() {
    let d = [];
    if (this.chain.length > 0) {
    this.chain = this.chain.join('');
    this.chain = this.chain.split('~~');
    this.chain = this.chain.reverse();
    for (let i = 0; i < this.chain.length; i++) {
    if (i != this.chain.length-1) {
    d.push(this.chain[i]);
    d.push('~~');
      }
      else {
        d.push(this.chain[i]);
     }
    }
    }
    this.chain = d;
    return this;
  },
  finishChain () {
    this.answer = this.chain.join('');
    this.chain = [];
    return this.answer;
  },
};
export default chainMaker;
