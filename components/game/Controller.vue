<template>
  <div>
    <h1 class="text-3xl pb-3 mb-3 border-b">Mützerath</h1>
    <NavStatus :key="village.key"/>
    <div class="flex">
      <NavMap/>
      <NavMenu
          @addRepro="uihandlers.increaseSupport"
          @addTreehouse="uihandlers.addTreehouse"
          />
    </div>
  </div>
</template>

<script setup>
// get the composable state
const village = useVillage()

// game.js
var structureStats = {
  treehouse: {
    maxBuilders: 3,
    maxHealth: 10,
    repairable: true
  }
}


class Structure {
  id;
  type;
  health;
  progress;
  builders;

  constructor(id) {
    this.id = id
    this.health = 0
    this.progress = 0
    this.builders = 0
  }

  build() {
    let maxHealth = structureStats[this.type].maxHealth

    // make progress
    this.health += this.builders

    // finished
    if (this.health >= maxHealth)
      this.health = maxHealth

    this.progress = Math.round((this.health / maxHealth) * 100)
  }
}

class Treehouse extends Structure {
  constructor(id) {
    super(id)
    this.type = "treehouse"
  }
}


//
// Having all structures defined
// we can build our village
//


//
// Important note:
// Builder management is done by the village class
//
class Village {
  nextStructureId;
  structures;
  villagers;

  constructor() {
    this.structures = {}
    this.nextStructureId = 0

    this.villagers = {
      baseCapacity: 10,
      capacity: 10,
      total: 10,
      free: 10,
      support: 0,
      builders: 0
    }
  }

  structureCount(type) {
    let n = 0
    for (let id in this.structures)
      if (this.structures[id].type == type)
        n++
    return n
  }

  assignBuilders(id) {
    let struct = this.structures[id]
    let max = structureStats[struct.type].maxBuilders
    let req = max - struct.builders

    let available = this.villagers.free

    //how many additional builders can we mobilize?
    let add = available < req ? available : req

    struct.builders += add
    this.villagers.free -= add
    this.villagers.builders += add
  }

  releaseBuilders(id) {
    let n = this.structures[id].builders
    this.structures[id].builders = 0
    this.villagers.free += n
    this.villagers.builders -= n
  }

  build() {
    for (let id in this.structures) {
      this.structures[id].build()
      if (this.structures[id].progress == 100 && this.structures[id].builders > 0)
        this.releaseBuilders(id)
    }
  }

  addTreehouse() {
    // technical stuff
    let id = this.nextStructureId++
    let treehouse = new Treehouse(id)
    this.structures[id] = treehouse
    this.assignBuilders(id)
  }

  increaseSupport() {
    var v = this.villagers

    if (v.free == 0)
      return

    v.support++
    v.free--
    v.capacity = v.baseCapacity + 7 * v.support
  }

  recruitVillagers() {
    let v = this.villagers
    let add = Math.floor((v.capacity - v.total) / 3)
    v.total += add
    v.free += add
  }
}


var game = {
  timeframe: 0,
  isFinished: false,
  loopId: undefined,
  village: new Village()
}

//
// UI Functions
//

const uihandlers = {
  increaseSupport: function (e) {
    game.village.increaseSupport()
  },
  addTreehouse: function (e) {
    game.village.addTreehouse()
  }
}

var updateUI = function () {

  // UPDATED
  // transfer to useState variable
  village.value.villagers = game.village.villagers

  // copy the structures as well
  village.value.structures = game.village.structures

  // change key, so that components rerender
  village.value.key = Math.random()

}

function loop() {
  game.timeframe++

  var v = game.village
  v.recruitVillagers()
  v.build()

  updateUI()

  if (game.isFinished)
    clearInterval(game.loopId)
}

loop()
game.loopId = setInterval(loop, 2000)
</script>