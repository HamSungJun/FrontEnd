class Logger extends React.Component{
    constructor(props){
        super(props)
        console.log('생성자 가동됨.')
    }
    componentWillMount(){
        console.log('componentWillMount 실행')
    }
    // ...
}