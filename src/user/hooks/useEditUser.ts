import useLoading from "../../utils/useLoading/useLoading";
import { User } from "../../utils/interfaces";
import { handleError } from "../../utils";
import { toast } from "react-toastify";
import { httpClient } from "../../api";

const useEditUser = () => {
  const loader = useLoading();

  const editUser = async (user: User, callback?: (user: User) => void) => {
    loader.startLoading();
    try {
      const { name, email, role } = user;
      await httpClient.patch<User>(`/user/${user.id}`, { name, email, role });
      callback?.(user);
      toast.success("User updated successfully")
    } catch (error) {
      handleError(error);
    } finally {
      loader.stopLoading();
    }
  };

  return {
    editUser,
    loading: loader.loading,
  };
};

export default useEditUser;
