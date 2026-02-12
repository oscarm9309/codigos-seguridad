import React from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }: { name: string }) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    console.log("Empezando el efecto");
    if (loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");

        if (value === SECURITY_CODE) {
          setError(false);
          setSuccess(true);
        } else {
          setError(true);
          setSuccess(false);
        }

        setLoading(false);
        console.log("Terminando la validación");
      }, 300);
    }
    console.log("Terminando el efecto");
  }, [loading, value]);

  return (
    <div>
      <h2>Eliminar {name}</h2>

      <p>
        Por favor, escribe el código de seguridad para eliminar este componente.
      </p>

      {error && <p>Error: Código incorrecto</p>}
      {loading && <p>Cargando...</p>}
      {success && <p>El código es correcto</p>}

      <input
        type="text"
        placeholder="Código de seguridad"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  );
}

export { UseState };
