import styled from 'styled-components';

const Title = styled.h1`
  color: #0070f3;
  font-size: 2.5rem;
`;


export default function Home() {
    return (
      <div>
        <Title>Hello, Next.js!</Title>
        <p>Welcome to your new Next.js project.</p>
      </div>
    );
  }