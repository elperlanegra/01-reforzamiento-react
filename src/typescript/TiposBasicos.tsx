
export const TiposBasicos = () => {

  const name: string = "Carlos"
  const edad: number = 23
  const estaActivo: boolean = true
  
  const poderes: String[] = ['Velocidad', 'Volar', 'Respirar']
  

  return (

    <>
      <h3>Tipos Básicos</h3>
      { name }, { edad }, { (estaActivo) ? 'activo' : 'no activo' }
      <br/>
      
    </>

  );

};
