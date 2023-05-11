import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FcGoogle } from 'react-icons/fc';

const container = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 50px auto;

    width: 600px;
    height: 800px;
`;

const loginInput = css`
    width: 300px;
    height: 30px;
`;

const loginButton = css`
    width: 80px;
    height: 35px;
`;

const oAuth2LoginButton = css`
    margin-left: 50px;
    font-size: 40px;
`;

const Login = () => {

    const googleAuthHandleClick = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google"
    }

    const naverAuthHandleClick = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/naver"
    }

    const kakaoAuthHandleClick = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/kakao"
    }

    return (
        <div css={container}>
            <input css={loginInput} type="text" placeholder='email'/>
            <input css={loginInput} type="password" placeholder='password'/>
            <button css={loginButton}>Login</button>
            <button css={oAuth2LoginButton} onClick={googleAuthHandleClick}> <FcGoogle /> </button>
            <button css={oAuth2LoginButton} onClick={naverAuthHandleClick}> 네 </button>
            <button css={oAuth2LoginButton} onClick={kakaoAuthHandleClick}> 카 </button>
        </div>
    );
};

export default Login;
