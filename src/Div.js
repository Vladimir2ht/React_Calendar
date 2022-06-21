import styled from 'styled-components';

const Div = styled.div`
  display: flex;
	justify-content: space-between;
	${props => props.margin}
`;

export default Div;