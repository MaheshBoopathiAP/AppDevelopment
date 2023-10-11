 import { configureStore, createSlice } from '@reduxjs/toolkit';
 import userReducer from './userSlice'


// Define your featured products slice
const featuredProductsSlice = createSlice({
  name: 'featuredProducts',
  initialState: {
    products: [
      {
        id: 1,
        name: 'chain G80',
        description: 'Agricultural chain hardware, often referred to as farm or agri chain hardware, encompasses a wide range of mechanical components and fasteners used in farming and agricultural applications.',
        imageUrl: 'https://images.pexels.com/photos/220237/pexels-photo-220237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stocks: 10,
        price:7000,
      },
      {
        id: 2,
        name: "Ropes",
        description: 'Agricultural ropes, often referred to simply as agri ropes or farm ropes, are specialized types of ropes designed for various applications in agriculture and farming. These ropes are typically made from durable and weather-resistant materials to withstand the demands of outdoor use in agricultural settings. ',
        imageUrl: 'https://images.pexels.com/photos/39279/ship-traffic-jams-rope-dew-cordage-39279.jpeg?auto=compress&cs=tinysrgb&w=600',
        stocks: 20,
        price:3000,
      },
      {
        id: 3,
        name: "Lift Strap",
        description: 'A lift strap, also known as a lifting strap or lifting sling, is a piece of material or device designed to assist in lifting and moving heavy or awkward objects. These straps are commonly used in various industries, including construction, manufacturing, logistics, and materials handling. ',
        imageUrl: 'https://i.ebayimg.com/images/g/eLoAAOSwxhdlCfPr/s-l1600.jpg',
        stocks: 30,
        price:1000,
      },
      {
        id: 4,
        name: "Layflat Hose",
        description: 'A layflat hose, also known as a lay-flat hose or discharge hose, is a type of flexible hose used for temporary water transfer and fluid discharge applications. These hoses are designed to be easily stored when not in use because they can be flattened or rolled up.',
        imageUrl: 'http://dutronindia.com//wp-content/uploads/flat-hose-prd2.jpg',
        stocks: 70,
        price:600,
      },
      {
        id: 5,
        name: "Hose Clamp",
        description: 'A hose clamp, also known as a hose clip or hose lock, is a mechanical device used to secure a hose onto a fitting, nozzle, or barb. Hose clamps are commonly used in various applications to prevent leaks and ensure a secure connection between hoses and other components.',
        imageUrl: 'https://images.pexels.com/photos/666013/pexels-photo-666013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stocks: 100,
        price:200,
      },
      {
        id: 6,
        name: "Gate Valve",
        description: 'An agricultural gate valve, also known simply as a gate valve, is a type of valve commonly used in agricultural applications to control the flow of fluids, particularly water. Gate valves are designed to be fully open or fully closed, and they are not suitable for regulating flow like some other types of valves. ',
        imageUrl: 'https://www.scottsdaleplumbing.com/wp-content/uploads/2016/12/water-shutoff-valves-768x512@2x.jpg',
        stocks: 130,
        price:900,
      },
      {
        id: 7,
        name: "Sprinklers",
        description: 'Sprinklers are devices used for the controlled distribution of water in a spray or shower pattern. They are commonly employed for irrigation purposes, fire suppression, and even in recreational settings.',
        imageUrl: 'https://images.pexels.com/photos/750830/pexels-photo-750830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stocks: 130,
        price:5000,
      },
      {
        id: 8,
        name: "Water Pumps",
        description: 'Water pumps are mechanical devices designed to move water from one place to another. They are commonly used in various applications, including agriculture, industry, and residential settings.',
        imageUrl: 'https://5.imimg.com/data5/ANDROID/Default/2020/10/VC/WE/NA/2005274/img-20201006-wa0015-jpg-1000x1000.jpg',
        stocks: 230,
        price:22500,
      },
      {
        id: 9,
        name: "Shovels",
        description: 'A shovel is a common hand tool used in agriculture, gardening, construction, and various outdoor activities. It consists of a blade or scoop-shaped metal or plastic head attached to a long handle.',
        imageUrl: 'http://i.kinja-img.com/gawker-media/image/upload/s--P62kdpUt--/18l8wp6zl0z9cjpg.jpg',
        stocks: 130,
        price:1700,
      },
      {
        id: 10,
        name: "Gloves",
        description: 'These gloves are essential for providing protection, comfort, and grip while working with different materials and in different environmental conditions on the farm or in the garden. ',
        imageUrl: 'https://stmaaprodfwsite.blob.core.windows.net/assets/sites/1/2020/06/Gloves-StanleyRazorGripper_aIMG_9658_NoCredit.jpg',
        stocks: 230,
        price:1000,
      },
      {
        id: 11,
        name: "Plows",
        description: ' Plows typically consist of a sturdy frame with one or more blades or plowshares attached. These blades penetrate the soil as the plow is pulled by a tractor or draft animals.',
        imageUrl: 'https://images.pexels.com/photos/18135422/pexels-photo-18135422/free-photo-of-tractor-plowing-the-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stocks: 150,
        price:30000,
      },
      {
        id: 12,
        name: "Balers",
        description: 'Balers are designed to efficiently gather loose materials, compress them into dense bales, and secure them with twine, wire, or other binding materials. ',
        imageUrl: 'http://blog.machinefinder.com/wp-content/uploads/2015/02/900-Series-Balers.jpg',
        stocks: 170,
        price:20000,
      },
    ],
  },
  reducers: {},
});
const store = configureStore({
    reducer: {
      featuredProducts: featuredProductsSlice.reducer,
      user:userReducer,

      

    

    },
  });

 export default store