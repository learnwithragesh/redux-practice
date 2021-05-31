import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../store/actions';

class Reset extends React.Component {

    render() {
        const { reset } = this.props;
        return (
            <div>
               <button onClick = {reset}>RESET</button>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
       reset: () => dispatch(reset())
    };
 };
 export default connect(null, mapDispatchToProps)(Reset);

