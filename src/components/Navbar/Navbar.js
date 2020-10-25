import React,{useState} from 'react'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks} from './Navbar.elements';
import {FaTimes,FaBars,FaCartPlus} from 'react-icons/fa';
import {productData} from '../../pages/HomePage/Data';

const Navbar = () => {
    const [click,setClick]=useState(false);

    const handleClick=()=>setClick(!click);
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='vividly/'>
                        Vividly Written
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes />:<FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/vividly'>
                                Our Works
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/bestsellers'>
                                Bestsellers
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/childrenbook'>
                                Books For Children
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/adultSection'>
                                Adult Section
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/corporate'>
                                Corporate
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={{pathname:'/cart',state:{cart:productData}}}>
                                My Cart <FaCartPlus/>
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar