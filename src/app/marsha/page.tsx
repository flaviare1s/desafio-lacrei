'use client';
import Image from "next/image";
import * as S from "./styles";

export default function SobreMarsha() {
  return (
    <S.MainContainer>
      <S.ContentWrapper>
        <S.ImageWrapper>
          <Image
            src="/marsha.jpg"
            alt="Pessoas segurando uma bandeira"
            layout="responsive"
            width={500}
            height={500}
          />
        </S.ImageWrapper>
        <S.TextWrapper>
          <h1>Por que a Marsha é tão importante?</h1>
          <p>
            Há 50 anos, <strong>Marsha P. Johnson</strong> estava na linh de
            frente da Rebelião de Stonewall Inn, um marco crucial para os
            direitos dos homossexuais e transexuais, ocorrido em 28 de junho de
            1969 em Nova York. Esse confronto com a polícia, iniciado por uma
            batida no bar Stonewall Inn, desencadeou uma onda de protestos
            devido à constante discriminação e perseguição enfrentadas pela
            comunidade LGBTQIAPN+.
          </p>
          <p>
            A importância desses eventos é tão significativa que junho foi
            designado como o mês do Orgulho LGBTQIAPN+.
          </p>
        </S.TextWrapper>
      </S.ContentWrapper>
    </S.MainContainer>
  );
}
