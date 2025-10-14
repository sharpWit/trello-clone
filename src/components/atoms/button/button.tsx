import styles from "./button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children }: Readonly<ButtonProps>) => {
  return <button className={styles.btn}>{children}</button>;
};

export default Button;
