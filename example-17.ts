// Giant Robot class

// Goal creat an interface with a methods 

// All Robots have name, power and type. 
// Kaiju should have a describe method that 
// prints: name:<name> type:<type> power:<power>

import { Kaiju, KaijuType } from './example-8'

interface Robot extends Kaiju{
  name: string
  power: number
  type: KaijuType
  describe(): string
}

class GiantRobot extends Kaiju implements Robot{
  constructor(name: string, power: number, type: KaijuType) {
    super(name, power, type)
  }
}

export default GiantRobot

const mechaGodzilla = new GiantRobot('MechaGodzilla', 100, KaijuType.Lizard)

console.log(mechaGodzilla.describe())