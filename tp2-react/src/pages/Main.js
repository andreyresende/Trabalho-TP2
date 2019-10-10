import React, { useState } from 'react'
import './Main.css'

import api from '../services/api'

export default function Main({ history }) {
    const [query, setQuery] = useState('')
    const [array, setArray] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await api.post('/', {
            query
        })
        //const filter = await api.get('/filter')
        //console.log(response.data)
        const title = response.data
        setArray(title) 
        console.log(array);
        
        //history.push(`/kwic/${title}`)
    }

    return (
        <div className="main-container">
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Digite a consulta que deseja fazer"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
            <ol>
                {array.map(element => <li>{element}</li>)}
            </ol>
        </div>
    )
}