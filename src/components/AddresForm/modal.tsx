import React from 'react'
import styled from 'styled-components'
import AddressForm from './index'

interface ModalProps {
  onClose: () => void
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

const ModalContainer = styled.div`
  background: #fff;
  width: 80%;
  max-width: 800px;
  border-radius: 8px;
  overflow: hidden;
`

const AddressModal: React.FC<ModalProps> = ({ onClose }) => (
  <ModalOverlay>
    <ModalContainer>
      <AddressForm onClose={onClose} />
    </ModalContainer>
  </ModalOverlay>
)

export default AddressModal
