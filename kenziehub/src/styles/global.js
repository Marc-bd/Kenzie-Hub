import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Inter', sans-serif;
}

:root{
--black: #212529;
--litepink: #FF577F; 
--pink: #FF427F;
--grey: #868E96;
--dark-grey: #343B41;
--white: #F8F9FA;
--negativepink: #59323F
}


h1, h2, h3 {
    font-size: 16px;
    font-weight: bold;
}





body {
    background: #121214;
}





button {
    cursor: pointer;
}

a {
    text-decoration: none;
}

`;
