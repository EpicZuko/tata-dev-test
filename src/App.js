import Header from "./components/header/Header";
import StoriesCardSlick from "./components/UI/StoriesCardSlick";
import CardSnacks from "./components/UI/CardSnacks";
import CardAndGrill from "./components/UI/CardAndGrill";
import CardMostPopular from "./components/UI/CardMostPopular";
import CardAds from "./components/UI/CardAds";
import Footer from "./components/footer/Footer";
import CartBasketsKorzonina from "./components/UI/CardBasketsKorzina";
import {
  arrayStories,
  arrayPopular,
  arrayAds,
  dataArrawwGrill,
  dataArrawSnacks,
} from "./utils/constants/URL";
import MobileFooter from "./components/mobile-footer/MobileFooter";
const App = () => {
  return (
    <div>
      <Header />
      <StoriesCardSlick dataArrayCard={arrayStories} />
      <CardAds dataArray={arrayAds} />
      <CardMostPopular dataArray={arrayPopular} />
      <CardAndGrill
        dataArray={dataArrawwGrill}
        onClickModal={() => alert("hello")}
      />
      <CartBasketsKorzonina />
      <CardSnacks dataArray={dataArrawSnacks} />
      <Footer />
      <MobileFooter />
    </div>
  );
};

export default App;
