import { useContext, useState } from 'react';
import { MenuItem, TextField, createTheme, ThemeProvider, Button } from '@mui/material';
import styled from 'styled-components';
import Swal from 'sweetalert2'
import BtnSaveClear from 'components/BtnSaveClear';
import ValidateForm from 'context/ValidateForm';
import useErrors from 'hooks/useErrors';
import { Link } from 'react-router-dom';
import { useAPI } from 'context/Api';


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
  gap: 1rem;
`

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function NewVideo() {
  const [titulo, setTitulo] = useState('');
  const [url, setUrl] = useState('');
  const [img, setImg] = useState('');
  const [categSelec, setCategSelec] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [codigo, setCodigo] = useState('');
  const validaciones = useContext(ValidateForm);
  const [errors, validarCampos, poderEnviar] = useErrors(validaciones);
  const { Categoria, crearVideo } = useAPI();

  const limpiar = () => {
    setTitulo('');
    setUrl('');
    setImg('');
    setCategSelec('');
    setDescripcion('');
    setCodigo('');
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Form onSubmit={event => {
        event.preventDefault();
        if (poderEnviar()) {
          crearVideo({ titulo, url, img, categSelec, descripcion, codigo });
          Swal.fire(
            'GUARDADO!',
            'Video guardado con éxito!',
            'success'
          )
        }
      }} className='container' >
        <h1>Nuevo Video</h1>
        <TextField
          onChange={(event) => setTitulo(event.target.value)}
          value={titulo}
          onBlur={validarCampos}
          error={!errors.titulo.valido}
          helperText={errors.titulo.texto}
          name='titulo'
          label='Título'
          variant="filled"
          margin='normal'
          required
        />
        
        <TextField
          onChange={(event) => setUrl(event.target.value)}
          value={url}
          onBlur={validarCampos}
          error={!errors.url.valido}
          helperText={errors.url.texto}
          name='url'
          label='Link del vídeo'
          variant="filled"
          margin='normal'
        />

        <TextField
          onChange={(event) => setImg(event.target.value)}
          value={img}
          onBlur={validarCampos}
          error={!errors.img.valido}
          helperText={errors.img.texto}
          name='img'
          label='Link imagen del vídeo'
          variant="filled"
          margin='normal'
        />

        <TextField
          onChange={event => setCategSelec(event.target.value)}
          value={categSelec}
          select
          defaultValue=""
          helperText="Seleccione categoría"
          label="Categoria"
          name='categoria'
          variant="filled"
          margin='normal'
        >
          {Categoria.map((option) => (
            <MenuItem key={option.id} value={option.nombre}>
              {option.nombre}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          onChange={(event) => setDescripcion(event.target.value)}
          value={descripcion}
          variant="filled"
          placeholder='Detalles'
          multiline
          rows={7}
        />

        <TextField
          onChange={(event) => setCodigo(event.target.value)}
          value={codigo}
          onBlur={validarCampos}
          error={!errors.codigo.valido}
          helperText={errors.codigo.texto}
          name='codigo'
          label='Código de seguridad'
          variant="filled"
          margin='normal'
        />

        <BtnContainer>
          <BtnSaveClear limpiar={limpiar} />
          <Link to={'/NewCategory'}>
            <Button variant="contained" size="large" >Nueva Categoria</Button>
          </Link>
        </BtnContainer>
      </Form>
    </ThemeProvider>
  )
}
