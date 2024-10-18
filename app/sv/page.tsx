import React from 'react';
import Link from 'next/link';
// import styled from 'styled-components';

// const Title = styled.h1`
//   color: #0070f3;
//   font-size: 2.5rem;
// `;

export default function Home() {

  return (
    <div>
      <h1>Välkommen till den svenska versionen av webbplatsen!</h1>
      <Link href="/en">Switch to English</Link>
    </div>
  );
}
