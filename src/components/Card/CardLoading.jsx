import {
  SCards,
  SCardsItem,
  SCardsCard,
  SCardGroup,
  SCardThemeEmpty,
  SCardContent,
  SCardTitleEmpty,
  SCardDateEmpty,
  SCardBtnEmpty,
} from "./Card.styled";

const CardLoading = ({ cardId }) => {
  return (
    <SCards key={cardId}>
      <SCardsItem>
        <SCardsCard>
          <SCardGroup>
            <SCardThemeEmpty></SCardThemeEmpty>
            <SCardBtnEmpty></SCardBtnEmpty>
          </SCardGroup>
          <SCardContent>
            <SCardTitleEmpty></SCardTitleEmpty>
            <SCardDateEmpty></SCardDateEmpty>
          </SCardContent>
        </SCardsCard>
      </SCardsItem>
    </SCards>
  );
};

export default CardLoading;
