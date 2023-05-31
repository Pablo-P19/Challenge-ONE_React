const listaVideos = () => {
  return fetch('https://api-prueba-coral.vercel.app/videos')
    .then((respuesta) => {
      if (respuesta.ok) {
        return respuesta.json();
      }
      throw new Error('No fue posible listar los videos.')
    });
}

const crearVideo = (titulo, url, img, categoria, descripcion, codigo) => {
  return fetch('https://api-prueba-coral.vercel.app/videos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      titulo: titulo,
      url: url,
      img: img,
      categoria: categoria,
      descripcion: descripcion,
      codigo: codigo,
    })
  }).then(respuesta => {
    if (respuesta.ok) {
      return respuesta.body;
    }
    throw new Error('No fue posible registrar un video.');
  })
}

const video = (id) => {
  return fetch(`https://api-prueba-coral.vercel.app/videos`)
    .then(respuesta => {
      if (respuesta.ok) {
        return respuesta.json();
      }
      throw new Error('No se pudo encontrar el video.')
    });
}

const listCategorias = () => {
  return fetch('https://api-prueba-coral.vercel.app/categoria')
    .then(resp => resp.json())
    .catch(err => console.log(err))
}

const crearCategoria = (nombre, descripcion, clr, codigo) => {
  return fetch('https://api-prueba-coral.vercel.app/categoria', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nombre: nombre,
      descripcion: descripcion,
      clr: clr,
      codigo: codigo
    })
  }).then(respuesta => {
    if (respuesta.ok) {
      return respuesta.body;
    }
    throw new Error('No se puede registrar una categoría.');
  })
}

const removerCategoria = (id) => {
  return fetch(`https://api-prueba-coral.vercel.app/categoria`, {
    method: 'DELETE'
  }).then(respuesta => {
    if (!respuesta.ok) {
      throw new Error('No se puede eliminar la categoría.');
    }
  })
}

const editCategoria = (id, nombre, descripcion, clr, codigo) => {
  return fetch(`https://api-prueba-coral.vercel.app/categoria`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      nombre: nombre,
      descripcion: descripcion,
      clr: clr,
      codigo: codigo
    })
  }).then(respuesta => {
    if (respuesta.ok) {
      return respuesta.json();
    }
    throw new Error('No se puede editar la categoría.');
  })
}

export const videosService = {
  listaVideos,
  crearVideo,
  listCategorias,
  crearCategoria,
  removerCategoria,
  editCategoria,
  video
};