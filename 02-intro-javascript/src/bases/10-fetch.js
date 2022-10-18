const apiKey = 'kj1ZIxfV7l1uhMm1gd49xRq2XwCAYOqY';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

//promesas en cadena + fetch 
peticion.then ( resp => resp.json() )
        .then ( ({ data }) => {
            const { url } = data.images.original;
            
            const img = document.createElement('img');
            img.src = url;
            document.body.append (img);
        })

        .catch (console.warn)