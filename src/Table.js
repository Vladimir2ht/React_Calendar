import styled from 'styled-components';
import Set_day from './Set day function';

const Scroller = styled.div`
	height: 60vh;
	overflow-y: scroll;
	display: flex;
  justify-content: center;
`;
const Tabl = styled.table`
	border-collapse: collapse;
	`;
const Td = styled.td`
	--side: clamp(32px, calc(32 * (100vw / 440)), 50px);
	width: var(--side);
	height: var(--side);
	border: 2px solid #dfdfdf;
`;
const Td_alt = styled.td`
	--side: clamp(32px, calc(32 * (100vw / 440)), 50px);
	width: var(--side);
	height: var(--side);
	border: 2px solid #dfdfdf;
	background-color: #d5d1ff;
	&:focus {
		background-color: #7c73ff;
	}
	`;
const Tdh = styled.td`
	padding: 0px 5px;
	text-align: center;
	border: 2px solid #dfdfdf;
`;

function Table({date, interviews, set_deleting_meeting}) {
	
	function Tdz({index}){
		var Func;
		Func = () => {set_deleting_meeting(index)};
		return (
		<Td_alt onClick={Func} tabIndex="0"/>
		);
	}

	function Table_creator() {
		let times = [];
		times = interviews.reduce((result, meeting, index) => {
			if (meeting[0] === date.getFullYear() && meeting[1] === date.getMonth()) {
				return [...result, [meeting[2], meeting[3], index]];
			}
			return result;
		}, [])
		let content = [];
		for (let ind = 0; ind < 24; ind++) {
			content[ind] = <tr key={ind}><Tdh>{ind}:00</Tdh>
				{Set_day(date).map(day => { 
					for (let elem of times) {
						if (elem[0] === day && elem[1] === ind) {
							return (<Tdz key={day} index={elem[2]}/>)	
						} 
					}
					return (<Td key={day}/>)
				})}
			</tr>
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
