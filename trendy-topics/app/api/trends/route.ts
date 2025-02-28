import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log("API route /api/trends received a request");
    
    // Log the request headers
    console.log("Request headers:", Object.fromEntries(request.headers.entries()));
    
    const body = await request.json();
    console.log("Request body received:", body);
    
    // Log what we're about to send to the backend
    console.log("Sending to backend:", {
      geo: body.geo || 'united_states'
    });
    
    // Send JSON data to match what your frontend is sending
    const response = await fetch('http://localhost:5000/api/trending', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        geo: body.geo || 'united_states'
      }),
    });
   
    console.log("Backend response status:", response.status);
    
    if (!response.ok) {
      throw new Error(`Backend error: ${response.status}`);
    }
   
    const data = await response.json();
    console.log("Backend response data:", data);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch trends data' },
      { status: 500 }
    );
  }
}