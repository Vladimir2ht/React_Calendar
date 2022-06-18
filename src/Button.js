import styled from 'styled-components';

const Butto = styled.button`
	background-color: rgba( 0, 0, 0, 0 );
	border: 0px;
	color: orange;
	font-size: 20px;
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
		case "today":
      Button_function = () => func();
			break
	}


  return (
    <Butto onClick={Button_function}>
      {content}
    </Butto>
  );
}

export default Button;
