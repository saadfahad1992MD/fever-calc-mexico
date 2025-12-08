// Mexican Fever Medications Database - Spanish Version
// Medicamentos para la fiebre disponibles en México

export const medicationsMexico = {
  paracetamol: [
    // TEMPRA BRAND
    {
      id: 'tempra-jarabe',
      name: 'Tempra Jarabe Infantil',
      ingredient: 'Paracetamol',
      concentration: 160, // mg per 5ml
      volume: 5, // ml
      form: 'Jarabe',
      image: '/medications/tempra-jarabe.jpg',
      ageRestriction: '2-11 años'
    },
    {
      id: 'tempra-gotas',
      name: 'Tempra Solución Pediátrica',
      ingredient: 'Paracetamol',
      concentration: 100, // mg per ml
      volume: 1, // ml
      form: 'Gotas',
      image: '/medications/tempra-gotas.jpg',
      ageRestriction: '0-36 meses'
    },
    // TYLENOL BRAND
    {
      id: 'tylenol-infantil',
      name: 'Tylenol Suspensión Infantil',
      ingredient: 'Paracetamol',
      concentration: 160, // mg per 5ml
      volume: 5, // ml
      form: 'Jarabe',
      image: '/medications/tylenol-infantil.jpg',
      ageRestriction: '2-12 años'
    },
    {
      id: 'tylenol-pediatrico',
      name: 'Tylenol Suspensión Pediátrica',
      ingredient: 'Paracetamol',
      concentration: 100, // mg per ml
      volume: 1, // ml
      form: 'Gotas',
      image: '/medications/tylenol-pediatrico.jpg',
      ageRestriction: '0-24 meses'
    },
    // GENERIC BRANDS
    {
      id: 'paracetamol-jarabe-generico',
      name: 'Paracetamol Jarabe Infantil (Genérico)',
      ingredient: 'Paracetamol',
      concentration: 160, // mg per 5ml
      volume: 5, // ml
      form: 'Jarabe',
      image: '/medications/tempra-jarabe.jpg',
      ageRestriction: '2-11 años',
      note: 'Similares, del Ahorro, Pharmalife, Benavides'
    },
    {
      id: 'paracetamol-gotas-generico',
      name: 'Paracetamol Solución Pediátrica (Genérico)',
      ingredient: 'Paracetamol',
      concentration: 100, // mg per ml
      volume: 1, // ml
      form: 'Gotas',
      image: '/medications/tempra-gotas.jpg',
      ageRestriction: '0-36 meses',
      note: 'Similares, del Ahorro, Pharmalife, Benavides'
    },
  ],
  ibuprofen: [
    // MOTRIN BRAND
    {
      id: 'motrin-infantil',
      name: 'Motrin Suspensión Infantil',
      ingredient: 'Ibuprofeno',
      concentration: 100, // mg per 5ml
      volume: 5, // ml
      form: 'Suspensión',
      image: '/medications/motrin-infantil.jpg',
      ageRestriction: '2-12 años'
    },
    {
      id: 'motrin-pediatrico',
      name: 'Motrin Suspensión Pediátrica',
      ingredient: 'Ibuprofeno',
      concentration: 40, // mg per ml
      volume: 1, // ml
      form: 'Gotas',
      image: '/medications/motrin-pediatrico.jpg',
      ageRestriction: '6-24 meses'
    },
    // TEMPRA FEN BRAND
    {
      id: 'temprafen-infantil',
      name: 'Tempra Fen Suspensión Infantil',
      ingredient: 'Ibuprofeno',
      concentration: 100, // mg per 5ml
      volume: 5, // ml
      form: 'Suspensión',
      image: '/medications/motrin-infantil.jpg',
      ageRestriction: '2-12 años'
    },
    // GENERIC BRANDS
    {
      id: 'ibuprofeno-suspension-generico',
      name: 'Ibuprofeno Suspensión Infantil (Genérico)',
      ingredient: 'Ibuprofeno',
      concentration: 100, // mg per 5ml
      volume: 5, // ml
      form: 'Suspensión',
      image: '/medications/motrin-infantil.jpg',
      ageRestriction: '2-12 años',
      note: 'Similares, del Ahorro'
    },
    {
      id: 'ibuprofeno-gotas-generico',
      name: 'Ibuprofeno Suspensión Pediátrica (Genérico)',
      ingredient: 'Ibuprofeno',
      concentration: 40, // mg per ml
      volume: 1, // ml
      form: 'Gotas',
      image: '/medications/motrin-pediatrico.jpg',
      ageRestriction: '6-24 meses',
      note: 'Similares, del Ahorro'
    },
  ],
  suppositories: {
    paracetamol: [
      {
        id: 'tempra-supp-100',
        name: 'Tempra Supositorio 100mg',
        ingredient: 'Paracetamol',
        concentration: 100, // mg per suppository
        form: 'Supositorio',
        image: '/medications/tempra.jpg',
        weightRange: '3-12 kg',
        ageRange: '1-18 meses',
        ageRestriction: 'Para bebés y niños pequeños'
      },
      {
        id: 'tempra-supp-300',
        name: 'Tempra Supositorio 300mg',
        ingredient: 'Paracetamol',
        concentration: 300, // mg per suppository
        form: 'Supositorio',
        image: '/medications/tempra.jpg',
        weightRange: '12-30 kg',
        ageRange: '18 meses-12 años',
        ageRestriction: 'Para niños mayores'
      },
      {
        id: 'paracetamol-supp-100-generico',
        name: 'Paracetamol Supositorio 100mg (Genérico)',
        ingredient: 'Paracetamol',
        concentration: 100, // mg per suppository
        form: 'Supositorio',
        image: '/medications/tempra.jpg',
        weightRange: '3-12 kg',
        ageRange: '1-18 meses',
        ageRestriction: 'Para bebés y niños pequeños',
        note: 'Piremol, Marca del Ahorro, Similares'
      },
      {
        id: 'paracetamol-supp-300-generico',
        name: 'Paracetamol Supositorio 300mg (Genérico)',
        ingredient: 'Paracetamol',
        concentration: 300, // mg per suppository
        form: 'Supositorio',
        image: '/medications/tempra.jpg',
        weightRange: '12-30 kg',
        ageRange: '18 meses-12 años',
        ageRestriction: 'Para niños mayores',
        note: 'Piremol, Marca del Ahorro, Similares'
      }
    ],
    diclofenac: []
  }
}
