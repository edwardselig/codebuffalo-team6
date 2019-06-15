import React from 'react';
import bigoctopus from '../svg/bigoctopus.svg';

const style = {
    margin: 12
};

const Octopus = () => (
    <img className="centerOctopus" style={{ zIndex: '5', position: 'absolute' }} src={bigoctopus}></img>
);

export default Octopus;
