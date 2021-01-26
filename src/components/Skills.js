import React from "react";

import Card, {
  CardHeader,
  CardSection,
} from "@kiwicom/orbit-components/lib/Card";
import Table, {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@kiwicom/orbit-components/lib/Table";
import Stack from "@kiwicom/orbit-components/lib/Stack";

import Chart from "@kiwicom/orbit-components/lib/icons/Chart";

const Skills = () => (
  <Card>
    <CardHeader icon={<Chart />} title="SKILLS" />
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
);

export default Skills;
