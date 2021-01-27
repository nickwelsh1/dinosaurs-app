import React, { Fragment } from 'react';
import Card from './Card.js';


const CardList = ({ dinosaurs }) => {
    function displayCard(props, index) {
        if (props.oid) {
            return <Card key={props.oid} dinosaur={props} index={index} />
        }
    }
    return (
        <Fragment>
            { console.log('cardlist dinosaurs: ', dinosaurs)}
            {dinosaurs.map((dinosaur, index) => (
                displayCard(dinosaur, index)
            ))}
        </Fragment>
    );
}

export default CardList;