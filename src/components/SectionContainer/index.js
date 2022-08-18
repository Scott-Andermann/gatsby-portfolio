import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledSection = styled(motion.section)`
  width: 1000px;
  padding: 100px 0px;
  position: relative;
  margin-bottom: 10.5em;
`;

const SectionContainer = ({ children }) => {
  return (
    <StyledSection
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: '-150px 0px 0px 0px', once: true }}
    >
      {children}
    </StyledSection>
  );
};

export default SectionContainer;
