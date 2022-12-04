import Activity from '../Activity';
import * as S from './styles';

export function ActivityList() {
  return (
    <S.Container>
      <S.ListContainer>
        <S.List>
          <Activity>
            <S.Text>Teste</S.Text>
          </Activity>
        </S.List>

        <S.Footer>
          <S.FooterContent>
            <span>5 items left</span>
          </S.FooterContent>

          <S.FooterContent>
            <S.Button active={true} weight='700'>
              All
            </S.Button>

            <S.Button weight='700'>
              Active
            </S.Button>

            <S.Button weight='700'>
              Completed
            </S.Button>
          </S.FooterContent>

          <S.FooterContent>
            <S.Button>
              Clear Completed
            </S.Button>
          </S.FooterContent>
        </S.Footer>
      </S.ListContainer>

    </S.Container>
  );
}
