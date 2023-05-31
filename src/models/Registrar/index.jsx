function validaCampos(campo) {
  if (campo.length <= 2) {
    return {valido: false, texto: "Esté campo no puede estar vacío"}
  } else {
    return {valido: true, texto: ""}
  }
}

export{ validaCampos }