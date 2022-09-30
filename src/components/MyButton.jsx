import React from "react";

export default class MyButton extends React.Component{
    constructor(props){
        super(props)
        //state
        this.state={
            count:1
        }

        //function untuk increment state count
        this.increment=()=>{
            this.setState({
                count :this.state.count +1
            })
        }
    }

    //component did mount
    componentDidMount(){
        console.info("Mybutton di mounting ke halaman browser")
    }
    //component did update
    componentDidUpdate(){
        console.info("MyButton di update", this.state.count)
    }
    //component will amount
    componentWillUnmount(){
        console.info("Mybutton di destroy !")
    }

    render(){
        return (
            <button onClick={this.increment}>button {this.state.count}</button>
        )
    }
}

