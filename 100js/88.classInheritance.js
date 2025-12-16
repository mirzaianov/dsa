class Animal {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return `${this.#name}`;
  }

  sleep() {
    return `${this.#name} is sleeping...`;
  }

  eat() {
    return `${this.#name} is eating. Nom nom!`;
  }
}

class Dog extends Animal {
  #breed;

  constructor(name, breed) {
    super(name);
    this.#breed = breed;
  }

  get breed() {
    return `${this.#breed}`;
  }

  bark() {
    return `${this.name}: Woof! Woof!`;
  }
}

class GoldenRetriever extends Dog {
  constructor(name) {
    super(name, `Golden Retriever`);
  }

  guardHouse() {
    return `${this.name} is a Golden Retriever thus too friendly to guard the house.`;
  }
}

export { Animal, Dog, GoldenRetriever };
