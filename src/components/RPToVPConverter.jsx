import { useState, useEffect } from "react";

const VP_PER_RP = 70;

export default function RPToVPConverter() {
  // Add new state for history modal
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  // Add new state for input focus
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [rpValue, setRpValue] = useState("");
  const [vpResult, setVpResult] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isConverting, setIsConverting] = useState(false);
  const [conversionHistory, setConversionHistory] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const convertRPtoVP = async () => {
    const rp = parseFloat(rpValue);

    if (rp && rp > 0) {
      setIsConverting(true);
      // Add a slight delay for animation effect
      await new Promise((resolve) => setTimeout(resolve, 800));
      const vp = rp * VP_PER_RP;
      setVpResult(vp);

      // Add to history
      setConversionHistory((prev) => {
        const newHistory = [{ rp, vp, timestamp: new Date() }, ...prev].slice(
          0,
          3
        );
        return newHistory;
      });

      setShowModal(true);
      setIsConverting(false);
    } else {
      setVpResult("invalid");
      setShowModal(false);
    }
  };

  const closeModal = () => setShowModal(false);

  const goBack = () => {
    setRpValue("");
    setVpResult(null);
    setShowModal(false);
  };

  return (
    <>
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

        {/* Mouse follower */}
        <div
          className="absolute w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePos.x - 12,
            top: mousePos.y - 12,
            opacity: 0.6,
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative min-h-screen flex items-center justify-center p-4 transition-all duration-500">
        <div className="w-full max-w-md">
          {/* Main card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 hover:bg-white/15">
            <div className="text-center space-y-6">
              {/* Title with gradient text */}
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Radiants to VP
              </h2>
              <p className="text-white/70 text-sm">
                Convert your Radiant Points to Valorant Points
              </p>

              {/* Input section */}
              <div className="space-y-4">
                <div className="relative group">
                  <input
                    type="number"
                    placeholder="Enter RP amount"
                    value={rpValue}
                    onChange={(e) => setRpValue(e.target.value)}
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/10 hover:border-purple-400/50 text-center text-lg"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Convert button */}
                <button
                  onClick={convertRPtoVP}
                  disabled={isConverting}
                  className="relative w-full py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden group"
                >
                  <span
                    className={`transition-opacity duration-300 ${
                      isConverting ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    Convert to VP
                  </span>
                  {isConverting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>

              {/* Error message */}
              {vpResult === "invalid" && (
                <div className="animate-bounce">
                  <p className="text-red-400 font-medium bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                    ⚠️ Please enter a valid RP amount
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-scale-in hover:scale-105 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center space-y-6">
              {/* Success icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white">
                Conversion Successful! 🎉
              </h3>

              <div className="space-y-2">
                <p className="text-white/90">
                  <span className="text-purple-300 font-semibold">
                    {rpValue} RP
                  </span>
                </p>
                <div className="text-2xl">↓</div>
                <p className="text-white/90">
                  <span className="text-pink-300 font-semibold">
                    {vpResult} VP
                  </span>
                </p>
              </div>

              <button
                onClick={closeModal}
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Awesome! ✨
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add History Button - Place this after the main card div */}
      <button
        onClick={() => setShowHistoryModal(true)}
        className="fixed bottom-8 right-8 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 group"
      >
        <svg
          className="w-6 h-6 text-white/70 group-hover:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      {/* History Modal */}
      {showHistoryModal && conversionHistory.length > 0 && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setShowHistoryModal(false)}
        >
          <div
            className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl p-6 max-w-md w-full shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white/90 text-xl font-semibold">
                Recent Conversions
              </h3>
              <button
                onClick={() => setShowHistoryModal(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-2">
              {conversionHistory.map((conversion, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-3 flex justify-between items-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-300">{conversion.rp} RP</span>
                    <span className="text-white/50">→</span>
                    <span className="text-pink-300">{conversion.vp} VP</span>
                  </div>
                  <span className="text-white/50 text-sm">
                    {new Date(conversion.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
