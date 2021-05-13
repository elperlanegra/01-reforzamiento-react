

interface Persona {
    userName: string,
    age: number,
    direccion: Direccion

}
interface Direccion {
    pais: string,
    barrio: string
        
}

export const ObjetosLiterales = () => {


    const persona: Persona = {
        userName: 'Manuel',
        age: 21,
        direccion: {
            pais: 'Managua',
            barrio: 'Sandino'
        }
    }

    // para imprimir estos datos tengo que trasformar este objeto

    return (
        <div>
            <h3>Objetos Literales</h3>

            <code>
                <pre>   
                    { JSON.stringify( persona, null, 2 ) }
                </pre>
            </code>

        </div>
    )
}
