import { useState } from "react";
import {
  Package,
  FileText,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Footer } from "./Footer";

/**
 * MyOrdersPage.jsx
 * - Removed ImageWithFallback import and usage.
 * - Uses a plain <img> with an onError handler to show a fallback placeholder.
 * - Modal/dialog implemented inline (Option A).
 * - Clear comments included.
 */

export function MyOrdersPage() {
  // Modal State
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Dummy order data (static for now)
  const orders = [
    {
      id: "12345",
      service: "Passport & Visa Assistance",
      icon: FileText,
      emoji: "✈️",
      internalServices: [
        "Airport Pickup",
        "Document Verification",
        "Passport Office Visit",
      ],
      price: 125,
      date: "2025-11-15",
      status: "in-progress",
      progress: 2,
      totalSteps: 4,
      proofImages: [
        "https://images.squarespace-cdn.com/content/v1/60a541c218844e32d8c80cb6/1698977495980-AKT4CUDO7TCCBXNM92IN/image-asset.jpeg",
        "https://3.imimg.com/data3/YT/SU/IMFCP-8103414/images-visa-assistance-500x500.jpg",
      ],
    },
    {
      id: "12346",
      service: "Package & Courier",
      icon: Package,
      emoji: "📦",
      internalServices: ["Express Delivery"],
      price: 40,
      date: "2025-11-10",
      status: "completed",
      progress: 4,
      totalSteps: 4,
      proofImages: [
        "https://www.shutterstock.com/image-photo/delivery-man-transport-black-box-600nw-2310803529.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/2/383445715/RF/AE/DO/207612801/international-door-to-door-courier-services-500x500.jpeg"
      ],
    },
    {
      id: "12347",
      service: "Personal Shopping",
      icon: ShoppingBag,
      emoji: "🛒",
      internalServices: ["Grocery Shopping", "Medicine Pickup"],
      price: 50,
      date: "2025-11-20",
      status: "pending",
      progress: 0,
      totalSteps: 4,
      proofImages: [
        "https://img.freepik.com/free-photo/personal-shopper-with-mask-working_23-2148924109.jpg?semt=ais_hybrid&w=740&q=80",
        "https://img.freepik.com/premium-photo/shopaholic-woman-shopping-new-wardrobe-looking-shirt-fabric-modern-boutique-african-american-couple-buying-fashionable-clothes-checking-hangers-with-casual-wear-clothing-store_482257-72229.jpg?semt=ais_hybrid&w=740&q=80"
      ],
    },
  ];

  // Helper: status color classes
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "in-progress":
        return "bg-blue-100 text-blue-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Currently selected order object
  const currentOrder = orders.find((o) => o.id === selectedOrder);

  // Image navigation inside modal
  const nextImage = () => {
    if (currentOrder && currentImageIndex < currentOrder.proofImages.length - 1) {
      setCurrentImageIndex((i) => i + 1);
    }
  };
  const prevImage = () => {
    if (currentImageIndex > 0) setCurrentImageIndex((i) => i - 1);
  };

  // Generic fallback URL for images
  const FALLBACK_IMAGE =
    "https://via.placeholder.com/1200x675?text=No+Image+Available";

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-6">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-[#3A4D47] text-3xl font-semibold">My Orders</h1>
          <p className="text-[#5a5a5a] text-sm">Track your bookings</p>
        </div>

        {/* Orders List */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {orders.map((order) => {
            const Icon = order.icon;
            return (
              <div
                key={order.id}
                className="bg-white border-2 border-gray-200 shadow-lg rounded-3xl p-6 hover:shadow-2xl transition"
              >
                {/* Top Section */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow">
                      <Icon size={28} className="text-[#556B2F]" />
                    </div>
                    <div className="absolute -top-1 -right-1 text-2xl">
                      {order.emoji}
                    </div>
                  </div>

                  {/* Title + Date + Status */}
                  <div className="flex-1">
                    <h3 className="text-[#3A4D47] text-xl">{order.service}</h3>
                    <p className="text-[#5a5a5a] text-sm mb-2">{order.date}</p>

                    <span
                      className={`px-3 py-1 rounded-full text-sm capitalize ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status.replace("-", " ")}
                    </span>
                  </div>
                </div>

                {/* Internal Services */}
                <div className="mb-4">
                  <p className="text-[#5a5a5a] text-sm mb-2">Services:</p>
                  <div className="flex flex-wrap gap-2">
                    {order.internalServices.map((srv, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gray-100 rounded-full text-[#3A4D47] text-sm shadow-sm"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between mb-1 text-sm text-[#5a5a5a]">
                    <span>Progress</span>
                    <span>
                      {order.progress} of {order.totalSteps}
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                    <div
                      style={{
                        width: `${(order.progress / order.totalSteps) * 100}%`,
                      }}
                      className="bg-[#556B2F] h-3 rounded-full"
                    />
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-center pt-4 border-t mt-4">
                  <div>
                    <p className="text-[#5a5a5a] text-sm">Total</p>
                    <p className="text-2xl font-semibold text-[#556B2F]">
                      ${order.price}
                    </p>
                  </div>

                  {/* View Details Button (Opens Modal) */}
                  <button
                    onClick={() => {
                      setSelectedOrder(order.id);
                      setCurrentImageIndex(0);
                    }}
                    className="bg-[#556B2F] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#4a5f28] transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Orders */}
        {orders.length === 0 && (
          <div className="text-center py-20">
            <div className="text-7xl mb-4">📦</div>
            <h3 className="text-xl text-[#3A4D47]">No orders yet</h3>
            <p className="text-[#5a5a5a] mb-6">Book your first service!</p>
            <a
              href="/booking"
              className="bg-[#556B2F] text-white px-8 py-3 rounded-full shadow hover:bg-[#4a5f28]"
            >
              Book Now
            </a>
          </div>
        )}
      </div>

      {/* ----------------------------- */}
      {/* ⭐ CUSTOM MODAL IMPLEMENTATION */}
      {/* ----------------------------- */}

      {currentOrder && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedOrder(null)} // Close modal on backdrop click
        >
          <div
            className="bg-white w-[27%] h-[60vh] max-w-none rounded-2xl p-6 shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-3">
                <span className="text-3xl">{currentOrder.emoji}</span>
                {currentOrder.service}
              </h2>

              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-500 hover:text-black text-xl"
                aria-label="Close details"
              >
                ✖
              </button>
            </div>

            {/* Order Info */}
            <div className="bg-gray-100 rounded-xl p-4 mb-6">
              <p className="text-[#5a5a5a]">Order ID: #{currentOrder.id}</p>
              <p className="text-[#5a5a5a]">
                Date: {new Date(currentOrder.date).toLocaleDateString()}
              </p>
              <p className="text-[#5a5a5a]">Total: ${currentOrder.price}</p>
            </div>

            {/* Proof Images */}
            {currentOrder.proofImages.length > 0 ? (
              <div>
                <h3 className="text-lg mb-2 text-[#3A4D47]">Proof Images</h3>

                <div className="relative">
                  {/* Image */}
                  <img
                    src={currentOrder.proofImages[currentImageIndex]}
                    alt={`Proof ${currentImageIndex + 1}`}
                    className="w-full h-80 object-cover rounded-xl shadow"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = FALLBACK_IMAGE;
                    }}
                  />

                  {/* Prev Button */}
                  <button
                    onClick={prevImage}
                    disabled={currentImageIndex === 0}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-40"
                    aria-label="Previous image"
                  >
                    <ChevronLeft />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={nextImage}
                    disabled={
                      currentImageIndex === currentOrder.proofImages.length - 1
                    }
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-40"
                    aria-label="Next image"
                  >
                    <ChevronRight />
                  </button>

                  {/* Dots */}
                  {currentOrder.proofImages.length > 1 && (
                    <div className="flex gap-2 justify-center mt-4">
                      {currentOrder.proofImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-2 rounded-full transition-all ${index === currentImageIndex
                              ? "w-8 bg-[#556B2F]"
                              : "w-2 bg-gray-300"
                            }`}
                          aria-label={`Show image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-10 bg-gray-100 rounded-xl">
                <div className="text-5xl mb-2">⏳</div>
                <p className="text-[#5a5a5a]">Images will appear soon</p>
              </div>
            )}
          </div>
        </div>
      )}


      {/* Footer */}
      <Footer />
    </div>
  );
}
