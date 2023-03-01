function calculatePacks(orderSize) {
  console.log(orderSize, "<- orderSize");
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

  console.log(packsToBeSentOut, "<- packsToBeSentOut");
  return packsToBeSentOut;
}

calculatePacks(17666);

module.exports = calculatePacks;
