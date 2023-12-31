export const crearPublicaciones = async (datos) => {
    const response = await fetch('/publicacion', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(datos)
    })

    const data = await response.json()
    return data;
}

export const obtenerPublicaciones = async ( ) => {
    // Consulta al servidor por los datos de publicaciones
    const response = await fetch('/publicaciones');
    const publicaciones = await response.json();
    return publicaciones
}

export const actualizarPublicacion = async () => {
    fetch()
}

export const eliminarPublicacion = async () => {
    fetch()
}

// FUNCIONES PARA MOSTRAR DATOS
export const mostrarDatosPublicaciones = (publicaciones, elemento) => {
    let registros = '';
    publicaciones.forEach(pub => {
        registros += `
            <section class="d-flex gap-2">
                <img src="${pub.url_imagen}" class="rounded" height="280" width="280">
                <div class="d-flex flex-column justify-content-between">
                    <h4>${pub.titulo}</h4>
                    <p  class="pub_detalle">${pub.detalle}</p>
                    <p>${pub.fecha_publicacion}</p>
                    <p>${pub.autor}</p>
                </div>
            </section>
        `
    });

    elemento.innerHTML = registros
}
