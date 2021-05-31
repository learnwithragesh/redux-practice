import React from 'react';
import { connect } from 'react-redux';

class Display extends React.Component {

    render() {
        const { counter } = this.props;
        return (
            <div>
                {counter}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
       counter: state
    };
 };
 export default connect(mapStateToProps)(Display);