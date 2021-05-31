import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../store/actions';

class Increment extends React.Component {

    render() {
        const { increment } = this.props;
        return (
            <div>
               <button onClick = {increment}>INCREMENT BY 1</button>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
       increment: () => dispatch(increment())
    };
 };
 export default connect(null, mapDispatchToProps)(Increment);

