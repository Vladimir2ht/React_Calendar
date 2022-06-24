import styled from 'styled-components';
import Button from './Button';
import Div from './Div';
import Set_day from './Set day function';

const Li = styled.li`
display: inline-block;
width: clamp(36px, calc(36 * (100vw / 440)), 55px);
position: relative;
`;
const Ul = styled.ul`
position: relative;
left: min(calc(36 * (100vw / 440)), 5%);
padding-inline-start: 0px;
`;
const Pannel_font = styled.div`
background-color: #efefef;
`;
const Red_round = styled.div`
--side: clamp(30px, calc(32 * (100vw / 550)), 40px);
width: var(--side);
height: var(--side);
background-color: red;
border-radius: 50%;
color: white;
position: absolute;
bottom: clamp(-13px, calc(12 * (100vw / 480)*-1), -10px);;
right: clamp(14px, calc(16 * (100vw / 440)), 20px);
text-align: center;
`;
const Bold= styled.b`
position: relative;
top: clamp(8px, calc(6 * (100vw / 440)), 10px);
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
        <Button content="<" func={Which_day}/>
        <Ul>
          {Set_day(date).map((day, i) => (day === date.getDate()) ? <Li key={i}>
						<Red_round><Bold>{day}</Bold></Red_round>
						</Li> : <Li key={i}><b>{day}</b></Li>
					)}
        </Ul>
        <Button content=">" func={Which_day}/>
      </Div>
      <Div margin={"padding-bottom: 3px"}>
        <Button content="<" func={Set_month}/>
        <b>{months[date.getMonth()]} {date.getFullYear()}</b>
        <Button content=">" func={Set_month}/>
      </Div>
    </Pannel_font>
)}

export default Month_pannel;
