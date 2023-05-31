import Banner from 'components/Banner';
import Categorias from 'components/Categories';
import styled from 'styled-components';
import { useAPI } from 'context/Api';


const CategoriasContainer = styled.div`
  margin-top: 2.5rem;
`

export default function Home() {
  const { Categoria, videos } = useAPI()

  return (
    <section className='home'>
      <Banner />
      {Categoria.map((data) => (
        <CategoriasContainer key={data.id}>
          <Categorias
            key={data.id}
            id={data.id}
            clr={data.clr}
            nombre={data.nombre}
            descripcion={data.descripcion}
            videos={videos.filter(video => video.categoria === data.nombre)}
          />
        </CategoriasContainer>
      ))}
    </section>
  )
}