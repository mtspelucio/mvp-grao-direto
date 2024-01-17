import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'League Spartan', sans-serif; */
    font-family: 'Roboto', sans-serif;
  }

  :root{
    --primary: #E80045;
    --white: #ffffff;
    --gray-100: #cfcfcf;
    --gray-200: #4f4f4f;
    --black: #000000;
  }
`;
 
export default GlobalStyle;