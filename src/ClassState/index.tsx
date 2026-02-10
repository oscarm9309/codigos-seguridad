import React from "react";

interface ClassStateProps {
    name: string;
    }

interface ClassStateState {
    error: boolean;
}


class ClassState extends React.Component<ClassStateProps, ClassStateState> {
    constructor(props: ClassStateProps) {
        super(props);
        this.state = {
            error: false
        };
    }

    render() {        
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>

                <p>Por favor, escribe el código de seguridad para eliminar este componente.</p>

                <input type="text" placeholder="Código de seguridad"/>
                <button
                    onClick={() => this.setState({ error: !this.state.error })}>
                    Comprobar
                </button>
                {this.state.error && <p>Error: Código incorrecto</p>}
            </div>
        );
    }
}

export { ClassState };