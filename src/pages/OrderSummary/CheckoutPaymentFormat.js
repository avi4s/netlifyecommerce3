import React from "react";

function clearNumber(value = "") {
  return value.replace(/\D+/g, "");
}

export function formatCreditCardNumber(value) {
  if (!value) {
    return value;
  }

  const clearValue = clearNumber(value);
  let nextValue = "";

  for (let i = 0; i < clearValue.length; i++) {
    if (i > 0 && i % 4 === 0) {
      nextValue += " ";
    }
    nextValue += clearValue[i];
  }

  return nextValue.trim();
}

export function formatCVC(value) {
  const clearValue = clearNumber(value);
  return clearValue.slice(0, 3);
}

export function formatExpirationDate(value) {
  const clearValue = clearNumber(value);

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
  }

  return clearValue;
}
const CheckoutPaymentFormat = () => {
  // You can add any additional logic or JSX specific to your component here
  return <div>This is a dummy component for export</div>;
};

export default CheckoutPaymentFormat;
