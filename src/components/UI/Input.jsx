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
      padding-left: 60px; 
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
    font-size: 16px;
    font-weight: 500;
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
    padding-left: 60px; 
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
const getSelectAddressMedia = (props) => {
  if (props.variant === 'selectaddres') {
    return `
      width: 380px;
      font-size:16px;
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
const getEnterAmountMedia = (props) => {
  if (props.variant === 'getamount') {
    return `
      width: 380px;
      font-size: 16px;
    `
  }
  return ''
}
const getEnterYourAddress = (props) => {
  if (props.variant === 'enteryouraddress') {
    return `
    width: 725px;
    height: 59px;
    border-radius: 40px;
    padding-left: 24px;
    font-weight: 500;
    font-size: 16px;
    background:rgba(247, 247, 247, 1);
    border:none;
    &:focus {
        outline: 2px solid ${props.error ? 'red' : 'rgba(0, 145, 66, 1)'};
    }
    `
  }
  return ''
}

const getApartment = (props) => {
  if (props.variant === 'apartement') {
    return `
    width: 354.5px;
    height: 59px;
    border-radius: 40px;
    padding-left: 24px;
    border:none;
    background:rgba(247, 247, 247, 1);
    font-family: Nunito Sans;
    font-weight: 500;
    font-size: 16px;
    &:focus {
        outline: 2px solid ${props.error ? 'red' : 'rgba(0, 145, 66, 1)'};
    }
    `
  }
  return ''
}
const getEntrance = (props) => {
  if (props.variant === 'entrance') {
    return `
    width: 354.5px;
    height: 59px;
    border-radius: 40px;
    padding-left: 24px;
    background:rgba(247, 247, 247, 1);
     &:focus {
        outline: 2px solid ${props.error ? 'red' : 'rgba(0, 145, 66, 1)'};
    }
    `
  }
  return ''
}

const getFloor = (props) => {
  if (props.variant === 'floor') {
    return `
    width: 354.5px;
    height: 59px;
    border-radius: 40px;
    padding-left: 24px;
    font-family: Nunito Sans;
    font-weight: 500;
    font-size: 16px;
    border:none;
    background:rgba(247, 247, 247, 1);
     &:focus {
        outline: 2px solid ${props.error ? 'red' : 'rgba(0, 145, 66, 1)'};
    }
    `
  }
  return ''
}

const getIntercom = (props) => {
  if (props.variant === 'intercom') {
    return `
    width: 354.5px;
    height: 59px;
    border-radius: 40px;
    padding-left: 24px;
    border:none;
    background:rgba(247, 247, 247, 1);
    font-family: Nunito Sans;
    font-weight: 500;
    font-size: 16px;
     &:focus {
        outline: 2px solid ${props.error ? 'red' : 'rgba(0, 145, 66, 1)'};
    }
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
  ${(props) => getApartment(props)}
  ${(props) => getEntrance(props)}
  ${(props) => getFloor(props)}
  ${(props) => getIntercom(props)}

  @media (max-width:428px) {
    ${(props) => getInputSearchMedia(props)}
    ${(props) => getEnterAmountMedia(props)}
    ${(props) => getSelectAddressMedia(props)}
  }
`
const wrapperWidth = (props) => {
  let result
  if (props.widht === 'none') {
    result = '423px'
  } else if (props.widht === 'some') {
    result = '456px'
  } else {
    result = ''
  }

  return result
}
const wrapperWidthMedia = (props) => {
  let result
  if (props.widht === 'none') {
    result = '290px'
  } else if (props.widht === 'some') {
    result = '380px'
  } else {
    result = ''
  }

  return result
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${(props) => wrapperWidth(props)};
  border-radius: 40px;
  @media (max-width: 428px) {
    width: ${(props) => wrapperWidthMedia(props)};
  }
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
  {
    variant,
    placeholder,
    errors,
    onChange,
    onBlur,
    onClear,
    value,
    widht,
    ...props
  },
  ref
) {
  console.log(errors)
  return (
    <Wrapper widht={widht}>
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
        value={value}
      />
      {variant === 'search' && value && (
        <CloseIcon src={icClose} alt='close' show={value} onClick={onClear} />
      )}
      {variant === 'phonenumber' && <ChangeText>изменить</ChangeText>}
    </Wrapper>
  )
})

export default Input
