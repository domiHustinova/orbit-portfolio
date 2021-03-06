import React from "react";
import styled from "styled-components";

import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";
import Licenses from "./components/Licenses";
import Volunteer from "./components/Volunteer";

// import Orbit defaultTokens (for colors, etc.)
// list of all tokens on: https://orbit.kiwi/design-tokens
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

// import Orbit components
// list of all components on: https://orbit.kiwi/components and https://kiwicom.github.io/orbit-components/?path=/story
import Stack from "@kiwicom/orbit-components/lib/Stack";

const StyledWrapper = styled.div`
  width: 100%;
  margin: 0;
  background-color: ${defaultTokens.paletteCloudLight};
`;

const StyledDiv = styled.div`
  padding: ${defaultTokens.spaceMedium};
  max-width: 750px;
  margin: 0 auto;
`;

function App() {
  return (
    <StyledWrapper>
      <StyledDiv>
        <Stack align="center" direction="column" spacing="compact">
          <About />
          <Skills />
          <Work />
          <Education />
          <Licenses />
          <Volunteer />
        </Stack>
      </StyledDiv>
    </StyledWrapper>
  );
}

export default App;
