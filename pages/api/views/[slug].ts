import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const slug = req.query.slug.toString();

    if (req.method === 'POST') {
      const newOrUpdatedViews = await prisma.view_counts.upsert({
        where: { slug },
        create: {
          slug,
        },
        update: {
          totalViews: {
            increment: 1,
          },
        },
      });

      return res.status(200).json({
        total: newOrUpdatedViews.totalViews.toString(),
      });
    }

    if (req.method === 'GET') {
      const views = await prisma.view_counts.findUnique({
        where: {
          slug,
        },
      });
      return res.status(200).json({ total: views.totalViews.toString() });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
