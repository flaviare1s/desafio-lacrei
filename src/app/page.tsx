"use client";
import Image from "next/image";
import * as S from "./styles";
import { Button } from "../components/Button";

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
            respeitando e valorizando as diferenças.
          </p>
          <p>
            Nossa missão é promover o bem-estar de nossos pacientes com um
            atendimento humanizado, acolhedor e eficiente. Contamos com uma
            equipe de profissionais altamente capacitados, preparados para
            oferecer as melhores soluções em saúde, desde consultas de rotina
            até cuidados especializados.
          </p>

          {/* Botões com links externos */}
          <div>
            <Button
              href="https://lacreisaude.com.br/"
              title="Visite o nosso site"
            >
              Site
            </Button>
            <Button
              href="https://lacreisaude.com.br/termos-de-uso/"
              title="Leia os termos de uso"
            >
              Termos
            </Button>
            <Button
              href="https://lacreisaude.com.br/politica-de-privacidade/"
              title="Leia a política de privacidade"
            >
              Política
            </Button>
          </div>
        </S.TextWrapper>
      </S.ContentWrapper>
    </S.MainContainer>
  );
}
