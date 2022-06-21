import styled from 'styled-components';
import Set_day from './Set day function';

const Scroller = styled.div`
	height: 535px;
	overflow-y: scroll;
`;
const Tabl = styled.table`
	border-collapse: collapse;
	position: relative;
	left: 29px;
	`;
const Td = styled.td`
	width: 37px;
	height: 37px;
	background-color: white;
	border: 2px solid #dfdfdf;
`;
const Tdh = styled.td`

	height: 37px;
	padding: 0px 5px;
	text-align: center;
	background-color: white;
	border: 2px solid #dfdfdf;
`;

function Table({date}) {
	
	function Table_creator() {
		let content = [];
		for (let ind = 0; ind < 24; ind++) {
			content[ind] = <tr key={ind}><Tdh>{ind}:00</Tdh>{Set_day(date).map(day => <Td key={day}/>)}</tr>
		}
		return content;
	}

	return (
		<Scroller>
   	<Tabl>
			<tbody>
				{Table_creator()}
			</tbody>
		</Tabl>
		</Scroller>
  );
}

export default Table;
