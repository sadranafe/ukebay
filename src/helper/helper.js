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

    if(newQuery.sort === 'delete'){
        const {sort , ...rest} = curQuery;
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

const sortProducts = ( products , sort ) => {
    if(sort === undefined){
        const sortById = products.sort( (a , b) => a.id - b.id )
        return sortById;
    }
    
    if(sort === 'ascending'){
        const ascendingSort = products.sort((a , b) => b.rating.rate - a.rating.rate)
        return ascendingSort;

    } else if(sort === 'descending'){
        const descendingSort = products.sort((a , b) => a.rating.rate - b.rating.rate)
        return descendingSort;
        
    } else if(sort === 'highest price'){
        const highestPrice = products.sort((a , b) => b.price - a.price)
        return highestPrice;

    } else if(sort === 'lowest price'){
        const lowestPrice = products.sort((a , b) => a.price - b.price)
        return lowestPrice;
    }
}

const getInitialQuery = searchParams => {
    const query = {};
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const sort = searchParams.get('sort')

    if(category){
        query.category = category
    }
    
    if(search){
        query.search = search
    }

    if(sort){
        query.sort = sort
    }

    return query;
}

const quantityCalc = ( data , id ) => {
    const selectedProduct = data.find(item => {
        return item.id === id
    })

    if(selectedProduct !== undefined){
        return selectedProduct.quantity
    }
}

const sumHandler = products => {
    const totalQuantity = products.reduce((acc , cur) => ( acc + cur.quantity ) , 0)
    const totalPrice = products.reduce((acc , cur) => acc + cur.price * cur.quantity , 0)
    return { totalQuantity , totalPrice };
}

export { shortenText , createQuery , filterProducts , searchProducts , sortProducts , getInitialQuery , quantityCalc , sumHandler }