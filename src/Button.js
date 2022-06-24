import styled from 'styled-components';

const Butto = styled.button`
	background-color: rgba( 0, 0, 0, 0 );
	border: 0px;
	color: red;
	font-size: ${props => props.font_size };
	visibility: ${props => props.show };
`;

function Button({content, func, to_delet}) {
  
	var Button_function = () => func();
	let font_size = "20px";
	let show = "visible";

	switch(content) {
    case "<":
      Button_function = () => func(-1);
			break
    case ">":
      Button_function = () => func(+1);
			break
    case "Delete":
			show = (to_delet || to_delet === 0) ? "visible" : "hidden";
			break
		default:
			font_size = (content === "+") ? "50px" : "20px";
	}

  return (
    <Butto onClick={Button_function} font_size={font_size} show={show}>
      <b>{content}</b>
    </Butto>
  );
}

export default Button;
