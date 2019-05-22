// import React framework
import React from 'react';

// import Orbit defaultTokens (for colors, etc.)
// list of all tokens on: https://orbit.kiwi/design-tokens
import {defaultTokens} from '@kiwicom/orbit-design-tokens';

// import Orbit components
// list of all components on: https://orbit.kiwi/components and https://kiwicom.github.io/orbit-components/?path=/story
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Text from '@kiwicom/orbit-components/lib/Text';
import TextLink from '@kiwicom/orbit-components/lib/TextLink';
import Button from '@kiwicom/orbit-components/lib/Button';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Card, {
    CardHeader,
    CardSection,
    CardSectionHeader,
    CardSectionContent
} from '@kiwicom/orbit-components/lib/Card';
import Badge from '@kiwicom/orbit-components/lib/Badge';
import Table, {
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@kiwicom/orbit-components/lib/Table';
import List, {ListItem} from '@kiwicom/orbit-components/lib/List';

import Illustration from "@kiwicom/orbit-components/lib/Illustration";

// import Orbit icons
// list of all icons on: https://kiwicom.github.io/orbit-components/?path=/story/icon--list-of-all-icons
import GenderWoman from '@kiwicom/orbit-components/lib/icons/GenderWoman';
import Chart from '@kiwicom/orbit-components/lib/icons/Chart';
import Check from '@kiwicom/orbit-components/lib/icons/Check';
import ChevronRight from '@kiwicom/orbit-components/lib/icons/ChevronRight';
import City from '@kiwicom/orbit-components/lib/icons/City';
import InformationCircle from '@kiwicom/orbit-components/lib/icons/InformationCircle';
import Sightseeing from '@kiwicom/orbit-components/lib/icons/Sightseeing';
import ContactEmail from '@kiwicom/orbit-components/lib/icons/ContactEmail';
import Entertainment from '@kiwicom/orbit-components/lib/icons/Entertainment';
import InsuranceConfirmed from '@kiwicom/orbit-components/lib/icons/InsuranceConfirmed';
import Map from '@kiwicom/orbit-components/lib/icons/Map';
import Phone from '@kiwicom/orbit-components/lib/icons/Phone';
import PriorityBoarding from '@kiwicom/orbit-components/lib/icons/PriorityBoarding';
import Email from '@kiwicom/orbit-components/lib/icons/Email';
import Linkedin from '@kiwicom/orbit-components/lib/icons/Linkedin';
import Trip from '@kiwicom/orbit-components/lib/icons/Trip';
import Code from '@kiwicom/orbit-components/lib/icons/Code';

function App() {
    return (
        <div
            style={{
                width: '100%',
                margin: 0,
                backgroundColor: defaultTokens.paletteCloudLight
            }}
        >
            <div
                style={{
                    padding: defaultTokens.spaceMedium, // 16px
                    maxWidth: '750px',
                    margin: '0 auto'
                }}
            >
                <Stack align='center' direction='column' spacing='compact'>
                    <Card>
                        <CardHeader icon={<InformationCircle/>} title='ABOUT ME'/>
                        <CardSection>
                            <Stack direction='column'>
                                <Stack justify='center' direction='row' spacing='compact'>
                                    <Button
                                        iconLeft={<Email/>}
                                        circled
                                        size='small'
                                        type='primary'
                                        href='mailto:domi.hustinova@gmail.com'
                                    />
                                    <Button
                                        iconLeft={<Linkedin/>}
                                        circled
                                        external
                                        size='small'
                                        type='warning'
                                        href='https://www.linkedin.com/in/dominika-hustinova/'
                                    />
                                    <Button
                                        iconLeft={<Code/>}
                                        circled
                                        external
                                        size='small'
                                        type='critical'
                                        href='https://github.com/domiHustinova'
                                    />
                                </Stack>
                                <Text>

                                </Text>
                            </Stack>
                        </CardSection>
                    </Card>

                    <Card>
                        <CardHeader icon={<Chart/>} title="SKILLS"/>
                        <CardSection>
                            <Stack direction="row" spacing="comfy">
                                <Table compact>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Language</TableCell>
                                            <TableCell>Level</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Slovak</TableCell>
                                            <TableCell>Native</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>English</TableCell>
                                            <TableCell>C1</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>French</TableCell>
                                            <TableCell>A2</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Stack>
                        </CardSection>
                    </Card>

                    <Card>
                        <CardHeader title="Work Experience" icon={<City/>}/>
                        <CardSection expandable initialExpanded>
                            <CardSectionHeader>
                                <Stack direction="row" align="center" justify="between">
                                    <Stack direction="column" spacing="tight" grow={false} shrink>
                                        <Heading element="h4" type="title4">
                                            QA Tester
                                        </Heading>
                                        <Text type="secondary" size="small">
                                            Kiwi.com
                                        </Text>
                                    </Stack>
                                    <Stack>
                                        <Text type="secondary" size="small" align="right">
                                            02/2018 - Present
                                        </Text>
                                    </Stack>
                                </Stack>
                            </CardSectionHeader>
                            <CardSectionContent>
                                <Stack direction='column'>
                                    <List
                                        size="normal"
                                        type="secondary"
                                        spaceAfter={null}
                                    >
                                        <ListItem icon={<PriorityBoarding/>}>
                                            Manual and automated testing of our website
                                        </ListItem>
                                        <ListItem icon={<PriorityBoarding/>}>
                                            Creating test scenarios, tracking bugs
                                        </ListItem>
                                        <ListItem icon={<PriorityBoarding/>}>
                                            Close cooperation with developers, product managers and other departments
                                        </ListItem>
                                        <ListItem icon={<PriorityBoarding/>}>
                                            Providing and managing internal technical support for our Customer Support
                                            department - including solving or outsourcing various technical issues
                                            related to the functionality of our product, creating schedule, taking care
                                            of documentation and communication with other departments to improve the
                                            processes
                                        </ListItem>
                                    </List>
                                    <Stack direction="row" spacing="condensed" wrap>
                                        <Badge type="success">Gitlab</Badge>
                                        <Badge type="success">Cypress</Badge>
                                        <Badge type="success">Jira</Badge>
                                        <Badge type="success">Webstorm</Badge>
                                        <Badge type="success">Git</Badge>
                                    </Stack>
                                </Stack>
                            </CardSectionContent>
                        </CardSection>
                        <CardSection expandable>
                            <CardSectionHeader>
                                <Stack direction="row" align="center" justify="between">
                                    <Stack direction="column" spacing="tight" grow={false} shrink>
                                        <Heading element="h4" type="title4">
                                            Booking Agent, Travel Consultant
                                        </Heading>
                                        <Text type="secondary" size="small">
                                            Kiwi.com
                                        </Text>
                                    </Stack>
                                    <Stack>
                                        <Text type="secondary" size="small" align="right">
                                            08/2016 - 01/2018
                                        </Text>
                                    </Stack>
                                </Stack>
                            </CardSectionHeader>
                            <CardSectionContent>
                                <Stack direction='column'>
                                    <Text type='secondary'>
                                        I worked at this position as a part timer while still studying.
                                        I was responsible for complex processing of all tasks connected
                                        to incoming orders from customers. I handled both inbound and outbound
                                        communication with customers, airlines or partners and all their order
                                        related inquiries. I worked independently but also cooperated with the
                                        colleagues.
                                    </Text>
                                    <Stack direction="row" spacing="condensed" wrap>
                                        <Badge type="success">Communication</Badge>
                                        <Badge type="success">Customer Service</Badge>
                                    </Stack>
                                </Stack>
                            </CardSectionContent>
                        </CardSection>
                    </Card>

                    <Card>
                        <CardHeader title="Education" icon={<Sightseeing/>}/>

                        <CardSection expandable>
                            <CardSectionHeader>
                                <Stack direction="row" align="center" justify="center">
                                    <Stack direction="column" spacing="tight" grow={false} shrink>
                                        <Heading element="h4" type="title4">
                                            Mathematical And Statistical Methods
                                        </Heading>
                                        <Text type="secondary" size="small">
                                            Master's Degree,
                                            Masaryk University
                                        </Text>
                                    </Stack>
                                    <Stack>
                                        <Text type="secondary" size="small" align="right">
                                            09/2016 - 01/2019
                                        </Text>
                                    </Stack>
                                </Stack>
                            </CardSectionHeader>
                            <CardSectionContent>

                                <Stack direction="row" spacing="condensed" wrap>
                                    <Badge type="info">
                                        Dean's Award for Outstanding Study Results
                                    </Badge>
                                    <Badge type="success">Excel</Badge>
                                    <Badge type="success">VBA</Badge>
                                    <Badge type="success">SQL</Badge>
                                    <Badge type="success">Statistica</Badge>
                                    <Badge type="success">Econometrics</Badge>
                                    <Badge type="success">Data Analysis</Badge>
                                </Stack>
                            </CardSectionContent>
                        </CardSection>

                        <CardSection expandable>
                            <CardSectionHeader>
                                <Stack direction="row" align="center" justify="center">
                                    <Stack direction="column" spacing="tight" grow={false} shrink>
                                        <Heading element="h4" type="title4">
                                            Applied Mathematics and Economics
                                        </Heading>
                                        <Text type="secondary" size="small">
                                            Bachelor's Degree,
                                            Masaryk University
                                        </Text>
                                    </Stack>
                                    <Stack>
                                        <Text type="secondary" size="small" align="right">
                                            09/2013 - 06/2016
                                        </Text>
                                    </Stack>
                                </Stack>
                            </CardSectionHeader>
                            <CardSectionContent>

                                <Stack direction="row" spacing="condensed" wrap>
                                    <Badge type="info">
                                        Dean's Award for Excellent Bachelor's Thesis
                                    </Badge>
                                    <Badge type="success">Matlab</Badge>
                                    <Badge type="success">RStudio</Badge>
                                    <Badge type="success">LaTeX</Badge>
                                    <Badge type="success">Gretl</Badge>
                                </Stack>
                            </CardSectionContent>
                        </CardSection>
                    </Card>

                    <Card>
                        <CardHeader title="Licenses & Certifications" icon={<InsuranceConfirmed/>}/>

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
                        <CardHeader title="Volunteer Experience" icon={<Trip/>}/>

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
                                <Stack direction='column'>
                                    <Text type='secondary'>
                                        I was co-instructor of workshop called Marshmallow Towers.
                                        The main aim of the workshop was to show participants how to communicate better
                                        in a team.
                                    </Text>
                                    <TextLink
                                        href='https://www.womenintech.cz'
                                        external
                                        type='secondary'
                                    >
                                        Women In Tech</TextLink>
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












