import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import styles from "./Register.module.css";
import { FormEvent, useEffect } from "react";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { register, userActions } from "../../store/user.slice";

export type RegisterForm = {
  email: { value: string };
  password: { value: string };
  name: { value: string };
};

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { jwt, registerErrorMessage } = useSelector(
    (state: RootState) => state.user,
  );

  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [jwt, navigate]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    dispatch(userActions.clearRegisterError());
    const target = event.target as typeof event.target & RegisterForm;
    const { email, password, name } = target;
    dispatch(
      register({
        email: email.value,
        password: password.value,
        name: name.value,
      }),
    );
  };

  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [jwt, navigate]);

  return (
    <div className={styles["register"]} onSubmit={submit}>
      <Header>Регистрация</Header>
      {registerErrorMessage && (
        <div className={styles["error"]}>{registerErrorMessage}</div>
      )}
      <form className={styles["form"]}>
        <div className={styles["field"]}>
          <label htmlFor="email">Ваш Еmail</label>
          <Input id="email" type="email" name="email" placeholder="Email" />
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
        <div className={styles["field"]}>
          <label htmlFor="name">Ваше имя</label>
          <Input id="name" name="name" placeholder="Имя" />
        </div>
        <Button appearence="big">Зарегистрироваться</Button>
      </form>

      <div className={styles["links"]}>
        <div>Есть аккаунт?</div>
        <Link to="/auth/login">Войти</Link>
      </div>
    </div>
  );
};

export default Register;
