const products = [
    {
        id: "1",
        name: "Remera",
        price: 30000,
        category: "Camisetas",
        img: "../img/Camiseta.png",
        stock: 25,
        description: "Camiseta Oficial Titular Seleccion Argentina",
},
{
    id: "2",
    name: "Short Titular",
    price: 10000,
    category: "Shorts",
    img: "../img/ShortSeleccion.png",
    stock: 25,
    description: "Short Oficial Titular Seleccion Argentina",
},
{
    id: "3",
    name: "Adidas M10",
    price: 22000,
    category: "Botines",
    img: "../img/BotinMessi.png",
    stock: 20,
    description: "Botines Oficiales Lionel Messi",
},
{
    id: "4",
    name: "Remera Visitante",
    price: 30000,
    category: "Camisetas",
    img: "../img/Camiseta-Visita.png",
    stock: 20,
    description: "Camiseta Oficial Visitante Seleccion Argentina",
},
{
    id: "5",
    name: "Adidas Speed Portal",
    price: 22000,
    category: "Botines",
    img: "../img/BotinesSpeedPortal.png",
    stock: 15,
    description: "Botines Oficiales Seleccion Argentina",
},
{
    id: "6",
    name: "Short Visitante",
    price: 10000,
    category: "Shorts",
    img: "../img/ShortSeleccionVisitante.png",
    stock: 11,
    description: "Short Oficial Visitante Seleccion Argentina",
}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (ProductId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === ProductId))
        },500)
    })
}

export const getProductByCategory = (ProductCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === ProductCategory))
        },500)
    })
}
