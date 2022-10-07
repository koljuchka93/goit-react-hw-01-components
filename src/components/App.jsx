import { User } from "./User";
import user from '../user.json'

export const App = () => {
  return (
  <div>
    <User user={user[0]} />
  </div>
  );
};
