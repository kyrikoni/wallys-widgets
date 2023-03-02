import { useState } from "react";

export const WallysWidgets = () => {
  const [orderSize, setOrderSize] = useState(0);
  const [packsToBeSentOut, setPacksToBeSentOut] = useState([]);

  function calculatePacks(orderSize) {
    const packSizes = [
      { size: 250 },
      { size: 500 },
      { size: 1000 },
      { size: 2000 },
      { size: 5000 },
    ];

    packSizes.sort((a, b) => b.size - a.size);

    const packsToBeSentOut = [];

    for (const pack of packSizes) {
      const packsNeeded = Math.floor(orderSize / pack.size);
      if (packsNeeded > 0 && orderSize >= 1000) {
        packsToBeSentOut.push({ size: pack.size, quantity: packsNeeded });
        orderSize -= packsNeeded * pack.size;
      }
    }
    if (orderSize > 750 && orderSize < 1000) {
      packsToBeSentOut.push({ size: 500, quantity: 2 });
    } else if (orderSize > 500 && orderSize <= 750) {
      packsToBeSentOut.push(
        { size: 500, quantity: 1 },
        { size: 250, quantity: 1 }
      );
    } else if (orderSize > 250 && orderSize <= 500) {
      packsToBeSentOut.push({ size: 500, quantity: 1 });
    } else if (orderSize > 0 && orderSize <= 250) {
      packsToBeSentOut.push({ size: 250, quantity: 1 });
    }

    return packsToBeSentOut;
  }

  const handleOrderSizeChange = (event) => {
    const orderSize = parseInt(event.target.value);
    setOrderSize(orderSize);
    if (orderSize > 0) {
      const packsToBeSentOut = calculatePacks(orderSize);
      setPacksToBeSentOut(packsToBeSentOut);
    } else {
      setPacksToBeSentOut([]);
    }
  };

  return (
    <div className="main">
      <h1>Wally's Widget Company</h1>
      <label>Order size (in widgets):</label>
      <input type="number" value={orderSize} onChange={handleOrderSizeChange} />
      <h2>Packs to be sent out:</h2>
      <ul>
        {packsToBeSentOut.map((pack) => (
          <li key={pack.size}>
            {pack.quantity} pack(s) of {pack.size} widgets
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WallysWidgets;
