import styled from 'styled-components'
import { Colors } from '../../styles'

interface NavMenuProps {
  isOpen: boolean
}

export const Nav = styled.nav`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background: ${Colors.gray};
  color: ${Colors.black};
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`

export const Logo = styled.h1`
  font-size: 24px;
`

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: white;
    margin: 4px;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 36px;
  cursor: pointer;
  display: none;
  &:hover {
    color: #aaa;
  }
`
export const NavItem = styled.a`
  margin: 0 5px;
  text-decoration: none;
  color: ${Colors.black};
  font-size: 12px;
  &:hover {
    color: #aaa;
  }

  @media (max-width: 768px) {
    padding: 20px;
    font-size: 24px;
    width: 100%;
    text-align: center;
    border-top: 1px solid #555;

    &:first-child {
      border-top: none;
    }
  }
`

export const RightArea = styled.div`
  display: flex;
  justify-content: left;
`
export const LeftArea = styled.div`
  display: flex;
  justify-content: right;
`

export const NavMenu = styled.div<NavMenuProps>`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    background: #444;
    justify-content: center;
    align-items: center;
    display: block;
    z-index: 2;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.3s ease-in-out;
    ${CloseButton} {
      display: block;
    }
    ${NavItem} {
      display: block;
    }
    ${LeftArea} {
      display: block;
    }
  }
`
export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`

export const SearchIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #aaa;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 4px;
  padding-left: 44px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`

export const SearchIcon = styled.div`
  font-size: 16px;
`
export const NavContianer = styled.div`
  margin: 10px;
`
