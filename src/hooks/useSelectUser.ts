import { useCallback, useState } from "react";

import { User } from "../typs/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

export const useSelectUser = () => {
  const [selectedUser, setselectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setselectedUser(targetUser!);
    onOpen();
  }, []);

  return { onSelectUser, selectedUser };
};
