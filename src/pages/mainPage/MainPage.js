import React from "react";
import { connect } from "react-redux";
import { changeTitleThunk } from "../../redux/actions/actions";

class MainPage extends React.Component {

    constructor(props) {
        super(props);
    }
    
    changeTitle = () => {
        this.props.changeTitleThunk('Новый текст')
    }

    render() {
        return (
            <div>
                <p>main</p>
                <h1>{this.props.title}</h1>
                <button onClick={this.changeTitle}>changeTitle</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        title: state.titleReducer.title
    }
}

const mapDispatchToProps = {
    changeTitleThunk
}

export default connect(mapStateToProps, mapDispatchToProps) (MainPage);