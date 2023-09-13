// Here I have defined a class with type script. 
// Take a look at how the properties are typed. 

// https://www.typescriptlang.org/docs/handbook/2/classes.html#handbook-content

// Complete the Course class below. 

class Person {
	name: string
	age: number

	constructor(name: string, age: number) {
		this.name = name 
		this.age = age
	}

	describe(): string {
		return `${this.name} is ${this.age}`
	}
}


// Define a Course. A Course a title: string and a units: number

class Course {
	title: string
	units: number
	
	constructor(title: string, units: number) {
		this.title = title
		this.units = units
	}
}

// Define a Student class. Student extends Person. A Student 
// has an array of Courses and a cohort which is: junior or senior

// Add enroll method that takes a Course as parameter and adds 
// this to the course array

class Student extends Person{
	courses: Course[]
	cohort: string
	
	constructor(name: string, age: number, cohort: string) {
		super(name, age)
		this.courses = []
		this.cohort = cohort
	}
	
	enroll(course: Course) {
		this.courses.push(course)
	}
	
	describe(): string {
		return `${this.name} is ${this.age} and is in ${this.cohort} cohort`
	}
}

export default Person
export {
	Course, 
	Student
}

const joe = new Person('Joe', 33)
console.log(joe.describe())

const math = new Course('Math', 4)
const english = new Course('English', 4)

const jane = new Student('Jane', 22, 'senior')
jane.enroll(math)
jane.enroll(english)
console.log(jane.describe())
console.log(jane.courses)

