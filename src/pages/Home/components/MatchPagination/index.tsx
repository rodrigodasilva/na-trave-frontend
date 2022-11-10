import { ReactComponent as IconCaretLeft } from "@/assets/icons/caret_left.svg";
import { ReactComponent as IconCaretRight } from "@/assets/icons/caret_right.svg";
import Button from "@/components/Button";
import Spinner from "@/components/Spinner";
import Typography from "@/components/Typography";
import { formatDate, getNextDate, getPreviousDate } from "@/utils/dateUtils";

import * as S from "./styles";

interface MatchPaginationProps {
  onDateChange: (date: Date) => void;
  currentDate: Date | string;
  isLoading?: boolean;
}

export const MatchPagination: React.FC<MatchPaginationProps> = ({
  onDateChange,
  currentDate,
  isLoading,
}) => {
  function handlePreviousDate() {
    updateDate(getPreviousDate(currentDate));
  }

  function handleNextDate() {
    updateDate(getNextDate(currentDate));
  }

  function updateDate(newDate: Date) {
    onDateChange(newDate);
  }

  const formattedDateTitle = formatDate(currentDate, "DD[ de ]MMMM");

  return (
    <S.MatchPagination>
      {isLoading ? (
        <S.MatchPaginationLoadingWrapper>
          <Spinner className="mx-auto" />
        </S.MatchPaginationLoadingWrapper>
      ) : null}
      <Button variant="text" color="neutral" onClick={handlePreviousDate}>
        <IconCaretLeft width={24} />
      </Button>
      <Typography size="md" color="gray-700" weight="bold">
        {formattedDateTitle}
      </Typography>
      <Button variant="text" color="neutral" onClick={handleNextDate}>
        <IconCaretRight width={24} />
      </Button>
    </S.MatchPagination>
  );
};
