import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import icClose from '../../assets/icons/ic_close.svg'

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  width: ${({ width }) => width || '90%'};
  max-width: 1046px;
  height: ${({ height }) => height || 'auto'};
  max-height: 90vh;
  position: relative;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-width: none;
    border-radius: 0;
  }

  @media (max-width: 450px) {
    width: 100%;
    height: 100%; 
    max-width: none; 
    border-radius: 0;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: red;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background: darkred;
    transform: scale(1.1);
  }

  img {
    width: 20px;
    height: 20px;
    filter: invert(1);
  }
`

export default function Modal({ isOpen, onClose, children, width, height }) {
  if (!isOpen) return null

  return createPortal(
    <ModalWrapper onClick={onClose}>
      <ModalContent
        width={width}
        height={height}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>
          <img src={icClose} alt='images' />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('modal')
  )
}
