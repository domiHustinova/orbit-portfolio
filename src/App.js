// import React framework
import React from "react";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";

// import Orbit defaultTokens (for colors, etc.)
// list of all tokens on: https://orbit.kiwi/design-tokens
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

// import Orbit components
// list of all components on: https://orbit.kiwi/components and https://kiwicom.github.io/orbit-components/?path=/story
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import Button from "@kiwicom/orbit-components/lib/Button";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Card, {
  CardHeader,
  CardSection,
  CardSectionHeader,
  CardSectionContent,
} from "@kiwicom/orbit-components/lib/Card";

import Illustration from "@kiwicom/orbit-components/lib/Illustration";

// import Orbit icons
// list of all icons on: https://kiwicom.github.io/orbit-components/?path=/story/icon--list-of-all-icons
import GenderWoman from "@kiwicom/orbit-components/lib/icons/GenderWoman";
import Check from "@kiwicom/orbit-components/lib/icons/Check";
import ChevronRight from "@kiwicom/orbit-components/lib/icons/ChevronRight";
import InformationCircle from "@kiwicom/orbit-components/lib/icons/InformationCircle";
import ContactEmail from "@kiwicom/orbit-components/lib/icons/ContactEmail";
import Entertainment from "@kiwicom/orbit-components/lib/icons/Entertainment";
import InsuranceConfirmed from "@kiwicom/orbit-components/lib/icons/InsuranceConfirmed";
import Map from "@kiwicom/orbit-components/lib/icons/Map";
import Phone from "@kiwicom/orbit-components/lib/icons/Phone";
import Email from "@kiwicom/orbit-components/lib/icons/Email";
import Linkedin from "@kiwicom/orbit-components/lib/icons/Linkedin";
import Trip from "@kiwicom/orbit-components/lib/icons/Trip";
import Code from "@kiwicom/orbit-components/lib/icons/Code";

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
          <Card>
            <CardHeader icon={<InformationCircle />} title="ABOUT ME" />
            <CardSection>
              <Stack direction="column">
                <Stack justify="center" direction="row" spacing="compact">
                  <Button
                    iconLeft={<Email />}
                    circled
                    size="small"
                    type="primary"
                    href="mailto:domi.hustinova@gmail.com"
                  />
                  <Button
                    iconLeft={<Linkedin />}
                    circled
                    external
                    size="small"
                    type="warning"
                    href="https://www.linkedin.com/in/dominika-hustinova/"
                  />
                  <Button
                    iconLeft={<Code />}
                    circled
                    external
                    size="small"
                    type="critical"
                    href="https://github.com/domiHustinova"
                  />
                </Stack>
                <Text></Text>
              </Stack>
            </CardSection>
          </Card>

          <Skills />
          <Work />
          <Education />

          <Card>
            <CardHeader
              title="Licenses & Certifications"
              icon={<InsuranceConfirmed />}
            />

            <CardSection>
              <CardSectionHeader>
                <Stack direction="row" align="center" justify="between">
                  <Stack direction="column" spacing="tight" grow={false} shrink>
                    <Heading element="h4" type="title4">
                      JavaScript 2
                    </Heading>
                    <Text type="secondary" size="small">
                      Czechitas
                    </Text>
                  </Stack>
                  <Stack>
                    <Text type="secondary" size="small" align="right">
                      Issued 05/2019
                    </Text>
                  </Stack>
                </Stack>
              </CardSectionHeader>
              {/*</CardSection>*/}

              {/*<CardSection>*/}
              <CardSectionHeader>
                <Stack direction="row" align="center" justify="between">
                  <Stack direction="column" spacing="tight" grow={false} shrink>
                    <Heading element="h4" type="title4">
                      JavaScript 1
                    </Heading>
                    <Text type="secondary" size="small">
                      Czechitas
                    </Text>
                  </Stack>
                  <Stack>
                    <Text type="secondary" size="small" align="right">
                      Issued 12/2018
                    </Text>
                  </Stack>
                </Stack>
              </CardSectionHeader>
            </CardSection>
          </Card>

          <Card>
            <CardHeader title="Volunteer Experience" icon={<Trip />} />

            <CardSection expandable>
              <CardSectionHeader>
                <Stack direction="row" align="center" justify="between">
                  <Stack direction="column" spacing="tight" grow={false} shrink>
                    <Heading element="h4" type="title4">
                      Workshop Instructor
                    </Heading>
                    <Text type="secondary" size="small">
                      Forum on Women in Tech
                    </Text>
                  </Stack>
                  <Stack>
                    <Text type="secondary" size="small" align="right">
                      06/2018
                    </Text>
                  </Stack>
                </Stack>
              </CardSectionHeader>
              <CardSectionContent>
                <Stack direction="column">
                  <Text type="secondary">
                    I was co-instructor of workshop called Marshmallow Towers.
                    The main aim of the workshop was to show participants how to
                    communicate better in a team.
                  </Text>
                  <TextLink
                    href="https://www.womenintech.cz"
                    external
                    type="secondary"
                  >
                    Women In Tech
                  </TextLink>
                </Stack>
              </CardSectionContent>
            </CardSection>
          </Card>
        </Stack>
      </div>
    </div>
  );
}

export default App;
