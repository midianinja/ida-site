import React, { useContext } from 'react';
import Store from '../../../store/Store';
import Header from '../../organisms/header/header';
import Footer from '../../organisms/footer/footer';
import style from './terms.module.scss';

const Terms = () => {
  const { state } = useContext(Store);

  return (
    <>
      <Header
        onSignin={() => {
          if (state.idaSDK) state.idaSDK.signinWithPopup();
        }}
        onSignup={() => {
          if (state.idaSDK) state.idaSDK.signupWithPopup();
        }}
      />
      <div className={style.container}>
        <section className={style.about}>
          <h1 className={style.title}>Termos de uso e Políticas de privacidade</h1>
          <p className={style.paragraph}>
            Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Quem num gosta di mé, boa gentis num é. Viva Forevis aptent taciti sociosqu ad litora torquent.
          </p>
          <p className={style.paragraph}>
            Diuretics paradis num copo é motivis de denguis. Quem manda na minha terra sou euzis! Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Leite de capivaris, leite de mula manquis sem cabeça.
          </p>
          <p className={style.paragraph}>
            Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Leite de capivaris, leite de mula manquis sem cabeça. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.
          </p>
          <p className={style.paragraph}>
            Diuretics paradis num copo é motivis de denguis. Quem manda na minha terra sou euzis! Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Leite de capivaris, leite de mula manquis sem cabeça.
          </p>
          <p className={style.paragraph}>
            Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Quem num gosta di mé, boa gentis num é. Viva Forevis aptent taciti sociosqu ad litora torquent.
          </p>
        </section>
      </div>
      <Footer theme="white" />
    </>
  );
};

export default Terms;
