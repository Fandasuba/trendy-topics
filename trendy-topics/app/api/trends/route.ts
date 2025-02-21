import { NextResponse } from 'next/server'

interface TrendOptions {
    geo: string;
    hl?: string;
    category?: string;
    timezone?: number;
}

interface GoogleTrendsAPI {
    realTimeTrends(options: TrendOptions): Promise<string>;
}

const googleTrends = require('google-trends-api-429-fix') as GoogleTrendsAPI

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const {geo, category} = body

        // Validate inputs
        if (!geo) {
            return NextResponse.json(
                { message: 'Geographic location (geo) is required' },
                { status: 400 }
            )
        }

        const results = await googleTrends.realTimeTrends({
            geo: geo.toUpperCase(), // Ensure geo code is uppercase
            hl: 'en',
            category: category || 'all',
            timezone: -new Date().getTimezoneOffset() // Add timezone offset
        })

        // The API returns a string that needs to be parsed
        try {
            const parsedResults = JSON.parse(results)
            return NextResponse.json(parsedResults)
        } catch {
            // If parsing fails, return the raw results
            return NextResponse.json(results)
        }

    } catch (error: any) {
        console.error('Error details:', error)
        return NextResponse.json(
            { 
                message: 'Error processing request',
                error: error.message 
            },
            { status: 500 }
        )
    }
}