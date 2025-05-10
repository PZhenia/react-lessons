import React from "react";

class FirstComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 100,
        };
    }

    divide = () => {
        this.setState({
            number: this.state.number / 2,
        })
    }

    render(){
        return (
            <>
                <div>
                    {this.state.number}
                </div>
                <button onClick={this.divide}>Divide by 2</button>
            </>
        )
    }
}

export default FirstComponent;