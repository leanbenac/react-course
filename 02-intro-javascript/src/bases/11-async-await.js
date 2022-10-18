//async = promesa

const getImage = async () => {
    try {
        const apiKey = "kj1ZIxfV7l1uhMm1gd49xRq2XwCAYOqY";
        const resp = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        );
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    } catch (error) {
        
        console.log(error);
        //manejo del error
    }
};

getImage();