import userPhoto from "../images/image-jeremy.png";

function User({ timeframe, setTimeframe }) {
  return (
    <div className="user">
      <nav className="user-time-nav">
        <ul className="user--timeframe fw-bolder">
          <li className={timeframe === 'daily' ? 'active' : ''} onClick={() => setTimeframe('daily')}>Daily</li>
          <li className={timeframe === 'weekly' ? 'active' : ''} onClick={() => setTimeframe('weekly')}>Weekly</li>
          <li className={timeframe === 'monthly' ? 'active' : ''} onClick={() => setTimeframe('monthly')}>Monthly</li>
        </ul>
      </nav>
      <div className="user-info">
        <img src={userPhoto} alt="User" />
        <div>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
    </div>
  );
}

export default User;
