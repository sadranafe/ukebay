const shortenText = str => {
    return str.split(' ').splice(0 , 5).join(' ')
}

const createQuery = ( curQuery , newQuery ) => {
    if(newQuery.category === 'all'){
        const { category , ...rest } = curQuery;
        return rest;
    }

    // ...curQuery works when we have 2 keys Obj or more. Here we have 3 keys => ctageory & search & sort
    return {...curQuery , ...newQuery}
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

export { shortenText , createQuery , filterProducts }