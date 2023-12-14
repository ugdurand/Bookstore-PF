const products = [
    {
        id: '1',
        name : 'Harry Potter y la Piedra Filosofal',
        price: 1000,
        category : 'Fantasia',
        image: 'https://http2.mlstatic.com/D_NQ_NP_810599-MLU70335041741_072023-O.webp',
        stock : 25,
        description : 'Descubren que hay un objeto precioso escondido en el colegio, la piedra filosofal, que permite convertir cualquier metal en oro, y producir el elixir de la vida eterna '
    },
    {
        id: '2',
        name : 'Sandokan',
        price: 2000,
        category : 'Fantasia',
        image: 'https://m.media-amazon.com/images/I/51Ht3SQajAL._AC_UF1000,1000_QL80_.jpg',
        stock : 10,
        description : 'Sandokan es el dueño y señor de la isla de Mompracem. Movido por la venganza hacia los ingleses que le arrebataron su familia y su reino, se dedica a recorrer las costas de Malasia con sus hombres, ejerciendo cruelmente la piratería contra el enemigo británico '
    },
    {
        id: '3',
        name : '50 sombras de Grey',
        price: 1000,
        category : 'Novelas',
        image : 'https://image.cdn0.buscalibre.com/5b582f4a8863b512618b4568.__RS360x360__.jpg',
        stock : 25,
        description : 'La novela 50 Sombras de Grey, escrita por la autora británica E. L. James, nos cuenta la historia de Anastasia Steel y Christian Grey, personas jóvenes y atractivas, él millonario y ella estudiante. En pocas palabras parece ser una readaptación de la cenicienta, solo que más moderna, más sexual y erótica.'
    },
    {
        id: '4',
        name : 'Don Quijote de la Mancha',
        price: 3000,
        category : 'Parodia',
        image : 'https://images.cdn2.buscalibre.com/fit-in/360x360/73/b6/73b6fd96c31d26e2b6a3531808c1188c.jpg',
        stock : 5,
        description : 'El ingenioso hidalgo don Quijote de la Mancha narra las aventuras de Alonso Quijano, un hidalgo pobre que de tanto leer novelas de caballería acaba enloqueciendo y creyendo ser un caballero andante, nombrándose a sí mismo como don Quijote de la Mancha.'
    },
    {
        id: '5',
        name : 'Ulises Y las Sirenas',
        price: 4500,
        category : 'Parodia',
        image : 'https://images.cdn2.buscalibre.com/fit-in/360x360/48/e2/48e22086a520b67e3972c64d4fc03292.jpg',
        stock : 35,
        description : 'Se trata de Ulises, quien en su vuelta a casa tras la guerra de Troya tuvo la desventura de pasar por los dominios de estos seres'
    },
  
    {
        id: '6',
        name : 'El Codigo Davinci',
        price: 3000,
        category : 'Misterio',
        image : "https://img1.od-cdn.com/ImageType-400/6251-1/%7B61A8251E-8826-4D1F-8819-F0389CFEECFB%7DIMG400.JPG",
        stock : 20,
        description : 'El Código Da Vinci es una novela de ficción, en la que su autor, Dan Brown, desarrolla una trama de suspenso donde los personajes principales deben descifrar una serie de mensajes y claves para evitar que un importante secreto relacionado con la Iglesia Católica se pierda para siempre.'
    },

    
    {
        id: '7',
        name : 'Las aventuras de Sherlock Holmes',
        price: 5000,
        category : 'Misterio',
        image : "https://granicaeditor.com/tapas/9789563162042.jpg",
        stock : 30,
        description : 'La mayoría de las aventuras y relatos de Sherlock Holmes están narradas por su amigo el doctor J. H. Watson, a excepción de seis relatos en particular.'
    }



]

export const getProducts =() =>{
    return new Promise ((resolve) =>{
        setTimeout(()=> {
            resolve(products)
        }, 300)
    })
}

export const getProductsById = (productId) =>{
    return new Promise ((resolve) =>{
        setTimeout (() => {
            resolve(products.find(prod => prod.id ===productId))
        },300)
    })
      
}

export const getProductsByCategory = (category) =>{
    console.log(category)
    return new Promise ((resolve) =>{
        setTimeout (() => {
            resolve(products.filter(prod => prod.category === category))
        },300)
    })
}