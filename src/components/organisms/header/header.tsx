import Image from "next/image";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <div></div>
        <div className={styles.logo}>
          <Image src="/images/logo.svg" alt="Logo" width={160} height={50} />
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
