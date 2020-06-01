const person = () => {
  let savedName = 'Carlos';
  return {
    getName: () => {
      return savedName;
    },
    setName: (name) => {
      savedName = name;
    },
  };
};

const newPerson = person();
console.log(newPerson.getName());

newPerson.setName('Carlos La Fuente');
console.log(newPerson.getName());
