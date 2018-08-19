import React from 'react';
import TField from '@material-ui/core/TextField';

let Parser = require('fast-xml-parser');
let HTTP = new XMLHttpRequest;


class TextField extends React.Component{
    componentDidMount(){

        HTTP.onreadystatechange = () => {

            if(HTTP.status == 200 && HTTP.readyState == 4){

                let jsonObj = Parser.parse(HTTP.responseText);

                this.setState({
                    zipNo : jsonObj.NewAddressListResponse.newAddressListAreaCd.zipNo,
                    rnAdres : jsonObj.NewAddressListResponse.newAddressListAreaCd.rnAdres
                })

                console.log(jsonObj.NewAddressListResponse.newAddressListAreaCd.zipNo + " , " +jsonObj.NewAddressListResponse.newAddressListAreaCd.rnAdres)

            }
        }
    }
    constructor(props){
        super(props)
        this.state = {
            input : "",
            zipNo : "",
            rnAdres : ""
        }
        this.zipCall = this.zipCall.bind(this);

    }
    zipCall(event){
        if(event.keyCode != 13){
            let _input = event.target.value;
            this.setState({input : _input})
            console.log(this.state.input);
        }
        else{
           HTTP.open('GET','http://openapi.epost.go.kr/postal/retrieveNewAdressAreaCdService/retrieveNewAdressAreaCdService/getNewAddressListAreaCd?ServiceKey=FsixCOWickYQFN6YaBoa3Q7fluzJefBvCVlNT1xxOo3rib9ZQkUav0GqsYuvNu6yF06jpZZeG93b%2F4qJcXQ48A%3D%3D&searchSe=dong&srchwrd='+this.state.input,true);
           HTTP.send();
        }
    }
    
    
    render(){
        if(this.state.zipNo.length == 0){
            return(
                <TField type="text" placeholder="살고있는 동 입력..." onKeyUp={this.zipCall} />
            
            )
        }
        else{
            return(
                <div>
                    <TField type="text" placeholder="살고있는 동 입력..." onKeyUp={this.zipCall} />
                    <ul>
                        <li>{this.state.zipNo} | {this.state.rnAdres}</li> 
                    </ul>
                </div>
            )
        }
    }
}

module.exports = TextField;