const shortenText = str => {
    return str.split(' ').splice(0 , 5).join(' ')
}

export { shortenText }