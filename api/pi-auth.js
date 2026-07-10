export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method disallowed' });

    const { accessToken } = req.body;
    if (!accessToken || typeof accessToken !== 'string') {
        return res.status(400).json({ error: 'Missing or invalid accessToken' });
    }

    try {
        const piResponse = await fetch('https://api.minepi.com/v2/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json',
            },
        });

        if (!piResponse.ok) {
            const details = await piResponse.text().catch(() => '');
            return res.status(401).json({
                success: false,
                error: 'Pi token verification failed',
                status: piResponse.status,
                details: details || undefined,
            });
        }

        const user = await piResponse.json();
        return res.status(200).json({ success: true, user });

    } catch (apiError) {
        const message = apiError instanceof Error ? apiError.message : 'Unknown error';
        return res.status(500).json({ error: 'Validation pipeline error', details: message });
    }
}
