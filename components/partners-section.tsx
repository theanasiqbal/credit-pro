"use client";

import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    { name: "Visa", image: "/assets/visa.png" },
    { name: "Amex", image: "/assets/american-express.png" },
    { name: "Apple Pay", image: "/assets/apple-pay.png" },
    { name: "Google Pay", image: "/assets/google-pay.png" },
    { name: "Stripe", image: "/assets/stripe.png" },
    { name: "PayPal", image: "/assets/paypal.png" },
    { name: "Square", image: "/assets/square.png" },
    { name: "Shopify", image: "/assets/shopify.png" },
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 px-4 bg-background border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Supported integrations
          </h2>
          <p className="text-foreground/60">Trusted partners and platforms</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex items-center justify-center h-32 relative rounded-3xl border border-border bg-card p-8 transition-all duration-300 cursor-pointer"
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-0.5rem)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(255, 107, 53, 0.6), inset 0 0 20px rgba(255, 107, 53, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.5)";
              }}
            >
              <div className="text-center">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={50}
                  height={50}
                  className="object-contain mx-auto mb-3 transition-all group-hover:scale-110"
                />
                <p className="text-sm text-foreground/70 group-hover:text-white transition-images">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
