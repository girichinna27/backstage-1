/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { FC, useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { Page, pageTheme, Content, Header, HeaderLabel } from '@backstage/core';
import 'graphiql/graphiql.css';
import GraphiQL from 'graphiql';

const tabs = [
  {
    title: 'GitLab',
    fetcher: async (params: any) => {
      const res = await fetch('https://gitlab.com/api/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      });
      return res.json();
    },
  },
  {
    title: 'Countries',
    fetcher: async (params: any) => {
      const res = await fetch('https://countries.trevorblades.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      });
      return res.json();
    },
  },
];

export const GraphiQLPage: FC<{}> = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Page theme={pageTheme.tool}>
      <Header title="GraphiQL">
        <HeaderLabel label="Owner" value="Spotify" />
        <HeaderLabel label="Lifecycle" value="Alpha" />
      </Header>
      <Content noPadding>
        <Tabs value={tabIndex} onChange={(_, value) => setTabIndex(value)}>
          {tabs.map(({ title }, index) => (
            <Tab key={index} label={title} value={index} />
          ))}
        </Tabs>
        <GraphiQL key={tabIndex} fetcher={tabs[tabIndex].fetcher} />
      </Content>
    </Page>
  );
};
