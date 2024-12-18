'use strict';

const items = [
    'Ada',
    1815,
    ['Informática', 'Matemática', 'Escritora'],
    {
      mother: 'Anna Isabella',
      father: 'Lord Byron',
    },
  ];

  console.log(`El dato ${items[1]} está en ${items.indexOf(1815)} y es de tipo ${typeof(items[1])}`);