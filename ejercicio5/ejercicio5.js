function excavar() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Excavación completada');
        resolve(); 
      }, 4000); 
    });
  }
  
  function construirEstructura() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Estructura construida');
        resolve(); 
      }, 5000); 
    });
  }
  
  function pintarCasa() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Casa pintada');
        resolve(); 
      }, 3000); 
    });
  }
  
  excavar()
    .then(() => construirEstructura())  
    .then(() => pintarCasa()) 
    .then(() => {
      console.log('La construcción ha terminado. ¡La casa está lista para mudarse!');
    })
    .catch(error => {
      console.log('Hubo un error en el proceso de construcción:', error);
    });
  