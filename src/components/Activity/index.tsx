import * as S from './styles';

import lightMode from '../../assets/icon-cross.svg';


interface Props {
  children: React.ReactNode
}

function Activity({children}: Props) {
  return (
    <S.Container>
      <S.Icon>
        {/* Conditional Rendering to render check and cross */}
      </S.Icon>
      <S.Content>
        {children}
      </S.Content>
    </S.Container>
  );
}

export default Activity;
