// 

import PropTypes from "prop-types";
 
// Internal Service Shape
export const InternalServicePropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  details: PropTypes.string,
  imageUrl: PropTypes.string,
  type: PropTypes.string,
});
 
// Step Shape
export const StepPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});
 
// Service Shape
export const ServicePropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  heroImage: PropTypes.string,
  backgroundImage: PropTypes.string,
  icon: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  packagePrice: PropTypes.number.isRequired,
  included: PropTypes.arrayOf(PropTypes.string).isRequired,
  internalServices: PropTypes.arrayOf(InternalServicePropType).isRequired,
  steps: PropTypes.arrayOf(StepPropType).isRequired,
});
 
// ----------------------------------------
// FINAL PURE JS DATA (NO TYPESCRIPT)
// ----------------------------------------
 
 
 
 
export const servicesData = [
  {
    id: "passport-visa",
    name: "Passport & Visa Assistance",
    tagline: "YOUR TRAVEL DOCUMENTATION EXPERTS",
    description: "Complete support for passports, visas, and travel documentation.",
    packagePrice: 200,
    included: [
      "Pickup & Drop",
      "Document Verification",
      "Appointment Booking",
      "Office Support",
    ],
    backgroundImage: "https://www.uniglobemkov.com/content/1721996217-5601-20241109045129_blog.jpg",
    heroImage: "https://www.visaadvisor.in/images/client/Visa-Requirements.jpg",
    icon: "file-text",
    emoji: "✈️",
    steps: [
      { title: "Book Service", description: "Choose what you need" },
      { title: "We Pick You Up", description: "From home or office" },
      { title: "Handle Process", description: "Documents, appointments" },
      { title: "All Done", description: "Delivered safely back" },
    ],
    internalServices: [
      {
        id: "airport-pickup-drop",
        name: "Airport Pickup & Drop",
        description: "Safe transport to/from airport",
        price: 50,
        icon: "plane",
        details: "Comfortable pick up and drop service from any airport location",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMuBkbuU1iITXOOYuKMXJn4FnzNPHN79XiUg&s",
        type: "internal"
      },
      {
        id: "railway-pickup-drop",
        name: "Railway Station Pickup & Drop",
        description: "Transport to/from railway station",
        price: 30,
        icon: "train",
        details: "Reliable service from all major railway stations",
        image: "https://resizer.nationalworld.com/ac128847-9082-4b86-ae04-489f63abf9f8.jpg?tr=w-1200",
        type: "internal"
      },
      {
        id: "bus-bay-pickup-drop",
        name: "Bus Bay Pickup & Drop",
        description: "Transport to/from bus station",
        price: 25,
        icon: "bus",
        details: "Quick pickup and drop from bus terminals",
        image: "https://www.shutterstock.com/image-photo/transjakarta-buses-picking-dropping-off-260nw-2506508083.jpg",
        type: "internal"
      },
      {
        id: "passport-office-visit",
        name: "Passport Office Visit Support",
        description: "Accompany you to passport office",
        price: 40,
        icon: "map-pin",
        details: "We take you to the passport office and assist throughout",
        image: "https://media.istockphoto.com/id/1767011374/photo/specialist-taking-document-to-make-visa.jpg?s=612x612&w=0&k=20&c=NoDdqBIHg6v2tVxdwm_C1j4JMfPqs04_9b5jm4Xl5Vg=",
        type: "internal"
      },
      {
        id: "visa-office-visit",
        name: "Visa Office Visit Support",
        description: "Accompany you to visa office",
        price: 45,
        icon: "building",
        details: "Complete assistance at visa centers and embassies",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmIIFZcO5HDU1VHJHS8wqZ0YWpXFmG7r55-w&s",
        type: "internal"
      },
      {
        id: "document-verification",
        name: "Document Verification",
        description: "Check all your documents",
        price: 35,
        icon: "check-circle",
        details: "Thorough verification of all required documents before submission",
        image: "https://www.proplegal.in/wp-content/uploads/2017/07/online-property-document-verification-bangalore.jpeg",
        type: "internal"
      },
      {
        id: "appointment-booking",
        name: "Appointment Booking",
        description: "Book your official appointments",
        price: 30,
        icon: "calendar",
        details: "We schedule appointments at passport/visa offices for you",
        image: "https://www.shutterstock.com/image-photo/businessman-scheduling-digital-calendar-on-600nw-2622184481.jpg",
        type: "internal"
      },
      {
        id: "accommodation-booking",
        name: "Accommodation Booking",
        description: "Hotel/stay arrangements",
        price: 40,
        icon: "home",
        details: "Book hotels or guest houses near offices for your convenience",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTn5Vt82nFP8JHHggRfX7RsinjINue5ZdSQ&s",
        type: "internal"
      },
      {
        id: "complete-support-package",
        name: "Complete Support Package",
        description: "Full service from start to finish",
        price: 200,
        icon: "package",
        details: "All-inclusive: pickup, documents, appointments, accommodation & drop",
        image: "https://completescsolutions.com/assets/uploads/slider4.jpg",
        type: "internal"
      }
    ]
  },
  {
    id: "package-courier",
    name: "Package & Courier",
    tagline: "FAST & RELIABLE DELIVERY",
    description: "Local, large, and international deliveries handled safely.",
    packagePrice: 180,
    backgroundImage: "https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?auto=format&q=80&w=1080",
    heroImage: "https://t4.ftcdn.net/jpg/03/84/36/83/360_F_384368336_YuhIpjNDJ3mkiLcPlFRVqPC5pgMyCwLa.jpg",
    icon: "package",
    emoji: "📦",
    included: [
      "Pickup & Delivery",
      "Package Tracking",
      "Safe Handling",
      "Insurance Option"
    ],
    steps: [
      { title: "Book Delivery", description: "Add pickup & drop location" },
      { title: "We Pick Up", description: "Collect your package" },
      { title: "In Transit", description: "Safe & tracked delivery" },
      { title: "Delivered", description: "Package reaches destination" },
    ],
    internalServices: [
      {
        id: "abroad-courier",
        name: "Abroad Courier",
        description: "Send packages internationally",
        price: 100,
        icon: "plane",
        details: "International shipping with customs support",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucb_Rf_c37hInap5rTd7HwHIZiE1giiB9zA&s",
        type: "internal"
      },
      {
        id: "large-courier",
        name: "Large Courier",
        description: "Transport for bulky items",
        price: 80,
        icon: "package",
        details: "Special handling for large and heavy items",
        image: "https://www.shutterstock.com/image-photo/delivery-man-wearing-uniform-unloading-600nw-2514298405.jpg",
        type: "internal"
      },
      {
        id: "express-delivery",
        name: "Express Delivery",
        description: "Delivery within 4 hours",
        price: 40,
        icon: "zap",
        image: "https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?auto=format&q=80&w=1080",
        type: "internal"
      },
      {
        id: "same-day",
        name: "Same-Day Delivery",
        description: "Delivered within 24 hours",
        price: 25,
        icon: "calendar",
        image: "https://st2.depositphotos.com/1074452/5599/i/450/depositphotos_55999861-stock-photo-same-day-delivery-means-fast.jpg",
        type: "internal"
      },
      {
        id: "fragile-item",
        name: "Fragile Item Handling",
        description: "Careful delivery for delicate items",
        price: 30,
        icon: "shield",
        image: "https://img.freepik.com/free-photo/man-warehouse-working-with-packages_23-2148886849.jpg?semt=ais_hybrid&w=740&q=80",
        type: "internal"
      },
      {
        id: "document-courier",
        name: "Document Courier",
        description: "Fast delivery for important papers",
        price: 20,
        icon: "file",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2pnB5yGuNEDVm8On1Tm85Tldr_liUIOCqg&s",
        type: "internal"
      },
      {
        id: "pickup-drop",
        name: "Pickup & Drop",
        description: "Standard pickup & drop service",
        price: 20,
        icon: "home",
        image: "https://5.imimg.com/data5/SELLER/Default/2022/10/GP/KO/OQ/99318964/airport-pickup-drop-service-500x500.jpeg",
        type: "internal"
      },
      {
        id: "clothes-shopping",
        name: "Clothes & Accessory Shopping",
        description: "Buy & deliver fashion items",
        price: 40,
        icon: "shopping-bag",
        image: "https://www.shutterstock.com/image-photo/fashion-shopping-friends-choice-clothes-600w-2472680449.jpg",
        type: "internal"
      },
      {
        id: "medicine-pickup",
        name: "Medicine Pickup",
        description: "Pickup prescribed medicines",
        price: 25,
        icon: "pill",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6wJBtLqECZjw8MaNumFtBg4Tj5Y-APs7yg&s",
        type: "internal"
      },
      {
        id: "special-item-shopping",
        name: "Special Item Shopping",
        description: "Custom items or rare finds",
        price: 35,
        icon: "gift",
        image: "https://media.istockphoto.com/id/2153511740/photo/our-favorite-thing-to-do-is-shopping.jpg?s=612x612&w=0&k=20&c=b7I5caCrIhtNQpV76RK4HVqQwV_nvrptjOoFIcDBwz8=",
        type: "internal"
      },
      {
        id: "gift-shopping",
        name: "Gift Shopping & Delivery",
        description: "Shop and deliver gifts",
        price: 30,
        icon: "gift",
        image: "https://assets.oyegifts.com/flowers-n-gifts/vendordata/resized/unbox193.jpg",
        type: "internal"
      },
      {
        id: "complete-package",
        name: "Complete Courier Package",
        description: "All-in-one delivery service",
        price: 180,
        icon: "package",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMw9_iHcVjFY7XLot4bcIELVu_gesqcTOK4w&s",
        type: "internal"
      }
    ]
  },
 
  // -----------------------
  // (Next service continues…)
  // -----------------------
 
  {
    id: "family-elder-care",
    name: "Family & Elder Care",
    tagline: "CARING FOR YOUR LOVED ONES",
    description: "Professional and compassionate family care.",
    packagePrice: 220,
    backgroundImage: "https://media.istockphoto.com/id/1178548716/photo/female-nurse-and-family-with-senior-patient-at-home.jpg?s=612x612&w=0&k=20&c=iU6xyRuETwO1Dti6K9YWUpGMPgD8FAVeSGeG3li8e7I=",
    heroImage: "https://t4.ftcdn.net/jpg/01/67/77/85/360_F_167778573_NBEZK9uISYk6zct9d24qguwPnZGnkTUx.jpg",
    icon: "heart",
    emoji: "❤️",
    included: [
      "Health Monitoring",
      "Transportation",
      "Medical Support",
      "Regular Updates"
    ],
    steps: [
      { title: "Book Care Service", description: "Tell us your needs" },
      { title: "We Schedule", description: "Choose time & frequency" },
      { title: "We Care", description: "Trained helpers visit" },
      { title: "Stay Updated", description: "You get regular updates" },
    ],
    internalServices: [
      {
        id: "monthly-checkup",
        name: "Monthly Health Checkup",
        description: "Regular medical assessments",
        price: 70,
        icon: "stethoscope",
        details: "Comprehensive monthly health screening",
        image: "https://www.shutterstock.com/image-photo/doctor-listening-girls-breathing-heartbeats-600nw-2387615713.jpg",
        type: "internal"
      },
      {
        id: "hospital-pickup-drop",
        name: "Hospital Pickup & Drop",
        description: "Safe transport to hospital",
        price: 50,
        icon: "home",
        details: "Comfortable transportation to medical appointments",
        image: "https://thumbs.dreamstime.com/b/ambulance-leaving-hospital-emergency-25281373.jpg",
        type: "internal"
      },
      {
        id: "appointment-booking",
        name: "Doctor Appointment Booking",
        description: "Book doctor visits",
        price: 30,
        icon: "calendar",
        image: "https://mobisoftinfotech.com/resources/wp-content/uploads/2018/07/Banner-1.png",
        type: "internal"
      },
      {
        id: "doctor-report-handling",
        name: "Doctor Reports & Documents",
        description: "Collect, store, and share results",
        price: 35,
        icon: "file",
        image: "https://media.istockphoto.com/id/174778357/photo/young-female-doctor-reviewing-file-in-examination-room.jpg?s=612x612&w=0&k=20&c=fXxtzyYRvP8cHhqvh8Lxut8sP87h2V6JCi5lQEhQVLE=",
        type: "internal"
      },
      {
        id: "medicine-refill",
        name: "Regular Medicine Refill",
        description: "Monthly medicine subscriptions",
        price: 25,
        icon: "pill",
        image: "https://media.istockphoto.com/id/1483742423/photo/pharmacist-chemist-woman-standing-refills-the-shelves-with-new-stocks-in-pharmacy.jpg?s=612x612&w=0&k=20&c=mqMjyuSWbdLCRQDxwHsVjqp2mEFPFyCGQr85-iivrfo=",
        type: "internal"
      },
      {
        id: "city-hospital-pickup",
        name: "Out-of-Town Hospital Pickup",
        description: "Pickup for patients coming from other cities",
        price: 60,
        icon: "bus",
        image: "https://media.gettyimages.com/id/1452316636/photo/paramedics-taking-patient-on-stretcher-from-ambulance-to-hospital.jpg?s=612x612&w=gi&k=20&c=EBp2uBWuSR-hntGW8BwycKrkfFThK0ewuSZD5ORl4Fw=",
        type: "internal"
      },
      {
        id: "hospital-care-package",
        name: "Hospital Visit Package",
        description: "Pickup, appointment, medicine refill & report handling combined",
        price: 220,
        icon: "package",
        details: "Complete hospital visit support from start to finish",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFa4jj2Ze1FKuXvmmgqge6TQPh4stuaALh3A&s",
        type: "internal"
      }
    ]
  },
  {
    id: "personal-shopping",
    name: "Personal Shopping & Errands",
    tagline: "YOUR SHOPPING ASSISTANT",
    description: "We shop so you can relax",
    packagePrice: 150,
    backgroundImage: "https://www.maxicabsgstransport.com/wp-content/uploads/2021/02/Service-Image8.jpg",
    heroImage: "https://media.istockphoto.com/id/109723968/photo/young-woman-on-a-cellphone-at-the-supermarket.jpg?s=170667a&w=0&k=20&c=6fL-snCJS30tgSjLGxwXthNkEefMxq0jNZ2K9lH3eCU=",
    icon: "shopping-bag",
    emoji: "🛒",
    included: [
      "List-based Shopping",
      "Quality Selection",
      "Home Delivery",
      "Bill Payment"
    ],
    steps: [
      { title: "Send List", description: "Share your shopping list" },
      { title: "We Shop", description: "Buy everything you need" },
      { title: "Quality Check", description: "Ensure fresh & quality items" },
      { title: "Home Delivery", description: "Deliver to your door" }
    ],
    internalServices: [
      {
        id: "grocery-shopping",
        name: "Grocery Shopping",
        description: "Weekly grocery & essentials",
        price: 30,
        icon: "shopping-cart",
        image: "https://images.unsplash.com/photo-1759167632930-298bca6b4268?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        type: "internal"
      },
      {
        id: "medicine-pickup",
        name: "Medicine Pickup",
        description: "Pharmacy & prescription collection",
        price: 20,
        icon: "pill",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        type: "internal"
      },
      {
        id: "gift-shopping",
        name: "Gift Shopping",
        description: "Special gifts & wrapping",
        price: 40,
        icon: "gift",
        image: "https://images.unsplash.com/photo-1671393759133-781c76bb8f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        type: "internal"
      },
      {
        id: "bill-payment",
        name: "Bill Payment & Errands",
        description: "Pay bills & run errands",
        price: 25,
        icon: "credit-card",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        type: "internal"
      }
    ]
  }
];
 