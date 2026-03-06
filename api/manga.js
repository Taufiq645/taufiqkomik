export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const path = req.query.path || '/manga?limit=18&order[followedCount]=desc&includes[]=cover_art&contentRating[]=safe';
  const url = `https://api.mangadex.org${path}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
