import Person, { Course, Student } from './example-10'


// Amy, Bob, and Cat could be Person or Student
// We need to add them all to an array of people. 
// People can be either Person or Student. 

// An interface describes features of a type. All 
// tyoes that have those features fit the interface.

// https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#interfaces

// Write an interface with name and age

interface Human {
	name: string
	age: number
}

const amy: Human = new Student('Amy', 21, 'junior')
const bob: Human = new Person('Bob', 32)
const cat: Human = new Student('Cat', 43, 'senior')

// Use the interface to make an array that 
// holds both types: Person and Student 

const allPeople: Human[] = [
	amy, 
	bob,
	cat
]



export {
	allPeople
}
