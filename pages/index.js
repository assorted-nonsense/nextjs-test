import { useState, useEffect } from 'react';
import {
  SpaceBetween,
  ContentLayout,
  Header,
  Container,
  Table,
} from '@cloudscape-design/components';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data, error } = useSWR('/api/instances', fetcher);

  if (error) return 'An error has occurred.';
  if (!data) return 'Loading...';

  let instances = [];
  data.data.forEach((instance) => {
    instances.push({
      id: instance.Instances[0].InstanceId,
      type: instance.Instances[0].InstanceType,
      imageId: instance.Instances[0].ImageId,
    });
  });

  return (
    <ContentLayout
      header={
        <SpaceBetween size='m'>
          <Header>New Page</Header>
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
              id: 'id',
              header: 'Instance ID',
              cell: (item) => item.id || '-',
              sortingField: 'name',
            },
            {
              id: 'type',
              header: 'Instance Type',
              cell: (item) => item.type || '-',
              sortingField: 'alt',
            },
            {
              id: 'imageId',
              header: 'Image ID',
              cell: (item) => item.imageId || '-',
            },
          ]}
          items={instances.map((instance) => instance)}
          sortingDisabled
          header={<Header> Simple table </Header>}
        />
      </Container>
    </ContentLayout>
  );
};

export default Home;
