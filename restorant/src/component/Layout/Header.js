import React from 'react'
import classes from './Header.module.css'
import meal from '../Img/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <div>
        <div className={classes.header}>
            <h1>ReactMeal</h1>
            <HeaderCartButton />
        </div>
        <div className={classes['main-image']}>
        <img src={meal} />
        </div>
    </div>
  )
}

export default Header

