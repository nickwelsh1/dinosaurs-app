import React from "react";
// import Card from './Card.js';

const colourPalette = [
  "006466",
  "065A60",
  "0B525B",
  "144552",
  "1B3A4B",
  "212F45",
  "272640",
  "312244",
  "3E1F47",
  "2E1630",
  "1b561e",
  "2a6423",
  "3f7728",
  "5a8f2e",
  "76a836",
  "91c13c",
  "aad642",
  "b9e446",
  "3a2059",
  "462964",
  "553373",
  "6d4488",
  "805299",
  "9761ad",
  "a86ebe",
  "b074c5",
  "204459",
  "295065",
  "336073",
  "417384",
  "518a98",
  "5f9eab",
  "6cb0bc",
  "74bac5",
  "641220",
  "6E1423",
  "85182A",
  "A11D33",
  "A71E34",
  "B21E35",
  "BD1F36",
  "C71F37",
  "DA1E37",
  "E01E37"
];

const TimeSections = ({ timeScale }) => {

//   function flatten(obj) {
//     return Object.values(obj).flat();
//   }

//   let flatTimeScale = flatten( timeScale );

//   function displayTimeSection(props, index) {
//     console.log("index: ", index);
//     return <li>{Object.keys(props[index])}</li>;
//   }

  function displayPropertiesInObject(anObject) {
    for (const property in anObject) {
        console.log(`nnn ${property}: ${anObject[property]}`);
        console.log(property);
        console.log(anObject[property]);
        // return <span>{property} {anObject[property]}</span>
      }
  }


  function parseObjectProperties (obj, parse) {
    for (var k in obj) {
      if (typeof obj[k] === 'object' && obj[k] !== null) {
        parseObjectProperties(obj[k], parse)
      } else if (obj.hasOwnProperty(k)) {
        parse(obj[k])
      }
    }
  }

  function parseNew(parseObjectProperties, timeScale) {
    let timeItems = [];
    let idxKeys = [];
    parseObjectProperties(timeScale.era.period, function (prop) {
        // console.log(prop);
        idxKeys.push( idxKeys.length++ );
        timeItems.push( <li key={idxKeys.length}>{prop}</li> );
        // return <li>{prop}</li>
    });
    return timeItems;
  }

  function renderObjectTree(timeScaleObject) {
    // let currentPath = {};
    let myHTMLfragment = [];
    iterateThroughObject(timeScaleObject);
    // console.log('myHTMLfragment: ', myHTMLfragment);
    return myHTMLfragment;

    function iterateThroughObject(object) {
      // console.log('timeScaleObject keys: ', Object.keys(object)[0])
      // let objectZero = Object.keys(object)[0].trim();
      // let time = (objectZero !== 'title' && objectZero !== '0' && !Array.isArray(objectZero)) && objectZero;
      // if ( !(objectZero === 'title' || objectZero === '0' || Array.isArray(objectZero)) ) {
      //   console.log('Time: ', Object.keys(object)[0].trim())
      // }
      // console.log('time: ', time)
      let level = '';
      // first era
      let period = '';
      let epoch = '';
      let age = '';

      let timeLabel = '';
      let timePeriod = '';
      for (const property in object) {

        if (property === 'timeLabel') {
          timeLabel = object[property];
          console.log('timeLabel: ', timeLabel);
          // timeLabel = Object.keys(object);
        }

        if (property === 'title') {
          console.log('object: ', object)

          if (object.period) {
            level = '1';
            period = object.period;
            console.log('time: ', period)
            console.log('Level 1 era');
          } else if (object.epoch) {
            level = '2';
            epoch = object.epoch;
            console.log('Level 2 period');
          } else if (object.age) {
            level = '3';
            age = object.age;
            console.log('Level 3 epoch');
          }
          // next age
          // console.log('HTMLfragment property: ', property);
          console.log('object[property]: ', object[property]);
          // console.log('object[property].parent: ', object[property].parent);

          timePeriod = object[property];
        }


        let liStyle = {
          backgroundColor: '#' + colourPalette[myHTMLfragment.length],
        };
        if (timePeriod === object[property]) {
          myHTMLfragment.push(<div className="list-group-item" style={liStyle} key={myHTMLfragment.length}>{timeLabel}: {timePeriod} </div>);
        }
        // console.log('typeof property: ', typeof property);
        // console.log('object: ', object);
        // iterateThroughObject(object);
        if (typeof object[property] === 'object') {
          // console.log('object. run loop on object.');
          // console.log('object[property]: ', object[property]);
          // console.log('object[property].title: ', object[property].title);
          iterateThroughObject(object[property]);
        }
      }

      console.log('level: ', level ? level : '');
    }
  }

  return (
    <div className="row  timesections">
      <div className="col-12 px-0 text-light">
        { renderObjectTree(timeScale) }
      </div>
      {/* <ol>
        { parseNew(parseObjectProperties, timeScale) }
      </ol> */}
      {/* <ol>
        <li>{timeScale.era.title}</li>
        <li>{timeScale.era.period[0].title}</li>
        <li>{timeScale.era.period[0].epoch[0].title}</li>
        <li>{timeScale.era.period[0].epoch[0].age[0].title}</li>
        <li>{timeScale.era.period[1].title}</li>
      </ol> */}
    </div>
  );
};

export default TimeSections;


