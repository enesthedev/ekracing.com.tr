import { Dealer } from "../types";

interface DealerCardProps {
  dealer: Dealer;
}

export function DealerCard({ dealer }: DealerCardProps) {
  return (
    <div
      className={`group relative rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border overflow-hidden ${
        dealer.isHeadquarters
          ? "bg-gradient-to-br from-red-600 to-red-700 text-white border-red-500 hover:from-red-700 hover:to-red-800"
          : "bg-white border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50"
      }`}
    >
      {/* HQ Watermark */}
      {dealer.isHeadquarters && (
        <div className="absolute -right-4 -top-2 opacity-10 pointer-events-none">
          <span className="text-8xl font-oxanium font-black text-white transform rotate-12">
            HQ
          </span>
        </div>
      )}

      <div className="flex flex-col space-y-3 relative z-10">
        {/* Country & City */}
        <div>
          <h3
            className={`font-oxanium font-bold text-lg mb-1 ${
              dealer.isHeadquarters ? "text-white" : "text-zinc-900"
            }`}
          >
            {dealer.country}
          </h3>
          <p
            className={`text-sm font-medium ${
              dealer.isHeadquarters ? "text-red-100" : "text-zinc-600"
            }`}
          >
            {dealer.city}
          </p>
        </div>

        {/* Dealer Info */}
        <div className="space-y-2 pt-2 border-t border-opacity-20">
          <div>
            <p
              className={`font-oxanium font-semibold text-sm ${
                dealer.isHeadquarters ? "text-white" : "text-zinc-900"
              }`}
            >
              {dealer.dealerName}
            </p>
          </div>

          <div>
            <p
              className={`text-xs font-medium ${
                dealer.isHeadquarters ? "text-red-100" : "text-zinc-600"
              }`}
            >
              Contact Person
            </p>
            <p
              className={`text-sm font-medium ${
                dealer.isHeadquarters ? "text-white" : "text-zinc-800"
              }`}
            >
              {dealer.contactPerson}
            </p>
          </div>

          <div>
            <p
              className={`text-xs font-medium ${
                dealer.isHeadquarters ? "text-red-100" : "text-zinc-600"
              }`}
            >
              Phone
            </p>
            <p
              className={`text-sm font-mono ${
                dealer.isHeadquarters ? "text-white" : "text-zinc-800"
              }`}
            >
              {dealer.phone}
            </p>
          </div>

          {dealer.email && (
            <div>
              <p
                className={`text-xs font-medium ${
                  dealer.isHeadquarters ? "text-red-100" : "text-zinc-600"
                }`}
              >
                Email
              </p>
              <p
                className={`text-sm ${
                  dealer.isHeadquarters ? "text-white" : "text-zinc-800"
                }`}
              >
                {dealer.email}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
