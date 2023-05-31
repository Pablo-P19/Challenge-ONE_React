const listaVideos = async () => {
  const respuesta = await fetch('https://api-prueba-coral.vercel.app/videos');
  if (respuesta.ok) {
    return respuesta.json();
  }
  throw new Error('No fue posible listar los videos.');
}

const crearVideo = async (titulo, url, img, categoria, descripcion, codigo) => {
  const respuesta = await fetch('https://api-prueba-coral.vercel.app/videos', {
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
      codigo: codigo
    })
  });
  if (respuesta.ok) {
    return respuesta.body;
  }
  throw new Error('No fue posible registrar un video.');
}

const video = async (id) => {
  const respuesta = await fetch(`https://api-prueba-coral.vercel.app/videos`);
  if (respuesta.ok) {
    return respuesta.json();
  }
  throw new Error('No se pudo encontrar el video.');
}

const listCategorias = async () => {
  try {
    const resp = await fetch('https://api-prueba-coral.vercel.app/categoria');
    return await resp.json();
  } catch (err) {
    return console.log(err);
  }
}

const crearCategoria = async (nombre, descripcion, clr, codigo) => {
  const respuesta = await fetch('https://api-prueba-coral.vercel.app/categoria', {
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
  });
  if (respuesta.ok) {
    return respuesta.body;
  }
  throw new Error('No se puede registrar una categoría.');
}

const removerCategoria = async (id) => {
  const respuesta = await fetch(`https://api-prueba-coral.vercel.app/categoria`, {
    method: 'DELETE'
  });
  if (!respuesta.ok) {
    throw new Error('No se puede eliminar la categoría.');
  }
}

const editCategoria = async (id, nombre, descripcion, clr, codigo) => {
  const respuesta = await fetch(`https://api-prueba-coral.vercel.app/categoria`, {
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
  });
  if (respuesta.ok) {
    return respuesta.json();
  }
  throw new Error('No se puede editar la categoría.');
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