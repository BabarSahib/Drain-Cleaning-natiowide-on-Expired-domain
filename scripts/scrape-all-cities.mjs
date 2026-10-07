import fs from 'fs';
import path from 'path';

const states = [
  "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut",
  "delaware", "district-of-columbia", "florida", "georgia", "hawaii", "idaho", "illinois",
  "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts",
  "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada",
  "new-hampshire", "new-jersey", "new-mexico", "new-york", "north-carolina", "north-dakota",
  "ohio", "oklahoma", "oregon", "pennsylvania", "rhode-island", "south-carolina", "south-dakota",
  "tennessee", "texas", "utah", "vermont", "virginia", "washington", "west-virginia",
  "wisconsin", "wyoming"
];

const stateMeta = {
  "alabama": { name: "Alabama", abbr: "AL" },
  "alaska": { name: "Alaska", abbr: "AK" },
  "arizona": { name: "Arizona", abbr: "AZ" },
  "arkansas": { name: "Arkansas", abbr: "AR" },
  "california": { name: "California", abbr: "CA" },
  "colorado": { name: "Colorado", abbr: "CO" },
  "connecticut": { name: "Connecticut", abbr: "CT" },
  "delaware": { name: "Delaware", abbr: "DE" },
  "district-of-columbia": { name: "District of Columbia", abbr: "DC" },
  "florida": { name: "Florida", abbr: "FL" },
  "georgia": { name: "Georgia", abbr: "GA" },
  "hawaii": { name: "Hawaii", abbr: "HI" },
  "idaho": { name: "Idaho", abbr: "ID" },
  "illinois": { name: "Illinois", abbr: "IL" },
  "indiana": { name: "Indiana", abbr: "IN" },
  "iowa": { name: "Iowa", abbr: "IA" },
  "kansas": { name: "Kansas", abbr: "KS" },
  "kentucky": { name: "Kentucky", abbr: "KY" },
  "louisiana": { name: "Louisiana", abbr: "LA" },
  "maine": { name: "Maine", abbr: "ME" },
  "maryland": { name: "Maryland", abbr: "MD" },
  "massachusetts": { name: "Massachusetts", abbr: "MA" },
  "michigan": { name: "Michigan", abbr: "MI" },
  "minnesota": { name: "Minnesota", abbr: "MN" },
  "mississippi": { name: "Mississippi", abbr: "MS" },
  "missouri": { name: "Missouri", abbr: "MO" },
  "montana": { name: "Montana", abbr: "MT" },
  "nebraska": { name: "Nebraska", abbr: "NE" },
  "nevada": { name: "Nevada", abbr: "NV" },
  "new-hampshire": { name: "New Hampshire", abbr: "NH" },
  "new-jersey": { name: "New Jersey", abbr: "NJ" },
  "new-mexico": { name: "New Mexico", abbr: "NM" },
  "new-york": { name: "New York", abbr: "NY" },
  "north-carolina": { name: "North Carolina", abbr: "NC" },
  "north-dakota": { name: "North Dakota", abbr: "ND" },
  "ohio": { name: "Ohio", abbr: "OH" },
  "oklahoma": { name: "Oklahoma", abbr: "OK" },
  "oregon": { name: "Oregon", abbr: "OR" },
  "pennsylvania": { name: "Pennsylvania", abbr: "PA" },
  "rhode-island": { name: "Rhode Island", abbr: "RI" },
  "south-carolina": { name: "South Carolina", abbr: "SC" },
  "south-dakota": { name: "South Dakota", abbr: "SD" },
  "tennessee": { name: "Tennessee", abbr: "TN" },
  "texas": { name: "Texas", abbr: "TX" },
  "utah": { name: "Utah", abbr: "UT" },
  "vermont": { name: "Vermont", abbr: "VT" },
  "virginia": { name: "Virginia", abbr: "VA" },
  "washington": { name: "Washington", abbr: "WA" },
  "west-virginia": { name: "West Virginia", abbr: "WV" },
  "wisconsin": { name: "Wisconsin", abbr: "WI" },
  "wyoming": { name: "Wyoming", abbr: "WY" }
};

const outputDir = path.resolve('src/data/state-cities');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function scrapeState(stateSlug) {
  const url = `https://furnacerepairpros.com/states/${stateSlug}/`;
  console.log(`Fetching ${url}...`);
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (!res.ok) {
      console.error(`Failed ${url}: ${res.status}`);
      return null;
    }
    const html = await res.text();
    
    // Extract city links like href="/texas/austin/" or href="https://furnacerepairpros.com/texas/austin/"
    const regex = new RegExp(`href=["'](?:https?:\\/\\/furnacerepairpros\\.com)?\\/${stateSlug}\\/([a-z0-9-]+)\\/?["'][^>]*>([^<]+)<\\/a>`, 'gi');
    const citiesMap = new Map();
    
    let match;
    while ((match = regex.exec(html)) !== null) {
      const citySlug = match[1].toLowerCase().trim();
      const cityName = match[2].trim();
      if (citySlug && cityName && !citiesMap.has(citySlug)) {
        citiesMap.set(citySlug, {
          name: cityName,
          slug: citySlug
        });
      }
    }
    
    const cities = Array.from(citiesMap.values()).sort((a, b) => a.name.localeCompare(b.name));
    console.log(`Found ${cities.length} cities for ${stateSlug}`);
    
    const data = {
      state: stateMeta[stateSlug]?.name || stateSlug,
      slug: stateSlug,
      abbr: stateMeta[stateSlug]?.abbr || '',
      cityCount: cities.length,
      cities
    };
    
    fs.writeFileSync(path.join(outputDir, `${stateSlug}.json`), JSON.stringify(data, null, 2));
    return data;
  } catch (err) {
    console.error(`Error scraping ${stateSlug}:`, err.message);
    return null;
  }
}

async function run() {
  const allStatesSummary = [];
  let totalCities = 0;
  
  // Scrape in batches of 5
  for (let i = 0; i < states.length; i += 5) {
    const batch = states.slice(i, i + 5);
    const results = await Promise.all(batch.map(scrapeState));
    for (const res of results) {
      if (res) {
        allStatesSummary.push({
          name: res.state,
          slug: res.slug,
          abbr: res.abbr,
          cityCount: res.cityCount
        });
        totalCities += res.cityCount;
      }
    }
  }
  
  fs.writeFileSync(
    path.resolve('src/data/states-summary.json'),
    JSON.stringify({ totalStates: allStatesSummary.length, totalCities, states: allStatesSummary }, null, 2)
  );
  
  console.log(`\nDONE! Scraped ${allStatesSummary.length} states with total ${totalCities} cities!`);
}

run();
