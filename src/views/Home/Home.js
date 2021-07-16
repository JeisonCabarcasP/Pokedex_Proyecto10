import "./styles.css";
import Search from "../../Componets/Search/Search";

const Home = () => {
  const view = `
          <div class="home-container">
           ${Search()}
          </div>
      `;
  return view;
};
export default Home;