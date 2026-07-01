export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method disallowed' });

    const { authResult } = req.body;
    if (!authResult || !authResult.accessToken) {
        return res.status(400).json({ error: 'Missing token parameters' });
    }

    try {
        // Query the official Pi API using your hidden server environment key
        const piNetworkCall = await fetch('https://minepi.com', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${process.env.PI_API_KEY}` }
        });

        if (!piNetworkCall.ok) {
            return res.status(401).json({ error: 'Invalid Pi identity tokens' });
        }

        const profileData = await piNetworkCall.json();

        // Check for native ecosystem human KYC verification tags
        if (profileData.roles && profileData.roles.includes('kyc_verified')) {
            return res.status(200).json({
                success: true,
                username: profileData.username
            });
        }
        return res.status(403).json({ success: false, error: 'Account not KYC verified' });

    } catch (apiError) {
        return res.status(500).json({ error: 'Validation pipeline error', details: apiError.message });
    }
}
