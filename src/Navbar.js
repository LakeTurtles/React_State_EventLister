import React, { Component } from 'react';
import {Link} from 'react-router-dom';





class NavigationMenu extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false, // Initial state for whether the navigation menu is open or closed
    };
  }

  toggleNav = () => {
    this.setState((prevState) => ({
      isNavOpen: !prevState.isNavOpen, // Toggle the state when this function is called
    }));
  };

  render() {
    // Determine the class to apply based on the state
    const navClass = this.state.isNavOpen ? 'nav nav--show' : 'nav';

    return (
      <div>
    

    <div className='navbar'>
                  <div className='navBtn btn'>
                      <i className='fas fa-bars'  onClick={this.toggleNav}></i>
                  </div>
              </div>


        <div className={navClass}>
       
        <ul className='nav__links'>

            <li><Link to='#top-nav' className='nav__single-link btn dark-btn'>Dark</Link ></li>
            <li><Link to='/' className='nav__single-link btn home-btn'>home!</Link ></li>
            <li><Link to='/about' className='nav__single-link btn'>about</Link ></li>
            <li><Link to='#drink' className='nav__single-link btn'> drinks</Link ></li>
            <li><Link to='./work.html' className='nav__single-link btn'>work</Link ></li>
            <li><Link to='./contact.html' className='nav__single-link btn' >contact</Link ></li>
        </ul>
     </div>

        </div>
    
    );
  }
}

export default NavigationMenu;