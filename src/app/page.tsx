'use client';
import Image from "next/image";
import * as S from "./styles";

export default function Home() {
  return (
    <S.MainContainer>
      <S.ContentWrapper>
        <S.ImageWrapper>
          <Image
            src="/people-holding-flag.png"
            alt="Pessoas segurando uma bandeira"
            layout="responsive"
            width={500}
            height={500}
          />
        </S.ImageWrapper>
        <S.TextWrapper>
          <h1>Estamos felizes em te receber na Lacrei Saúde!</h1>
          <p>
            Na Lacrei Saúde, nosso compromisso é oferecer cuidado de saúde
            acessível e de qualidade para todos. Acreditamos que a saúde deve
            ser inclusiva, e trabalhamos incansavelmente para garantir que
            nossos serviços atendam a todas as necessidades da nossa comunidade,
            respeitando e valorizando as diferenças. acessível e de qualidade
            para todos.
          </p>
          <p>
            Nossa missão é promover o bem-estar de nossos pacientes com um
            atendimento humanizado, acolhedor e eficiente. Contamos com uma
            equipe de profissionais altamente capacitados, preparados para
            oferecer as melhores soluções em saúde, desde consultas de rotina
            até cuidados especializados.
          </p>
        </S.TextWrapper>
      </S.ContentWrapper>
    </S.MainContainer>
  );
}
