import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { servicesData } from "../data/ServicesData";
import {
  Package,
  FileText,
  File,
  Heart,
  ShoppingBag,
  Zap,
  Plane,
  Shield,
  CheckCircle,
  Calendar,
  Users,
  Stethoscope,
  Home,
  ShoppingCart,
  Pill,
  Gift,
  CreditCard,
  MapPin,
  Building,
  Train,
  Info,
  Plus,
  Minus,
  Bus,
  // Adding import icons
  Globe,
  Truck,
  Cross,
  Car,
} from "lucide-react";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
// ===================== Service Data =====================
// const servicesData = [
//   {
//     id: "passport-visa",
//     name: "Passport & Visa Assistance",
//     tagline: "YOUR TRAVEL DOCUMENTATION EXPERTS",
//     description:
//       "Complete support for passports, visas, and travel documentation.",
//     packagePrice: 200,
//     included: [
//       "Pickup & Drop",
//       "Document Verification",
//       "Appointment Booking",
//       "Office Support",
//     ],
//     backgroundImage:
//       "https://www.uniglobemkov.com/content/1721996217-5601-20241109045129_blog.jpg",
//     heroImage:
//       "https://www.visaadvisor.in/images/client/Visa-Requirements.jpg",
//     icon: "file-text",
//     emoji: "✈️",
//     steps: [
//       { title: "Book Service", description: "Choose what you need" },
//       { title: "We Pick You Up", description: "From home or office" },
//       { title: "Handle Process", description: "Documents, appointments" },
//       { title: "All Done", description: "Delivered safely back" },
//     ],
//     internalServices: [
//       {
//         id: "airport-pickup-drop",
//         name: "Airport Pickup & Drop",
//         description: "Safe transport to/from airport",
//         price: 50,
//         icon: "plane",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMuBkbuU1iITXOOYuKMXJn4FnzNPHN79XiUg&s"
//       },
//       {
//         id: "railway-pickup-drop",
//         name: "Railway Station Pickup & Drop",
//         description: "Transport to/from railway station",
//         price: 30,
//         icon: "train",
//         image: "https://c8.alamy.com/comp/2A5N384/the-kansas-city-light-rail-arrives-at-the-union-station-stop-to-drop-off-and-pick-up-passengers-2A5N384.jpg"
//       },
//       {
//         id: "bus-bay-pickup-drop",
//         name: "Bus Bay Pickup & Drop",
//         description: "Transport to/from bus station",
//         price: 25,
//         icon: "bus",
//         image: "https://www.shutterstock.com/image-photo/transjakarta-buses-picking-dropping-off-260nw-2506508083.jpg"
//       },
//       {
//         id: "passport-office-visit",
//         name: "Passport Office Visit Support",
//         description: "Accompany you to passport office",
//         price: 40,
//         icon: "map-pin",
//         image: "https://media.istockphoto.com/id/1767011374/photo/specialist-taking-document-to-make-visa.jpg?s=612x612&w=0&k=20&c=NoDdqBIHg6v2tVxdwm_C1j4JMfPqs04_9b5jm4Xl5Vg="
//       },
//       {
//         id: "visa-office-visit",
//         name: "Visa Office Visit Support",
//         description: "Accompany you to visa office",
//         price: 45,
//         icon: "building",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmIIFZcO5HDU1VHJHS8wqZ0YWpXFmG7r55-w&s"
//       },
//       {
//         id: "document-verification",
//         name: "Document Verification",
//         description: "Check all your documents",
//         price: 35,
//         icon: "check-circle",
//         image: "https://www.proplegal.in/wp-content/uploads/2017/07/online-property-document-verification-bangalore.jpeg"
//       },
//       {
//         id: "appointment-booking",
//         name: "Appointment Booking",
//         description: "Book your official appointments",
//         price: 30,
//         icon: "calendar",
//         image: "https://www.shutterstock.com/image-photo/businessman-scheduling-digital-calendar-on-600nw-2622184481.jpg"
//       },
//       {
//         id: "accommodation-booking",
//         name: "Accommodation Booking",
//         description: "Hotel/stay arrangements",
//         price: 40,
//         icon: "home",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTn5Vt82nFP8JHHggRfX7RsinjINue5ZdSQ&s"
//       },
//       {
//         id: "complete-support-package",
//         name: "Complete Support Package",
//         description: "Full service from start to finish",
//         price: 200,
//         icon: "package",
//         image: "https://completescsolutions.com/assets/uploads/slider4.jpg"
//       },
//     ],
//   },
//   {
//     id: "package-courier",
//     name: "Package & Courier",
//     tagline: "FAST & RELIABLE DELIVERY",
//     description: "Local, large, and international deliveries handled safely.",
//     packagePrice: 180,
//     backgroundImage:
//       "https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?auto=format&q=80&w=1080",
//     heroImage:
//       "https://t4.ftcdn.net/jpg/03/84/36/83/360_F_384368336_YuhIpjNDJ3mkiLcPlFRVqPC5pgMyCwLa.jpg",
//     icon: "package",
//     emoji: "📦",
//     steps: [
//       { title: "Book Delivery", description: "Add pickup & drop location" },
//       { title: "We Pick Up", description: "Collect your package" },
//       { title: "In Transit", description: "Safe & tracked delivery" },
//       { title: "Delivered", description: "Package reaches destination" },
//     ],
//     internalServices: [
//       // Core courier services
//       {
//         id: "abroad-courier",
//         name: "Abroad Courier",
//         description: "Send packages internationally",
//         price: 100,
//         icon: "globe",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucb_Rf_c37hInap5rTd7HwHIZiE1giiB9zA&s"
//       },
//       {
//         id: "large-courier",
//         name: "Large Courier",
//         description: "Transport for bulky items",
//         price: 80,
//         icon: "truck",
//         image: "https://www.shutterstock.com/image-photo/delivery-man-wearing-uniform-unloading-600nw-2514298405.jpg"
//       },
//       {
//         id: "express-delivery",
//         name: "Express Delivery",
//         description: "Delivery within 4 hours",
//         price: 40,
//         icon: "zap",
//         image: "data:image/png;base64,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"
//       },
//       {
//         id: "same-day",
//         name: "Same-Day Delivery",
//         description: "Delivered within 24 hours",
//         price: 25,
//         icon: "calendar",
//         image: "https://st2.depositphotos.com/1074452/5599/i/450/depositphotos_55999861-stock-photo-same-day-delivery-means-fast.jpg"
//       },
//       {
//         id: "fragile-item",
//         name: "Fragile Item Handling",
//         description: "Careful delivery for delicate items",
//         price: 30,
//         icon: "shield",
//         image: "https://img.freepik.com/free-photo/man-warehouse-working-with-packages_23-2148886849.jpg?semt=ais_hybrid&w=740&q=80"
//       },
//       {
//         id: "document-courier",
//         name: "Document Courier",
//         description: "Fast delivery for important papers",
//         price: 20,
//         icon: "file-text",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2pnB5yGuNEDVm8On1Tm85Tldr_liUIOCqg&s"
//       },
//       {
//         id: "pickup-drop",
//         name: "Pickup & Drop",
//         description: "Standard pickup & drop service",
//         price: 20,
//         icon: "home",
//         image: "https://5.imimg.com/data5/SELLER/Default/2022/10/GP/KO/OQ/99318964/airport-pickup-drop-service-500x500.jpeg"
//       },
//       // Shopping & special errands
//       {
//         id: "clothes-shopping",
//         name: "Clothes & Accessory Shopping",
//         description: "Buy & deliver fashion items",
//         price: 40,
//         icon: "shopping-bag",
//         image: "https://www.shutterstock.com/image-photo/fashion-shopping-friends-choice-clothes-600w-2472680449.jpg"
//       },
//       {
//         id: "medicine-pickup",
//         name: "Medicine Pickup",
//         description: "Pickup prescribed medicines",
//         price: 25,
//         icon: "cross",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6wJBtLqECZjw8MaNumFtBg4Tj5Y-APs7yg&s"
//       },
//       {
//         id: "special-item-shopping",
//         name: "Special Item Shopping",
//         description: "Custom items or rare finds",
//         price: 35,
//         icon: "gift",
//         image: "https://media.istockphoto.com/id/2153511740/photo/our-favorite-thing-to-do-is-shopping.jpg?s=612x612&w=0&k=20&c=b7I5caCrIhtNQpV76RK4HVqQwV_nvrptjOoFIcDBwz8="
//       },
//       {
//         id: "gift-shopping",
//         name: "Gift Shopping & Delivery",
//         description: "Shop and deliver gifts",
//         price: 30,
//         icon: "gift",
//         image: "https://assets.oyegifts.com/flowers-n-gifts/vendordata/resized/unbox193.jpg"
//       },
//       {
//         id: "complete-package",
//         name: "Complete Courier Package",
//         description: "All-in-one delivery service",
//         price: 180,
//         icon: "package",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMw9_iHcVjFY7XLot4bcIELVu_gesqcTOK4w&s"
//       },
//     ],
//   },
//   {
//     id: "family-elder-care",
//     name: "Family & Elder Care",
//     tagline: "CARING FOR YOUR LOVED ONES",
//     description: "Professional and compassionate family care.",
//     packagePrice: 220,
//     backgroundImage:
//       "https://media.istockphoto.com/id/1178548716/photo/female-nurse-and-family-with-senior-patient-at-home.jpg?s=612x612&w=0&k=20&c=iU6xyRuETwO1Dti6K9YWUpGMPgD8FAVeSGeG3li8e7I=",
//     heroImage:
//       "https://t4.ftcdn.net/jpg/01/67/77/85/360_F_167778573_NBEZK9uISYk6zct9d24qguwPnZGnkTUx.jpg",
//     icon: "heart",
//     emoji: "❤️",
//     steps: [
//       { title: "Book Care Service", description: "Tell us your needs" },
//       { title: "We Schedule", description: "Choose time & frequency" },
//       { title: "We Care", description: "Trained helpers visit" },
//       { title: "Stay Updated", description: "You get regular updates" },
//     ],
//     internalServices: [
//       {
//         id: "monthly-checkup",
//         name: "Monthly Health Checkup",
//         description: "Regular medical assessments",
//         price: 70,
//         icon: "stethoscope",
//         image: "https://www.shutterstock.com/image-photo/doctor-listening-girls-breathing-heartbeats-600nw-2387615713.jpg"
//       },
//       {
//         id: "hospital-pickup-drop",
//         name: "Hospital Pickup & Drop",
//         description: "Safe transport to hospital",
//         price: 50,
//         icon: "car",
//         image: "https://thumbs.dreamstime.com/b/ambulance-leaving-hospital-emergency-25281373.jpg"
//       },
//       {
//         id: "appointment-booking",
//         name: "Doctor Appointment Booking",
//         description: "Book doctor visits",
//         price: 30,
//         icon: "calendar",
//         image: "https://mobisoftinfotech.com/resources/wp-content/uploads/2018/07/Banner-1.png"
//       },
//       {
//         id: "doctor-report-handling",
//         name: "Doctor Reports & Documents",
//         description: "Collect, store, and share results",
//         price: 35,
//         icon: "file-text",
//         image: "https://media.istockphoto.com/id/174778357/photo/young-female-doctor-reviewing-file-in-examination-room.jpg?s=612x612&w=0&k=20&c=fXxtzyYRvP8cHhqvh8Lxut8sP87h2V6JCi5lQEhQVLE="
//       },
//       {
//         id: "medicine-refill",
//         name: "Regular Medicine Refill",
//         description: "Monthly medicine subscriptions",
//         price: 25,
//         icon: "pill",
//         image: "https://media.istockphoto.com/id/1483742423/photo/pharmacist-chemist-woman-standing-refills-the-shelves-with-new-stocks-in-pharmacy.jpg?s=612x612&w=0&k=20&c=mqMjyuSWbdLCRQDxwHsVjqp2mEFPFyCGQr85-iivrfo="
//       },
//       {
//         id: "city-hospital-pickup",
//         name: "Out-of-Town Hospital Pickup",
//         description: "Pickup for patients coming from other cities",
//         price: 60,
//         icon: "bus",
//         image: "https://media.gettyimages.com/id/1452316636/photo/paramedics-taking-patient-on-stretcher-from-ambulance-to-hospital.jpg?s=612x612&w=gi&k=20&c=EBp2uBWuSR-hntGW8BwycKrkfFThK0ewuSZD5ORl4Fw="
//       },
//       {
//         id: "hospital-care-package",
//         name: "Hospital Visit Package",
//         description:
//           "Pickup, appointment, medicine refill & report handling combined",
//         price: 220,
//         icon: "package",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFa4jj2Ze1FKuXvmmgqge6TQPh4stuaALh3A&s"
//       },
//     ],
//   },


// // Add Personal shopping & Errands data 
//   {
//   id: "personal-shopping",
//   name: "Personal Shopping & Errands",
//   tagline: "YOUR SHOPPING ASSISTANT",
//   description: "We shop so you can relax",
//   packagePrice: 150,
//   backgroundImage:
//       "https://www.maxicabsgstransport.com/wp-content/uploads/2021/02/Service-Image8.jpg",
//   heroImage:
//       "https://media.istockphoto.com/id/109723968/photo/young-woman-on-a-cellphone-at-the-supermarket.jpg?s=170667a&w=0&k=20&c=6fL-snCJS30tgSjLGxwXthNkEefMxq0jNZ2K9lH3eCU=",
//   icon: "shopping-bag",
//   emoji: "🛒",
//   included: [
//       "List-based Shopping",
//       "Quality Selection",
//       "Home Delivery",
//       "Bill Payment"
//     ],
//   steps: [
//       { title: "Send List", description: "Share your shopping list" },
//       { title: "We Shop", description: "Buy everything you need" },
//       { title: "Quality Check", description: "Ensure fresh & quality items" },
//       { title: "Home Delivery", description: "Deliver to your door" }
//     ],
//   internalServices: [
//       {
//         id: "grocery-shopping",
//         name: "Grocery Shopping",
//         description: "Weekly grocery & essentials",
//         price: 30,
//         icon: "shopping-cart",
//         image: "https://images.unsplash.com/photo-1759167632930-298bca6b4268?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//         type: "internal"
//       },
//       {
//         id: "medicine-pickup",
//         name: "Medicine Pickup",
//         description: "Pharmacy & prescription collection",
//         price: 20,
//         icon: "pill",
//         image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//         type: "internal"
//       },
//       {
//         id: "gift-shopping",
//         name: "Gift Shopping",
//         description: "Special gifts & wrapping",
//         price: 40,
//         icon: "gift",
//         image: "https://images.unsplash.com/photo-1671393759133-781c76bb8f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//         type: "internal"
//       },
//       {
//         id: "bill-payment",
//         name: "Bill Payment & Errands",
//         description: "Pay bills & run errands",
//         price: 25,
//         icon: "credit-card",
//         image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//         type: "internal"
//       }
//     ]
//   }
// ];

// ===================== Icon Map =====================
const iconMap = {
  package: Package,
  "file-text": FileText,
  heart: Heart,
  "shopping-bag": ShoppingBag,
  zap: Zap,
  plane: Plane,
  shield: Shield,
  "check-circle": CheckCircle,
  calendar: Calendar,
  users: Users,
  stethoscope: Stethoscope,
  home: Home,
  "shopping-cart": ShoppingCart,
  pill: Pill,
  gift: Gift,
  "credit-card": CreditCard,
  "map-pin": MapPin,
  building: Building,
  train: Train,
  bus: Bus,
  info: Info,

  // 🔥 Add missing icons
  globe: Globe,
  truck: Truck,
  cross: Cross,
  car: Car,
  file: File,
};

// ===================== Component =====================
export default function ServiceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData?.find((s) => s?.id === id);
  const [selectedServices, setSelectedServices] = useState({});
  const [learnMoreService, setLearnMoreService] = useState(null);

  if (!service)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Service not found</p>
        <p className="text-gray-600">The service you’re trying to view does not exist.</p>
      </div>
    );

  const ServiceIcon = iconMap[service.icon];
  const updateQuantity = (id, delta) =>
    setSelectedServices((prev) => {
      const newQty = Math.max(0, (prev[id] || 0) + delta);
      if (newQty === 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });

  const calculateTotal = () =>
    Object.entries(selectedServices).reduce((sum, [id, qty]) => {
      const svc = service.internalServices.find((s) => s.id === id);
      return sum + (svc?.price || 0) * qty;
    }, 0);

  // const totalItems = Object.values(selectedServices).reduce((a, b) => a + b, 0);
  // // const handleProceedToBook = () => navigate("/book");
  // const handleProceedToBook = () => navigate("/booking"); 

  // Add logic for navigate tio booking page
  const totalItems = Object.values(selectedServices).reduce((a, b) => a + b, 0);

  const handleProceedToBook = () => {
    navigate("/booking", {
      state: {
        selectedService: service.id,
        selectedInternal: Object.keys(selectedServices),
        quantities: selectedServices,
      },
    });
  };

  return (
    <div className="bg-white ">
      {/* Hero */}
      <div className="bg-white">
        {/* Hero Section */}
        <section
          className="relative py-28 lg:py-32 overflow-hidden"
          style={{
            backgroundImage: service?.backgroundImage ? `url(${service.backgroundImage})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT CONTENT */}
              <div className="text-white space-y-5">
                {/* Icons Row */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <ServiceIcon size={36} className="text-white" />
                  </div>
                  <span className="text-6xl">{service.emoji}</span>
                </div>

                {/* Tagline */}
                <p className="text-[#708238] uppercase tracking-widest text-sm">
                  {service?.tagline || "no tagline"}
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl drop-shadow-lg">
                  {service?.name || "Unnamed Service"}
                </h1>

                <p className="opacity-90 text-base sm:text-lg lg:text-xl drop-shadow-md leading-relaxed">
                  {service?.description ?? "No description available"}
                </p>

                {/* Title */}
                <div className="mt-6">
                  <div className="bg-[#556B2F] text-white p-6 md:p-8 rounded-3xl shadow-xl border border-white/20 max-w-lg">

                    {/* Title */}
                    <p className="text-sm opacity-90">Complete Package</p>

                    {/* Price + /service */}
                    <div className="flex items-end gap-2 mt-1">
                      <p className="text-5xl font-bold leading-none">${service?.packagePrice || 0}</p>
                      <span className="text-lg opacity-90 mb-1">/ service</span>
                    </div>

                    {/* Includes Text */}
                    <p className="text-sm mt-4 opacity-90 leading-relaxed">
                      Includes: {service.includes.join(", ")}
                    </p>

                  </div>
                </div>

              </div>

              {/* RIGHT HERO IMAGE */}
              {/* <img
                src={service.heroImage}
                alt={service.name}
                className="rounded-3xl shadow-2xl border-4 border-white/20 h-[430px] w-full object-cover"
              /> */}
            </div>
          </div>
        </section>
      </div>


      {/* Banner */}
      <section className="bg-[#708238] py-6 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Services Available</h3>
            <p className="text-white/80 text-sm">
              Select multiple to see total price
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            {service.internalServices.slice(0, 4).map((i) => {
              const Icon = iconMap[i.icon];
              return (
                <div
                  key={i.id}
                  className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <Icon size={18} /> {i.name}
                </div>
              );
            })}
            {service.internalServices.length > 4 && (
              <div className="bg-white/20 px-4 py-2 rounded-full">
                +{service.internalServices.length - 4} more
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What We Offer */}

      {/* What We Offer */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <p className="text-[#556B2F] uppercase tracking-wider mb-2 text-xs sm:text-sm">What we offer</p>
          <h2 className="text-[#3A4D47] text-2xl sm:text-3xl mb-2">Choose What You Need</h2>
          <p className="text-[#5a5a5a] text-sm sm:text-base">Click any card to see full details</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.internalServices.map((svc) => {
            const Icon = iconMap[svc.icon];
            const qty = selectedServices[svc.id] || 0;

            return (
              <div
                key={svc.id}
                className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-[260px]"
              >
                {/* IMAGE */}
                <img
                  src={svc?.image || fallbackImage}
                  alt={svc?.name ?? "Unknown services"}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>

                {/* PRICE BADGE */}
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-[#708238] shadow">
                  ${svc?.price || 0}
                </div>

                {/* ICON TOP RIGHT */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#708238] flex items-center justify-center shadow">
                  <Icon size={22} className="text-white" />
                </div>

                {/* TITLE + DESCRIPTION */}
                <div className="absolute bottom-20 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold">{svc?.name ?? "Unknown name"}</h3>
                  <p className="text-sm opacity-90">{svc?.description || "No description"}</p>
                </div>

                {/* ADD / QTY SECTION */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">

                  {/* ADD / QTY SECTION - full width */}
                  <div className="flex-1">
                    {qty === 0 ? (
                      <button
                        onClick={() => updateQuantity(svc.id, 1)}
                        className="w-full bg-[#708238] text-white py-2 rounded-full font-medium"
                      >
                        + Add
                      </button>
                    ) : (
                      <div className="flex items-center justify-between w-full px-4 py-2 
                    bg-black/40 backdrop-blur-md rounded-full">

                        {/* Minus Button */}
                        <button
                          onClick={() => updateQuantity(svc.id, -1)}
                          className="w-10 h-10 flex items-center justify-center 
                   rounded-full bg-white/20 backdrop-blur-md
                   text-white text-xl font-bold"
                        >
                          –
                        </button>

                        {/* Quantity */}
                        <div className="text-white font-semibold text-lg w-10 text-center">
                          {qty}
                        </div>

                        {/* Plus Button */}
                        <button
                          onClick={() => updateQuantity(svc.id, 1)}
                          className="w-10 h-10 flex items-center justify-center 
                   rounded-full bg-white/20 backdrop-blur-md
                   text-white text-xl font-bold"
                        >
                          +
                        </button>


                      </div>
                    )}
                  </div>


                  {/* INFO BUTTON */}
                  <button
                    onClick={() => setLearnMoreService(svc)}
                    className="px-4 py-2 rounded-full border-2 border-gray-300 text-white 
             bg-transparent hover:bg-gray-200/30 transition-colors"
                  >
                    <Info size={14} className="sm:w-4 sm:h-4" />
                  </button>
                </div>

              </div>


            );
          })}
        </div>
      </section>



      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-[#3A4D47] mb-2">
            How It Works
          </h2>
          <p className="text-[#5a5a5a] mb-10">
            Follow these simple steps to get started!
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {service.steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-100 rounded-3xl p-6 shadow hover:shadow-lg"
              >
                <div className="text-4xl mb-3">{i + 1}️⃣</div>
                <h3 className="font-semibold text-[#3A4D47] mb-1">{s.title}</h3>
                <p className="text-[#5a5a5a] text-sm">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Cart */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t-2 border-[#708238] shadow-2xl z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-[#708238] font-semibold">
                  {totalItems} {totalItems === 1 ? "service" : "services"}{" "}
                  selected
                </p>
                <div className="text-3xl text-[#708238] font-bold mt-1">
                  Total: ${calculateTotal()}
                </div>
              </div>
              <button
                onClick={handleProceedToBook}
                className="bg-[#708238] text-white px-8 py-4 rounded-full hover:bg-[#708238] transition-colors shadow-lg text-lg w-full sm:w-auto"
              >
                Proceed to Book
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
