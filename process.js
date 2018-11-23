class Person {
  constructor(name, dni) {
    if(typeof name === 'string') {
      this._name = name;
    }
    else {
      window.alert('Write some name!');
    }
    if(typeof dni === 'string') {

      if(dni.length > 8){
        document.getElementById("demo").innerHTML = "You are foreign aren't you?";
        this._dni = dni;
      }
      else {
       this._dni = dni;
      }
    }
    else {
      window.alert('The DNI has only numbers!');
    }
  }
  get name() {
    return this._name;
  }
  get dni() {
    return this._dni;
  }
}
const getData = document.getElementById("process");
const inputName = document.getElementById("name");
const inputDni = document.getElementById("dni");
process.addEventListener("click", createPerson);

function createPerson() {
  const person1 = new Person(inputName.value, inputDni.value);
  document.getElementById("putname").innerHTML = person1.name;
  document.getElementById("putdni").innerHTML = person1.dni;
}
