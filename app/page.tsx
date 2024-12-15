'use client';
import React from "react";
import Container from "@/components/layout/container";

interface DefaultProps {
  children?: React.ReactNode;
}

const Page: React.FC<DefaultProps> = ({ children }) => {
  return (
    <Container>
      <ul>
        <li>
          <a href="/study1">1. useReducer の使い方</a>
        </li>
      </ul>
    </Container>
  );
}

export default Page;
