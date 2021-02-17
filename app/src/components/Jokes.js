import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import{ getJoke} from './../actions/jokeActions';

const Jokes = (props) => {
    const { setup, delivery, isGetting, error } = props;
    const handleClick = () => {
        props.getJoke();
    }
    useEffect(() => {
        props.getJoke();
    }, []);
    if(error) {
        return <h2>We got an error: {error}</h2>;
    }
    if (isGetting) {
        return <h2>Getting Joke for you!</h2>;
    }
    return (
     <>
        <h2>Joke Setup: {setup}</h2>
        <h2>Joke Delivery: {delivery}</h2>
        <button onClick={handleClick}>Get new Joke!</button>
     </>
    );
}

const mapStateToProps = state => {
    return {
        setup: state.setup,
        delivery: state.delivery,
        isGetting: state.isGetting,
        error: state.error
    };
};

export default connect(mapStateToProps, {getJoke})(Jokes);