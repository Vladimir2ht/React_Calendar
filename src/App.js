import './App.css';
import { useState } from 'react';
import Button from './Button';
import Month_pannel from './Month pannel';
import Table from './Table';
import Div from './Div';

function App() {
  
  let [dates, set_dates] = useState({
    year: 6,
    month: 11,
    dates: []
  });

  const set_today = () => {
    let today = new Date();
		dates.year = today.getFullYear();
		dates.month = today.getMonth();
    console.log(dates);
    set_dates(dates => ({...dates}));
  };

  
  return (
    <div>
      <Div>
        <h1>Interview Calendar</h1>
        <Button content="+" func={set_dates} type="right"/>
      </Div>
      <Month_pannel dates={dates} set_dates={set_dates}/>
      <Table dates={dates}/>
      <Div>
        <Button content="Today" func={set_today} type="today"/>
        <Button content="Delete" func={set_dates} type="right"/>
      </Div>
    </div>
  );
}

export default App;
