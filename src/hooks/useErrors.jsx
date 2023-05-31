import { useState } from "react";


function useErrors(validaciones) {
  const estadoInicial = crearEstadoInicial(validaciones);
  const [errors, setErrors] = useState(estadoInicial);

  function validarCampos(event) {
    const { name, value } = event.target;
    const newEstado = { ...errors };
    newEstado[name] = validaciones[name](value);
    setErrors(newEstado);
  }

  function poderEnviar() {
    for (let campo in errors) {
      if (!errors[campo].valido) {
        return false;
      }
    }
    return true;
  }
  return [errors, validarCampos, poderEnviar]
}

function crearEstadoInicial(validaciones) {
  const estadoInicial = {}
  for (let campo in validaciones) {
    estadoInicial[campo] = { valido: true, texto: "" }
  }
  return estadoInicial;
}

export default useErrors;