import type { NextApiRequest, NextApiResponse } from 'next'

export const googleTrends = require('google-trends-api');


type ResponseData = {
    message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    res.status(200).json({message: "placeholder in api.ts"})
}