const PI_API_BASE = 'https://api.minepi.com/v2';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const { paymentId, txid, action } = req.body;
    const PI_API_KEY = process.env.PI_API_KEY;

    if (!PI_API_KEY) {
        return res.status(500).json({ error: 'PI_API_KEY is not configured' });
    }

    const serverHeaders = {
        'Authorization': `Key ${PI_API_KEY}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };

    try {
        if (action === 'approve') {
            const approveCall = await fetch(`${PI_API_BASE}/payments/${paymentId}/approve`, {
                method: 'POST',
                headers: serverHeaders,
            });

            if (!approveCall.ok) {
                const details = await approveCall.text().catch(() => '');
                return res.status(400).json({ success: false, error: 'Pi network approval rejected', details });
            }

            const payment = await approveCall.json();
            return res.status(200).json({ success: true, message: 'Payment approved by server', payment });
        }

        if (action === 'complete') {
            const completeCall = await fetch(`${PI_API_BASE}/payments/${paymentId}/complete`, {
                method: 'POST',
                headers: serverHeaders,
                body: JSON.stringify({ txid }),
            });

            if (!completeCall.ok) {
                const details = await completeCall.text().catch(() => '');
                return res.status(400).json({ success: false, error: 'Pi network completion rejected', details });
            }

            const payment = await completeCall.json();
            return res.status(200).json({ success: true, message: 'Transaction finalized on ledger', payment });
        }

        return res.status(400).json({ error: 'Invalid pipeline action requested' });

    } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        return res.status(500).json({ error: 'Internal payment route failure', details: message });
    }
}
