// import { useState } from 'react';
// import { Package, FileText, ShoppingBag } from 'lucide-react';
// import { Footer } from './Footer';


// export function MyOrdersPage() {
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const orders = [
//     {
//       id: '12345',
//       service: 'Passport & Visa Assistance',
//       icon: FileText,
//       emoji: '✈️',
//       internalServices: ['Airport Pickup', 'Document Verification', 'Passport Office Visit'],
//       price: 125,
//       date: '2025-11-15',
//       status: 'in-progress',
//       progress: 2,
//       totalSteps: 4,
//       proofImages: [
//         'https://images.unsplash.com/photo-1633111158093-c51d43175b77?w=400',
//         'https://images.unsplash.com/photo-1758928807847-ed94f9ed3cad?w=400'
//       ]
//     },
//     {
//       id: '12346',
//       service: 'Package & Courier',
//       icon: Package,
//       emoji: '📦',
//       internalServices: ['Express Delivery'],
//       price: 40,
//       date: '2025-11-10',
//       status: 'completed',
//       progress: 4,
//       totalSteps: 4,
//       proofImages: [
//         'https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?w=400'
//       ]
//     },
//     {
//       id: '12347',
//       service: 'Personal Shopping',
//       icon: ShoppingBag,
//       emoji: '🛒',
//       internalServices: ['Grocery Shopping', 'Medicine Pickup'],
//       price: 50,
//       date: '2025-11-20',
//       status: 'pending',
//       progress: 0,
//       totalSteps: 4,
//       proofImages: [
//         "https://images.unsplash.com/photo-1759167632930-298bca6b4268?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
//       ]
//     }
//   ];

//   const nextImage = () => {
//     if (selectedOrder && currentImageIndex < selectedOrder.proofImages.length - 1) {
//       setCurrentImageIndex(currentImageIndex + 1);
//     }
//   };

//   const prevImage = () => {
//     if (currentImageIndex > 0) {
//       setCurrentImageIndex(currentImageIndex - 1);
//     }
//   };

//   return (
//     <div>
//       <div className="bg-white py-8 sm:py-12 min-h-screen">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-6 sm:mb-8">
//             <h1 className="text-[#3A4D47] mb-2 text-2xl sm:text-3xl">My Orders</h1>
//             <p className="text-[#5a5a5a] text-sm sm:text-base">Track your bookings</p>
//           </div>

//           <div className="grid gap-4 sm:gap-6 max-w-5xl mx-auto">
//             {orders.map((order) => {
//               const Icon = order.icon;

//               return (
//                 <div
//                   key={order.id}
//                   className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100"
//                 >
//                   <div className="p-4 sm:p-6">
//                     <div className="flex items-start gap-3 sm:gap-4 mb-4">
//                       <div className="relative">
//                         <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center">
//                           <Icon size={24} className="text-[#556B2F] sm:w-8 sm:h-8" />
//                         </div>
//                         <div className="absolute -top-1 -right-1 text-xl sm:text-2xl">{order.emoji}</div>
//                       </div>

//                       <div className="flex-1 min-w-0">
//                         <h3 className="text-[#3A4D47] mb-1 text-base sm:text-lg truncate">{order.service}</h3>
//                         <p className="text-[#5a5a5a] text-xs sm:text-sm mb-2">{order.date}</p>

//                         <div
//                           className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm ${
//                             order.status === 'completed'
//                               ? 'bg-green-100 text-green-700'
//                               : order.status === 'in-progress'
//                               ? 'bg-blue-100 text-blue-700'
//                               : 'bg-yellow-100 text-yellow-700'
//                           }`}
//                         >
//                           {order.status === 'completed' && '✓'}
//                           {order.status === 'in-progress' && '⏳'}
//                           {order.status === 'pending' && '⏰'}
//                           <span className="capitalize">{order.status.replace('-', ' ')}</span>
//                         </div>
//                       </div>
//                     </div>

//                     {order.internalServices && (
//                       <div className="mb-4">
//                         <p className="text-[#5a5a5a] text-xs sm:text-sm mb-2">Services:</p>
//                         <div className="flex flex-wrap gap-2">
//                           {order.internalServices.map((service, index) => (
//                             <span
//                               key={index}
//                               className="px-3 py-1.5 bg-gray-100 rounded-full text-[#3A4D47] shadow-sm text-xs sm:text-sm"
//                             >
//                               {service}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     <div className="mb-4 sm:mb-6">
//                       <div className="flex items-center justify-between mb-2 sm:mb-3">
//                         <span className="text-[#5a5a5a] text-xs sm:text-sm">Progress:</span>
//                         <span className="text-[#3A4D47] text-xs sm:text-sm">
//                           {order.progress} of {order.totalSteps} steps
//                         </span>
//                       </div>

//                       <div className="relative w-full bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden">
//                         <div
//                           className="bg-[#556B2F] h-3 sm:h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
//                           style={{ width: `${(order.progress / order.totalSteps) * 100}%` }}
//                         >
//                           {order.progress > 0 && (
//                             <span className="text-white text-[10px] sm:text-xs">
//                               {Math.round((order.progress / order.totalSteps) * 100)}%
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 pt-4 border-t-2 border-gray-200">
//                       <div>
//                         <span className="text-[#5a5a5a] text-sm sm:text-base">Total: </span>
//                         <span className="text-xl sm:text-2xl text-[#556B2F]">${order.price}</span>
//                       </div>

//                       <button
//                         className="bg-gray-400 text-white px-6 py-3 rounded-full cursor-not-allowed shadow-md text-sm sm:text-base"
//                       >
//                         View Details (Disabled)
//                       </button>
//                     </div>

//                     {/* Image Preview Inside Card (since dialog removed) */}
//                     {order.proofImages.length > 0 && (
//                       <div className="mt-4">
//                         <img
//                           src={order.proofImages[0]}
//                           alt="Preview"
//                           className="w-full h-60 object-cover rounded-2xl shadow"
//                         />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {orders.length === 0 && (
//             <div className="text-center py-12 sm:py-16">
//               <div className="text-6xl sm:text-8xl mb-4">📦</div>
//               <h3 className="text-[#3A4D47] mb-2 text-lg sm:text-xl">No orders yet</h3>
//               <p className="text-[#5a5a5a] mb-6 text-sm sm:text-base">Book your first service!</p>
//               <a
//                 href="/booking"
//                 className="inline-block bg-[#556B2F] text-white px-8 py-4 rounded-full hover:bg-[#4a5f28] transition-colors shadow-lg"
//               >
//                 Book Now
//               </a>
//             </div>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </div>
    
//   );
// }



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
        "https://www.uniglobemkov.com/content/1721996217-5601-20241109045129_blog.jpg",
        "https://images.unsplash.com/photo-1758928807847-ed94f9ed3cad?w=1200",
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
        "https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?auto=format&q=80&w=1080",
        "https://www.shutterstock.com/image-photo/delivery-man-wearing-uniform-unloading-600nw-2514298405.jpg",
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
      progress: 1,
      totalSteps: 4,
      proofImages: ["https://images.unsplash.com/photo-1759167632930-298bca6b4268?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      ]
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
          onClick={() => setSelectedOrder(null)} // Close when clicking backdrop
        >
          <div
            className="bg-white w-[30%]  max-w-none rounded-2xl p-6 shadow-xl overflow-y-auto "
            onClick={(e) => e.stopPropagation()} // Prevent closing when interacting with modal
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
 
            {/* Proof Images (plain <img> with fallback) */}
            {currentOrder.proofImages.length > 0 ? (
              <div>
                <h3 className="text-lg mb-2 text-[#3A4D47]">Proof Images</h3>
 
                <div className="relative">
                  {/* Plain image element with onError fallback */}
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
 
                  {/* Dots / indicators */}
                  {currentOrder.proofImages.length > 1 && (
                    <div className="flex gap-2 justify-center mt-4">
                      {currentOrder.proofImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-2 rounded-full transition-all ${
                            index === currentImageIndex
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