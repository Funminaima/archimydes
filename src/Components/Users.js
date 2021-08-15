import TableRow from "./TableRow";

const Users = ({ users, deleteUser, editUser }) => {
  return (
    <div>
      <table className="users" style={{ align: "left" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>
              Email <i className="fa fa-caret-down fa-1x"></i>
            </th>
            <th>
              Role <i className="fa fa-caret-down fa-1x"></i>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <TableRow
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                editUser={editUser}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
