import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define your featured products slice
const featuredProductsSlice = createSlice({
  name: 'featuredProducts',
  initialState: {
    products: [
      {
        id: 1,
        name: 'chain G80 8mm',
        description: 'Grade 80 8mm chain is a heat-treated steel chain with a high strength to weight ratio. ',
        imageUrl: 'https://www.agriandgarden.com/media/catalog/product/cache/1/image/364x364/9df78eab33525d08d6e5fb8d27136e95/C/R/CRCH1001.jpg',
      },
      {
        id: 2,
        name: "Rope Blue 6mm ",
        description: '3 Strand Polypropylene Rope, Single Twist, Breaking Load 600Kg.',
        imageUrl: 'https://www.agriandgarden.com/media/catalog/product/cache/1/image/364x364/9df78eab33525d08d6e5fb8d27136e95/C/R/CRRO1000.jpg',
      },
      {
        id: 3,
        name: "Lift Strap 1 Ton",
        description: 'Can lift heavy load and have long duration.Guggestable for industries',
        imageUrl: 'https://m.media-amazon.com/images/I/71xjbryHc1L._AC_UL480_FMwebp_QL65_.jpg',
      },
      {
        id: 4,
        name: "Pvc layflat Hose",
        description: 'Pvc Layflat Hose Yellow 6 Inch ( Sold Per M ). Not suitable for the production of food stuffs',
        imageUrl: 'https://images.tooled-up.com/artwork/prodzoom/SEALFH1032.jpg?404=default&w=500&h=500&dpr=1.3',
      },
      {
        id: 5,
        name: "Hose Clamp",
        description: 'Hose Clip Bolt Type 23-25mm. Mild steel Trivalent Plated. M5 Bolt is very.',
        imageUrl: 'https://cdn11.bigcommerce.com/s-upcqwyrrdy/images/stencil/640w/products/10431/25637/airmax-aeration-marine-stainless-steel-hose-clamp-1000__86848.1661442508.jpg?c=1',
      },
      {
        id: 6,
        name: "Gate Valve",
        description: 'Ductile Iron Body & Bonnet, Handwheel Operated Resilient Seat.Max Pressure 16 bar.',
        imageUrl: 'https://images.thdstatic.com/productImages/6de3bf68-1ccc-4cd7-a20c-469f00cb7ee3/svn/everbilt-gate-valves-100-405eb-64_300.jpg',
      },
    ],
  },
  reducers: {},
});
const store = configureStore({
    reducer: {
      featuredProducts: featuredProductsSlice.reducer,
      // Add more slices as needed
    },
  });
  
 export default store
