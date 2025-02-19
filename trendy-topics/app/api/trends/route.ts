import { NextResponse } from 'next/server'
 
type GoogleTrendsAPI = {
    realTimeTrends: (options: {
        geo: string;
        hl?: string;
        category: number
        timezone?: number;
    }) => Promise<string>;
}

const googleTrends: GoogleTrendsAPI = require('google-trends-api')

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const {geo, category} = body
        
        const results = await googleTrends.realTimeTrends({
            geo: geo,
            hl: 'en',
            category: category,
        })
        
        return NextResponse.json(results)
    } catch (error) {
        console.error('Error:', error)
        return NextResponse.json(
            { message: 'Error processing request' },
            { status: 500 }
        )
    }
}