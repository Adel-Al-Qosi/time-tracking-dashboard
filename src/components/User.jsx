import userPhoto from "../images/image-jeremy.png";

function User({setTimeframe}) {
  return (
    <div className="user">
      <nav className="user-time-nav">
        <ul className="user--timeframe">
          <li onClick={() => setTimeframe('daily')}>Daily</li>
          <li onClick={() => setTimeframe('weekly')}>Weekly</li>
          <li onClick={() => setTimeframe('monthly')}>Monthly</li>
        </ul>
      </nav>
      <div className="user-info bg-primary">
        <img src={userPhoto} alt="user-photo" />
        <div>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
    </div>
  );
}

export default User;
