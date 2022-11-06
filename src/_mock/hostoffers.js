import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const HOST_PRODUCT_NAME = [
'Local Tuxedos',
'Embroidery Gifts',
'Own a store? Have someone host a mass buy for you!',
];
const HOST_PRODUCT_COLOR = ['#00AB55','#FFC0CB', '#FF4842'];

// ----------------------------------------------------------------------

const hostProducts = [...Array(3)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/assets/images/hostproducts/product_${setIndex}.jpg`,
    name: HOST_PRODUCT_NAME[index],
    price: faker.datatype.number({ min: 0, max: 0, precision: 0 }),
    priceSale: setIndex % 7 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    colors: 
      (setIndex === 1 && HOST_PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && HOST_PRODUCT_COLOR.slice(1, 3)) ||
      HOST_PRODUCT_COLOR,
    status: sample(['', '', '', '']),
  };
});

export default hostProducts;
