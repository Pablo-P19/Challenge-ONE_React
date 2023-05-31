import { createContext, useContext, useState, useEffect } from "react";
import { videosService } from "Service/videos-service";


const ApiContext = createContext()

export const ApiProvider = ({ children }) => {
  const [Categoria, setCategoria] = useState([]);

  useEffect(() => {
    videosService.listCategorias()
      .then(data => setCategoria(data))
      .catch(err => console.log(err));
  }, [])

  const crearCategoria = (NewCategory) => {
    videosService.crearCategoria(NewCategory.nombre, NewCategory.descripcion, NewCategory.clr, NewCategory.codigo);
    setCategoria([...Categoria, NewCategory])
  }

  const borrarCategoria = (id) => {
    videosService.removerCategoria(id)
    setCategoria(Categoria.filter(categoria => categoria.id !== id));
  }

  const editCategoria = (edit, props) => {
    videosService.editCategoria(edit, props.nombre, props.descripcion, props.clr, props.codigo);
    setCategoria(Categoria.map(categ => categ.id !== edit ? categ : props))

  }

  // Videos 
  const [banner, setBanner] = useState('');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    videosService.video(1)
      .then(data => setBanner(data))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    videosService.listaVideos()
      .then(data => setVideos(data))
      .catch(err => console.log(err))
  }, [])

  const mostrarVideo = id => {
    videosService.video(id)
      .then(data => setBanner(data))
      .catch(err => console.log(err));
  }

  const crearVideo = (newVideo) => {
    videosService.crearVideo(newVideo.titulo, newVideo.url, newVideo.img, newVideo.categSelec, newVideo.descripcion, newVideo.codigo);
    setVideos([...videos, newVideo])
  }

  return (
    <ApiContext.Provider value={{
      Categoria,
      crearCategoria,
      borrarCategoria,
      editCategoria,
      banner,
      videos,
      mostrarVideo,
      crearVideo
    }}>
      {children}
    </ApiContext.Provider>
  )
}

export function useAPI() {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}