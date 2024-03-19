import useLoading from "../../utils/useLoading/useLoading";
import { User } from "../../utils/interfaces";
import { handleError } from "../../utils";
import { toast } from "react-toastify";
import { httpClient } from "../../api";

const useAddUser = () => {
  const loader = useLoading();

  const addNewUser = async (
    user: Omit<User, "id">,
    callback?: (user: User) => void
  ) => {
    loader.startLoading();
    try {
      const { data } = await httpClient.post<User>("/user", user);
      callback?.(data);
      toast.success("User added successfully")
    } catch (error) {
      handleError(error);
    } finally {
      loader.stopLoading();
    }
  };

  return {
    addNewUser,
    loading: loader.loading,
  };
};

export default useAddUser;
