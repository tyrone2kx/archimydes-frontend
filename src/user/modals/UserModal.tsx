import React from "react";
import Modal from "../../components/Modal";
import { User } from "../../utils/interfaces";
import FormInput from "../../components/FormInput/FormInput";
import { Form, Formik } from "formik";
import FormSelect from "../../components/FormSelect";
import { RolesEnum } from "../../utils/enums";
import Button from "../../components/Button";
import useAddUser from "../hooks/useAddUser";
import useEditUser from "../hooks/useEditUser";
import * as Yup from "yup";

interface Props {
  user?: User;
  isOpen?: boolean;
  onClose: () => void;
  onCreateUser: (user: User) => void;
  onEditUser: (user: User) => void;
}

const UserModal: React.FC<Props> = ({
  user,
  isOpen,
  onClose,
  onCreateUser,
  onEditUser,
}) => {
  const createHandler = useAddUser();
  const editHandler = useEditUser();

  const callback = (data: User) => {
    if (user) {
      onEditUser(data);
    } else {
      onCreateUser(data);
    }
    onClose();
  };

  const closeModal = () => {
    if (!(createHandler.loading || editHandler.loading)) {
      onClose();
    }
  };

  return (
    <Modal
      title={user ? "Edit User" : "Create User"}
      isOpen={isOpen}
      onClose={closeModal}
    >
      <div>
        <Formik
          initialValues={{
            name: user?.name || "",
            email: user?.email || "",
            role: user?.role,
          }}
          onSubmit={(values) => {
            if (user) {
              editHandler.editUser(
                { ...values, id: user.id, email: values.email.toLowerCase() },
                callback
              );
            } else {
              createHandler.addNewUser(
                { ...values, email: values.email.toLowerCase() },
                callback
              );
            }
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Please enter your full name"),
            email: Yup.string()
              .email("Please enter a valid email address")
              .required("Please enter your email."),
            role: Yup.string()
              .oneOf(Object.values(RolesEnum), "Please select a valid role")
              .required("Please select a role"),
          })}
        >
          {() => (
            <Form>
              <FormInput name="name" label="Name" />
              <FormInput name="email" label="Email" />
              <FormSelect
                name="role"
                label="Role"
                placeholder="Select role"
                options={Object.keys(RolesEnum).map((item) => ({
                  label: item,
                  value: item.toLowerCase(),
                }))}
              />

              <div
                className="p-4 flex items-center justify-center"
                onClick={closeModal}
              >
                <p className="text-[#333333] text-xs font-semibold cursor-pointer">
                  Cancel
                </p>
              </div>
              <Button
                label={user ? "Update User" : "Create User"}
                className="w-full"
                isLoading={createHandler.loading || editHandler.loading}
                type="submit"
              />
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default UserModal;
