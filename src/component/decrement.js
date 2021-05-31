import React from 'react';
import { connect } from 'react-redux';
import { decrement } from '../store/actions';

class Decrement extends React.Component {

    render() {
        const { decrement } = this.props;
        return (
            <div>
               <button onClick = {decrement}>DECREMENT BY 1</button>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
       decrement: () => dispatch(decrement())
    };
 };
 export default connect(null, mapDispatchToProps)(Decrement);

