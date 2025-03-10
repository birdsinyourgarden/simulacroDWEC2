function organizeGloves(gloves) {
    const sizes = {};
  
    gloves.forEach(glove => {
      if (!sizes[glove.size]) sizes[glove.size] = { I: 0, D: 0 };
      sizes[glove.size][glove.type]++;
    });
  
    const matchedSizes = [];
    for (const size in sizes) {
      if (sizes[size].I > 0 && sizes[size].D > 0) {
        matchedSizes.push(Number(size));
      }
    }
  
    return matchedSizes;
  }
  
  const gloves = [
    { type: 'I', size: 38 },
    { type: 'D', size: 38 },
    { type: 'D', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ];
  
  console.log(organizeGloves(gloves));
  
  const gloves2 = [
    { type: 'I', size: 38 },
    { type: 'D', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'D', size: 38 }
  ];
  
  console.log(organizeGloves(gloves2));
  
  const gloves3 = [
    { type: 'I', size: 38 },
    { type: 'D', size: 36 },
    { type: 'D', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
  ];
  
  console.log(organizeGloves(gloves3));  
