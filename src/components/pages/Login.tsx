import { memo, VFC, useState, ChangeEvent } from "react";
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";

import { PrimaryButton } from "../../components/atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState("");

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <form
          onSubmit={(e) => {
            onClickLogin();
          }}
        >
          <Stack spacing={6} px={10} py={4}>
            <Input
              placeholder="ユーザーID"
              value={userId}
              onChange={onChangeUserId}
            />
            <PrimaryButton
              disabled={userId === ""}
              isLoading={loading}
              onClick={onClickLogin}
            >
              ログイン
            </PrimaryButton>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
});
