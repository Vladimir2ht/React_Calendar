import styled from 'styled-components';

const Butto = styled.button`
	background-color: rgba( 0, 0, 0, 0 );
	border: 0px;
	color: red;
	font-size: ${props => props.font_size };
`;

function Button({content, func, type}) {
  
	var Button_function;

	switch(type) {
    case "left":
      Button_function = () => func(-1);
			break
    case "right":
      Button_function = () => func(+1);
			break
		default:
      Button_function = () => func();
	}

	let font_size = (content === "+") ? "50px" : "20px";

  return (
    <Butto onClick={Button_function} font_size={font_size}>
      <b>{content}</b>
    </Butto>
  );
}

export default Button;
