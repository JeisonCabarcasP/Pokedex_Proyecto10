import "./styles.css";
import logo from "../../assets/imgs/logo.png"
const Header = () => {
  const view = `
<div class="header-container">
  <img src="${logo}" alt="Logo">
  <a href="#">Pokedex</a>
</div>
`;
  return view;
};
export default Header;
