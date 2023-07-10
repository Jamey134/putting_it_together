import React, { useState } from 'react';
import '../App.css';

// const PersonCard = (props) => {

//     const { first_name, last_name, age, hair_color } = props;

//     const { add, setAdd } = useState(age)
    
//     const birthdayCount = () => {
//             setAdd(add+1);
//         }

    

//     return (
//         <>
//             <h1>{last_name}, {first_name} </h1>
//             <p>Age: {add}</p>
//             <p>Hair Color: {hair_color}</p>
//             <button onClick={birthdayCount}> Birthday Button For {first_name} {last_name}</button>
//         </>
//     )
// };

const PersonCard = (props) => {
    const { first_name, last_name, age, hair_color } = props;

    const [addAge, setAddAge] = useState(age);

    const bdayClick = () => {
        setAddAge(addAge + 1);
    };

    return (
        <div>
            <h1>{last_name}, {first_name}</h1>
            <p>Age: {addAge}</p>
            <p>Hair Color: {hair_color}</p>
            <button onClick={bdayClick}>Birthday Button for {first_name} {last_name}</button>
        </div>
    );
};
export default PersonCard;
