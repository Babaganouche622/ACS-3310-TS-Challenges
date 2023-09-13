
// We need a Kaiju class
// All Kaiju have name, power and type. 
// Type can be: lizard, flying, or ape

enum KaijuType { 
	flying,
	lizard,
	ape
}

class Kaiju {
	name: string
	type: KaijuType
	power: number
}

export {
	Kaiju,
	KaijuType
}
