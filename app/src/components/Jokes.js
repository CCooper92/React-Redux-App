import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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
        <SetupStyle> {setup}</SetupStyle>
        <div className='Delivery'>

        <SetupStyle> {delivery}</SetupStyle>
        </div>
        <ButtonStyle onClick={handleClick}>Get new Joke!</ButtonStyle>
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

const ButtonStyle = styled.button`
background-color:#81A094;
padding: 1.5%;
color: #203B3D;
font-size: 1rem;
font-weight: bold;
border: 2px solid #203B3D;
border-radius: 10px;
`
const SetupStyle = styled.h3`
color: #203B3D;
`


export default connect(mapStateToProps, {getJoke})(Jokes);