class Users extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users : []
        }
    }
    componentDidMount(){
        fetch(this.props['data-url']).then((response) => {response.json()}).then((users) => {
            this.setState({users : users})
        })
    }
    render(){
        return(
            <div className="container">
                <h1>List of Users</h1>
                <table className="table">
                    <tbody>
                        {this.state.users.map((user)=>{
                            <tr key="user.id">
                                <td>{user.fristName}{user.lastName}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}