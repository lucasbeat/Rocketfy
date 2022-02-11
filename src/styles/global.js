import { createGlobalStyle }  from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,200;0,300;0,400;1,300&display=swap');

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font: 14px 'Roboto', sans-serif;
        background: #ecf1f8;
        color: #333;
        -webkit--font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }


`;