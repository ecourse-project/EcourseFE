import styled from '@emotion/styled';
import useCountDown from './hooks/useCountDown';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Hết giờ!!!</span>
    </div>
  );
};

const ShowCounter = ({ hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a href="https://tapasadhikary.com" target="_blank" rel="noopener noreferrer" className="countdown-link">
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={hours > 0} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={minutes > 0 && hours <= 0} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={seconds > 0 && minutes <= 0 && hours <= 0} />
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate, expired }) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);
  if (days + hours + minutes + seconds <= 0) {
    if (seconds === 0 && hours === 0 && minutes === 0 && hours === 0) expired(true);
    return (
      <CountDownStyled>
        <ExpiredNotice />
      </CountDownStyled>
    );
  } else {
    return (
      <CountDownStyled>
        <ShowCounter hours={hours} minutes={minutes} seconds={seconds} />
      </CountDownStyled>
    );
  }
};

export default CountdownTimer;

const CountDownStyled = styled.div`
  .expired-notice {
    text-align: center;
    padding: 2rem;
    border: 1px solid #ebebeb;
    border-radius: 0.25rem;
    margin: 0.5rem;
  }

  .expired-notice > span {
    font-size: 2.5rem;
    font-weight: bold;
    color: red;
  }

  .expired-notice > p {
    font-size: 1.5rem;
  }

  .show-counter {
    padding: 0.5rem;
  }

  .show-counter .countdown-link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.75rem;
    padding: 0.5rem;
    border: 1px solid #ebebeb;
    border-radius: 0.25rem;
    text-decoration: none;
    color: #000;
  }

  .show-counter .countdown {
    line-height: 1.25rem;
    padding: 0 0.75rem 0 0.75rem;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .show-counter .countdown.danger {
    color: #ff0000;
  }

  .show-counter .countdown > p {
    margin: 0;
  }

  .show-counter .countdown > span {
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;
