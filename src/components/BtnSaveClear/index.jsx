/* eslint-disable import/no-anonymous-default-export */
import { Button } from "@mui/material";
import styled from "styled-components";


const BtnSaveClear = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`

export default ({ limpiar }) => {
  return (
    <BtnSaveClear>
      <Button variant="contained" size="large" type="submit">
        Guardar
      </Button>
      <Button variant="outlined" size="large" onClick={limpiar}>
        Limpiar
      </Button>
    </BtnSaveClear>
  )
}