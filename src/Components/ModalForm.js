import { useState } from "react";
import Alert from "./Alert";

const ModalForm = ({
  clearModal,
  onFormSubmit,
  editUserDetail,
  updateUser,
}) => {
  const [alert, setAlert] = useState(null);
  const [state, setState] = useState({
    id: editUserDetail.id ? editUserDetail.id : "",
    nameField: editUserDetail.nameField ? editUserDetail.nameField : "",
    email: editUserDetail.email ? editUserDetail.email : "",
    select: editUserDetail.select ? editUserDetail.select : "",
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  const setAlertFn = (msg, type) => {
    setAlert({ msg: msg, type: type });
    // setTimeout(()=>setAlert(null),3000);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    // console.log(state);
    const { nameField, email, select } = state;
    if (nameField === "" || email === "" || select === "") {
      setAlertFn("Field is required", "danger");
    } else {
      editUserDetail ? updateUser(state) : onFormSubmit(state);
      // onFormSubmit(state);
    }
  };

  const closeAlertFn = () => {
    setAlert(null);
  };
  return (
    <div className="modal">
      <Alert alert={alert} closeAlert={closeAlertFn} />
      <form onSubmit={onSubmitForm}>
        <div className="form-control">
          <label htmlFor="name">NAME</label>
          <input
            type="text"
            id="name"
            name="nameField"
            value={state.nameField}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>ROLE</label>
          <select value={state.select} onChange={handleChange} name="select">
            <option value=""></option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <p
          style={{ textAlign: "center", cursor: "pointer" }}
          onClick={clearModal}
        >
          Cancel
        </p>
        <button className="btn btn-block">
          {editUserDetail ? "Update user" : "Create User"}
        </button>
      </form>
    </div>
  );
};

export default ModalForm;
