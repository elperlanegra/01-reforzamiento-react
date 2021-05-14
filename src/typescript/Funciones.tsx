
export const Funciones = () => {


    const sumar = ( a: number, b: number ) => {

        return a + b

    } 

    return (
        <div>
            <h3>Funciones</h3>
            <span>El Resulatado es: { sumar(4, 5) }</span>
        </div>
    )
}
