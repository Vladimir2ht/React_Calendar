import Button from './Button';
import styled from 'styled-components';
import Div from './Div';

const Li = styled.li`
display: inline-block;
`

let z = new Date();

function Month_pannel({dates, set_dates}) {
  

  let month = z.getMonth();
  let year = z.getFullYear();

	function Set_month(where) {
		let n = dates.month + where;
		z.setMonth(n);

		dates.year = z.getFullYear();
		dates.month = z.getMonth();
		console.log(dates);
		set_dates(dates => ({...dates}));
		console.log(dates);
	}

  // let z = new Date(2012, 1, 20,);
  // var date = new Date(z);

  // n = date.getDate() - n;
  // date.setDate(n) ;


  return (
    <div>
      <Div >
        <Button content="<" func={Set_month} type="left"/>
        <ul>
          <Li></Li>
        </ul>
        <Button content=">" func={Set_month} type="right"/>
      </Div>
      <Div >
        <Button content="<" func={Set_month} type="left"/>
        {dates.month} {dates.year}
        <Button content=">" func={Set_month} type="right"/>
      </Div>
    </div>
  );
}

export default Month_pannel;
