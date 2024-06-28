// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// DELEGACIÓN DE EVENTOS
// DATASET
// ACCESO A OBJETOS MÚLTIPLES

const pets = {
  cat1: {
    name: 'Anubis',
    age: 9
  },
  cat2: {
    name: 'Nala',
    age: 6
  }
};

const printValue = (pet, property) => {
  console.log(pets[pet][property]);
};

printValue('cat1', 'name');
printValue('cat2', 'age');
