import styled from 'styled-components';

const Title = styled.h1`
  color: #0070f3;
  font-size: 2.5rem;
`;


export default function Home() {
    return (
      <div>
        <Title>Welcome to the English version of the site!</Title>
      </div>
    );
  }