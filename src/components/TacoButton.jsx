import React from 'react';
import taco from '../svg/taco.svg';

const style = {
    margin: 12
};

const TacoButton = () => <img onClick={tacoClick} className="centerTaco" src={taco} />;

const tacoClick = () => {
    console.log('taco-click');
};

export default TacoButton;
