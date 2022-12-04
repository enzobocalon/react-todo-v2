import * as S from './styles';

import lightMode from '../../assets/icon-cross.svg';
import check from '../../assets/icon-check.svg';


interface Props {
  children: React.ReactNode,
  status?: number,
  borderRadius?: number
}

function Activity({children, status, borderRadius}: Props) {
  return (
    <S.Container borderRadius={borderRadius}>
      <S.IconBackground status={status === 1 ? true : false}>
        <S.Icon status={status === 1 ? true : false}>
          {
            status === 1 && (
              <img src={check} />
            )
          }
        </S.Icon>
      </S.IconBackground>
      <S.Content>
        {children}
      </S.Content>
    </S.Container>
  );
}

export default Activity;
