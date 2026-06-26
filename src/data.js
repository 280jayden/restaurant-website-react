// all the site content lives here so the components stay clean

// hero carousel slides (\n in the title forces the line break)
export const slides = [
  {
    bg: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600',
    title: 'Fast Food\nRestaurant',
    desc: 'Savor the perfect blend of speed and flavor. Our kitchen crafts burgers, fries, and shakes that turn quick bites into unforgettable moments.',
    cta: 'Order Now',
  },
  {
    bg: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600',
    title: 'Handcrafted\nPizzas',
    desc: 'Stone-baked with premium toppings and house-made dough, our pizzas are a slice above the rest.',
    cta: 'View Menu',
  },
  {
    bg: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600',
    title: 'Fresh &\nDelicious',
    desc: 'From farm to table, every ingredient is handpicked to deliver taste that speaks for itself.',
    cta: 'Explore',
  },
];

// menu cards - category is what the filter buttons match against
export const menuItems = [
  { id: 1, category: 'burgers', name: 'Classic Smash Burger', desc: 'Double beef patty, cheddar, lettuce, tomato, house sauce', price: 9.99, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' },
  { id: 2, category: 'burgers', name: 'BBQ Bacon Burger', desc: 'Angus beef, crispy bacon, onion rings, BBQ glaze', price: 11.99, img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400' },
  { id: 3, category: 'burgers', name: 'Mushroom Swiss Burger', desc: 'Sauteed mushrooms, Swiss cheese, garlic aioli', price: 10.49, img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee15d?w=400' },
  { id: 4, category: 'pizza', name: 'Margherita Pizza', desc: 'San Marzano tomatoes, fresh mozzarella, basil', price: 12.99, img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400' },
  { id: 5, category: 'pizza', name: 'Pepperoni Pizza', desc: 'Loaded pepperoni, mozzarella, marinara sauce', price: 13.99, img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400' },
  { id: 6, category: 'pizza', name: 'BBQ Chicken Pizza', desc: 'Grilled chicken, red onion, cilantro, BBQ sauce', price: 14.49, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400' },
  { id: 7, category: 'sides', name: 'Loaded Fries', desc: 'Crispy fries, cheese sauce, bacon bits, chives', price: 5.99, img: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400' },
  { id: 8, category: 'sides', name: 'Onion Rings', desc: 'Beer-battered, golden fried, served with ranch dip', price: 4.99, img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400' },
  { id: 9, category: 'drinks', name: 'Chocolate Milkshake', desc: 'Rich chocolate ice cream, whipped cream, drizzle', price: 5.49, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400' },
  { id: 10, category: 'drinks', name: 'Fresh Lemonade', desc: 'Hand-squeezed lemons, cane sugar, fresh mint', price: 3.99, img: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400' },
];

// photos for the gallery slider
export const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600', alt: 'Restaurant interior with warm lighting' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600', alt: 'Bar area with ambient lighting' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600', alt: 'Beautifully plated steak dish' },
  { src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600', alt: 'Colorful tacos arrangement' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600', alt: 'Fine dining presentation' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600', alt: 'Outdoor patio dining area' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600', alt: 'Wood-fired pizza' },
  { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600', alt: 'Chef preparing food' },
];
