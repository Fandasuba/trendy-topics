'use client'
import React, { useEffect, useState } from "react"

export default function TrendsForm() {
  const [name, setName] = useState<string>("")
  const [country, setCountry] = useState<string>("")
  const [trendingRange, setTrendRange] = useState<string>("")
  const [trendTopic, setTrendTopic] = useState<string>("")
  const [trendingResults, setTrendingResults] = useState<string[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    console.log("Form values before sending:");
    console.log("Name:", name);
    console.log("Country:", country || 'united_states');
    
    try {
      const response = await fetch('/api/trending', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          geo: country,
          category: trendTopic,
          time: trendingRange
        }),
      });
      
      console.log("Response status:", response.status);
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Full response data:', data);
      setTrendingResults(data.trending);
      console.log('Trends data:', data.trending);
    } catch (error) {
      console.error('Error details:', error);
      setError('Failed to load trending data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    console.log("Country selection changed to:", country);
  }, [country]);
  
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
                <option value="US">Please select your country...</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AO">Angola</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BJ">Benin</option>
                <option value="BO">Bolivia</option>
                <option value="BA">Bosnia & Herzegovina</option>
                <option value="BR">Brazil</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CL">Chile</option>
                <option value="CO">Colombia</option>
                <option value="CD">Congo - Kinshasa</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Côte d'Ivoire</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czechia</option>
                <option value="DK">Denmark</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethioia</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GR">Greece</option>
                <option value="GT">Guatamala</option>
                <option value="HT">Haiti</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LY">Libya</option>
                <option value="LT">Lithuania</option>
                <option value="MY">Malaysia</option>
                <option value="ML">Mali</option>
                <option value="MX">Mexico</option>
                <option value="MD">Moldova</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar (Burma)</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NG">Nigeria</option>
                <option value="MK">North Macedonia</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PS">Palestine</option>
                <option value="PA">Panama</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RO">Romania</option>
                <option value="RU">Russia</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="SG">Singapore</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="ZA">South Africa</option>
                <option value="KR">South Korea</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syria</option>
                <option value="TW">Taiwan</option>
                <option value="TZ">Tanzania</option>
                <option value="TH">Thailand</option>
                <option value="TT">Trinidad & Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Türkiye</option>
                <option value="TM">Türkmenistan</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates (UAE)</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VE">Venezuala</option>
                <option value="VN">Vietnam</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
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
            <option value="24">Select time range</option>
            <option value="4">Hot off the press (Past 4 Hours)</option>
            <option value="24">Daily Edition (Past 24 Hours)</option>
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
            <option value="">All Categories</option>
            <option value="1">Autos & Veichles</option>
            <option value="2">Beauty</option>
            <option value="3">Business</option>
            <option value="20">Climate</option>
            <option value="4">Entertainment</option>
            <option value="5">Food & Drink</option>
            <option value="6">Games</option>
            <option value="7">Health</option>
            <option value="8">Hobbies</option>
            <option value="9">Jobs & Education</option>
            <option value="10">Legal</option>
            <option value="11">Other</option>
            <option value="13">Pets</option>
            <option value="14">Politics</option>
            <option value="15">Science</option>
            <option value="16">Shopping</option>
            <option value="17">Sports</option>
            <option value="18">Tech</option>
            <option value="19">Travel</option>

          </select>
        </div>
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