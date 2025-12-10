// Mexican Fever Medications Database - English Version
// Fever medications available in Mexico

export const medicationsMexicoEnglish = {
  paracetamol: [
    // TEMPRA BRAND
    {
      id: 'tempra-jarabe',
      name: 'Tempra Children\'s Syrup',
      ingredient: 'Paracetamol',
      concentration: 160, // mg per 5ml
      volume: 5, // ml
      packageConcentration: '3.2g/100ml', // What's shown on package
      form: 'Syrup',
      image: '/medications/tempra-jarabe.jpg',
      ageRestriction: '2-11 years'
    },
    {
      id: 'tempra-gotas',
      name: 'Tempra Pediatric Solution',
      ingredient: 'Paracetamol',
      concentration: 100, // mg per ml
      volume: 1, // ml
      form: 'Drops',
      image: '/medications/tempra-gotas.jpg',
      ageRestriction: '0-36 months'
    },
    // TYLENOL BRAND
    {
      id: 'tylenol-infantil',
      name: 'Tylenol Children\'s Suspension',
      ingredient: 'Paracetamol',
      concentration: 160, // mg per 5ml
      volume: 5, // ml
      packageConcentration: '3.2g/100ml', // What's shown on package
      form: 'Syrup',
      image: '/medications/tylenol-infantil.jpg',
      ageRestriction: '2-12 years'
    },
    {
      id: 'tylenol-pediatrico',
      name: 'Tylenol Pediatric Suspension',
      ingredient: 'Paracetamol',
      concentration: 100, // mg per ml
      volume: 1, // ml
      form: 'Drops',
      image: '/medications/tylenol-pediatrico.jpg',
      ageRestriction: '0-24 months'
    },
    // GENERIC BRANDS
    {
      id: 'paracetamol-jarabe-generico',
      name: 'Paracetamol Children\'s Syrup (Generic)',
      ingredient: 'Paracetamol',
      concentration: 160, // mg per 5ml
      volume: 5, // ml
      packageConcentration: '3.2g/100ml', // What's shown on package
      form: 'Syrup',
      image: '/medications/tempra-jarabe.jpg',
      ageRestriction: '2-11 years',
      note: 'Similares, del Ahorro, Pharmalife, Benavides'
    },
    {
      id: 'paracetamol-gotas-generico',
      name: 'Paracetamol Pediatric Solution (Generic)',
      ingredient: 'Paracetamol',
      concentration: 100, // mg per ml
      volume: 1, // ml
      form: 'Drops',
      image: '/medications/tempra-gotas.jpg',
      ageRestriction: '0-36 months',
      note: 'Similares, del Ahorro, Pharmalife, Benavides'
    },
  ],
  ibuprofen: [
    // MOTRIN BRAND
    {
      id: 'motrin-infantil',
      name: 'Motrin Children\'s Suspension',
      ingredient: 'Ibuprofen',
      concentration: 100, // mg per 5ml
      volume: 5, // ml
      packageConcentration: '2g/100ml', // What's shown on package
      form: 'Suspension',
      image: '/medications/motrin-infantil.jpg',
      ageRestriction: '2-12 years'
    },
    {
      id: 'motrin-pediatrico',
      name: 'Motrin Pediatric Suspension',
      ingredient: 'Ibuprofen',
      concentration: 40, // mg per ml
      volume: 1, // ml
      form: 'Drops',
      image: '/medications/motrin-pediatrico.jpg',
      ageRestriction: '6-24 months'
    },
    // TEMPRA FEN BRAND
    {
      id: 'temprafen-infantil',
      name: 'Tempra Fen Children\'s Suspension',
      ingredient: 'Ibuprofen',
      concentration: 100, // mg per 5ml
      volume: 5, // ml
      packageConcentration: '2g/100ml', // What's shown on package
      form: 'Suspension',
      image: '/medications/motrin-infantil.jpg',
      ageRestriction: '2-12 years'
    },
    // GENERIC BRANDS
    {
      id: 'ibuprofeno-suspension-generico',
      name: 'Ibuprofen Children\'s Suspension (Generic)',
      ingredient: 'Ibuprofen',
      concentration: 100, // mg per 5ml
      volume: 5, // ml
      packageConcentration: '2g/100ml', // What's shown on package
      form: 'Suspension',
      image: '/medications/motrin-infantil.jpg',
      ageRestriction: '2-12 years',
      note: 'Similares, del Ahorro'
    },
    {
      id: 'ibuprofeno-gotas-generico',
      name: 'Ibuprofen Pediatric Suspension (Generic)',
      ingredient: 'Ibuprofen',
      concentration: 40, // mg per ml
      volume: 1, // ml
      form: 'Drops',
      image: '/medications/motrin-pediatrico.jpg',
      ageRestriction: '6-24 months',
      note: 'Similares, del Ahorro'
    },
  ],
  suppositories: {
    paracetamol: [
      {
        id: 'tempra-supp-100',
        name: 'Tempra Suppository 100mg',
        ingredient: 'Paracetamol',
        concentration: 100, // mg per suppository
        form: 'Suppository',
        image: '/medications/tempra-supp-100.jpg',
        weightRange: '3-12 kg',
        ageRange: '1-18 months',
        ageRestriction: 'For infants and toddlers'
      },
      {
        id: 'tempra-supp-300',
        name: 'Tempra Suppository 300mg',
        ingredient: 'Paracetamol',
        concentration: 300, // mg per suppository
        form: 'Suppository',
        image: '/medications/tempra-supp-300.jpg',
        weightRange: '12-30 kg',
        ageRange: '18 months-12 years',
        ageRestriction: 'For older children'
      },
      {
        id: 'paracetamol-supp-100-generico',
        name: 'Paracetamol Suppository 100mg (Generic)',
        ingredient: 'Paracetamol',
        concentration: 100, // mg per suppository
        form: 'Suppository',
        image: '/medications/tempra-supp-100.jpg',
        weightRange: '3-12 kg',
        ageRange: '1-18 months',
        ageRestriction: 'For infants and toddlers',
        note: 'Piremol, Marca del Ahorro, Similares'
      },
      {
        id: 'paracetamol-supp-300-generico',
        name: 'Paracetamol Suppository 300mg (Generic)',
        ingredient: 'Paracetamol',
        concentration: 300, // mg per suppository
        form: 'Suppository',
        image: '/medications/tempra-supp-300.jpg',
        weightRange: '12-30 kg',
        ageRange: '18 months-12 years',
        ageRestriction: 'For older children',
        note: 'Piremol, Marca del Ahorro, Similares'
      }
    ],
    diclofenac: []
  }
}
