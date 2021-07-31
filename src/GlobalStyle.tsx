import { createGlobalStyle, ThemeProvider } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
 
 *{
     margin: 0;
     padding: 0;
     font-family: 'Roboto', sans-serif;
 }
 body{
     background-color: #f3f2f2;
 }

 button, li {
     cursor: pointer;
 }
`
