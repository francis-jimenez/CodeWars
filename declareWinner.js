// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

function declareWinner(fighter1, fighter2, firstAttacker) {
    let secondAttacker;
    if (firstAttacker === fighter1.name) {
      
      firstAttacker = fighter1
      secondAttacker = fighter2
    }
    
    else {
      
      firstAttacker = fighter2
      secondAttacker = fighter1
    }
    
    while (fighter1.health > 0 && fighter2.health > 0) {
      
      secondAttacker.health -= firstAttacker.damagePerAttack
      
      if (secondAttacker.health <= 0) {
        return firstAttacker.name;
      }
      
      firstAttacker.health -= secondAttacker.damagePerAttack
      
      if (firstAttacker.health <= 0) {
        return secondAttacker.name;
      }
    }
  }