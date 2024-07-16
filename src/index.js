const getImagenPromesa = () => {
    const promesa = new Promise( (resolve, reject) => {
        resolve('http://asdasfafda.com')
    })
    return promesa;
}


getImagenPromesa().then(console.log);