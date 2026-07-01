export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const { paymentId, txid, action } = req.body;
    const PI_API_KEY = process.env.PI_API_KEY;

    try {
        if (action === 'approve') {
            // Stage 1: Tell the Pi blockchain network that your app approves this upcoming transaction
            const approveCall = await fetch(`https://minepi.com{paymentId}/approve`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${PI_API_KEY}`, 'Content-Type': 'application/json' }
            });

            if (!approveCall.ok) return res.status(400).json({ success: false, error: "Pi network approval rejected" });
            return res.status(200).json({ success: true, message: "Payment approved by server" });
        }

        if (action === 'complete') {
            // Stage 2: Submit the final transaction ID (txid) to the Pi blockchain ledger to finalize the transfer
            const completeCall = await fetch(`https://minepi.com{paymentId}/complete`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${PI_API_KEY}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ txid })
            });

            if (!completeCall.ok) return res.status(400).json({ success: false, error: "Pi network completion rejected" });
            return res.status(200).json({ success: true, message: "Transaction finalized on ledger!" });
        }

        return res.status(400).json({ error: "Invalid pipeline action requested" });

    } catch (err) {
        return res.status(500).json({ error: 'Internal payment route failure', details: err.message });
    }
}
