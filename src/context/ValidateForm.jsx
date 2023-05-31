import React from "react"


const ValidateForm = React.createContext({
  titulo: noValidation,
  url: noValidation,
  img: noValidation,
  categSelec: noValidation,
  codigo: noValidation,
  nombre: noValidation,
  clr: noValidation,
});

function noValidation(dados) {
  console.log(dados);
  return { valido: true, texto: "" }
}

export default ValidateForm;