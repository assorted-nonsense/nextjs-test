import { EC2Client, DescribeInstancesCommand } from '@aws-sdk/client-ec2';
const config = {
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
};

const client = new EC2Client(config);

export default async function handler(req, res) {
  console.log('In instances function');
  try {
    const response = await client.send(new DescribeInstancesCommand({}));
    res.status(200).json({ data: response.Reservations });
  } catch (err) {
    console.log(err);
    res.status(503).json({ data: 'Error getting instances' });
  }
}
