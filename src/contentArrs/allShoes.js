import AirForse1 from "../img/shoes/airForse1/air-force-1-07.png";
import CourtVision from "../img/shoes/courtVision/court-vision-mid-next-nature-shoes-HFkwn1.png";
import Blazer from "../img/shoes/Blazer/blazer-mid-77-vintage-shoes-3x983t.png";
import jordanZoom from "../img/shoes/JordanZoom/air-jordan-1-zoom-air-cmft-2-shoes-b35MTM.png";
import jordanZoom2 from "../img/shoes/JordanZoom/air-jordan-1-zoom-cmft-2-shoes-2W3NJM.png";
import v2k from "../img/shoes/V2K/v2k-run-shoes-4CJ5WW.png";
import jordanLowG from "../img/shoes/JordanLowG/air-jordan-1-low-g-golf-shoes-0P1HcH.png";
import jordanLowSE from "../img/shoes/JordanLowSE/air-jordan-1-low-se-shoes-Z8CHrq.png";
import AirForseByYou from "../img/shoes/ForseByYou/custom-nike-air-force-1-high-by-you-shoes.jpg";
function randomDate(start, end, startHour, endHour) {
  var date = new Date(+start + Math.random() * (end - start));
  var hour = (startHour + Math.random() * (endHour - startHour)) | 0;
  date.setHours(hour);
  return date;
}
export const shoes = [
  {
    id: 1,
    img: AirForse1,
    name: "Nike Air Force 1 '07",
    height: "Low",
    gender: "Unisex",
    sizes: [40, 41, 43, 45],
    colors: ["white"],
    price: 100.99,
    date: randomDate(new Date(2000, 0, 1), new Date(), 0, 24),
  },
  {
    id: 2,
    img: CourtVision,
    name: "Nike Court Vision Mid Next Nature",
    height: "Mid",
    gender: "Unisex",
    sizes: [38, 41, 42, 45],
    colors: ["white", "black"],
    price: 40.99,
    date: randomDate(new Date(2000, 0, 1), new Date(), 0, 24),
  },
  {
    id: 3,
    img: Blazer,
    name: "Nike Blazer Mid '77 Vintage",
    height: "Mid",
    gender: "Unisex",
    sizes: [38.5, 38, 41, 43.5],
    colors: ["white", "black"],
    price: 110.99,
    date: randomDate(new Date(2000, 0, 1), new Date(), 0, 24),
  },
  {
    id: 4,
    img: Blazer,
    name: "Nike Blazer Mid '77 Vintage",
    height: "Mid",
    gender: "Unisex",
    sizes: [38.5, 38, 41, 43.5],
    colors: ["white", "black"],
    price: 150.99,
    date: randomDate(new Date(2000, 0, 1), new Date(), 0, 24),
  },
  {
    id: 5,
    img: jordanZoom,
    name: "Air Jordan 1 Zoom CMFT 2",
    height: "High",
    gender: "Unisex",
    sizes: [38.5, 38, 40, 40.5, 44],
    colors: ["white", "gray"],
    price: 140.99,
    date: randomDate(new Date(2000, 0, 1), new Date(), 0, 24),
  },
  {
    id: 6,
    img: jordanZoom2,
    name: "Air Jordan 1 Zoom CMFT 2",
    height: "High",
    gender: "Women",
    sizes: [38, 40, 41],
    colors: ["white", "yellow", "multi"],
    price: 80.99,
    date: randomDate(new Date(2000, 0, 1), new Date(), 0, 24),
  },
  {
    id: 7,
    img: v2k,
    name: "Nike V2K Run",
    height: "Low",
    gender: "Women",
    sizes: [38.5, 38, 40],
    colors: ["white", "yellow", "purple"],
    price: 95.99,
    date: randomDate(new Date(2000, 0, 1), new Date(), 0, 24),
  },
  {
    id: 8,
    img: jordanLowG,
    name: "Air Jordan 1 Low G",
    height: "Low",
    gender: "Women",
    sizes: [38.5, 39, 43],
    colors: ["white", "purple"],
    price: 156.99,
    date: randomDate(new Date(2000, 0, 1), new Date(), 0, 24),
  },
  {
    id: 9,
    img: jordanLowSE,
    name: "Air Jordan 1 Low SE",
    height: "Low",
    gender: "Men",
    sizes: [38.5, 40, 43, 44, 45],
    colors: ["white", "black", "multi"],
    price: 136.99,
    date: randomDate(new Date(2000, 0, 1), new Date(), 0, 24),
  },
  {
    id: 10,
    img: AirForseByYou,
    name: "Nike Air Force 1 High By You",
    height: "High",
    gender: "Men",
    sizes: [40, 43, 44, 45],
    colors: ["multi"],
    price: 200.99,
    date: randomDate(new Date(2000, 0, 1), new Date(), 0, 24),
  },
];
