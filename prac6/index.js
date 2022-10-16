function sub(){
  const pet = {
    name : document.getElementById('name').value,
    age : document.getElementById('age').value,
    weight : document.getElementById('weight').value,
    type: document.getElementById("type").value,
    like : document.getElementById('like').value,
  }
  console.log(pet);
  const petJSON = JSON.stringify(pet);
  console.log(petJSON);
  document.getElementById('form').reset();
  alert("check console!");
}
