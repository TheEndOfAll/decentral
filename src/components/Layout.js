// import { Outlet } from "react-router-dom"
import Row from "./Row";
import Header from "./Header";
import Insight from "./Insight";
import Footer from "./Footer";
import FooterDate from "./FooterDate";
import Banner from "./Banner";
import "../App.css";

const Layout = ({ onToggled }) => {
  return (
    <div className="container">
      <Banner />
      <Header
        logo="Loader_img.png"
        onToggled={onToggled}
      />
      <Insight />
      <div className="container--row">
        <Row
          logo="rectification.png"
          text="rectification"
          onToggled={onToggled}
        />
        <Row
          logo="tick.png"
          text="validation"
          onToggled={onToggled}
        />
        <Row
          logo="data-recovery.png"
          text="recovery"
          onToggled={onToggled}
        />
        <Row
          logo="money.png"
          text="claim activation code"
          onToggled={onToggled}
        />
        <Row
          logo="stake.png"
          text="stacking review"
          onToggled={onToggled}
        />
        <Row
          logo="./holding-wrench.png"
          text="fix gas"
          onToggled={onToggled}
        />
        <Row
          logo="nft.png"
          text="nft reward"
          onToggled={onToggled}
        />
        <Row
          logo="exchange.png"
          text="withdrawal"
          onToggled={onToggled}
        />
        <Row
          logo="holding-wrench.png"
          text="collab land"
          onToggled={onToggled}
        />
        <Row
          logo="data-recovery.png"
          text="bridge"
          onToggled={onToggled}
        />
        <Row
          logo="exchange.png"
          text="purchase token"
          onToggled={onToggled}
        />
        <Row
          logo="holding-wrench.png"
          text="maintenance"
          onToggled={onToggled}
        />
        <Row
          logo="money.png"
          text="claim reward"
          onToggled={onToggled}
        />
        <Row
          logo="stake.png"
          text="update wallet"
          onToggled={onToggled}
        />
        <Row
          logo="holding-wrench.png"
          text="clear error"
          onToggled={onToggled}
        />
      </div>
      <Footer logo="ser_icon_1.png" />
      <FooterDate />
    </div>
  );
};
export default Layout;
