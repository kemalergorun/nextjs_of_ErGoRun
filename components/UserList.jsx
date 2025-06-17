import { getUsers } from "@/services/get-users";

export default async function UserList() {
  const users = await getUsers();

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}>{user.username}</div>
      ))}
    </div>
  );
}
