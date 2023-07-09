const addressLat = 2;
const addressLong = 8;
const positionLat = 3;
const positionLong = 7;

const dist = Math.sqrt(
  (positionLong - positionLat) ** 2 + (addressLong - addressLat) ** 2
);
console.log(`Расстояние до точки = ${Math.round(dist)}`);




//Задача покупки квартиры
const sum = 10000;
const percent = 7;
const monthCount = 24;
const houseCost = 13500
const itog = sum * (1 + percent / 100 / 12) ** monthCount;
console.log(itog);

if (itog > houseCost) {
  console.log(`Вы сможете купить квартиру. Разница ${itog - houseCost} `);
} else {
  console.log(`Не хватает средств ${houseCost - itog} `);
}