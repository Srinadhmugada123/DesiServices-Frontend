import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Package, FileText, Heart, ShoppingBag } from "lucide-react";

// 🧩 Simple replacement for ImageWithFallback
const ImageWithFallback = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() =>
        setImgSrc("https://via.placeholder.com/600x400?text=Image+Unavailable")
      }
    />
  );
};

// 🧩 Icon Mapping
const iconMap = {
  package: Package,
  "file-text": FileText,
  heart: Heart,
  "shopping-bag": ShoppingBag,
};

// 🧩 Services Data (inline)
const servicesData = [
  {
    id: "passport-visa",
    name: "Passport & Visa Assistance",
    tagline: "YOUR TRAVEL DOCUMENTATION EXPERTS",
    description:
      "Complete support for passports, visas, and travel documentation",
    heroImage:
      "https://www.uniglobemkov.com/content/1721996217-5601-20241109045129_blog.jpg",
    icon: "file-text",
    emoji: "✈️",
  },
  {
    id: "package-courier",
    name: "Package & Courier",
    tagline: "FAST & RELIABLE DELIVERY",
    description: "Safe delivery for all your packages",
    heroImage:
      "https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    icon: "package",
    emoji: "📦",
  },
  {
    id: "family-elder-care",
    name: "Family & Elder Care",
    tagline: "CARING FOR YOUR LOVED ONES",
    description: "Professional care with heart",
    heroImage:
      "https://media.istockphoto.com/id/1178548716/photo/female-nurse-and-family-with-senior-patient-at-home.jpg?s=612x612&w=0&k=20&c=iU6xyRuETwO1Dti6K9YWUpGMPgD8FAVeSGeG3li8e7I=",
    icon: "heart",
    emoji: "❤️",
  },
  {
    id: "personal-shopping",
    name: "Personal Shopping & Errands",
    tagline: "YOUR SHOPPING ASSISTANT",
    description: "We shop so you can relax",
    heroImage:
      "https://www.maxicabsgstransport.com/wp-content/uploads/2021/02/Service-Image8.jpg",
    icon: "shopping-bag",
    emoji: "🛒",
  },
];

// 🧩 Component
export function ServicesPage() {
  return (
    <div className="bg-white py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-[#] mb-4 text-3xl ">
            Our Services
          </h1>
          <p className="text-[#5a5a5a] max-w-2xl mx-auto">
            Professional services for all your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Package;
            return (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className="group relative h-80 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 border-transparent hover:border-[#708238]"
              >
                {/* Background Image */}
                <img
                  src={service.heroImage}
                  alt={service.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Dark gradient overlay for text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

                {/* Icon and Emoji */}
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/90 shadow-md flex items-center justify-center">
                  <Icon size={32} className="text-[#708238]" />
                </div>
                <div className="absolute bottom-4 left-4 text-4xl">
                  {service.emoji}
                </div>

                {/* Text content over image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <h3 className="text-2xl font-semibold mb-1">
                    {service.name}
                  </h3>
                  <p className="text-sm opacity-90 mb-2">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-[#F5EBDD] group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
