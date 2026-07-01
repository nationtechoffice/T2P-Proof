export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method disallowed' });

    const { project_name, description, smart_contract_address, developer_username } = req.body;
    
    if (!project_name || !developer_username) {
        return res.status(400).json({ success: false, error: "Missing required core project data elements." });
    }

    try {
        const dbResponse = await fetch(`${process.env.SUPABASE_URL}/rest/v1/verified_projects`, {
            method: 'POST',
            headers: {
                'apikey': process.env.SUPABASE_KEY,
                'Authorization': `Bearer ${process.env.SUPABASE_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
                project_name,
                description,
                smart_contract_address,
                developer_username
            })
        });

        if (!dbResponse.ok) return res.status(500).json({ success: false, error: "Database write rejected." });
        return res.status(200).json({ success: true, message: "Project successfully saved to directory." });

    } catch (err) {
        return res.status(500).json({ success: false, error: "Transmission error.", details: err.message });
    }
}

}
