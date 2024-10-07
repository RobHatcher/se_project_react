import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";

function Main() {
  return (
    <Main>
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">
          Today is 75 &deg; F / You may want to wear:
        </p>
        <ul className="cards__list">
            {defaultClothingItems.map((item) => {
                return (<div>
                    CARD
                </div>)
            })}
        </ul>
      </section>
    </Main>
  );
}

export default Main;
