import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { servicesData } from "../data/ServicesData";
import { Footer } from "./Footer";
import {
  Package,
  FileText,
  Heart,
  ShoppingBag,
  User,
  MapPin,
  Calendar,
  Plus,
  Minus,
  Info,
  Zap,
  Rocket,
  Plane,
  Shield,
  CheckCircle,
  Camera,
  Users,
  Utensils,
  Stethoscope,
  Home,
  ShoppingCart,
  Pill,
  Gift,
  CreditCard,
  Building,
  Train,
  Bus,
  File,
  ChevronRight,
  ChevronLeft,
  Check
} from "lucide-react";

const iconMap = {
  package: Package,
  "file-text": FileText,
  heart: Heart,
  "shopping-bag": ShoppingBag,
  zap: Zap,
  rocket: Rocket,
  plane: Plane,
  shield: Shield,
  "check-circle": CheckCircle,
  calendar: Calendar,
  camera: Camera,
  users: Users,
  utensils: Utensils,
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
  file: File
};

export function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const initialService = location.state?.selectedService || "";
  const initialQuantities = location.state?.quantities || {};

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedServices, setSelectedServices] = useState(initialQuantities);

  // Removed: learnMoreService
  // const [learnMoreService, setLearnMoreService] = useState(null);

  const service = servicesData.find((s) => s.id === selectedService);

  const steps = [
    { number: 1, title: "Choose Service", icon: Package },
    { number: 2, title: "Your Details", icon: User },
    { number: 3, title: "Location & Time", icon: MapPin },
    { number: 4, title: "Additional Info", icon: FileText }
  ];

  const updateQuantity = (internalId, change) => {
    setSelectedServices((prev) => {
      const current = prev[internalId] || 0;
      const newValue = Math.max(0, current + change);
      if (newValue === 0) {
        const { [internalId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [internalId]: newValue };
    });
  };

  const calculateTotal = () => {
    if (!service) return 0;
    return Object.entries(selectedServices).reduce((sum, [id, qty]) => {
      const internal = service.internalServices.find((i) => i.id === id);
      return sum + (internal?.price || 0) * qty;
    }, 0);
  };

  const canProceed = () => {
    if (currentStep === 1)
      return selectedService && Object.keys(selectedServices).length > 0;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/orders");
  };

  return (
    <div className="bg-white">
      <div className="bg-white py-8 sm:py-12 min-height-screen">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-[#556B2F] text-3xl mb-2">Book Your Service</h1>
            <p className="text-[#5a5a5a]">Easy step-by-step booking</p>
          </div>

          {/* Steps */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex justify-between max-w-3xl mx-auto min-w-[640px]">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isCompleted = currentStep > step.number;
                const isCurrent = currentStep === step.number;

                return (
                  <div key={step.number} className="flex items-center flex-1">
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center ${isCompleted
                          ? "bg-green-500 text-white"
                          : isCurrent
                            ? "bg-[#556B2F] text-white ring-4 ring-[#556B2F]/30"
                            : "bg-white text-gray-400 border-2 border-gray-300"
                          }`}
                      >
                        {isCompleted ? <Check /> : <StepIcon />}
                      </div>
                      <span
                        className={`mt-2 text-sm ${isCurrent ? "text-[#556B2F]" : "text-[#5a5a5a]"
                          }`}
                      >
                        {step.title}
                      </span>
                    </div>

                    {index < steps.length - 1 && (
                      <div
                        className={`h-1 flex-1 mx-2 ${isCompleted ? "bg-green-500" : "bg-gray-300"
                          }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* LEFT: Steps */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* STEP 1 */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#556B2F] flex items-center justify-center">
                          <Package className="text-white" />
                        </div>
                        <h3 className="text-[#556B2F]">Select Main Service</h3>
                      </div>

                      <select
                        value={selectedService}
                        onChange={(e) => {
                          setSelectedService(e.target.value);
                          setSelectedServices({});
                        }}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200"
                      >
                        <option value="">Choose a service...</option>
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.emoji} {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {service && (
                      <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h3 className="text-[#556B2F] mb-4">Select Options</h3>

                        <div className="grid md:grid-cols-2 gap-4">
                          {service.internalServices.map((internal) => {
                            const InternalIcon = iconMap[internal.icon];
                            const quantity = selectedServices[internal.id] || 0;

                            return (
                              <div
                                key={internal.id}
                                className={`p-4 rounded-xl border-2 ${quantity > 0
                                  ? "border-[#556B2F] bg-gray-100"
                                  : "border-gray-200"
                                  }`}
                              >
                                <div className="flex justify-between mb-3">
                                  <div className="flex items-center gap-2">
                                    <InternalIcon className="text-[#556B2F]" />
                                    <span className="text-[#556B2F]">
                                      {internal.name}
                                    </span>
                                  </div>

                                  {/* Removed Learn More button */}
                                </div>

                                <p className="text-[#5a5a5a] text-sm mb-3">
                                  {internal.description}
                                </p>

                                <div className="flex items-center justify-between">
                                  <span className="text-[#556B2F] text-xl">
                                    ${internal.price}
                                  </span>

                                  {quantity === 0 ? (
                                    <button
                                      type="button"
                                      onClick={() =>
                                        updateQuantity(internal.id, 1)
                                      }
                                      className="bg-[#556B2F] text-white px-4 py-1.5 rounded-full text-sm flex items-center gap-2"
                                    >
                                      <Plus size={14} /> Add
                                    </button>
                                  ) : (
                                    <div className="flex items-center gap-2 bg-white rounded-full px-2 py-1">
                                      <button
                                        type="button"
                                        onClick={() =>
                                          updateQuantity(internal.id, -1)
                                        }
                                        className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center"
                                      >
                                        <Minus size={12} />
                                      </button>

                                      <span className="text-[#556B2F] text-sm">
                                        {quantity}
                                      </span>

                                      <button
                                        type="button"
                                        onClick={() =>
                                          updateQuantity(internal.id, 1)
                                        }
                                        className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center"
                                      >
                                        <Plus size={12} />
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* STEP 2 */}
                {currentStep === 2 && (
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#556B2F] flex items-center justify-center">
                        <User className="text-white" />
                      </div>
                      <h3 className="text-[#556B2F]">Your Information</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name *"
                        className="px-4 py-3 rounded-xl border-2 border-gray-200"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Last Name *"
                        className="px-4 py-3 rounded-xl border-2 border-gray-200"
                        required
                      />
                      <input
                        type="tel"
                        placeholder="Primary Phone *"
                        className="px-4 py-3 rounded-xl border-2 border-gray-200"
                        required
                      />
                      <input
                        type="tel"
                        placeholder="Alternate Phone"
                        className="px-4 py-3 rounded-xl border-2 border-gray-200"
                      />
                      <input
                        type="email"
                        placeholder="Email Address *"
                        className="px-4 py-3 rounded-xl border-2 border-gray-200 md:col-span-2"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Emergency Contact Name"
                        className="px-4 py-3 rounded-xl border-2 border-gray-200"
                      />
                      <input
                        type="tel"
                        placeholder="Emergency Contact Number"
                        className="px-4 py-3 rounded-xl border-2 border-gray-200"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {currentStep === 3 && (
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#556B2F] rounded-full flex items-center justify-center">
                        <MapPin className="text-white" />
                      </div>
                      <h3 className="text-[#556B2F]">Location & Time</h3>
                    </div>

                    <div className="space-y-4">
                      <textarea
                        placeholder="Pickup / Service Address"
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200"
                        required
                      />

                      <div className="grid md:grid-cols-3 gap-4">
                        <input
                          type="text"
                          placeholder="City *"
                          className="px-4 py-3 rounded-xl border-2 border-gray-200"
                          required
                        />
                        <input
                          type="text"
                          placeholder="State *"
                          className="px-4 py-3 rounded-xl border-2 border-gray-200"
                          required
                        />
                        <input
                          type="text"
                          placeholder="PIN Code *"
                          className="px-4 py-3 rounded-xl border-2 border-gray-200"
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <input
                          type="date"
                          className="px-4 py-3 rounded-xl border-2 border-gray-200"
                          required
                        />
                        <input
                          type="time"
                          className="px-4 py-3 rounded-xl border-2 border-gray-200"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4 */}
                {currentStep === 4 && (
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#556B2F] rounded-full flex items-center justify-center">
                        <FileText className="text-white" />
                      </div>
                      <h3 className="text-[#556B2F]">Additional Information</h3>
                    </div>

                    <div className="space-y-4">
                      <textarea
                        placeholder="Special Instructions..."
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200"
                      />

                      <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200">
                        <option>Select how you heard about us...</option>
                        <option>Friend/Family</option>
                        <option>Social Media</option>
                        <option>Google Search</option>
                        <option>Advertisement</option>
                        <option>Other</option>
                      </select>

                      <div className="flex gap-3 p-4 bg-gray-100 rounded-xl">
                        <input type="checkbox" required />
                        <p className="text-sm text-[#5a5a5a]">
                          I agree to the terms and conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex gap-4">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="flex-1 bg-[#556B2F] text-white px-6 py-4 rounded-full disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      <ChevronLeft /> Back
                    </button>
                  )}

                  {currentStep < 4 ? (
                    // <button
                    //   type="button"
                    //   disabled={!canProceed()}
                    //   onClick={() => setCurrentStep(currentStep + 1)}
                    //   className="flex-1 bg-[#556B2F] text-white px-6 py-4 rounded-full disabled:opacity-50"
                    // >
                    //   Next <ChevronRight />
                    // </button>
                    <button
                      type="button"
                      disabled={!canProceed()}
                      onClick={() => setCurrentStep(currentStep + 1)}
                      className="flex-1 bg-[#556B2F] text-white px-6 py-4 rounded-full disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                  ) : (
                    <button
                      type="submit"
                      className="flex-1 bg-[#556B2F] text-white px-8 py-5 rounded-full text-xl"
                    >
                      Confirm Booking
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* RIGHT — Summary */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-20">
                <h3 className="text-[#556B2F] mb-4 text-center">
                  Booking Summary
                </h3>

                {service && Object.keys(selectedServices).length > 0 ? (
                  <>
                    <div className="space-y-3 mb-6">
                      {service.internalServices
                        .filter((i) => selectedServices[i.id] > 0)
                        .map((internal) => (
                          <div
                            key={internal.id}
                            className="flex justify-between items-center p-3 bg-gray-100 rounded-xl"
                          >
                            <div>
                              <p className="text-[#556B2F]">{internal.name}</p>
                              <p className="text-sm text-[#5a5a5a]">
                                Qty: {selectedServices[internal.id]}
                              </p>
                            </div>
                            <span className="text-[#556B2F]">
                              $
                              {internal.price *
                                selectedServices[internal.id]}
                            </span>
                          </div>
                        ))}
                    </div>

                    <div className="border-t-2 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[#5a5a5a]">Total:</span>
                        <span className="text-4xl text-[#556B2F]">
                          ${calculateTotal()}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">🤔</div>
                    <p className="text-[#5a5a5a]">Select services to see price</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}