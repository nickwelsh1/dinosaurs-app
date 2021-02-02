import React from 'react';


const Card = ({ dinosaur, index }) => {

    const keywords = [ 'jurassic', 'volcanic', 'jungle,nature', 'rain,forest', 'desert', 'nature' ];

    function selectImage(keywords, index) {
        console.log('index: ', index)
        console.log( (index % keywords.length) );
        return 'https://source.unsplash.com/random/160x160/?landscape,' + keywords[(index % keywords.length)];
    }

    let imageChoice = selectImage(keywords, index);

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 pb-5  dinosaur-card">
            <img className="mb-4" src={ imageChoice } alt={ imageChoice } />
            <div>
                <h4>{dinosaur.nam} </h4>
                <dl className="row">
                    <dt className="col-sm-4">taxa size</dt>
                    <dd className="col-sm-8">{dinosaur.siz}</dd>

                    <dt className="col-sm-4">Order / cll</dt>
                    <dd className="col-sm-8">{dinosaur.Cll}</dd>

                    <dt className="col-sm-4">Family </dt>
                    <dd className="col-sm-8">{dinosaur.fml} </dd>

                    <dt className="col-sm-4">ttl </dt>
                    <dd className="col-sm-8">{dinosaur.ttl} </dd>

                    <dt className="col-sm-4">diet </dt>
                    <dd className="col-sm-8">{dinosaur.jdt}</dd>

                    <dt className="col-sm-4">Domain / jev </dt>
                    <dd className="col-sm-8">{dinosaur.jev}</dd>

                    <dt className="col-sm-4">jlh</dt>
                    <dd className="col-sm-8">{dinosaur.jlh}</dd>

                    <dt className="col-sm-4">Dispersal</dt>
                    <dd className="col-sm-8">{dinosaur.dispersal}</dd>

                    <dt className="col-sm-4">jsa </dt>
                    <dd className="col-sm-8">{dinosaur.jsa}</dd>

                    <dt className="col-sm-4">geological period</dt>
                    <dd className="col-sm-8">{dinosaur.tli}</dd>
                </dl>
            </div>
        </div>
    );
}

export default Card;


