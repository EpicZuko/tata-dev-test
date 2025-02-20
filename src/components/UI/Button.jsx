import * as React from 'react'
import { CircularProgress } from '@mui/material'
import styled from 'styled-components'
import addBaskets from '../../assets/icons/addBaskets.svg'
import minus from '../../assets/icons/minus.svg'
import plus from '../../assets/icons/plus.svg'

const getOrderOnline = ({ disabled, variant }) => {
  return (
    variant === 'Заказать онлайн' &&
    `&:hover{background:${disabled ? 'rgba(132, 200, 163, 1)' : 'rgba(0, 111, 51, 1);'}} background:${disabled ? 'rgba(132, 200, 163, 1)' : 'rgba(0, 145, 66, 1)'}; color:rgba(255, 255, 255, 1);border:none; width: 255px; height: 65px; border-radius: 40px;  font-family: Nunito Sans; font-weight: 500; font-size: 24px; line-height: 33.6px; letter-spacing: 4%; text-align: center;`
  )
}
const getAddBaskets = ({ disabled, variant }) => {
  return (
    variant === 'добавить корзины' &&
    `&:hover{background:${disabled ? 'rgba(132, 200, 163, 1)' : 'rgba(0, 111, 51, 1);'}}  width: 36px; height: 36px; border-radius: 9999px; text-align:center;padding-top:3px; border:none; background:${disabled ? 'rgba(132, 200, 163, 1)' : 'rgba(0, 145, 66, 1)'};`
  )
}
const getBasket = ({ disabled, variant }) => {
  return (
    variant === 'Корзина' &&
    `&:hover{background:${disabled ? 'rgba(132, 200, 163, 1);' : 'rgba(0, 111, 51, 1);'}}; background:${disabled ? 'rgba(132, 200, 163, 1)' : 'rgba(0, 145, 66, 1)'}; color:rgba(255, 255, 255, 1); border:none;width: 101px; height: 43px; border-radius: 40px; font-weight: 500;font-size: 16px; line-height: 22.4px;letter-spacing: 4%;text-align: center; span { font-weight: 200; line-height: 22.4px;}`
  )
}
const getAddToCart = ({ disabled, variant }) => {
  return (
    variant === 'Добавить в корзину' &&
    `&:hover{background:${disabled ? 'rgba(132, 200, 163, 1);' : 'rgba(0, 111, 51, 1);'}};  background:${disabled ? 'rgba(132, 200, 163, 1)' : 'rgba(0, 145, 66, 1)'}; color:rgba(255, 255, 255, 1); width: 197px; height: 43px; border-radius: 40px; font-weight: 500; font-size: 16px;line-height: 22.4px; text-align: center;border:none;`
  )
}
const getAddToCartMedia = (props) => {
  return (
    props.variant === 'Добавить в корзину' &&
    'width:388px; height:65px; font-size:24px;'
  )
}
const getToPlaceAnOrder = ({ disabled, variant }) => {
  return (
    variant === 'К оформлению заказа' &&
    `&:hover{background:${disabled ? 'rgba(132, 200, 163, 1);' : 'rgba(0, 111, 51, 1);'}}; width: 321px; height: 65px; border-radius: 40px; border:none; background:${disabled ? 'rgba(132, 200, 163, 1)' : 'rgba(0, 145, 66, 1)'}; color:rgba(255, 255, 255, 1); font-weight: 500; font-size: 24px;line-height: 33.6px;text-align: center;`
  )
}
const getToPlaceAnOrderMedia = (props) => {
  return props.variant === 'К оформлению заказа' && 'width:388px;'
}

const getReturnToHome = ({ disabled, variant }) => {
  return (
    variant === 'Вернуться на главную' &&
    `&:hover{background:${disabled ? 'rgba(132, 200, 163, 1);' : 'rgba(0, 111, 51, 1);'}}; background:${disabled ? 'rgba(132, 200, 163, 1)' : 'rgba(0, 145, 66, 1)'}; color:rgba(255, 255, 255, 1);width: 321px; height: 65px; border-radius: 40px; border:none; font-weight: 500; font-size: 24px; line-height: 33.6px; text-align: center;`
  )
}
const getReturnToHomeMedia = (props) => {
  return props.variant === 'Вернуться на главную' && 'width:388px;'
}
const getLogin = ({ disabled, variant }) => {
  return (
    variant === 'Войти' &&
    `&:hover{background:${disabled ? 'rgba(132, 200, 163, 1);' : 'rgba(0, 111, 51, 1);'}}; background:${disabled ? 'rgba(132, 200, 163, 1)' : 'rgba(0, 145, 66, 1)'}; color:rgba(255, 255, 255, 1); width: 395px; height: 65px; border-radius: 40px; font-weight: 500;font-size: 24px;line-height: 33.6px;text-align: center; border:none;`
  )
}
const getResend = ({ disabled, time, variant }) => {
  const isZeroTime = time === '0:00'
  return (
    variant === 'Отправить повторно' &&
    `&:hover{color:${disabled ? 'rgba(132, 200, 163, 1);' : 'rgba(0, 111, 51, 1);'};} border:none;background:rgba(236, 246, 239, 1); color: ${isZeroTime ? 'rgba(0, 145, 66, 1)' : 'rgba(132, 200, 163, 1)'} ; width: 395px; height: 65px; border-radius: 40px; font-weight: 500; font-size: 24px; line-height: 33.6px; letter-spacing: 4%; text-align: center; span {display:${isZeroTime ? 'none' : 'block'}}`
  )
}
const getPlaceAnOrderFor = ({ disabled, variant }) => {
  return (
    variant === 'Оформить заказ за' &&
    `&:hover{background:${disabled ? 'rgba(132, 200, 163, 1);' : 'rgba(0, 111, 51, 1);'}}; width: 536px; height: 65px; border-radius: 40px; border:none; background:${disabled ? 'rgba(132, 200, 163, 1)' : 'rgba(0, 145, 66, 1)'}; color:rgba(255, 255, 255, 1); font-weight: 500; font-size: 24px; line-height: 33.6px; text-align: center;`
  )
}
const getPlaceAnOrderForMedia = (props) => {
  return props.variant === 'Оформить заказ за' && 'width: 287px;'
}

const getAddAddress = ({ disabled, variant }) => {
  return (
    variant === 'Добавить адрес' &&
    `&:hover{background:${disabled ? 'rgba(132, 200, 163, 1);' : 'rgba(0, 111, 51, 1);'}}; width: 395px; height: 65px; border-radius: 40px; font-weight: 500; font-size: 24px; line-height: 33.6px; letter-spacing: 4%; text-align: center; border:none; color:rgba(255, 255, 255, 1); background:${disabled ? 'rgba(132, 200, 163, 1)' : 'rgba(0, 145, 66, 1)'};`
  )
}
const getAdd = ({ disabled, variant }) => {
  return (
    variant === 'Добавить' &&
    `&:hover{color:${disabled ? 'rgba(132, 200, 163, 1);' : 'rgba(0, 111, 51, 1);'};} width: 395px; height: 65px; border-radius: 40px; font-weight: 500; font-size: 24px; line-height: 33.6px; letter-spacing: 4%; text-align: center; border:none; color:${disabled ? 'rgba(132, 200, 163, 1);' : 'rgba(0, 111, 51, 1);'}; background:rgba(236, 246, 239, 1);`
  )
}

const getSave = ({ disabled, variant }) => {
  return (
    variant === 'Сохранить' &&
    `&:hover{background:${disabled ? 'rgba(132, 200, 163, 1);' : 'rgba(0, 111, 51, 1);'}}; width: 725px; height: 65px; border-radius: 40px; font-weight: 500; font-size: 24px; line-height: 33.6px; letter-spacing: 4%; text-align: center; border:none; color:rgba(255, 255, 255, 1);  background:${disabled ? 'rgba(132, 200, 163, 1)' : 'rgba(0, 145, 66, 1)'};`
  )
}
const getDontSave = ({ disabled, variant }) => {
  return (
    variant === 'Не сохранять' &&
    `&:hover{color:${disabled ? 'rgba(132, 200, 163, 1);' : 'rgba(0, 111, 51, 1);'}} width: 725px; height: 65px; border-radius: 40px; font-weight: 500; font-size: 24px; line-height: 33.6px; letter-spacing: 4%; text-align: center; border:none; color:${disabled ? 'rgba(132, 200, 163, 1);' : 'rgba(0, 111, 51, 1);'}; background:rgba(236, 246, 239, 1);`
  )
}
// background:${disabled ? 'rgba(132, 200, 163, 1)' : 'rgba(0, 145, 66, 1)'};
// ${disabled ? 'rgba(132, 200, 163, 1);' : 'rgba(0, 111, 51, 1);'}

const getLogout = ({ disabled, variant }) => {
  return (
    variant === 'Выйти' &&
    `&:hover{background:${disabled ? 'rgba(132, 200, 163, 1);' : 'rgba(0, 111, 51, 1);'}}; width: 189.5px; height: 65px; border-radius: 40px; font-weight: 500; font-size: 24px; line-height: 33.6px; letter-spacing: 4%; text-align: center; border:none; color:rgba(255, 255, 255, 1); background:${disabled ? 'rgba(132, 200, 163, 1)' : 'rgba(0, 145, 66, 1)'};`
  )
}

const getCancel = ({ disabled, variant }) => {
  return (
    variant === 'Отмена' &&
    `&:hover{color:${disabled ? 'rgba(132, 200, 163, 1);' : 'rgba(0, 111, 51, 1);'};} width: 189.5px; height: 65px; border-radius: 40px; font-weight: 500; font-size: 24px; line-height: 33.6px; letter-spacing: 4%; text-align: center; border:none; color:${disabled ? 'rgba(132, 200, 163, 1);' : 'rgba(0, 111, 51, 1);'}; background:rgba(236, 246, 239, 1);`
  )
}
const getMoneyIncreasePlus = ({ variant }) => {
  return (
    variant === 'plus' &&
    '&:hover{background:rgba(0, 111, 51, 1); } width: 32px; height: 32px; border-radius: 8888px; border:none; padding-top:6px; background:rgba(0, 145, 66, 1);'
  )
}

const getMoneyIncreaseMinus = ({ variant }) => {
  return (
    variant === 'minus' &&
    '&:hover{background:rgba(0, 111, 51, 1); } width: 32px; height: 32px; border-radius: 8888px; border:none;  background:rgba(0, 145, 66, 1); text-align:center;'
  )
}
const STYLEDBUTTON = styled.button`
  ${getOrderOnline}
  ${getAddBaskets}
  ${getBasket}
  ${getAddToCart}
  ${getToPlaceAnOrder}
  ${getReturnToHome}
  ${getLogin}
  ${getResend}
  ${getPlaceAnOrderFor}
  ${getAddAddress}
  ${getAdd}
  ${getSave}
  ${getDontSave}
  ${getLogout}
  ${getCancel}
  ${getMoneyIncreasePlus}
  ${getMoneyIncreaseMinus}
  cursor: pointer;
  transition: 0.4s;
  font-family: Nunito Sans;

  @media (max-width: 428px) {
    ${getAddToCartMedia}
    ${getToPlaceAnOrderMedia}
    ${getReturnToHomeMedia}
    ${getPlaceAnOrderForMedia}
  }
`
const Button = ({
  children,
  variant,
  onClick,
  disabled,
  Loading,
  ...props
}) => {
  return (
    <STYLEDBUTTON
      variant={variant}
      onClick={onClick}
      {...props}
      disabled={disabled}
    >
      {variant === 'добавить корзины' && (
        <img src={addBaskets} alt='add-baskets_images' />
      )}
      {Loading === 'loading' ? (
        <CircularProgress color='inherit' size={28} />
      ) : (
        children
      )}
      {variant === 'plus' && <img src={plus} alt='images-plus' />}
      {variant === 'minus' && <img src={minus} alt='images-minus' />}
    </STYLEDBUTTON>
  )
}

export default Button
