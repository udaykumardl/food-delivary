import {Fragment} from 'react'
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) =>{   
    return <Fragment>
        <header className={classes.header}>
            <HeaderCartButton onClick={props.onShowCart}/>
            <h1>ReactMeals</h1>
            
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table of delicious food!'/>
        </div>

    </Fragment>
}

export default Header;