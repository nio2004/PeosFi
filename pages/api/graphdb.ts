import type { NextApiRequest, NextApiResponse } from 'next'
 import {useState, useEffect } from 'react';
 import { createClient } from 'urql';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const address = req.query.addr;
    // const address = '0xc154F382eEb60790a59844Ac5c699F6dC2DFb342';
    const QueryUrl = " https://api.studio.thegraph.com/query/69229/saveusers/v0.1"
    const client = createClient({
        url: QueryUrl
    })
    if (req.method === 'GET') {
        // Process a POST request
        const query = `{
            savedUsers(where: { walletAdd: "${address}" }, first: 1) {
              id
              walletAdd
              hash
              blockNumber
            }
          }`
        const { data } = await client.query(query, { address }).toPromise();
        console.log(data);
        return res.status(200).json(data);
  } else if(req.method === 'POST'){
    // Handle any other HTTP method


  }
}