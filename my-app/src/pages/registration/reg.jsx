import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./registration";
import { useEffect, useState } from "react";
import { logUser, regUser, tokenUser } from "../../api/api";
import { Context } from "../../routes";


export default function Registration({isLoginMode}) {
  const {setToken} = useContext(Context)
  const {setUser} = useContext(Context)

  const navigate = useNavigate();
  
  const[isDisabled, setDisabled] = useState(false)
  const [error, setError] = useState(null);
  const[userName, setUserName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");


  const handleRegister = async ({ email, password, userName }) => {
    console.log(isDisabled);
    if (!userName) {
      setError('Укажите имя');
      return;
    }
    if (!email) {
      setError('Укажите почту');
      return;
    }
    if (!password) {
      setError('Укажите пароль');
      return;
    }
    if (password !== repeatPassword) {
      setError('Пароли не совпадают');
      return;
    }
    if (password.length < 6) {
      setError('Пароль короткий');
      console.log(password.length);
      return;
    }
    try {
      const user = await regUser(email, password, userName);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      setDisabled(true);
      const token = await tokenUser(email, password);
      localStorage.setItem("token", JSON.stringify(token));
      setToken(token);
      navigate('/', { replace: true });
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    } finally {
      setDisabled(false);
    }
  };


  const handleLogin = async ({ email, password }) => {
    if (!email) {
      setError('Укажите почту');
      return;
    }
    if (!password) {
      setError('Укажите пароль');
      return;
    }
    try {
      setDisabled(true);
       const token = await tokenUser(email, password)
      localStorage.setItem("token", JSON.stringify(token))
      setToken(token)
      const response = await logUser(email, password);
      localStorage.setItem('user', JSON.stringify(response));
      setUser(response)
      navigate('/', { replace: true });
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setDisabled(false);
    }
  };

  

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage  src="/img/logo_modal.png" alt="logo" />
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
              <S.PrimaryButton disabled={isDisabled} onClick={() => handleLogin({email, password})}>
               {isDisabled ? "Выполняю вход" : "Вход"}
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
            <S.ModalInput
                type="text"
                name="name"
                placeholder="Имя"
                value={userName}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
              <S.ModalInput
                type="text"
                name="email"
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
              <S.PrimaryButton onClick={() => handleRegister({email, password, userName})} disabled={isDisabled}>
                {isDisabled ? "Регистрирую..." : "Регистрация"}
              </S.PrimaryButton>
              <Link to="/login">
              <S.SecondaryButton>Войти</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}