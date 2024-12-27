import EasyPost from '@easypost/api';

// Create an EasyPost instance with your API key
const api = new EasyPost('YOUR_API_KEY');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { trackingNumber, carrier } = req.body;

        try {
            // Track shipment using EasyPost API
            const tracker = await api.Tracker.create({
                tracking_code: trackingNumber,
                carrier: carrier,
            });

            // Return tracking status
            res.status(200).json({ status: tracker.status });
        } catch (error) {
            res.status(500).json({ error: 'Error fetching tracking information' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
