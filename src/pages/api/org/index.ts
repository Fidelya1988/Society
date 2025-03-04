import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import prisma from '@/lib/prisma';
import { authOptions } from '../auth/[...nextauth]';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions);
    console.log(10, session);

  if (!session) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  try {
    if (req.method === 'GET') {
      const organizations = await prisma.organization.findMany();
      return res.status(200).json(organizations);
    }

    if (req.method === 'POST') {
      const { name, description, ownerId } = req.body;
      if (!name) {
        return res.status(400).json({ error: 'Field name is required' });
      }

      const newOrg = await prisma.organization.create({
        data: {
          name,
          description: description || '',
          ownerId
        },
      });
      return res.status(201).json(newOrg);
    }

    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} is not allowed`);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
}
