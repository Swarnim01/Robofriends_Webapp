import React from 'react';
import Card from './Card';


const CardList = ({robot}) =>{
    const CardArray = robot.map((user , i) => {
        return(<Card key = {robot[i].id} id = {robot[i].id}  name = {robot[i].name} email = { robot[i].email }/>)
    })
    return(
        <div>
            {CardArray}
        </div>
    );
}
export default CardList;