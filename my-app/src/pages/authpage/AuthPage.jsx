import React from 'react';
import { Link } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useEffect, useState } from "react";
import { useUserContext } from "../../context/user";
import { getToken, loginUser, registerUser } from "../../api";

export default function AuthPage({ isLoginMode = false }) {
  const {login} = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = async ({ email, password }) => {
    setIsLoading(true);
    setError("");
    
    if (!email) {
      setError("Укажите почту");
      setIsLoading(false);
      return;
    }
  
    if (!password) {
      setError("Укажите пароль");
      setIsLoading(false);
      return;
    }

    const user = await loginUser({
      email: email,
      password: password,
    });

    if (user.error) {
      setError("Пользователь с таким email или паролем не найден");
    } else {
      setEmail(user.email);
      login(email);
      getToken( {email, password}).then((res) => {
        localStorage.setItem('token', JSON.stringify(res))
      })
    }

    setIsLoading(false);
  };

  const handleRegister = async ({ email, password, username }) => {
    setIsLoading(true);
    setError("");

    if (!username) {
      setError("Укажите имя");
      setIsLoading(false);
      return;
    }

    if (!email) {
      setError("Укажите почту");
      setIsLoading(false);
      return;
    }

    if (!password) {
      setError("Укажите пароль");
      setIsLoading(false);
      return;
    }

    if (!repeatPassword) {
      setError("Укажите повторный пароль");
      setIsLoading(false);
      return;
    }

    if (password !== repeatPassword) {
      setError("Пароли не совпадают");
      setIsLoading(false);
      return;
    }
    
    const user = await registerUser({
      email: email, 
      password: password, 
      username: username,
    });
    console.log(user);

    if (user.error) {
      let text = "";
      if (user.username){
        text += user.username.join(" ");
      }
      if (user.email){
        text += user.email.join(" ");
      }
      if (user.password){
        text += user.password.join(" ");
      }
      setError(text ? text : "Неизвестная ошибка регистрации");
    } else {
      setEmail(user.email);
      login(email);
      getToken({email, password}).then((res) => {
        localStorage.setItem('token', JSON.stringify(res))
      })
    }

    setIsLoading(false);
  };

  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={isLoading} onClick={() => handleLogin({ email, password })}>
                {isLoading ? "Загрузка...": "Войти"}
              </S.PrimaryButton>
              <Link to="/registration">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
            <S.ModalInput
                type="text"
                name="username"
                placeholder="Имя пользователя"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={isLoading} onClick={() => handleRegister({ email, password, username })}>
              {isLoading ? "Регистрация..." : "Зарегистрироваться"}
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}