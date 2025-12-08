// Mexican Fever Medications Database - Spanish Version
// Medicamentos para la fiebre disponibles en México

export const medicationsMexico = {
  paracetamol: [
    {
      id: 'tempra-jarabe',
      name: 'Tempra Jarabe Infantil',
      ingredient: 'Paracetamol',
      concentration: 160, // mg per 5ml
      volume: 5, // ml
      form: 'Jarabe',
      image: '/medications/tempra.jpg',
      ageRestriction: ''
    },
    {
      id: 'tempra-gotas',
      name: 'Tempra Solución Pediátrica',
      ingredient: 'Paracetamol',
      concentration: 100, // mg per ml
      volume: 1, // ml
      form: 'Gotas',
      image: '/medications/tempra.jpg',
      ageRestriction: '0-36 meses'
    },
  ],
  ibuprofen: [
    {
      id: 'motrin-infantil',
      name: 'Motrin Infantil',
      ingredient: 'Ibuprofeno',
      concentration: 100, // mg per 5ml
      volume: 5, // ml
      form: 'Suspensión',
      image: '/medications/motrin.jpg',
      ageRestriction: 'Edad mayor a 6 meses'
    },
    {
      id: 'motrin-pediatrico',
      name: 'Motrin Pediátrico',
      ingredient: 'Ibuprofeno',
      concentration: 40, // mg per ml
      volume: 1, // ml
      form: 'Gotas',
      image: '/medications/motrin.jpg',
      ageRestriction: 'Edad mayor a 6 meses'
    },
  ],
  suppositories: {
    paracetamol: [],
    diclofenac: []
  }
}
