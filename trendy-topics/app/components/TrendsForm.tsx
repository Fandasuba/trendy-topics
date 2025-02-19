'use client'
import React, { useEffect } from "react"
import { useState } from "react"

export default function TrendsForm() {
  const [name, setName] = useState<string>("")
  const [country, setCountry] = useState<string>("")
  const [trendingRange, setTrendRange] = useState<string>("")
  const [trendTopic, setTrendTopic] = useState<string>("")
  const [submit, setSubmit] = useState<boolean>(false)

  interface optionsObject {
    keyword?: string;
    startTime: Date;
    endTime: Date;
    geo: string;
    hl: string;
    timezone?: number;
    category: number;
    property: string;
    resolution?: string;
    granularTimeResolution?: boolean;
  }

  useEffect(() => {
    if (submit) {
      const fetchTrendsData = async () => {
        try {
          const optionsObject = {
            geo: country,
            hl: 'en',
            category: parseInt(trendTopic) || 0,
          }

          const response = await fetch('/api/trends', {
            method: 'POST',
            body: JSON.stringify(optionsObject)
          })

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }

          const data = await response.json()
          console.log('Trends data isnide trendsform async:', data,)
        } catch (error) {
          console.error('Error fetching trends:', error)
        } finally {
          setSubmit(false)
        }
      }

      fetchTrendsData()
    }
  }, [submit, name, country, trendingRange, trendTopic])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmit(true)
  }
  
  return (
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
            <option value="Worldwide">Select your country...</option>
            <option value="Argentina">Argentina</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Belgium">Belgium</option>
            <option value="Brazil">Brazil</option>
            <option value="Canada">Canada</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Egypt">Egypt</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Greece">Greece</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Ireland">Ireland</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Japan">Japan</option>
            <option value="Kenya">Kenya</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Mexico">Mexico</option>
            <option value="Netherlands">Netherlands</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Norway">Norway</option>
            <option value="Philippines">Philippines</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Romania">Romania</option>
            <option value="Russia">Russia</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Singapore">Singapore</option>
            <option value="South Africa">South Africa</option>
            <option value="South Korea">South Korea</option>
            <option value="Spain">Spain</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Thailand">Thailand</option>
            <option value="Turkey">Turkey</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="Vietnam">Vietnam</option>
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

        {/* Topic selection */}
        <div className="mb-6">
          <label className="block text-black text-lg font-serif mb-2">News Section</label>
          <select 
            name="selectedTopic"
            value={trendTopic}
            onChange={(e) => setTrendTopic(e.target.value)}
            className="w-full border-2 border-zinc-300 p-3 focus:border-black focus:ring-1 focus:ring-black font-serif text-black bg-white"
          >
            <option value="">Select your section</option>
            <option value="47">Autos and Vehicles</option>
            <option value="44">Beauty and Fashion</option>
            <option value="12">Business and Finance</option>
            <option value="3">Entertainment</option>
            <option value="71">Food and Drink</option>
            <option value="8">Games</option>
            <option value="45">Health</option>
            <option value="65">Hobbies and Leisure</option>
            <option value="958">Jobs and Education</option>
            <option value="19">Law and Government</option>
            <option value="0">Other</option>
            <option value="66">Pets and Animals</option>
            <option value="396">Politics</option>
            <option value="174">Science</option>
            <option value="18">Shopping</option>
            <option value="20">Sports</option>
            <option value="5">Technology</option>
            <option value="67">Travel and Transportation</option>
          </select>
        </div>
      </div>

      {/* Submit button */}
      <button 
        type="submit" 
        className="w-full bg-black text-white text-xl font-serif py-4 mt-8 hover:bg-zinc-800 transition-colors"
      >
        START THE DISCUSSION
      </button>
    </form>
  )
}