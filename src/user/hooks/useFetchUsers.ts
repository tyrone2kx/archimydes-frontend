import { useCallback, useEffect, useState } from "react";
import useLoading from "../../utils/useLoading/useLoading";
import { User } from "../../utils/interfaces";
import { handleError, returnUpdatedList } from "../../utils";
import { httpClient } from "../../api";

const useFetchUsers = () => {
  const loader = useLoading();
  const [users, setUsers] = useState<User[]>([]);

  const onAddNewUserCallback = useCallback(
    (user: User) => setUsers((prev) => [...prev, user]),
    []
  );

  const onDeleteUser = useCallback(
    (id: string) => setUsers((prev) => prev.filter((user) => user.id !== id)),
    []
  );

  const onEditUser = useCallback(
    (user: User) => {
      const newList = returnUpdatedList(user, users, "id");
      setUsers([...newList]);
    },
    [users]
  );

  const fetchUsers = useCallback(async () => {
    loader.startLoading();
    try {
      const { data } = await httpClient.get<User[]>("/user");
      setUsers(data);
    } catch (error) {
      handleError(error);
    } finally {
      loader.stopLoading();
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return {
    users,
    loading: loader.loading,
    onAddNewUserCallback,
    onDeleteUser,
    onEditUser,
    setUsers
  };
};

export default useFetchUsers;
