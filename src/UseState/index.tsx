import React from "react";

function UseState({ name }: { name: string }) {
const [error, setError] = React.useState(false);

    return (
            <div>
                <h2>Eliminar {name}</h2>
                
                <p>Por favor, escribe el código de seguridad para eliminar este componente.</p>

                {error && <p>Error: Código incorrecto</p>}

                <input type="text" placeholder="Código de seguridad"/>
                <button
                    onClick={() => setError(!error)}>
                    Comprobar
                </button>
            </div>
        );
}

export { UseState };