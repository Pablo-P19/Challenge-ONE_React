import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useAPI } from "context/Api";
import Swal from 'sweetalert2';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function ListaCategoria({ editar }) {
  const { Categoria, borrarCategoria } = useAPI()
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="center">Descripción</TableCell>
            <TableCell align="center">Editar</TableCell>
            <TableCell align="center">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Categoria.map((data) => (
            <TableRow key={data.nombre}>
              <TableCell component="th" scope="data">
                {data.nombre}
              </TableCell>
              <TableCell align="left">{data.descripcion}</TableCell>
              <TableCell align="center" padding="none">
                <Button variant="text" value="Editar" onClick={async () => await editar(data)}>
                  <EditIcon sx={{ color: '#00fff2' }} />
                </Button>
              </TableCell>
              <TableCell align="center" padding="none">
                <Button variant="text" color="error" onClick={() => {
                  Swal.fire({
                    title: 'PRECAUCIÓN',
                    text: "¿Está seguro de eliminar la categoría?",
                    icon: 'warning',
                    iconColor: "red",
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: 'var(--color-primary)',
                    confirmButtonText: 'Eliminar',
                    cancelButtonText: "Cancelar"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      borrarCategoria(data.id)
                      Swal.fire(
                        'Eliminado!',
                        'Categoría eliminada con éxito.',
                        'success'
                      )
                    }
                  })
                }} >
                  <DeleteIcon sx={{ color: 'var(--color-primary)' }} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}