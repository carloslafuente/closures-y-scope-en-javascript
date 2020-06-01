const helloWorld = () => {
  const hello = 'Hello world!';
  console.log(hello);
};

helloWorld();

console.log(hello);

var scope = 'I am global';

const functionScope = () => {
  var scope = 'I am just local';
  const func = () => {
    return scope;
  };
  console.log(func());
};

functionScope();
