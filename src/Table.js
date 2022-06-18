import styled from 'styled-components';
import { useState } from 'react';

const Thead = styled.thead`
	float: left;   
`;
const Th = styled.tr`
	display: block;
`;
const Tbody = styled.tbody`
	float: right;
`;

function Table({dates}) {

  let [interviews, set_interview] = useState([])

console.log(dates);
	return (
   	<table>
			<Thead>
				<Th><td>00:00</td></Th>
				<Th><td>01:00</td></Th>
				<Th><td>02:00</td></Th>
				<Th><td>03:00</td></Th>
				<Th><td>04:00</td></Th>
				<Th><td>05:00</td></Th>
				<Th><td>06:00</td></Th>
				<Th><td>07:00</td></Th>
				<Th><td>08:00</td></Th>
				<Th><td>09:00</td></Th>
				<Th><td>10:00</td></Th>
				<Th><td>11:00</td></Th>
				<Th><td>12:00</td></Th>
				<Th><td>13:00</td></Th>
				<Th><td>14:00</td></Th>
				<Th><td>15:00</td></Th>
				<Th><td>16:00</td></Th>
				<Th><td>17:00</td></Th>
				<Th><td>18:00</td></Th>
				<Th><td>19:00</td></Th>
				<Th><td>20:00</td></Th>
				<Th><td>21:00</td></Th>
				<Th><td>22:00</td></Th>
				<Th><td>23:00</td></Th>
			</Thead>
			<Tbody>
				<tr><td>1</td><td>4</td></tr>
				<tr><td>2</td></tr>
				<tr><td>3</td></tr>
				<tr><td>3</td></tr>
				<tr><td>3</td></tr>
				<tr><td>1</td><td>4</td></tr>
				<tr><td>2</td></tr>
				<tr><td>3</td></tr>
				<tr><td>3</td></tr>
				<tr><td>3</td></tr>
				<tr><td>1</td><td>4</td></tr>
				<tr><td>2</td></tr>
				<tr><td>3</td></tr>
				<tr><td>3</td></tr>
				<tr><td>3</td></tr>
				<tr><td>1</td><td>4</td></tr>
				<tr><td>2</td></tr>
				<tr><td>3</td></tr>
				<tr><td>3</td></tr>
				<tr><td>3</td></tr>
				<tr><td>1</td><td>4</td></tr>
				<tr><td>2</td></tr>
				<tr><td>3</td></tr>
				<tr><td>3</td></tr>
				
			</Tbody>
		</table>
  );
}

export default Table;
