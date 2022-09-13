import React from 'react';
import styled from 'styled-components';

// styled components doc - https://styled-components.com/docs/api

const StyledButton = styled.button(
  // This can take props as well, which can be used to update style 
  // ex: ({ hovered })
  () => ({
      alignItems: 'center',
      display: 'flex',
      border: '1px solid #D1D1D1',
      color: '#242424',
      justifyContent: 'center',
      borderRadius: '4px',
      padding: '4px',
      width: '96px',
      height: '32px',
      background: 'white',
  })
)

const StyledButtonContainer = styled.div`
      align-items: flex-start;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      background: white;

      button {
        margin-right: 10px;
      }
`

const ThumbnailCard = () => {
  return (
    <div style={
      {
        border: '1px solid #EDEBE9', 
        borderTop: '2px solid #0078D7', 
        padding: 16,
        borderRadius: 2
      }}>
        <div>
            <div>
                <div>
                    <div></div>
                </div>
                <div>
                    Contoso
                </div>
                <div>
                    ...
                </div>
            </div>
            <div>
                <div>Thumbnail card</div>
                <div>With an optional subtitle</div>
            </div>
            <div>
                <p>
                    This is the body of the card, used to tell the user more
                    about the image above. This is an html block and can be edited.
                </p>
            </div>
            <StyledButtonContainer>
                <StyledButton>Button</StyledButton>
                <StyledButton>Button</StyledButton>
                <StyledButton>Button</StyledButton>
                <StyledButton>Button</StyledButton>
            </StyledButtonContainer>
        </div>
    </div>
  )
}

export default ThumbnailCard