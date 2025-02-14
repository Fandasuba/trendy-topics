'use client'
import React from "react"
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("")
  const [country, setCountry] = useState<string>("")
  const [trendingRange, setTrendRange] = useState<string>("")
  const [trendTopic, setTrendTopic] = useState<string>("")
  
  return(
    <div className="min-h-screen bg-zinc-100">
      <div className="max-w-4xl mx-auto p-6">
        {/* Masthead */}
        <div className="text-center mb-12 border-b-4 border-black pb-4">
          <h1 className="text-6xl font-serif font-bold text-black mb-2">THE TRENDS</h1>
          <p className="text-xl text-zinc-600 font-serif italic">All the trending topics leading the conversations of today!</p>
        </div>

        {/* Input name and form */}
        <div className="bg-white shadow-md p-8 border border-zinc-200">
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
                <option value="">Select your region</option>
                <option value="AR">Argentina</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="BE">Belgium</option>
                <option value="BR">Brazil</option>
                <option value="CA">Canada</option>
                <option value="CL">Chile</option>
                <option value="CO">Colombia</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="EG">Egypt</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="GR">Greece</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IE">Ireland</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JP">Japan</option>
                <option value="KE">Kenya</option>
                <option value="MY">Malaysia</option>
                <option value="MX">Mexico</option>
                <option value="NL">Netherlands</option>
                <option value="NZ">New Zealand</option>
                <option value="NG">Nigeria</option>
                <option value="NO">Norway</option>
                <option value="PH">Philippines</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="RO">Romania</option>
                <option value="RU">Russia</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SG">Singapore</option>
                <option value="ZA">South Africa</option>
                <option value="KR">South Korea</option>
                <option value="ES">Spain</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="TW">Taiwan</option>
                <option value="TH">Thailand</option>
                <option value="TR">Turkey</option>
                <option value="UA">Ukraine</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="VN">Vietnam</option>
              </select>
            </div>

            {/* Time frame selection */}
            <div className="mb-6">
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
            </div>

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
                <option value="Autos">Autos and Vehicles</option>
                <option value="Beauty">Beauty and Fashion</option>
                <option value="Business">Business and Finance</option>
                <option value="Climate">Climate</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Food and Drink">Food and Drink</option>
                <option value="Games">Games</option>
                <option value="Health">Health</option>
                <option value="Hobbies and Leisure">Hobbies and Leisure</option>
                <option value="Jobs and Education">Jobs and Education</option>
                <option value="Law and Government">Law and Government</option>
                <option value="Other">Other</option>
                <option value="Pets and Animals">Pets and Animals</option>
                <option value="Politics">Politics</option>
                <option value="Science">Science</option>
                <option value="Shopping">Shopping</option>
                <option value="Sports">Sports</option>
                <option value="Technology">Technology</option>
                <option value="Travel and Transportation">Travel and Transportation</option>
              </select>
            </div>
          </div>

          {/* Submit button */}
          <button className="w-full bg-black text-white text-xl font-serif py-4 mt-8 hover:bg-zinc-800 transition-colors">
            START THE DISCUSSION
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-zinc-500 font-serif text-sm">
          Vol. 1 No. 1 • Est. 2025
        </div>
      </div>
    </div>
  )
}