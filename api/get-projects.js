export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') return res.status(200).end();

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;

    try {
        // Query the live Supabase REST API directly via fetch to read your project data
        const dbResponse = await fetch(`${supabaseUrl}/rest/v1/verified_projects?select=*`, {
            method: 'GET',
            headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`
            }
        });

        if (!dbResponse.ok) {
            return res.status(500).json({ error: "Failed to read database parameters" });
        }

        const projectList = await dbResponse.json();
        
        // Return your live project directory directly to the frontend webpage
        return res.status(200).json({ success: true, data: projectList });

    } catch (err) {
        return res.status(500).json({ error: "Database pipeline transmission error", details: err.message });
    }
}
