import React from 'react';
import classes from './Car.module.css'
import {withRouter} from 'react-router-dom'

const OutCar = (props) => {
    console.log(props)
    return (
        <div 
        className={classes.OutCar}
        onClick={()=> props.history.push('/cars/' + props.name.toLowerCase())}
        >
            <p>Car: {props.name}</p>
            <p>Year {props.year}</p>
        </div>
    )
}  

export default withRouter(OutCar)