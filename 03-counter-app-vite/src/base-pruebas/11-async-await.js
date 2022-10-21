

export const getImagen = async() => {

    try {

        const apiKey = 'D5V1uSIlBYSQ2W2hj0dp2h3JDdzGdhbF';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;



    } catch (error) {
        // manejo del error
        return 'No se encontro la imagen'
    }
}




