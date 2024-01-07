import imgReacte from "../../img/react-core-concepts.png";

import './Header.css'

const reactDes=["Fundamental", "Crucial", "Core"];
function genRamdon(max){
    return Math.floor(Math.random() * (max +1));

}

export default function Header(){
    return (<header>
           <img src={imgReacte} alt="Stylized atom" />
           <h1>React Essentials</h1>
           <p>
             {reactDes[genRamdon(2)]} React concepts you will need for almost any app you are
             going to build!
           </p>
         </header>
    );
};