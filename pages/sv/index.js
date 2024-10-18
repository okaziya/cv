import styled from 'styled-components';

const Title = styled.h1`
  color: #0070f3;
  font-size: 2.5rem;
`;

export default function Home() {

  return (
    <div>
      <Title>Välkommen till den svenska versionen av webbplatsen!</Title>
    </div>
  );
}
