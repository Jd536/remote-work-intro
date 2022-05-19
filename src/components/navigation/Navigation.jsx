import React, {useState, useEffect, useRef} from 'react';

import Logo from '../../images/logo.svg';
import Button from '../buttons/Button';

import CompanyMenu from '../submenus/CompanyMenu';
import FeaturesMenu from '../submenus/FeaturesMenu';

import { ReactComponent as ArrowUp }from '../../images/icon-arrow-up.svg';
import { ReactComponent as ArrowDown }from '../../images/icon-arrow-down.svg';
import { ReactComponent as MenuButton }from '../../images/icon-menu.svg';
import { ReactComponent as CloseMenuButton }from '../../images/icon-close-menu.svg';



import './Navigation.scss';

function Navigation (props) {

  const [showMenu, setShowMenu] = useState(false);

  const [openFeaturesMenu, setOpenFeaturesMenu] = useState(false);
  const [openCompanyMenu, setOpenCompanyMenu] = useState(false);


  const handleShowMenu= ()=> {
    setShowMenu(!showMenu)
  }

  const handleFeaturesClick = ()=> {
    setOpenFeaturesMenu(!openFeaturesMenu)
    setOpenCompanyMenu(false)
  }

  const handleCompanyClick = ()=> {
    setOpenCompanyMenu(!openCompanyMenu)
    setOpenFeaturesMenu(false)
  }

  const closeMenus= () => {
    setOpenCompanyMenu(false);
    setOpenFeaturesMenu(false)
  }

  // OOUTSIDE MENU CLICK MONITORING - WRITE A FUNCTION THAT CLOSE THE SUB-MENUS WHEN USER CLICK OUTSIDE ANYWHERE ELSE ON THE WINDOW
  let featuresRef = useRef(null)
  let companyRef = useRef(null)
 
 useEffect(()=>{
  document.addEventListener('mousedown', (e)=>{
    if( featuresRef!==null && featuresRef.current.contains(e.target)){
      return
    } else{
      setOpenFeaturesMenu(false)
    }
  })
 }, [openFeaturesMenu])

  //handles company submenu when clicked outside
 useEffect(()=>{
  document.addEventListener('mousedown', (e)=>{
    if(companyRef!==null && companyRef.current.contains(e.target)){
      return
    } else{
      setOpenCompanyMenu(false)
    }
  })
 }, [openCompanyMenu])

  //---------------------------------------------------------------------------------------------------------------------------------------


  useEffect(() =>{
    const timer = setTimeout(() => {
      setOpenFeaturesMenu(false)
    }, 7000);

    return () => clearTimeout(timer)
    }, 
    [openFeaturesMenu] );

  useEffect(() =>{
    const timer = setTimeout(() => {
      setOpenCompanyMenu(false)
    }, 7000);

    return () => clearTimeout(timer)
    }, 
    [openCompanyMenu] );


  return (
    <div className="navigation"  >
      <nav className="navigation__container">
        <div className="navigation__logo-container">
          <img src={Logo} alt="snap logo" className='navigation__logo'/>
        </div>
        <div className={
                showMenu?" show__navigation__menu-container navigation__menu-container":" navigation__menu-container"
        }      
          >
          <div className="u-center">

          
            <ul className={
                showMenu?'show__menu navigation__menu':'navigation__menu'
                }>
                <li  
                ref={featuresRef}
              
                className={
                openFeaturesMenu?
                "navigation__menu-item open-sub-menu"
                  :
                "navigation__menu-item"
                } 
                  onClick={handleFeaturesClick}
                >
                  
                  Features
                  {
                    openFeaturesMenu? <ArrowUp/> : <ArrowDown/>
                  }
                  
                  {
                    openFeaturesMenu?<FeaturesMenu />:''
                  }
                  
                </li>
                <li 
                  ref={companyRef}
                className={
                  openCompanyMenu?
                  "navigation__menu-item open-sub-menu"
                    :
                  "navigation__menu-item"
                  } 
                  onClick={handleCompanyClick}
                >
                  
                  Company
                  {
                    openCompanyMenu?<ArrowUp/>:<ArrowDown/>
                  }
                  
                  {
                    openCompanyMenu?<CompanyMenu/>:''
                  }
                  </li>
                <li className="navigation__menu-item"
      
                  >Careers</li>
                <li className="navigation__menu-item"
                >Blog</li>
            </ul>

            <div className={
              showMenu?"navigation__buttons-container show__navigation__buttons-container":"navigation__buttons-container"
            }>
              <Button 
                classname="navigation__button"
                onClick={closeMenus}
                >
                Login
              </Button>
              <Button 
                classname="navigation__button"
                onClick={closeMenus}
                >
                Register
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {
            showMenu?
            <CloseMenuButton className="close__menu"
              onClick={handleShowMenu}
            />
              :
            <MenuButton className="menu" 
              onClick={handleShowMenu}
            />
          }
    </div>
  )
}


export default Navigation;