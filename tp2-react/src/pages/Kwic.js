import React, { Component } from 'react'
import './Kwic.css'
import api from '../services/api'


export default class Kwic extends Component {
    state = {
        query: '',
        returnJson: ''
    }

    handleInputChange = e => {
        this.setState({ returnJson: e.target.value })
    }

    handleSubmit = async e => {
        e.preventDefault()
        const { query } = this.state
        const response = await api.post('/', {
            query
        })
        //const filter = await api.get('/filter')
        console.log(response.data)
        const title = response.data
        
    }
    /* handlePageParams() {
        const title = match.params.title
        const array = title.split('\\a\\') 
        this.setState({ array: array})
        
    } */
    render () {
        const { query } = this.state
        return (
            <div className="main-container">
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="Digite a consulta que deseja fazer"
                    value={query}
                    onChange={this.handleInputChange}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>

        )
    }
    
}