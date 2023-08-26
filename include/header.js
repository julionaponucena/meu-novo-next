import Image from 'next/image';
import style from '../styles/modulos/header.module.css';

function Header() {
  return (
    <header className={style.Header}>
      <div className={style.cabecalho}>
        <Image
          className={style.logo}
          src="/logo-mente.png"
          width={90}
          height={90}
          alt="logo do site"
          loading="eager"
          priority={true}
        />

        <h1 className={style.titulo}>estauramente</h1>
      </div>
      <div className={style.RedesSociais}>
        <a
          className={style.redeLink}
          target="_blank"
          rel="norrefer external noreferrer"
          href="https://www.instagram.com/aparecidoalcantarapsicanalista/"
        >
          <Image
            src="/Instagram-Icon.png"
            width={40}
            height={40}
            alt="ícone do instagram"
            loading="eager"
            priority={true}
          />
        </a>
        <a
          className={style.redeLink}
          target="_blank"
          rel="norrefer external noreferrer"
          href="https://www.facebook.com/isaltosp"
        >
          <Image
            src="/facebook-icon.png"
            width={40}
            height={40}
            alt="ícone do facebook"
            loading="eager"
            priority={true}
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
