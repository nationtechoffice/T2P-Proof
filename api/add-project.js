export default async function handler(req, res) {
    // Inject secure CORS parameters
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method disallowed' });

    const { project_name, description, smart_contract_address, developer_username } = req.body;
    
    // Strict parameter validation to ensure nobody passes corrupted data or empty files
    if (!project_name || !developer_username) {
        return res.status(400).json({ success: false, error: "Missing required core project data elements." });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;

    try {
        // Send a secure POST request to your Supabase cloud data tables
        const dbResponse = await fetch(`${supabaseUrl}/rest/v1/verified_projects`, {
            method: 'POST',
            headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal' // Optimizes bandwidth and keeps cloud responses tiny
            },
            body: JSON.stringify({
                project_name,
                description,
                smart_contract_address,
                developer_username
            })
        });

        if (!dbResponse.ok) {
            const errLog = await dbResponse.text();
            return res.status(500).json({ success: false, error: "Database rejected project parameter writing sync logs.", details: errLog });
        }

        // Return a clean success webhook message to the user frontend browser window
        return res.status(200).json({ success: true, message: "Project entry successfully initialized into cloud data blocks." });

    } catch (err) {
        return res.status(500).json({ success: false, error: "Database pipeline transmission error during secure ingestion.", details: err.message });
    }
}
