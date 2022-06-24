import styled from 'styled-components';
import { useState } from 'react';
import Button from './Button';
import Month_pannel from './Month pannel';
import Table from './Table';
import Div from './Div';

const H1 = styled.h1`
  margin-left: 10px;
`
const All_app = styled.div`
  max-width: 740px;
  min-width: 320px;
  margin: auto;
`;

function App() {
  
  let [date, set_date] = useState(new Date());
  let [interviews, set_interview] = useState([])
  let [deleting_meeting, set_deleting_meeting] = useState(null)

  const set_today = () => {
    set_date(new Date());
  };

  const Delet_meeting = (e) => {
    
    interviews.splice(deleting_meeting, 1);
    set_deleting_meeting(null);
    // set_interview([...interviews]); Почему-то это не пригодилось.
  };

	function Add_interview() {
		let time
    while (!(/\d\d\d\d-(0[1-9]|1[012])-([0-2]\d|3[01]) ([01]\d|2[0-4])/i.test(time))) {
      time = prompt("Enter event time:\nYYYY-MM-DD HH");
      if (time===null) break;
    }
    if (time===null) return;
    let meeting = [
      +time.slice(0, 4),
      time.slice(5, 7) - 1,
      +time.slice(8, 10),
      (time.slice(11) === "24") ? 0 : +time.slice(11) ,
    ];
    set_interview([...interviews, meeting]);
  }
  
  return (
    <All_app>
      <Div>
        <H1>Interview Calendar</H1>
        <Button content="+" func={Add_interview}/>
      </Div>
      <Month_pannel date={date} set_date={set_date}/>
      <Table date={date} interviews={interviews} set_deleting_meeting={set_deleting_meeting}/>
      <Div margin={"padding: 10px"}>
        <Button content="Today" func={set_today}/>
        <Button content="Delete" func={Delet_meeting} to_delet={deleting_meeting}/>
      </Div>
    </All_app>
  );
}

export default App;
