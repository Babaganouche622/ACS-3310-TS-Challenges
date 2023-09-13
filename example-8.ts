// We need a Kaiju class
// All Kaiju have name, power and type. 
// Kaiju should have a describe method that 
// prints: name:<name> type:<type> power:<power>

// Type can be: lizard, flying, or ape. 
// Use an enum to define the type

// Be sure to include a constructor in the 
// Kaiju class that initializes it's properties!

enum KaijuType { 
	Lizard,
	Flying,
	Ape
}

class Kaiju {
	name: string
	power: number
	type: KaijuType

	constructor(name: string, power: number, type: KaijuType) {
		this.name = name
		this.power = power
		this.type = type
	}

	describe() {
		return `name: ${this.name} type: ${this.type} power: ${this.power}`
	}
}

export {
	Kaiju, 
	KaijuType
}
