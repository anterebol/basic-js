module.exports = function createDreamTeam(members ) {
  let teame_name = '';
  let name;
  let sort_name = members.sort();
  for (let i = 0; i < members.length; i++) {
    name = members[i];
    if (typeof(name) === 'string') {
      teame_name = teame_name + name[0];
    }
  }
  return teame_name.toUpperCase();
};
