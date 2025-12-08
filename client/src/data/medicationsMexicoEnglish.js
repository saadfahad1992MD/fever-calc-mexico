// Mexican Fever Medications Database - English Version
// Fever medications available in Mexico

export const medicationsMexicoEnglish = {
  paracetamol: [
    {
      id: 'tempra-jarabe',
      name: 'Tempra Children\'s Syrup',
      ingredient: 'Paracetamol',
      concentration: 160, // mg per 5ml
      volume: 5, // ml
      form: 'Syrup',
      image: '/medications/tempra.jpg',
      ageRestriction: ''
    },
    {
      id: 'tempra-gotas',
      name: 'Tempra Pediatric Drops',
      ingredient: 'Paracetamol',
      concentration: 100, // mg per ml
      volume: 1, // ml
      form: 'Drops',
      image: '/medications/tempra.jpg',
      ageRestriction: '0-36 months'
    },
  ],
  ibuprofen: [
    {
      id: 'motrin-infantil',
      name: 'Motrin Children\'s',
      ingredient: 'Ibuprofen',
      concentration: 100, // mg per 5ml
      volume: 5, // ml
      form: 'Suspension',
      image: '/medications/motrin.jpg',
      ageRestriction: 'Age over 6 months'
    },
    {
      id: 'motrin-pediatrico',
      name: 'Motrin Pediatric Drops',
      ingredient: 'Ibuprofen',
      concentration: 40, // mg per ml
      volume: 1, // ml
      form: 'Drops',
      image: '/medications/motrin.jpg',
      ageRestriction: 'Age over 6 months'
    },
  ],
  suppositories: {
    paracetamol: [],
    diclofenac: []
  }
}
