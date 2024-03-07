import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import styles from "./Login.module.css";
import { FormEvent } from "react";

const Login = () => {
  const submit = (event: FormEvent) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div className={styles["login"]} onSubmit={submit}>
      <Header>Вход</Header>
      <form className={styles["form"]}>
        <div className={styles["field"]}>
          <label htmlFor="email">Ваш Еmail</label>
          <Input id="email" name="email" placeholder="Email" />
        </div>
        <div className={styles["field"]}>
          <label htmlFor="password">Ваш пароль</label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <Button appearence="big">Войти</Button>
      </form>

      <div className={styles["links"]}>
        <div>Нет аккаунта?</div>
        <Link to="/auth/register">Зарегистрироваться</Link>
      </div>
    </div>
  );
};

export default Login;
