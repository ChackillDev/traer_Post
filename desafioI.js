

const getPosts = async() => {
        const url = "https://jsonplaceholder.typicode.com/posts";

        try {
            const respuesta = await fetch(url);
            const datos = await respuesta.json();
            console.log(datos);
            datos.forEach( element => {
                pintar(element);
            }
            )
        } catch (error) {
            console.log(error);
        }
    };

    const pintar = (post) => {
        const htmlPost = document.getElementById("post-data")
        document.write(`<ul>${post.body}</ul>`)

}
