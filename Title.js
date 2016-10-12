import React from 'react';
import styled from 'styled-components';

let TitleContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: 'center';
  align-items: 'center';
`;

let Title = styled.Text`
  font-size: 17;
  letter-spacing: 0.5;
  color: #333;
  font-weight: 500;
`;

export default function TitleComponent(props) {
  if (props.tintColor) {
    Title = styled(Title)`
      color: ${props.tintColor};
    `;
  }

  return (
    <TitleContainer>
      <Title>{props.title}</Title>
    </TitleContainer>
  );
}

TitleComponent.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  tintColor: PropTypes.string,
  title: PropTypes.string,
};

TitleComponent.defaultProps = {
  style: {},
  title: '',
};
