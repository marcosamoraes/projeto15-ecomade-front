import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @-webkit-keyframes page-loader-inner {
    0%,40%{
      -webkit-transform:scale(0);
      transform:scale(0)
    }
    100% {
      -webkit-transform:scale(1);
      transform:scale(1);
      opacity:0
    }
  }

  @keyframes page-loader-inner {
    0%,40% {
      -webkit-transform:scale(0);
      transform:scale(0)
    }
    100% {
      -webkit-transform:scale(1);
      transform:scale(1);
      opacity:0
    }
  }

  @-webkit-keyframes page-loader-outer {
    0% {
      -webkit-transform:scale(1);
      transform:scale(1)
    }
    100%,40% {
      -webkit-transform:scale(0);
      transform:scale(0);
      opacity:0
    }
  }

  @keyframes page-loader-outer {
    0% {
      -webkit-transform:scale(1);
      transform:scale(1)
    }
    100%,40% {
      -webkit-transform:scale(0);
      transform:scale(0);
      opacity:0
    }
  }
`;

export const LoadingStyled = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 80px;
    width: calc(100% - 80px);
    background-color: #ededed;
    z-index: 999998;
    transition: -webkit-transform .35s ease-out;
    -webkit-transition: -webkit-transform .35s ease-out;
    transition: transform .35s ease-out;
    transition: transform .35s ease-out,-webkit-transform .35s ease-out;
    transition: transform .35s ease-out,-webkit-transform .35s ease-out;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    will-change: transform;

    @media (max-width: 767px) {
      width: 100%;
      left: 0;
    }

    &.is-active {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    &::after, &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      border-radius: 100%;
      content: "";
      z-index: 999999;
    }

    &::before {
      margin-top: -30px;
      margin-left: -30px;
      width: 60px;
      height: 60px;
      background-color: #fff;
      -webkit-animation: page-loader-outer 1.5s infinite ease-in;
      animation: page-loader-outer 1.5s infinite ease-in;
    }

    &::after {
      margin-top: -100px;
      margin-left: -100px;
      width: 200px;
      height: 200px;
      background-color: rgba(255,255,255,.5);
      border: 3px solid rgba(255,255,255,.75);
      -webkit-animation: page-loader-inner 1.5s infinite ease-out;
      animation: page-loader-inner 1.5s infinite ease-out;
    }
`;
