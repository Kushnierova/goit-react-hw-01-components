import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../json/user.json';
import data from '../json/data.json';

export const App = () => {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
