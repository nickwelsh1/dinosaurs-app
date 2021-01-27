import React from 'react';


const Card = ({ dinosaur, index }) => {

    const keywords = [ 'tundra', 'jurassic', 'volcanic', 'jungle,nature', 'trees,forest', 'desert', 'nature' ];

    function selectImage(keywords, index) {
        console.log('index: ', index)
        console.log( (index % keywords.length) );
        return 'https://source.unsplash.com/random/160x160/?landscape,' + keywords[(index % keywords.length)];
    }

    let imageChoice = selectImage(keywords, index);

    return (
        <div className="dinosaur-card">
            <img src={ imageChoice } alt='landscape' />
            <div>
                <h2>Name {dinosaur.nam}</h2>
                <p>Size {dinosaur.siz}</p>
                <p>Order / cll {dinosaur.Cll}</p>
                <p>Family {dinosaur.fml}</p>
                <p>ttl {dinosaur.ttl}</p>
                <p className="diet">{dinosaur.jdt}</p>
                <p>Domain / jev {dinosaur.jev}</p>
                <p>jlh {dinosaur.jlh}</p>
                <p>Dispersal {dinosaur.dispersal}</p>
                <p>jsa {dinosaur.jsa}</p>
                <p className="timeline">geological period {dinosaur.tli}</p>
            </div>
        </div>
    );
}

export default Card;


