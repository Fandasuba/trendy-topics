import React from 'react';

const TrendsList = () => {

  // Example list i intend on removing once we cna feed actual mappable rows from the under contruction backend database. 
  const trends = [
    {
      keyword: "Donald Trump Ukraine",
      country: "United States",
      category: "News"
    },
    { keyword: "Avowed Reviews",
      country: "United States",
      category: "Games"
    },
    { keyword: "Europa League Draw",
      country: "United Kingdom",
      category: "Sports"
    },
    { keyword: "Dow Jones Stocks",
      country: "United States",
      category: "Busisness and Finance"
    },
    { keyword: "Amber Alert Illinois",
      country: "United States",
      category: "Law and Government"
    },
  ];

  return (
    <div className="h-full bg-white shadow-md p-8 border border-zinc-200">
      <h2 className="text-2xl font-serif font-bold text-black border-b-2 border-black pb-2 mb-4">
        Latest Headlines
      </h2>
      <div className="h-[calc(100%-4rem)] overflow-y-auto pr-4">
        <table className="w-[102%] table-fixed border-collapse">
          <thead>
            <tr className="border-b-2 border-black">
              <th className="w-[45%] text-left py-2 px-2 text-xs sm:text-sm font-bold font-serif text-black">KEYWORD</th>
              <th className="w-[27%] text-left py-2 px-2 text-xs sm:text-sm font-bold font-serif text-black">COUNTRY</th>
              <th className="w-[28%] text-left py-2 px-2 text-xs sm:text-sm font-bold font-serif text-black">CATEGORY</th>
            </tr>
          </thead>
          <tbody>
            {trends.map((trend, index) => (
              <tr 
                key={index}
                className="border-b border-zinc-200 hover:bg-zinc-800 hover:text-zinc-200 cursor-pointer transition-colors text-black"
              >
                <td className="py-3 px-2">
                  <div className="text-xs sm:text-sm font-serif whitespace-normal">
                    <span className="font-bold">{trend.keyword}</span>
                  </div>
                </td>
                <td className="py-3 px-2">
                  <div className="text-xs sm:text-sm font-serif whitespace-normal">{trend.country}</div>
                </td>
                <td className="py-3 px-2">
                  <div className="text-xs sm:text-sm font-serif whitespace-normal">{trend.category}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrendsList;