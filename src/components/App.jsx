import { Profile } from './Profile/Profile';
import user from '../json/user.json';

export const App = () => {
  return (
    <div className='container'>
      <Profile   username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>
    </div>
  );
};
