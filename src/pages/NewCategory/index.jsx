import { useContext, useState } from "react";
import { TextField, ThemeProvider, createTheme, Button } from "@mui/material";
import styled from "styled-components";
import BtnSaveClear from "components/BtnSaveClear";
import ListaCategoria from "components/CategoryList";
import useErrors from "hooks/useErrors";
import ValidateForm from "context/ValidateForm";
import Swal from 'sweetalert2'
import { useAPI } from "context/Api";
import { Link } from "react-router-dom";


const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const InputColor = styled.input`
  width: 100%;
  height: 2.5rem;
  margin-top: 1rem;
  background-color: #2e2e2e;
  padding-top: .7rem;
`

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function NewCategory() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [clr, setClr] = useState('#000000');
  const [codigo, setCodigo] = useState('');
  const [edit, setEdit] = useState('');
  const validaciones = useContext(ValidateForm);
  const [errors, validarCampos, poderEnviar] = useErrors(validaciones);
  const { crearCategoria, editCategoria } = useAPI();

  const editarCategoria = (props) => {
    setNombre(props.nombre)
    setDescripcion(props.descripcion)
    setClr(props.clr)
    setCodigo(props.codigo)
    setEdit(props.id)
  }

  const limpiar = () => {
    setNombre("")
    setDescripcion("")
    setClr("")
    setCodigo("")
    setEdit("")
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Form onSubmit={event => {
        event.preventDefault();
        if (poderEnviar()) {
          if (!edit) {
            crearCategoria({ nombre, descripcion, clr, codigo })
            setCodigo('')
            Swal.fire(
              'HECHO!',
              'Categoráa creada con éxito!',
              'success'
            )
          } else {
            editCategoria(edit, { nombre, descripcion, clr, codigo });
            setCodigo('')
            Swal.fire(
              'HECHO!',
              'Categoría editada con éxito!',
              'success'
            )
          }
        }
      }} className='container'>
        <h1>Nueva Categoría</h1>
        <TextField
          onChange={(event) => setNombre(event.target.value)}
          value={nombre}
          onBlur={validarCampos}
          error={!errors.nombre.valido}
          helperText={errors.nombre.texto}
          name="nombre"
          label="Nombre"
          variant="filled"
          margin='normal'
          fullWidth
          disabled={!!edit}
        />
        <TextField
          onChange={(event) => setDescripcion(event.target.value)}
          value={descripcion}
          variant="filled"
          placeholder='Detalles'
          multiline
          rows={7}
        />
        <InputColor
          onChange={(event) => setClr(event.target.value)}
          value={clr}
          name="clr"
          type="color"
        />
        <TextField
          onChange={(event) => setCodigo(event.target.value)}
          value={codigo}
          onBlur={validarCampos}
          error={!errors.codigo.valido}
          helperText={errors.codigo.texto}
          name="codigo"
          label='Código de seguridad'
          variant="filled"
          margin='normal'
          required
        />

        <BtnContainer>
          <BtnSaveClear limpiar={limpiar} />
          <Link to={'/NewVideo'}>
            <Button variant="contained" size="large" >Nuevo Video</Button>
          </Link>
        </BtnContainer>
      </Form>
      <ListaCategoria editar={editarCategoria} />
    </ThemeProvider>
  )
}
