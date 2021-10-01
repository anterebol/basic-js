export default function createDreamTeam(members) {
  if (members == undefined) {
    return false;
  }
  let teame_name = '';
  let name;
  let sortName = [];
  let answer;
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === 'string' ) {
    name = members[i].toUpperCase();
   for ( let k = 0; k < name.length; k++) {
     if (name[k] != ' ') {
      teame_name = teame_name + name[k];
     }
   }
     sortName.push(teame_name[0]);
    teame_name = '';
  }
}
  answer = sortName.sort();
  answer = sortName.join('');

  return answer;
}