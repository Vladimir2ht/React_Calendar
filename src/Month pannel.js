import styled from 'styled-components';
import Button from './Button';
import Div from './Div';
import Set_day from './Set day function';

const Li = styled.li`
display: inline-block;
padding: 10px;
width: 20px;
`;
const Ul = styled.ul`
position: relative;
top: 5px;
`;
const Pannel_font = styled.div`
background-color: #efefef;
`;
const Red_round = styled.div`
background-color: red;
border-radius: 50%;
color: white;
width: 30px;
height: 30px;
position: relative;
bottom: 7px;
right: 5px;
text-align: center;
`;
const Bold= styled.b`
position: relative;
top: 7px;
`;

const months = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'];

function Month_pannel({date, set_date}) {
	
	function Set_month(where) {
		date.setMonth(date.getMonth() + where);
		let date_copy = new Date(date);
		set_date(date_copy);
	}
	
	function Which_day(where) {
		date.setDate(date.getDate() + where);
		let date_copy = new Date(date)
		set_date(date_copy);
	}

  return (
    <Pannel_font>
      <Div >
        <Button content="<" func={Which_day} type="left"/>
        <Ul>
          {Set_day(date).map((day, i) => (day === date.getDate()) ? <Li key={i}><Red_round><Bold>{day}</Bold></Red_round></Li> : <Li key={i}><b>{day}</b></Li>
					
					)}
        </Ul>
        <Button content=">" func={Which_day} type="right"/>
      </Div>
      <Div margin={"padding-bottom: 3px"}>
        <Button content="<" func={Set_month} type="left"/>
        <b>{months[date.getMonth()]} {date.getFullYear()}</b>
        <Button content=">" func={Set_month} type="right"/>
      </Div>
    </Pannel_font>
)}

export default Month_pannel;
