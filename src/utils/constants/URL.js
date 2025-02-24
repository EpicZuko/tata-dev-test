import imagesr from "../../assets/icons/pizza.svg";
import i1 from '../../assets/icons/i1.svg'
import i2 from '../../assets/icons/i2.svg'
import i3 from '../../assets/icons/i3.svg'
import i4 from '../../assets/icons/i4.svg'
import i5 from '../../assets/icons/i5.svg'
import i6 from '../../assets/icons/i6.svg'
import c2 from '../../assets/icons/c2.svg'
import c3 from '../../assets/icons/c3.svg'
import g1 from '../../assets/icons/g1.svg'
import g2 from '../../assets/icons/g2.svg'
import g3 from '../../assets/icons/g3.svg'
import g4 from '../../assets/icons/g4.svg'
import g5 from '../../assets/icons/g5.svg'

export const cardAds = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 1,
  },
  mobileLarge: {
    breakpoint: { max: 428, min: 320 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 320, min: 0 },
    items: 1,
  },
}
export const CartdAdsAutoPlay = {
  autoPlay: true,
  autoPlaySpeed: 3000,
  infinite: true,
}
export const storiesCard = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 3,
  },
  mobileLarge: {
    breakpoint: { max: 428, min: 320 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 320, min: 0 },
    items: 1,
  },
}

export const popularCard = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 1,
  },
  mobileLarge: {
    breakpoint: { max: 428, min: 320 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 320, min: 0 },
    items: 1,
  },
}
export const arrayStories = [
  {
    id: 1,
    images:
      i1,
    name: "Название сториз",
  },
  {
    id: 2,
    images:
      i2,
    name: "Название сториз",
  },
  {
    id: 3,
    images:
     i3,
    name: "Название сториз",
  },
  {
    id: 4,
    images:
      i4,
    name: "Название сториз",
  },
  {
    id: 5,
    images:
      i5,
    name: "Название сториз",
  },
  {
    id: 6,
    images:
     i6,
    name: "Название сториз",
  },
  
];
export const dataArrawSnacks = [
  {
    id: 1,
    images:
      g1,
    name: "Мясное ассорти",
    desicription: "Чучук, курдюк, говяжмий язык, быжи, томлёная говядина",
    price: 1200,
  },
  {
    id: 2,
    images:
      g2,
    name: "Куриный сет",
    desicription: "Крылышки 4 шт., голень 4 шт., куриные шашлычки 5 шт.",
    price: 1000,
  },
  {
    id: 3,
    images:
      g3,
    name: "Суши сет",
    desicription: "Филадельфия 8 шт., Калифорния 8 шт., Гейша Рору 8 шт., Темпура...",
    price: 1300,
  },
  {
    id: 4,
    images:
     g4,
    name: "Кавказская нарезка",
    desicription: "Копчёная колбаса, копчёная грудка, сыр, зелень",
    price: 400,
  },
  
];
export const dataArrawwGrill = [
  {
    id: 1,
    images:
      g1,
    name: "Козу-гриль",
    desicription: "Время приготовления: 5 часов",
    price: 8500,
  },
  {
    id: 2,
    images: g2,
    name: "Индюк-гриль",
    desicription: "Время приготовления: 4 часов",
    price: 3000,

  },
  {
    id: 3,
    images:
      g3,
    name: "Рыба-гриль (форель)",
    desicription: "Время приготовления: 5 часов",
    price: 1200,
  },
  {
    id: 4,
    images: g4,
    name: "Таш кордо",
    desicription: "Время приготовления: 5 часов",
    price: 12500,
  },
  {
    id: 5,
    images:
     g5,
    name: "Кабырга гриль",
    desicription: "Время приготовления: 5 часов",
    price: 9700,
  },
  {
    id: 6,
    images:
      g4,
    name: "Рыба-гриль (форель)",
    desicription: "Время приготовления: 5 часов",
    price: 1200,
  },
  {
    id: 7,
    images:
      g4,
    name: "Таш кордо",
    desicription: "Время приготовления: 5 часов",
    price: 12500,
  },
  {
    id: 8,
    images:
      g4,
    name: "Таш кордо",
    desicription: "Время приготовления: 5 часов",
    price: 12500,
  },
 
];
export const arrayPopular = [
  {
    id: 1,
    images: imagesr,
    name: "Пепперони",
    price: 700,
  },
  {
    id: 2,
    images: c2,
    name: "Козу-гриль",
    price: 8500,
  },
  {
    id: 3,
    images: c3,
    name: "Лепёшки",
    price: 60,
  },
];
export const arrayAds = [
  {
    id: 1,
    images:
      "https://imgv3.fotor.com/images/blog-cover-image/a-shadow-of-a-boy-carrying-the-camera-with-red-sky-behind.jpg",
    name: "Лучший гриль",
  },
  {
    id: 2,
    images:
      "https://www.shutterstock.com/image-photo/blond-hair-girl-taking-photo-260nw-2492842415.jpg",
    name: "Лучший гриль",
  },
  {
    id: 3,
    images:
      "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFraW5nJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
    name: "Лучший гриль",
  },
  {
    id: 4,
    images:
      "https://cdn.pixabay.com/photo/2023/12/06/21/07/photo-8434386_640.jpg",
    name: "Лучший гриль",
  },
  {
    id: 5,
    images:
      "https://images.pexels.com/photos/516927/pexels-photo-516927.jpeg?cs=srgb&dl=pexels-pripicart-516927.jpg&fm=jpg",
    name: "Лучший гриль",
  },
  {
    id: 6,
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRioEI4ukddcJtBu_a_D5oMI49OLkLSBXPyNw&s",
    name: "Лучший гриль",
  },
];