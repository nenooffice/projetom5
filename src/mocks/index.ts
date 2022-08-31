import * as I from "../interfaces"
import burgerX from "../assets/images/burger-x.png";
import burgerBeefChicken from "../assets/images/burguer-carne-e-frango.png";
import burgerBaconCoupleCheddar from "../assets/images/burguer-duplo-bacon-cheddar.png";
import burgerBaconDouble from "../assets/images/burguer-duplo-bacon.png";
import burgerDoubleRanch from "../assets/images/burguer-duplo-ranch.png";
import burgerSaladCheese from "../assets/images/burguer-salada-queijo.png";
import burgerSalad from "../assets/images/burguer-salada.png";
import pFries from "../assets/images/batata-frita-p.png";
import gFries from "../assets/images/batata-frita-g.png";
import bottleWater from "../assets/images/agua.png";
import CocaCola350ml from "../assets/images/coca-lata.png";
import CocaCola600ml from "../assets/images/coca-garrafa.png";

export const mockedProducts: I.Product[] = [
  {
    id: "593760ba-8e20-42aa-86b7-b3d7e8280ea4",
    name: "X-Burger",
    description:" Beef Burguer with incredible 180g of Angus meat!",
    price: 21.99,
    image: burgerX,
    categoryId: "416ceda3-09b2-4e6e-abfb-7cda40601326",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5d0d1555-e9b9-436f-b5d5-ec7fd9c78a92",
    name: "Chicken and Beef Burger",
    description:" A Burguer that brings to world a delicious Chicken and Beef combo!",
    price: 22.99,
    image: burgerBeefChicken,
    categoryId: "416ceda3-09b2-4e6e-abfb-7cda40601326",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5dbbded7-988c-451f-ad5c-ea815b5f67c7",
    name: "Cheddar and Bacon Marriage",
    description:" The perfect union between Cheddar and Bacon!",
    price: 23.99,
    image: burgerBaconCoupleCheddar,
    categoryId: "416ceda3-09b2-4e6e-abfb-7cda40601326",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6472c637-e9a7-4af0-84f8-f5a327d4ba96",
    name: "A Coup of Bacon",
    description:" Beware the Bacon Invasion!",
    price: 20.99,
    image: burgerBaconDouble,
    categoryId: "416ceda3-09b2-4e6e-abfb-7cda40601326",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8cb3bc11-436c-44f8-bb06-1533071cc0f5",
    name: "The Ranch",
    description:" Everyone of us need a place to rest before enjoy our daily battle. Here's our favorite place!",
    price: 24.99,
    image: burgerDoubleRanch,
    categoryId: "416ceda3-09b2-4e6e-abfb-7cda40601326",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "e31b50ea-2e1e-4b4e-99fe-6e60ae3f6618",
    name: "Brazilian Burger",
    description:" The world says, who we are to disagree? Brazil make every food better!",
    price: 20.99,
    image: burgerSaladCheese,
    categoryId: "416ceda3-09b2-4e6e-abfb-7cda40601326",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "136c7f06-8c2d-4f65-b251-54305f62227b",
    name: "Green Burger",
    description:" For the ones who appreciates some green color!",
    price: 19.99,
    image: burgerSalad,
    categoryId: "416ceda3-09b2-4e6e-abfb-7cda40601326",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7c258ef4-2846-4f3e-a8b6-31d018ebb81d",
    name: "Personal Fries",
    description:" Satisfries your need for... fries",
    price: 9.99,
    image: pFries,
    categoryId: "8a181975-0cf9-4b8e-8606-c0e3bf56e414",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "be08aeb3-5193-41c7-a32c-cfccfb1b8070",
    name: "Party Fries",
    description:"Prepare your party for everything with this combo of marvelous fries!",
    price: 18.99,
    image: gFries,
    categoryId: "8a181975-0cf9-4b8e-8606-c0e3bf56e414",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7ec091a9-8718-4c5b-9d8d-f227c840d479",
    name: "Water",
    description:"Just a glass of water, nothing more.",
    price: 5.99,
    image: bottleWater,
    categoryId: "ca9c096c-b81b-4e12-8dd7-94154792d349",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "878c83c0-068b-4d01-814f-5d1518a9751b",
    name: "Coke 350ml",
    description:"350ml of sugar, caffeine and energy!",
    price: 6.99,
    image: CocaCola350ml,
    categoryId: "ca9c096c-b81b-4e12-8dd7-94154792d349",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "f1fb9371-51cf-47e4-9edb-5d2edb0ba0ff",
    name: "Coke 600ml",
    description:"ThirstKiller.",
    price: 8.99,
    image: CocaCola600ml,
    categoryId: "ca9c096c-b81b-4e12-8dd7-94154792d349",
    createdAt: new Date(),
    updatedAt: new Date(),
  } 
];

export const mockedCategories: I.Category[] = [
  {
    id: "416ceda3-09b2-4e6e-abfb-7cda40601326",
    name: "Burgers",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8a181975-0cf9-4b8e-8606-c0e3bf56e414",
    name: "Portions",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "ca9c096c-b81b-4e12-8dd7-94154792d349",
    name: "Drinks",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedTables: I.Table[] = [
  {
    id: "6c377780-bb00-4248-9a8a-a1fcdc33ec60",
    number: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "1462d8ac-a6ca-464a-aa04-3e56740a01f4",
    number: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "1c2961b1-ffc5-4204-a0e0-63ecfcf7dd85",
    number: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedUsers: I.User[] = [
  {
    id: "54579316-9490-4149-8dd6-499506ceadbf",
    name: "Eugenio Bufalo Rodrigues",
    email: "eugenio.bufalorodrigues@gmail.com",
    password: "$2a$12$w/3EbD7Bx7bsjlKEkPfapuUfgNg/DpyTST.8KekPZ11RntclZdXY.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "e91397ff-5a8a-426f-9ff9-975088675bc8",
    name: "Arhur",
    email: "aaa@aa.com",
    password: "$2a$12$PkqbAwMfEF3dIG7Z17rX6.n6C90GwghXknUYzgV9w3A7hGtpilQ7e",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "f6e8d41b-1e3a-4c62-8e13-2cd78f0eb63c",
    name: "Georgia",
    email: "ggg@aa.com",
    password: "$2a$12$pPX2r5p6mkTxAelnEv1gdugo35TfcrDxeVfrCfRkA7buexRH1nwwW",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d7fd79ab-b467-4f72-9961-93debceec5c4",
    name: "Virgínia",
    email: "vvv@aa.com",
    password: "$2a$12$Jf6dQ/96yl8k8oRVvUxPw.Vw7Ack2MGNTEmXp2UyHM5Mh26fRHqoS",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d1d97c46-babf-4e3e-ac3a-c1cd56ece581",
    name: "Ana Carolina",
    email: "aacc@aa.com",
    password: "$2a$12$VoacOQpDbw5UhlLGw3zBpOxxRSpm01BSm76oBSGZaCobR81vU5Gbi",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedFavorites: I.Favorite[] = [
  {
    id: "7c258ef4-2846-4f3e-a8b6-31d018ebb81d" ,
    productName: "Personal Fries",
    userId: "54579316-9490-4149-8dd6-499506ceadbf",
    favoritedAt: new Date(),
  },
  {
    id: "f1fb9371-51cf-47e4-9edb-5d2edb0ba0ff" ,
    productName: "Coke 600ml",
    userId: "d1d97c46-babf-4e3e-ac3a-c1cd56ece581",
    favoritedAt: new Date(),
  },
  {
    id: "136c7f06-8c2d-4f65-b251-54305f62227b" ,
    productName: "Green Burger",
    userId: "e91397ff-5a8a-426f-9ff9-975088675bc8",
    favoritedAt: new Date(),
  },
  {
    id: "8cb3bc11-436c-44f8-bb06-1533071cc0f5" ,
    productName: "The Ranch",
    userId: "d7fd79ab-b467-4f72-9961-93debceec5c4",
    favoritedAt: new Date(),
  },
  {
    id: "593760ba-8e20-42aa-86b7-b3d7e8280ea4" ,
    productName: "X-Burger",
    userId: "f6e8d41b-1e3a-4c62-8e13-2cd78f0eb63c",
    favoritedAt: new Date(),
  },
];

export const mockedOrders: I.Order[] = [
  {
    id: "711cfb5a-1a43-4873-b57f-2702fff7cc28",
    tableNumber: 1,
    userId: "d1d97c46-babf-4e3e-ac3a-c1cd56ece581",
    createdAt: new Date()
  }
]

export const mockedOrdersToProducts: I.OrderToProduct[] = [
  {
    id: "6040a3a2-3856-4cd9-b126-92b075e9988f",
    productId: "593760ba-8e20-42aa-86b7-b3d7e8280ea4",
    orderId: "711cfb5a-1a43-4873-b57f-2702fff7cc28",
    quantity: 4,
    createdAt: new Date(),
  },
  {
    id: "40e710a1-1c68-475d-a01e-fb48dc9a1efb",
    productId: "be08aeb3-5193-41c7-a32c-cfccfb1b8070",
    orderId: "711cfb5a-1a43-4873-b57f-2702fff7cc28",
    quantity: 1,
    createdAt: new Date(),
  },
  {
    id: "926d3e21-12c5-473e-9248-c531342f497d",
    productId: "f1fb9371-51cf-47e4-9edb-5d2edb0ba0ff",
    orderId: "711cfb5a-1a43-4873-b57f-2702fff7cc28",
    quantity: 4,
    createdAt: new Date(),
  },
];