import React, { forwardRef } from 'react'
import styled from 'styled-components'
import icArrow from '../../assets/icons/ic_arrow.svg'
import icClose from '../../assets/icons/ic_close.svg'
import icsearch from '../../assets/icons/ic_search.svg'

const getInputSearch = ({ variant }) => {
  if (variant === 'search') {
    return `
      width: 423px; 
      height: 56px; 
      padding: 16px 50px 16px 50px;
      border-radius: 40px; 
      font-size: 16px; 
      font-weight: 500;
      border: none;
      outline: none;
      background-color: #f0f0f0; 
      &:focus {
        outline: 2px solid rgba(0, 145, 66, 1);
      }
    `
  }
  return ''
}
const getInputSearchMedia = (props) => {
  if (props.variant === 'search') {
    return `
        width: 287px;
        height: 56px;
        padding: 16px;
         padding: 16px 50px 16px 50px;
        `
  }
  return ''
}
const getEnterYourPhoneNumber = ({ variant, error }) => {
  if (variant === 'number') {
    return `
      width: 395px;
      height: 59px;
      border-radius: 40px;
      padding-left: 55px; 
      padding-right: 16px;
      font-weight: 500;
      border: none;
    //   background: rgba(247, 247, 247, 1);
      font-size: 16px;
    //   border: ${error ? '2px solid red' : '2px solid transparent'};
      &:focus {
        outline: 2px solid ${error ? 'red' : 'rgba(0, 145, 66, 1)'};
      }
    `
  }
  return ''
}
const getEnterCode = (props) => {
  if (props.variant === 'endercode') {
    return `
      width: 395px;
      height: 59px;
      border-radius: 40px;
      padding-left: 15px; 
      padding-right: 16px;
      font-weight: 500;
      border: none;
      background: rgba(247, 247, 247, 1);
      font-size: 16px;
      &:focus {
        outline: 2px solid ${props.error ? 'red' : 'rgba(0, 145, 66, 1)'};
      }
        `
  }
  return ''
}

const getEnterName = (props) => {
  if (props.variant === 'endername') {
    return `
    width: 456px;
    height: 56px;
    border-radius: 40px;
    padding-left:24px;
    border:none;
    box-shadow: 0px 0px 4px 0px rgba(0, 145, 66, 0.1);
     &:focus {
        outline: 2px solid ${props.error ? 'red' : 'rgba(0, 145, 66, 1)'};
      }
    `
  }
  return ''
}
const getPhoneNumber = (props) => {
  if (props.variant === 'phonenumber') {
    return `
    width: 456px;
    height: 56px;
    justify-content: space-between;
    border-radius: 40px;
    color:rgba(54, 54, 54, 1);
    border:none;
     &:focus {
        outline: 2px solid ${props.error ? 'red' : 'rgba(0, 145, 66, 1)'};
      }
    box-shadow: 0px 0px 4px 0px rgba(0, 145, 66, 0.1);
    padding-left: 55px; 
    padding-right: 80px; 
     `
  }
  return ''
}
const getSelectAddress = (props) => {
  if (props.variant === 'selectaddress') {
    return `
    width: 456px;
    height: 56px;
    justify-content: space-between;
    border-radius: 40px;
    padding-left: 24px;
    border:none;
   &:focus {
        outline: 2px solid ${props.error ? 'red' : 'rgba(0, 145, 66, 1)'};
      }
    box-shadow: 0px 0px 4px 0px rgba(0, 145, 66, 0.1);
    font-weight: 500;
    font-size: 16px;
    `
  }
  return ''
}

const getEnterAmount = (props) => {
  if (props.variant === 'getamount') {
    return `
    width: 456px;
    height: 56px;
    border-radius: 40px;
    padding-left: 24px;
    box-shadow: 0px 0px 4px 0px rgba(0, 145, 66, 0.1);
    border:none;
   &:focus {
        outline: 2px solid ${props.error ? 'red' : 'rgba(0, 145, 66, 1)'};
      }
    font-family: Nunito Sans;
    font-weight: 500;
    font-size: 16px;
     `
  }
  return ''
}
const getEnterYourAddress = (props) => {
  if (props.variant === 'enteryouraddress') {
    return `
    width: 725;
    height: 59;
    border-radius: 40px;
    padding-left: 24px;
    font-weight: 500;
    font-size: 16px;
    background:rgba(247, 247, 247, 1);
    `
  }
  return ''
}

const STYLEDINPUT = styled.input`
  font-family: Nunito Sans;
  ${(props) => getInputSearch(props)}
  ${(props) => getEnterYourPhoneNumber(props)}
  ${(props) => getEnterCode(props)}
  ${(props) => getEnterName(props)}
  ${(props) => getPhoneNumber(props)}
  ${(props) => getSelectAddress(props)}
  ${(props) => getEnterAmount(props)}
  ${(props) => getEnterYourAddress(props)}

  @media (max-width:428px) {
    ${(props) => getInputSearchMedia(props)}
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 423px;
  border-radius: 40px;
`

const SearchIcon = styled.img`
  position: absolute;
  left: 16px;
  width: 20px;
  height: 20px;
`

const CloseIcon = styled.img`
  position: absolute;
  right: 16px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: ${({ show }) => (show ? 'block' : 'none')};
`

const Prefix = styled.span`
  position: absolute;
  left: 16px;
  font-family: Nunito Sans;
  font-size: 16px;
  font-weight: 500;
  color: rgba(54, 54, 54, 1);
`
const ChangeText = styled.span`
  position: absolute;
  right: 16px;
  font-family: Nunito Sans;
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 145, 66, 1);
  cursor: pointer;
`
const Images = styled.img`
  position: absolute;
  right: 16px;
  font-family: Nunito Sans;
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 145, 66, 1);
  cursor: pointer;
`
const Input = forwardRef(function Input(
  { variant, placeholder, errors, onChange, onBlur, onClear, value, ...props },
  ref
) {
  console.log(errors)
  return (
    <Wrapper>
      {variant === 'search' && <SearchIcon src={icsearch} alt='ic_search' />}
      {variant === 'number' && <Prefix>+996</Prefix>}
      {variant === 'phonenumber' && <Prefix>+996 </Prefix>}
      {variant === 'selectaddress' && <Images src={icArrow} alt='' />}
      <STYLEDINPUT
        variant={variant}
        ref={ref}
        placeholder={placeholder}
        type={variant === 'number' ? 'tel' : 'text'}
        {...props}
        onBlur={onBlur}
        onChange={onChange}
        error={errors}
      />
      {variant === 'search' && value && (
        <CloseIcon src={icClose} alt='close' show={value} onClick={onClear} />
      )}
      {variant === 'phonenumber' && <ChangeText>изменить</ChangeText>}
    </Wrapper>
  )
})

export default Input
