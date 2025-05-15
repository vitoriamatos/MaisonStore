import React, { FC, useState } from 'react'
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
import { FaChevronRight } from 'react-icons/fa'
const Filter = () => {
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Nav>
      <Hamburger onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      <NavMenu isOpen={isOpen}>
        <LeftArea>
          <NavItem href="#about">
            <NavContianer>Feminino &gt;</NavContianer>
          </NavItem>
          <NavItem>
            <NavContianer>Calça &gt;</NavContianer>
          </NavItem>
          <NavItem>
            <NavContianer>Jeans &gt;</NavContianer>
          </NavItem>
        </LeftArea>
      </NavMenu>
    </Nav>
  )
}

export default Filter
