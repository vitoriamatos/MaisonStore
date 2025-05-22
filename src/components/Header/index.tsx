import React, { useState } from 'react'
import {
  Nav,
  Logo,
  Hamburger,
  NavMenu,
  NavItem,
  CloseButton,
  RightArea,
  LeftArea,
  SearchContainer,
  SearchIconWrapper,
  SearchInput,
  NavContianer
} from './styles'
import logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faShoppingBag,
  faSearch
} from '@fortawesome/free-solid-svg-icons'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Nav>
      <Logo>
        <img src={logo} width={50}></img>
      </Logo>
      <Hamburger onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      <NavMenu isOpen={isOpen}>
        <RightArea>
          <NavItem>
            <CloseButton onClick={toggleMenu}>&times;</CloseButton>
          </NavItem>
          <NavItem href="/feminino">
            <NavContianer>Feminino</NavContianer>
          </NavItem>
          <NavItem href="#about">
            <NavContianer>Masculino</NavContianer>
          </NavItem>
          <NavItem href="#services">
            <NavContianer>Jeans</NavContianer>
          </NavItem>
          <NavItem href="#contact">
            <NavContianer>Casa</NavContianer>
          </NavItem>
        </RightArea>

        <LeftArea>
          <NavItem href="#home">
            <SearchContainer>
              <SearchIconWrapper>
                <FontAwesomeIcon icon={faSearch} />
              </SearchIconWrapper>
              <SearchInput type="text" placeholder="Search..." />
            </SearchContainer>
          </NavItem>
          <NavItem href="#about">
            <NavContianer>Entrar</NavContianer>
          </NavItem>
          <NavItem onClick={openCart}>
            <NavContianer>
              <FontAwesomeIcon icon={faHeart} />
            </NavContianer>
          </NavItem>
          <NavItem onClick={openCart}>
            <NavContianer>
              <FontAwesomeIcon icon={faShoppingBag} />
            </NavContianer>
          </NavItem>
        </LeftArea>
      </NavMenu>
    </Nav>
  )
}

export default Header
