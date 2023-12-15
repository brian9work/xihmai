const getMunicipios = async ()=>{
    await fetch("https://xihmai.com/db/municipios.php")
        .then(response => response.json())
        .then(res => {console.log(res);})
        .catch(err => {console.log(err)})
}

export {getMunicipios}