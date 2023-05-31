import { Button } from "@mui/material"
import Carousel from "components/Carousel"
import styled from "styled-components"


const CategoriaContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: .5rem;
`

export default function Categorias({ id, clr, nombre, descripcion, videos }) {
  return (
    videos.length > 0 && <div
      className='container'
    >
      <CategoriaContainer key={id}>
        <Button style={{ backgroundColor: `${clr}`, color: "var(--color-text)", fontWeight: "600", cursor: "auto" }}>
          {nombre}
        </Button>
        <p>{descripcion}</p>
      </CategoriaContainer>
      <Carousel videos={videos} clr={clr} />
    </div>
  )
}
