import React, {useState, useEffect} from 'react'

const Gato = () =>{

    const url = 'https://api.thecatapi.com/v1/images/search'

    const [dado, setDado] = useState('')

    const api = async () =>{
        const response = await fetch(url)
        const data = await response.json()
        setDado(data[0].url)
    }
    
    useEffect(() =>{
        api()
    }, [])

    return(
        <div className='flex'>
            <button onClick={api}>Gerar Imagem</button>
            <img src={dado} alt="Imagem de Gato" />
        </div>
    )
}

export default Gato