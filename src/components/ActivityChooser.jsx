import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import TacoButton from './TacoButton';
import Octagon from './Octagon';

class NewComponent extends React.Component {
    render() {
        return (
            <p style={{ textAlign: 'center' }}>
                <span style={{ color: '#ffffff', fontSize: '26.0pt', lineHeight: '107%', fontFamily: 'Open Sans' }}>
                    Pick a{' '}
                </span>
                <span style={{ color: '#ffffff', fontSize: '26.0pt', lineHeight: '107%', fontFamily: 'Open Sans' }}>
                    T
                </span>
                <strong>
                    <span
                        style={{ fontSize: '26.0pt', lineHeight: '107%', fontFamily: 'Indie Flower', color: '#ad9764' }}
                    >
                        ac
                    </span>
                </strong>
                <span style={{ color: '#ffffff', fontSize: '26.0pt', lineHeight: '107%', fontFamily: 'Open Sans' }}>
                    o
                </span>
                <span style={{ color: '#ffffff', fontSize: '26.0pt', lineHeight: '107%', fontFamily: 'Indie Flower' }}>
                    -
                    <strong>
                        <span style={{ color: '#ad9764' }}>tivity</span>
                    </strong>
                </span>
                <span style={{ color: '#ffffff', fontSize: '26.0pt', lineHeight: '107%', fontFamily: 'Open Sans' }}>
                    !
                </span>
            </p>
        );
    }
}

class ActivityChooser extends React.Component {
    renderActivityChooser() {
        const data = ['go poop', 'eat out', 'play with friends', 'give a dog a pet', 'look at birds'];
        return (
            <div>
                <NewComponent />
                <Octagon />
            </div>
        );
    }

    render() {
        const { clickButton } = this.props;
        return <div>{this.renderActivityChooser()}</div>;
    }

    /* use this pattern with  instead of pattern in sample */
    /* clickButton () {
        const { clickButtonAction: propsClickButtonAction  } = this.props;
        dispatch(propsClickButtonAction());
    } */
}

/* Allows access to the redux state for the main object.  Without
this our app will no re-render on state change */
const mapStateToProps = state => ({
    main: state.main
});
// Connect container component to store
/* export default withRouter(
    connect(
        mapStateToProps,
        dispatch => bindActionCreators({ propsClickButtonAction }, dispatch)
    )(ExampleComponent)
); */

// delete this and uncomment withRouter to link actions
export default ActivityChooser;
