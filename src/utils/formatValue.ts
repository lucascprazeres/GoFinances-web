const formatValue = (value: number): string => {
  const BRLNumberInstance = Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'BRL',
  });

  const BRLString = BRLNumberInstance.format(value);

  return BRLString;
};

export default formatValue;
