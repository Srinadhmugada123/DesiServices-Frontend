import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { servicesData } from "../data/ServicesData";

export default function HomePage() {
  // ==========================
  // 🧠 DATA SECTION
  // ==========================

  // const servicesData = [
  //   {
  //     id: "passport-visa",
  //     name: "Passport & Visa Assistance",
  //     tagline: "YOUR TRAVEL DOCUMENTATION EXPERTS",
  //     description:
  //       "Complete support for passports, visas, and travel documentation",
  //     heroImage:
  //       "https://images.unsplash.com/photo-1633111158093-c51d43175b77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //     backgroundImage:
  //       "https://images.unsplash.com/photo-1633111158093-c51d43175b77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //     icon: "file-text",
  //     emoji: "✈️",
  //     steps: [
  //       { title: "Book Service", description: "Choose what you need" },
  //       { title: "We Pick You Up", description: "From airport or home" },
  //       {
  //         title: "Handle Process",
  //         description: "Documents, appointments, etc.",
  //       },
  //       { title: "All Done", description: "Drop you back safely" },
  //     ],
  //     internalServices: [
  //       {
  //         id: "airport-pickup-drop",
  //         name: "Airport Pickup & Drop",
  //         description: "Safe transport to/from airport",
  //         price: 50,
  //       },
  //       {
  //         id: "document-verification",
  //         name: "Document Verification",
  //         description: "Check all your documents",
  //         price: 35,
  //       },
  //       {
  //         id: "appointment-booking",
  //         name: "Appointment Booking",
  //         description: "Book your official appointments",
  //         price: 30,
  //       },
  //     ],
  //   },
  //   {
  //     id: "package-courier",
  //     name: "Package & Courier",
  //     tagline: "FAST & RELIABLE DELIVERY",
  //     description: "Safe delivery for all your packages",
  //     heroImage:
  //       "https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //     backgroundImage:
  //       "https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //     icon: "package",
  //     emoji: "📦",
  //     steps: [
  //       {
  //         title: "Book Delivery",
  //         description: "Tell us pickup & drop location",
  //       },
  //       { title: "We Pick Up", description: "Collect your package" },
  //       { title: "Safe Transit", description: "Secure transportation" },
  //       { title: "Delivered", description: "Package reaches safely" },
  //     ],
  //     internalServices: [
  //       {
  //         id: "same-day-delivery",
  //         name: "Same-Day Delivery",
  //         description: "Delivered within 24 hours",
  //         price: 25,
  //       },
  //       {
  //         id: "express-delivery",
  //         name: "Express Delivery",
  //         description: "Priority delivery in 2-4 hours",
  //         price: 40,
  //       },
  //       {
  //         id: "fragile-handling",
  //         name: "Fragile Item Care",
  //         description: "Extra care for delicate items",
  //         price: 30,
  //       },
  //     ],
  //   },
  //   {
  //     id: "family-elder-care",
  //     name: "Family & Elder Care",
  //     tagline: "CARING FOR YOUR LOVED ONES",
  //     description: "Professional care with heart",
  //     heroImage:
  //       "https://images.unsplash.com/photo-1723433892471-62f113c8c9a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //     backgroundImage:
  //       "https://images.unsplash.com/photo-1723433892471-62f113c8c9a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //     icon: "heart",
  //     emoji: "❤️",
  //     steps: [
  //       { title: "Share Needs", description: "Tell us care requirements" },
  //       {
  //         title: "Match Caregiver",
  //         description: "Trained professional assigned",
  //       },
  //       { title: "Regular Care", description: "Daily support & companionship" },
  //       { title: "Family Updates", description: "Regular progress reports" },
  //     ],
  //     internalServices: [
  //       {
  //         id: "daily-care",
  //         name: "Daily Care Support",
  //         description: "Daily activities & companionship",
  //         price: 60,
  //       },
  //       {
  //         id: "meal-prep",
  //         name: "Meal Preparation",
  //         description: "Healthy meal planning & cooking",
  //         price: 35,
  //       },
  //       {
  //         id: "medical-companion",
  //         name: "Medical Appointments",
  //         description: "Accompany to doctor visits",
  //         price: 45,
  //       },
  //     ],
  //   },
  //   {
  //     id: "personal-shopping",
  //     name: "Personal Shopping & Errands",
  //     tagline: "YOUR SHOPPING ASSISTANT",
  //     description: "We shop so you can relax",
  //     heroImage:
  //       "https://images.unsplash.com/photo-1759167632930-298bca6b4268?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //     backgroundImage:
  //       "https://images.unsplash.com/photo-1759167632930-298bca6b4268?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //     icon: "shopping-bag",
  //     emoji: "🛒",
  //     steps: [
  //       { title: "Send List", description: "Share your shopping list" },
  //       { title: "We Shop", description: "Buy everything you need" },
  //       { title: "Quality Check", description: "Ensure fresh & quality items" },
  //       { title: "Home Delivery", description: "Deliver to your door" },
  //     ],
  //     internalServices: [
  //       {
  //         id: "grocery-shopping",
  //         name: "Grocery Shopping",
  //         description: "Weekly grocery & essentials",
  //         price: 30,
  //       },
  //       {
  //         id: "medicine-pickup",
  //         name: "Medicine Pickup",
  //         description: "Pharmacy & prescription collection",
  //         price: 20,
  //       },
  //       {
  //         id: "gift-shopping",
  //         name: "Gift Shopping",
  //         description: "Special gifts & wrapping",
  //         price: 40,
  //       },
  //     ],
  //   },
  // ];

  // ==========================
  // ⚙️ LOGIC SECTION
  // ==========================

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % servicesData.length);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + servicesData.length) % servicesData.length
    );

  const current = servicesData[currentSlide];

  const features = [
    { icon: Clock, title: "Quick Service", description: "Fast & reliable" },
    { icon: Shield, title: "Safe & Secure", description: "Your safety first" },
    { icon: Star, title: "Quality", description: "Trained professionals" },
    { icon: Users, title: "24/7 Support", description: "Always here" },
  ];

  // ==========================
  // 🖼️ COMPONENT SECTION
  // ==========================

  const ImageWithFallback = ({ src, alt, className }) => (
    <img src={src} alt={alt} className={className} loading="lazy" />
  );

  // ==========================
  // 🏠 RETURN (UI)
  // ==========================
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            backgroundImage: `url(${current.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[500px]">
            <div className="space-y-6 text-white">
              <div className="text-6xl">{current.emoji}</div>
              <h1 className="text-4xl font-bold">{current.name}</h1>
              <p className="text-white/90 text-xl">{current.description}</p>
              <div className="flex gap-4 flex-wrap">
                {/* <Link
                  to={`/service/${current.id}`}
                  className="bg-[#708238] text-white px-8 py-4 rounded-full hover:bg-[#5a6e31] transition-all duration-300"
                >
                  complete package
                  ${current.packagePrice}
                </Link></div> */}

                {/* changing the styling */}
                <Link
                  to={`/service/${current.id}`}
                  className="bg-[#708238]/90 text-white px-6 py-4 rounded-3xl border-2 border-white/30
             inline-flex flex-col items justify-center 
             shadow-md hover:bg-[#5a6e31] transition-all duration-300"
                >
                  <span className="text-sm">Complete Package</span>
                  <span className="text-3xl font-semibold">${current.packagePrice}</span>
                </Link>
                 </div>
                 <br></br>
                <div>
                  <Link
                    to="/booking"
                    state={{ selectedService: current.id }}
                    className="bg-white text-[#708238] px-8 py-4 rounded-full hover:bg-[#F6F6F6] transition-all duration-300 border-2 border-white"
                  >
                    Book Now
                  </Link>
                </div>
              </div>

              <div>
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <ImageWithFallback
                    src={current.heroImage}
                    alt={current.name}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {servicesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 rounded-full ${index === currentSlide ? "w-8 bg-white" : "w-3 bg-white/40"
                      }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-[#708238] mb-10">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="text-center bg-[#F6F6F6] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="w-20 h-20 bg-[#708238] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={40} className="text-white" />
                  </div>
                  <h4 className="text-[#708238] mb-2 text-lg font-semibold">
                    {f.title}
                  </h4>
                  <p className="text-[#5a5a5a] text-sm">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 bg-[#F6F6F6]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-[#708238] mb-10">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((s) => (
              <Link
                key={s.id}
                to={`/service/${s.id}`}
                className="group relative h-80 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                {/* Full Background Image */}
                <ImageWithFallback
                  src={s.heroImage}
                  alt={s.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay (dark gradient for readability) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="text-4xl mb-2">{s.emoji}</div>
                  <h3 className="text-xl font-semibold mb-1">{s.name}</h3>
                  {/* <p className="text-sm opacity-90 mb-2">{s.description}</p> */}
                  <span className="text-[#B7E4C7] inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
