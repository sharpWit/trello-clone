import styles from "./card.module.scss";

interface CardProps {
  title: string;
}

const Card = ({ title }: CardProps) => {
  return <div className={styles.cardBox}>{title}</div>;
};

export default Card;
