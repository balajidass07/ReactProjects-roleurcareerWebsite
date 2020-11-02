import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Pricing</h1>
          <div className='pricing__container'>
            <Link to={
                  '//roleurcareer.typeform.com/to/UBcKYwjJ'
                  }
                  target='_blank'
                  aria-label='Youtube' 
                  className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Starter</h3>
                <h4>&#x20b9; 99</h4>
                <p>per annum</p>
                <ul className='pricing__container-features'>
                  <li>Portfolio</li>
                  <li>creative and unique themes</li>
                  <li>easy update</li>
                </ul>
                <Link to={
                  '//roleurcareer.typeform.com/to/UBcKYwjJ'
                  }
                  target='_blank'
                  aria-label='Youtube'
                >
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button></Link>
              </div>
            </Link>
            <Link to={
                  '//roleurcareer.typeform.com/to/UBcKYwjJ'
                  }
                  target='_blank'
                  aria-label='Youtube' 
                  className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Gold</h3>
                <h4>&#x20b9; 2999</h4>
                <p>*onwards per annum</p>
                <ul className='pricing__container-features'>
                  <li>e-commerce Sites</li>
                  <li>Maintaining service</li>
                  <li>24/7 Customer support</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to={
                  '//roleurcareer.typeform.com/to/UBcKYwjJ'
                  }
                  target='_blank'
                  aria-label='Youtube' 
                  className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Diamond</h3>
                <h4>&#x20b9; 3999</h4>
                <p>*onwards per annum</p>
                <ul className='pricing__container-features'>
                  <li>Branding and e-commerce Sites </li>
                  <li>Faster response time</li>
                  <li>Fully customizable</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
