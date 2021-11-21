import axios from 'axios'
import React, { Component, Fragment } from 'react'
import UserDetail from './UserDetail'

export default class UserList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users : []
        }
    }

    componentDidMount = () =>{
        this.getUserList()
    }
    
    getUserList = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                console.log(response)
                this.setState({users: response.data})
            })
            .catch(err => console.log(err))
    }

    deleteUser = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
           const newUserList = this.state.users.filter(u => {
               return u.id !== id
           })

           this.setState({users: newUserList})
        })
        .catch(err => console.log(err))
    }

    creatUser = () =>{
        const user = {
            name:"Saumya Mistry",
            email:"mistryasaumya@gmail.com"
        }
        axios.post("https://jsonplaceholder.typicode.com/users", user)
        .then(res => console.log(res))
    }

    render() {
        return (
            <div>
                <button onClick={this.getUserList}>Get Users</button>
                <button onClick={this.creatUser}>Creat Users</button>

                {
                    this.state.users.map(user => (
                        <Fragment key={user.id}>
                            <UserDetail user={user} />
                            <button onClick={ (event) => this.deleteUser(user.id)}>Delete</button>
                       </Fragment>
                    ))
                }
            </div>
        )
    }
}
