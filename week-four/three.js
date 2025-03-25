const person = {  
  name: "Sahil",  
  age: 24,  
  city: "Jaipur",  
  greet() {  
    return `Hello, my name is ${this.name} from ${this.city}`;  
  }  
};  

console.log(person.greet());  

const car = {  
  brand: "Tesla",  
  model: "Model S",  
  year: 2023,  
  getDetails() {  
    return `${this.brand} ${this.model} (${this.year})`;  
  }  
};  

console.log(car.getDetails());  
