class SaveButton extends React.Component{
    handleSave(event){
        console.log(event.target);
    }
    render(){
        return(
            <button onClick={this.handleSave}>Save</button>
        )
    }
}

class SaveButton extends React.Component{
    constructor(props){
        super(props)
        this.handleSave = this.handleSave.bind(this)    
    }
    handleSave(event){
        console.log(event.target);
    }
    render(){
        return(
            <button onClick={this.handleSave}>Save</button>
        )
    }
}