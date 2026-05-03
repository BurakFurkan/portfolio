import React from "react";
import styled from "styled-components";

export default function TechnoItem({ name, src }) {
  return (
    <Card>
      <Logo src={src} alt={name} loading="lazy" />
      <Name>{name}</Name>
    </Card>
  );
}

const Card = styled.div`
  padding: 20px 12px;
  border: 1px solid ${(p) => p.theme.border_color};
  border-radius: 8px;
  background: ${(p) => p.theme.bg_card};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: default;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${(p) => p.theme.accent};
    background: ${(p) => p.theme.bg_card_hover};
    transform: translateY(-4px);
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 4px;
`;

const Name = styled.p`
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 500;
  color: ${(p) => p.theme.text_secondary};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;
