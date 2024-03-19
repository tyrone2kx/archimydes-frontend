
import { handleError } from "../../utils";
import useLoading from "../../utils/useLoading/useLoading";
import { toast } from "react-toastify";
import { httpClient } from "../../api";

const useDeleteUser = () => {
  const loader = useLoading();

  const deleteUser = async (id: string, callback?: (id: string) => void) => {
    loader.startLoading();
    try {
      await httpClient.delete(`/user/${id}`);
      callback?.(id);
      toast.success("User deleted successfully")
    } catch (error) {
      handleError(error);
    } finally {
      loader.stopLoading();
    }
  };

  return {
    deleteUser,
    loading: loader.loading,
  };
};

export default useDeleteUser;
