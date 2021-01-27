// import React framework
import React from "react";
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

import Illustration from "@kiwicom/orbit-components/lib/Illustration";

// import Orbit icons
// list of all icons on: https://kiwicom.github.io/orbit-components/?path=/story/icon--list-of-all-icons
import GenderWoman from "@kiwicom/orbit-components/lib/icons/GenderWoman";
import Check from "@kiwicom/orbit-components/lib/icons/Check";
import ChevronRight from "@kiwicom/orbit-components/lib/icons/ChevronRight";
import ContactEmail from "@kiwicom/orbit-components/lib/icons/ContactEmail";
import Entertainment from "@kiwicom/orbit-components/lib/icons/Entertainment";
import Map from "@kiwicom/orbit-components/lib/icons/Map";
import Phone from "@kiwicom/orbit-components/lib/icons/Phone";

function App() {
  return (
    <div
      style={{
        width: "100%",
        margin: 0,
        backgroundColor: defaultTokens.paletteCloudLight,
      }}
    >
      <div
        style={{
          padding: defaultTokens.spaceMedium, // 16px
          maxWidth: "750px",
          margin: "0 auto",
        }}
      >
        <Stack align="center" direction="column" spacing="compact">
          <About />
          <Skills />
          <Work />
          <Education />
          <Licenses />
          <Volunteer />
        </Stack>
      </div>
    </div>
  );
}

export default App;
