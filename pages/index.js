import { useState, useEffect } from 'react';
import {
  SpaceBetween,
  ContentLayout,
  Header,
  Container,
  Table,
  Box,
  Button,
  Pagination,
  CollectionPreferences,
  TextFilter,
} from '@cloudscape-design/components';

const Home = ({ instances }) => {
  return (
    <ContentLayout
      header={
        <SpaceBetween size='m'>
          <Header>List EC3 Instances</Header>
        </SpaceBetween>
      }
    >
      <Container
        header={
          <Header variant='h2' description='Container description'>
            Container header
          </Header>
        }
      >
        <Table
          columnDefinitions={[
            {
              id: 'variable',
              header: 'Variable name',
              cell: (item) => item.name || '-',
              sortingField: 'name',
            },
            {
              id: 'alt',
              header: 'Text value',
              cell: (item) => item.alt || '-',
              sortingField: 'alt',
            },
            {
              id: 'description',
              header: 'Description',
              cell: (item) => item.description || '-',
            },
          ]}
          items={[
            {
              name: 'Item 1',
              alt: 'First',
              description: 'This is the first item',
              type: '1A',
              size: 'Small',
            },
            {
              name: 'Item 2',
              alt: 'Second',
              description: 'This is the second item',
              type: '1B',
              size: 'Large',
            },
            {
              name: 'Item 3',
              alt: 'Third',
              description: '-',
              type: '1A',
              size: 'Large',
            },
            {
              name: 'Item 4',
              alt: 'Fourth',
              description: 'This is the fourth item',
              type: '2A',
              size: 'Small',
            },
            {
              name: 'Item 5',
              alt: '-',
              description: 'This is the fifth item with a longer description',
              type: '2A',
              size: 'Large',
            },
            {
              name: 'Item 6',
              alt: 'Sixth',
              description: 'This is the sixth item',
              type: '1A',
              size: 'Small',
            },
          ]}
          loadingText='Loading resources'
          sortingDisabled
          empty={
            <Box textAlign='center' color='inherit'>
              <b>No resources</b>
              <Box padding={{ bottom: 's' }} variant='p' color='inherit'>
                No resources to display.
              </Box>
              <Button>Create resource</Button>
            </Box>
          }
          header={<Header> Simple table </Header>}
        />
      </Container>
    </ContentLayout>
  );
};

export async function getServerSideProps() {
  console.log('Getting Instances');
  const endpoint = '/api/instances';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(endpoint, options);
  const result = await response.json();
  return {
    props: {
      instances: results,
    },
  };
}

export default Home;
