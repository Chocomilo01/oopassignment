class AnimalKingdom {
numberOfEyes = 2
        
    withoutBackBone () {
        console.log('this animal doesnt have backbone')
    }
    withBackBone () {
        console.log('this animal has backbone')
    }
//cold_blooded private met
    #cold_blooded () {
        console.log('Its a cold_blooded animal')
     }
 //warm_blooded private
     #warm_blooded () {
         console.log('Its a warm_blooded animal')
      }

    cold_blooded() {
        this.#cold_blooded()
    }
    warm_blooded() {
        this.#warm_blooded()
    }
}


//Arthropoda without backbone and has a cold blooded trait. so i created a private class
class Arthropoda extends AnimalKingdom{

}
const arthropoda = new Arthropoda()
arthropoda.withoutBackBone() + arthropoda.cold_blooded()


//fish has backbone method and a cold-blooded(similiar) trait like an arthropoda
class Fish extends AnimalKingdom{
    animalSwimms = true
    
}
const fish = new Fish()
fish.withBackBone()
fish.cold_blooded()

//Amphibia has backbone method and a cold-blooded(similiar)
class Amphibia extends AnimalKingdom{

}
const amphibia = new Amphibia()
amphibia.withBackBone()
amphibia.cold_blooded()

// Reptile has backbone and its a cold-blooded animal
class Reptiles extends AnimalKingdom{

}
const reptiles = new Reptiles()
reptiles.withBackBone()
reptiles.cold_blooded()

class Aves extends AnimalKingdom{

}
const aves = new Aves()
aves.withBackBone()
aves.warm_blooded()

class Mammals extends AnimalKingdom{

}
const mammals = new Mammals()
mammals.withBackBone()
mammals.warm_blooded()