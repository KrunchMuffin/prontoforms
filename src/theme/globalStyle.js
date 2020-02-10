// globalStyle.js
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #E7E7E7;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
  }
  .pointer {
    cursor: pointer;
  }  
  .headerBg {
    background-color: #0076A8;
  }
  .sideBarBkg {
    background-color: #2C3F50;
  }
  .mainBkg {
    background-color: #E7E7E7;
  }
  .HighAvail {
    color: #388697;
  }
  .LowAvail {
    color: #CC2936;
  }
  .shadow {
    box-shadow: 0 .5rem 1rem #aaa !important;
  }  
  .col-1 {
    padding-right: 0!important;
  }
  div:focus, .selectedFlag {
    background-color: #f26522;
  }  
  .selected-flag-container {
    text-align: center;
  }

  .flag {
    border-bottom: 1px solid #878796;
    margin-left: 3px;
  }

  .no-gutter > [class*='col-'] {
    padding-right:0;
    padding-left:0;
  }  
`;
export default GlobalStyle;