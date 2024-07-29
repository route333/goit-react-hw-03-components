import Profile from './Profile/Profile';
import user from '../../src/user';
import friends from '../../src/friends';
import Statistics from './Statistics/Statistics';
import stats from '../../src/stats';
import FriendList from './FriendList/FriendList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload Stats" stats={stats} />

      <FriendList friends={friends} />
    </div>
  );
};
