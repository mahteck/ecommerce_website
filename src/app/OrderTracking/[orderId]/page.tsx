// 'use client'

// import React, { useState } from 'react';

// const TrackOrder = () => {
//     const [trackingNumber, setTrackingNumber] = useState('');
//     const [status, setStatus] = useState(null);

//     const handleTrack = async () => {
//         const response = await fetch(`/api/track/${trackingNumber}`);
//         const data = await response.json();
//         setStatus(data.status);
//     };

//     return (
//         <div>
//             <h2>Track Your Order</h2>
//             <input
//                 type="text"
//                 value={trackingNumber}
//                 onChange={(e) => setTrackingNumber(e.target.value)}
//                 placeholder="Enter your tracking number"
//             />
//             <button onClick={handleTrack}>Track</button>

//             {status && <p>Current Status: {status}</p>}
//         </div>
//     );
// };

// export default TrackOrder;
