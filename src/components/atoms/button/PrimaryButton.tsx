import { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, disabled = false, isLoading = false, onClick } = props;

  return (
    <Button
      bg="cyan.400"
      color="white"
      disabled={disabled || isLoading }
      isLoading={isLoading}
      _hover={{ opacity: 0.8 && ""}}
      onClick={onClick}
      type="submit"
    >
      {children}
    </Button>
  );
});
