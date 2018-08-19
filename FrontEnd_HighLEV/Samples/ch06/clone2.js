class Mouse extends React.Component{
    render(){
        return(
            <div>
                <div onMouseOverCapture={((event)=>{
                    console.log('on mouse over capture')
                }).bind(this)}
                onMouseOver={((event) => {
                    console.log('on mouse over')
                }).bind(this)}>

                </div>
            </div>
        )
    }
}

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter : 0
        }
    }

    counterClicked(event){
        this.setState({counter : ++this.state.counter})
    }

    render(){
        return(
            <button onClick={this.counterClicked.bind(this)}>
            counter : {this.state.counter}
            </button>
        )
    }
}