import styled from "styled-components";
import { rgba } from 'polished';

import highlightBackgroundImg from '../../../../assets/background-highlight.png'

export const HighlightContainer = styled.section`
  width: 100%;
  height: 34rem;

  background: ${({ theme }) => `url(${highlightBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HighlightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 3.5rem;
`;

export const HighlightTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.textSizes[`title-title-xl`]};
  font-weight: 800;
  color: ${({ theme }) => theme.colors["base-title"]};

  line-height: 130%;

  margin-bottom: 1rem;
`;

export const HighlightText = styled.h3`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors["base-subtitle"]};

  line-height: 130%;
`;

export const BenefitsContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;

  margin-top: 4.125rem;
`;