const myMovie = {
  title: 'Austin Powers in Goldmember',
  director: 'Jay Roach',
  actors: [
    'Mike Myers',
    ' Beyoncé Knowles',
    'Seth Green',
    'Michael York',
    'Robert Wagner',
    'Mindy Sterling',
    'Verne Troyer',
    'Michael Caine'
  ],
  releaseYear: 2002,
  duration: 94
}
console.log(myMovie.title)
console.log(myMovie.director)
console.log(myMovie.releaseYear)
console.log(myMovie.actors[3])
console.log(myMovie.duration + 25)

// copy and paste into your script.js

const montana = {
  scientist: 'Dr. Alan Grant',
  depth: '10 meters',
  dino: 'Velociraptor'
}

const guestOfHonor = montana.scientist

const cleverGirl = montana.dino
console.log(cleverGirl)

const costaRica = {
  programmer: 'Dennis Nedry',
  contact: 'Lewis Dodgson',
  payment: 750000,
  specimens: [
    'Tyrannosaurus Rex',
    'Triceratops',
    'Brachiosaurus',
    'Velociraptor',
    'Dilophasaurus',
    'Gallimimus'
  ],
  menthol: false
}

const barbasol = costaRica.specimens
console.log(barbasol)

const favoriteDino = costaRica.specimens
console.log(favoriteDino)

console.log(costaRica.payment + 750000)

const jurassicPark = {
  expenseSpared: 0,
  staff: {
    founder: 'John Hammond',
    programmer: 'Dennis Nedry',
    engineer: 'John Arnold',
    security: 'Robert Muldoon',
    scientist: 'Dr. Henry Wu'
  },
  guests: [
    'Dr. Alan Grant',
    'Dr. Ellie Sattler',
    'Dr. Ian Malcolm',
    'Donald Gennaro'
  ],
  systems: [
    {
      area: 'Perimeter Fence',
      volts: 10000,
      online: true
    },
    {
      area: 'T-Rex Paddock',
      volts: 10000,
      online: true
    },
    {
      area: 'Velociraptor Pen',
      volts: 10000,
      online: true
    }
  ]
}

console.log(jurassicPark.staff.founder)
jurassicPark.guests.push('Tim, Lex')
console.log(jurassicPark.guests)

for (let i = 0; i < jurassicPark.guests.length; i++) {
  console.log(jurassicPark.guests[i])
}

jurassicPark.systems.push({
  area: 'Tour Vehicles',
  lockingMechanisms: false,
  online: true
})

console.log(jurassicPark.systems)

jurassicPark.systems[0].online = false
console.log(jurassicPark.systems)
jurassicPark.systems[1].online = false
jurassicPark.systems[3].online = false

delete jurassicPark.staff.programmer
console.log(jurassicPark.staff.programmer)

jurassicPark.guests
