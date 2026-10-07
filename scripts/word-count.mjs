async function analyze() {
  const pages = [
    { name: 'City Page (e.g. Houston, TX)', url: 'http://127.0.0.1:4321/texas/houston/' },
    { name: 'City Page (e.g. Crawford, MS)', url: 'http://127.0.0.1:4321/mississippi/crawford/' },
    { name: 'Homepage (/)', url: 'http://127.0.0.1:4321/' },
    { name: 'State Page (e.g. Texas)', url: 'http://127.0.0.1:4321/states/texas/' },
    { name: 'Service Page (e.g. Hydro Jetting)', url: 'http://127.0.0.1:4321/services/hydro-jetting/' },
    { name: 'Service Page (e.g. Residential Drain)', url: 'http://127.0.0.1:4321/services/residential-drain-cleaning/' },
    { name: 'Services Directory (/services/)', url: 'http://127.0.0.1:4321/services/' },
    { name: 'About Us (/about/)', url: 'http://127.0.0.1:4321/about/' },
    { name: 'Contact (/contact/)', url: 'http://127.0.0.1:4321/contact/' }
  ];

  console.log('-------------------------------------------------------------');
  console.log('Page Type | Total Words | Unique Words');
  console.log('-------------------------------------------------------------');

  for (const p of pages) {
    try {
      const res = await fetch(p.url);
      const html = await res.text();
      // Remove scripts, styles, tags
      const text = html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ')
        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&[a-z0-9#]+;/gi, ' ');

      const words = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, ' ')
        .split(/\s+/)
        .filter(w => w.trim().length > 1 && !/^\d+$/.test(w));

      const totalWords = words.length;
      const uniqueWords = new Set(words).size;

      console.log(`${p.name.padEnd(35)} | ${totalWords.toString().padStart(11)} | ${uniqueWords.toString().padStart(12)}`);
    } catch (e) {
      console.log(`${p.name} -> Error: ${e.message}`);
    }
  }
  console.log('-------------------------------------------------------------');
}

analyze();
