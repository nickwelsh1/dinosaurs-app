import React from 'react';
import Card from './Card.js';


const CardList = ({ dinosaurs }) => {
    function displayCard(props, index) {
        if (props.oid && props.nam) {
            return <Card key={props.oid} dinosaur={props} index={index} />
        }
    }
    return (
        <div className="row  dinosaurs-cardlist">
            { console.log('cardlist dinosaurs: ', dinosaurs)}
            {dinosaurs.map((dinosaur, index) => (
                displayCard(dinosaur, index)
            ))}
        </div>
    );
}

export default CardList;