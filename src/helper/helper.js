const shortenText = str => {
    return str.split(' ').splice(0 , 5).join(' ')
}

const createQuery = ( curQuery , newQuery ) => {
    if(newQuery.search === ''){
        const { search , ...rest } = curQuery;
        return rest;
    }

    if(newQuery.category === 'all'){
        const { category , ...rest } = curQuery;
        return rest;
    }

    // ...curQuery works when we have 2 keys Obj or more. Here we have 3 keys => ctageory & search & sort
    return {...curQuery , ...newQuery}
}

const searchProducts = (products , search) => {
    if(!search){
        return products
    }

    const searchedProducts = products.filter(item => {
        return item.title.toLowerCase().includes(search)
    })

    return searchedProducts
}

const filterProducts = ( products , category ) => {
    if(category === undefined){
        return products
    };

    const filteredProducts = products.filter(item => {
        return item.category === category
    })

    return filteredProducts;
}

export { shortenText , createQuery , filterProducts , searchProducts }