// src/utils/cloudinary.js

export const optimizarImagen = (url, width = null) => {
    if (!url) return "";
    
    // Si no es de Cloudinary, devolvemos la URL tal cual
    if (!url.includes("cloudinary.com")) return url;

    // Definimos los parámetros base: formato automático y calidad automática
    let params = "f_auto,q_auto";

    // Si pasamos un ancho, redimensionamos la imagen (Clave para móviles)
    if (width) {
        params += `,w_${width},c_limit`; // c_limit evita que se estire si la original es chica
    }

    // Inyectamos los parámetros después de "/upload/"
    return url.replace("/upload/", `/upload/${params}/`);
};