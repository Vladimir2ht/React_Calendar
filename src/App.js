import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Month_pannel from './Month pannel';
import Table from './Table';
import Div from './Div';

const H1 = styled.h1`
margin-left: 10px;
`
const All_app = styled.div`
  width: 740px;
  margin: auto;
`;

function App() {
  
  let [date, set_date] = useState(new Date());
  let [interviews, set_interview] = useState([])

  const set_today = () => {
    set_date(new Date());
  };

	function Add_interview() {
		let time
    while (!(/\d\d\d\d-(0[1-9]|1[012])-([0-2]\d|3[01]) ([01]\d|2[0-4])/i.test(time))) {
      time = prompt("Enter event time:\nYYYY-MM-DD HH");
      if (time===null) break;
      console.log(time);
    }
    if (time===null) return;
    let meeting = [
      +time.slice(0, 4),
      time.slice(5, 7) - 1,
      +time.slice(8, 10),
      (time.slice(11) === "24") ? 0 : +time.slice(11) ,
    ];
	  console.log(meeting);
    interviews.push(meeting);
    set_interview([...interviews]);
  }
  
  return (
    <All_app>
      <Div>
        <H1>Interview Calendar</H1>
        <Button content="+" func={Add_interview} type="right"/>
      </Div>
      <Month_pannel date={date} set_date={set_date}/>
      <Table date={date}/>
      <Div margin={"padding: 10px"}>
        <Button content="Today" func={set_today} type="today"/>
        <Button content="Delete" func={set_date} type="right"/>
      </Div>
    </All_app>
  );
}

export default App;
