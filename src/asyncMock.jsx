const products = [
    {
        id: "1",
        name: "Camiseta de Algodón",
        price: 19.99,
        category: "Camisetas",
        img: "",
        stock: 50,
        description: "Una cómoda camiseta de algodón de manga corta, ideal para uso diario."
    },
    {
        id: "2",
        name: "Cargo suelto",
        price: 39.99,
        category: "Pantalones",
        img: "",
        stock: 30,
        description: "Cargo suelto de alta calidad, perfectos para un look casual o elegante."
    },
    {
        id: "3",
        name: "Vestido Floral",
        price: 29.99,
        category: "Vestidos",
        img:"",
        stock: 20,
        description: "Un hermoso vestido floral con un diseño elegante y cómodo, ideal para ocasiones especiales."
    },
    {
        id: "4",
        name: "Camiseta de Algodón",
        price: 19.99,
        category: "Camisetas",
        img: "",
        stock: 50,
        description: "Una cómoda camiseta de algodón de manga corta, ideal para uso diario."
    },
    {
        id: "5",
        name: "Buzo azul",
        price: 39.99,
        category: "Buzos",
        img: "",
        stock: 30,
        description: "Buzo de alta calidad, perfectos para un look casual o elegante."
    },
    {
        id: "6",
        name: "Vestido Floral",
        price: 29.99,
        category: "Vestidos",
        img:"",
        stock: 20,
        description: "Un hermoso vestido floral con un diseño elegante y cómodo, ideal para ocasiones especiales."
    }
];
export const getProducts =() => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}

export const getProductById =(productId) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory =(categoryId) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}



