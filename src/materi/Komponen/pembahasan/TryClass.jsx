import React from "react";

class TryClass extends React.Component {
    state = {
        value: ""
    }
   


hasilCari = () => {
    this.setState({value: "sorry not found"});
}

    render (){
        return(
            <div>                
                <h1>Latihan class component</h1>
                <label>latihan input {this.props.coba}</label><br></br>
                <input placeholder="ketikkan sesuatu"></input>
                <button onClick={this.hasilCari}>search</button><br></br>
                <span>{this.state.value}</span>
            </div>
        )
    }
}

export default TryClass;