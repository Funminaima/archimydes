import { useState } from "react";
import Header from "./Components/Header";
import Users from "./Components/Users";
import ModalForm from "./Components/ModalForm";
import Backdrop from "./Components/Backdrop";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [usersData, setUsersData] = useState([
    {
      id: 1,
      nameField: "Adeleke Naheemah",
      email: "a@yahoo.com",
      select: "Admin",
    },
    {
      id: 2,
      nameField: "William chuku",
      email: "willie@yahoo.com",
      select: "user",
    },
  ]);

  const onModalOpen = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const createNewUser = (user) => {
    //create an id for user
    const id = Math.floor(Math.random() * 1000) + 1;

    const newUser = { id, ...user };
    console.log(newUser);

    setUsersData([...usersData, newUser]);
    setOpenModal(false);
    // console.log(usersData);
    // alert("success");
  };

  const deleteUserFn = (id) => {
    setUsersData(
      usersData.filter((user) => {
        return user.id !== id;
      })
    );
  };

  const editUserFn = (user) => {
    setOpenModal(true);
    console.log(user);
    // const selectedUser = usersData.find((user) => user.id === id);
    // console.log(selectedUser);
    // setUsersData(selectedUser.nameField);
    setEditUser(user);
  };

  const updateUserFunction = (user, index) => {
    let modifiedData = usersData.map((userItem, index) => {
      if (userItem.id === user.id) {
        console.log(userItem.id);
        console.log(user.id);
        return user;
      }
      return userItem;
    });
    console.log(user);
    console.log(usersData);

    setUsersData(modifiedData);
    setOpenModal(false);
  };

  return (
    <div className="container">
      <Header title="Users" modalOpen={onModalOpen} />

      {usersData.length > 0 ? (
        <Users
          users={usersData}
          deleteUser={deleteUserFn}
          editUser={editUserFn}
        />
      ) : (
        "No User Available"
      )}

      {openModal ? (
        <ModalForm
          clearModal={closeModal}
          onFormSubmit={createNewUser}
          editUserDetail={editUser}
          updateUser={updateUserFunction}
        />
      ) : null}
      {openModal ? <Backdrop onClick={closeModal} /> : null}
    </div>
  );
}

export default App;
