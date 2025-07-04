
export const deliveryOptions = [{
  id: '1',
  deliveryDays : 10,
  priceCents : 0
},{
  id: '2',
  deliveryDays : 5,
  priceCents : 499
},{
  id: '3',
  deliveryDays : 3,
  priceCents : 999
}];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

    deliveryOptions.forEach((option) => {
      if(option.id === deliveryOptionId) {
        deliveryOption = option;
      }
    });

  return deliveryOption || deliveryOptions[0];
}