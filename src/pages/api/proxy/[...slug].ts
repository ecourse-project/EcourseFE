import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import globalVariable from 'src/lib/config/env';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  // Construct full path with query string
  const pathname = slug instanceof Array ? slug.join('/') : slug;
  const queryString = req.url?.split('?')[1] || '';
  const targetUrl = `${globalVariable.API_URL}${pathname}${queryString ? '?' + queryString : ''}`;

  try {
    const axiosResponse = await axios.request({
      method: req.method,
      url: targetUrl,
      timeout: 30000, // 30 seconds
      headers: {
        ...req.headers,
        host: undefined, // prevent host mismatch
      },
      data: ['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method || '') ? req.body : undefined,
      withCredentials: true,
    });

    // Forward response
    res.status(axiosResponse.status).send(axiosResponse.data);
  } catch (error: any) {
    const status = error.response?.status || 500;
    const message = error.response?.data || { error: 'Proxy failed' };

    console.error('Proxy error:', message);
    res.status(status).json(message);
  }
}
