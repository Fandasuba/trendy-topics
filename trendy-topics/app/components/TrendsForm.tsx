'use client'
import React, { useEffect, useState } from "react"

export default function TrendsForm() {
  const [name, setName] = useState<string>("")
  const [country, setCountry] = useState<string>("")
  const [trendingResults, setTrendingResults] = useState<string[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
  
    try {
      const response = await fetch('/api/trends', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Ensure this header is correct
        },
        body: JSON.stringify({
          geo: country || 'united_states',  // Default to 'united_states' if country is empty
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      setTrendingResults(data.trending);
      console.log('Trends data:', data.trending);
    } catch (error) {
      console.error('Error fetching trends:', error);
      setError('Failed to load trending data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md p-8 border border-zinc-200">
        <div className="mb-8">
          <label className="block text-black text-lg font-serif mb-2">Your Byline</label>
          <input
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-2 border-zinc-300 p-3 focus:border-black focus:ring-1 focus:ring-black font-serif text-black"
          />
        </div>

        {/* Preferences section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-serif font-bold text-black border-b-2 border-black pb-2">
            Edition Preferences
          </h2>

          {/* Country selection */}
          <div className="mb-6">
            <label className="block text-black text-lg font-serif mb-2">Regional Edition</label>
            <select 
              name="selectedCountry"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border-2 border-zinc-300 p-3 focus:border-black focus:ring-1 focus:ring-black font-serif text-black bg-white"
            >
                <option value="">Please select your country...</option>
                <option value="argentina">Argentina</option>
                <option value="australia">Australia</option>
                <option value="austria">Austria</option>
                <option value="belgium">Belgium</option>
                <option value="brazil">Brazil</option>
                <option value="canada">Canada</option>
                <option value="chile">Chile</option>
                <option value="colombia">Colombia</option>
                <option value="czech_republic">Czech Republic</option>
                <option value="denmark">Denmark</option>
                <option value="egypt">Egypt</option>
                <option value="finland">Finland</option>
                <option value="france">France</option>
                <option value="germany">Germany</option>
                <option value="greece">Greece</option>
                <option value="hong_kong">Hong Kong</option>
                <option value="hungary">Hungary</option>
                <option value="india">India</option>
                <option value="indonesia">Indonesia</option>
                <option value="ireland">Ireland</option>
                <option value="israel">Israel</option>
                <option value="italy">Italy</option>
                <option value="japan">Japan</option>
                <option value="kenya">Kenya</option>
                <option value="malaysia">Malaysia</option>
                <option value="mexico">Mexico</option>
                <option value="netherlands">Netherlands</option>
                <option value="new_zealand">New Zealand</option>
                <option value="nigeria">Nigeria</option>
                <option value="norway">Norway</option>
                <option value="philippines">Philippines</option>
                <option value="poland">Poland</option>
                <option value="portugal">Portugal</option>
                <option value="romania">Romania</option>
                <option value="russia">Russia</option>
                <option value="saudi_arabia">Saudi Arabia</option>
                <option value="singapore">Singapore</option>
                <option value="south_africa">South Africa</option>
                <option value="south_korea">South Korea</option>
                <option value="spain">Spain</option>
                <option value="sweden">Sweden</option>
                <option value="switzerland">Switzerland</option>
                <option value="taiwan">Taiwan</option>
                <option value="thailand">Thailand</option>
                <option value="turkey">Turkey</option>
                <option value="ukraine">Ukraine</option>
                <option value="united_kingdom">United Kingdom</option>
                <option value="united_states">United States</option>
                <option value="vietnam">Vietnam</option>
          </select>
        </div>

        {/* Time frame selection */}
        {/* <div className="mb-6">
          <label className="block text-black text-lg font-serif mb-2">Publication Schedule</label>
          <select 
            name="selectedTrend"
            value={trendingRange}
            onChange={(e) => setTrendRange(e.target.value)}
            className="w-full border-2 border-zinc-300 p-3 focus:border-black focus:ring-1 focus:ring-black font-serif text-black bg-white"
          >
            <option value="">Select time range</option>
            <option value="Past Hour">Latest Edition (Past Hour)</option>
            <option value="Past 4 hours">Morning Edition (Past 4 Hours)</option>
            <option value="Past day">Daily Edition (Past 24 Hours)</option>
            <option value="Past 7 days">Weekly Edition (Past 7 Days)</option>
          </select>
        </div> */}

        {/* Topic selection
        <div className="mb-6">
          <label className="block text-black text-lg font-serif mb-2">News Section</label>
          <select 
            name="selectedTopic"
            value={trendTopic}
            onChange={(e) => setTrendTopic(e.target.value)}
            className="w-full border-2 border-zinc-300 p-3 focus:border-black focus:ring-1 focus:ring-black font-serif text-black bg-white"
          >
            <option value="">Select your section</option>
            <option value="all">All Categories</option>
            <option value="b">Business</option>
            <option value="e">Entertainment</option>
            <option value="m">Health</option>
            <option value="s">Sports</option>
            <option value="t">Science/Tech</option>
            <option value="h">Top Stories</option>
            <option value="g">Games</option>
          </select>
        </div>
      </div> */}
      </div>

    {/* Submit button */}
    <button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-black text-white text-xl font-serif py-4 mt-8 hover:bg-zinc-800 transition-colors disabled:bg-gray-400"
        >
          {isLoading ? 'LOADING...' : 'START THE DISCUSSION'}
        </button>

      {/* Display error if any */}
      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      </form>
      </div>
)
}