import React, { useCallback, useState } from "react";
import Button from "../components/Button";
import UserModal from "./modals/UserModal";
import useDisclosure from "../utils/useDisclosure/useDisclosure";
import { ChevronIcon, DeleteIcon, PlusIcon } from "../assets/icons";
import { User } from "../utils/interfaces";
import useFetchUsers from "./hooks/useFetchUsers";
import EmptyState from "../components/EmptyState/EmptyState";
import Loader from "../components/Loader/Loader";
import useDeleteUser from "./hooks/useDeleteUser";
import LoaderIcon from "../components/Loader/LoaderIcon";

const thClassName = "p-4 md:p-6 uppercase text-gray-500 text-xs text-left";
const tdClassName = "p-4 md:p-6 text-sm font-bold capitalize";

type Sorters = {
  email: "asc" | "dsc";
  role: "asc" | "dsc";
};

interface FilterIconProps {
  onClick: () => void;
  isAsc?: boolean;
}

const FilterIcon: React.FC<FilterIconProps> = ({ onClick, isAsc }) => (
  <span
    onClick={onClick}
    className={`cursor-pointer`}
    style={{
      rotate: isAsc ? "360deg" : "180deg",
      transition: ".1s ease-in-out",
    }}
  >
    <div className="rotate-90">
      <ChevronIcon width={14} height={14} />
    </div>
  </span>
);

const UsersTable = () => {
  const userHandler = useFetchUsers();
  const {users} = userHandler;
  const deleteUserHandler = useDeleteUser();

  const [activeUser, setActiveUser] = useState<User | undefined>(undefined);
  const modalHandler = useDisclosure();

  const onClose = () => {
    modalHandler.onClose();
    setActiveUser(undefined);
  };

  const onOpen = (user: User) => {
    setActiveUser(user);
    modalHandler.onOpen();
  };

  const [sorters, setSorters] = useState<Sorters>({
    email: "dsc",
    role: "dsc",
  });

  const handleSort = (key: keyof Sorters) => {
    setSorters((prev) => ({
      ...prev,
      [key]: prev[key] === "asc" ? "dsc" : "asc",
    }))
    if (key === "email") {
      userHandler.setUsers([...users.sort(emailSorter)])
    }
    else {
      userHandler.setUsers([...users.sort(roleSorter)])
    }
  }

  const emailSorter = useCallback(
    (a, b) => {
      return sorters.email === "asc"
        ? a.email.localeCompare(b.email)
        : b.email.localeCompare(a.email);
    },
    [sorters]
  );

  const roleSorter = useCallback(
    (a, b) => {
      return sorters.role === "asc"
        ? a.role.localeCompare(b.role)
        : b.role.localeCompare(a.role);
    },
    [sorters]
  );


  return (
    <>
      <section>
        <div className="flex justify-between items-center space-x-2">
          <h2 className="font-semibold">Users</h2>
          <Button
            icon={<PlusIcon size={10} />}
            label="Create User"
            onClick={modalHandler.onOpen}
          />
        </div>

        <div className="mt-6 bg-white border border-gray-200 rounded w-full overflow-auto">
          {userHandler.loading ? (
            <Loader />
          ) : users.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr>
                  <th className={thClassName}>Name</th>
                  <th className={thClassName}>
                    <div className="flex items-center space-x-2">
                      <p>Email</p>

                      <FilterIcon
                        onClick={() => handleSort("email")}
                        isAsc={sorters.email === "asc"}
                      />
                    </div>
                  </th>
                  <th className={thClassName}>
                    <div className="flex items-center space-x-2">
                      <p>Role</p>
                      <FilterIcon
                        onClick={() => handleSort("role")}
                        isAsc={sorters.role === "asc"}
                      />
                    </div>
                  </th>
                  <th className={thClassName}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-t">
                    <td
                      className={`${tdClassName} cursor-pointer`}
                      onClick={() => onOpen(user)}
                    >
                      {user.name}
                    </td>
                    <td className={`p-4 md:p-6 text-sm font-bold`}>
                      {user.email.toLowerCase()}
                    </td>
                    <td className={tdClassName}>{user.role}</td>
                    <td className={tdClassName}>
                      {deleteUserHandler.loading &&
                      activeUser?.id === user.id ? (
                        <LoaderIcon />
                      ) : (
                        <div
                          className="cursor-pointer"
                          onClick={() =>
                            deleteUserHandler.deleteUser(
                              user.id,
                              userHandler.onDeleteUser
                            )
                          }
                        >
                          <DeleteIcon />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <EmptyState
              title="No User"
              description="No user exists on the system. Click to add."
              buttonText="Create User"
              onClick={() => {
                setActiveUser(undefined);
                modalHandler.onOpen();
              }}
            />
          )}
        </div>
      </section>

      <UserModal
        isOpen={modalHandler.isOpen}
        onClose={onClose}
        user={activeUser}
        onCreateUser={userHandler.onAddNewUserCallback}
        onEditUser={userHandler.onEditUser}
      />
    </>
  );
};

export default UsersTable;
