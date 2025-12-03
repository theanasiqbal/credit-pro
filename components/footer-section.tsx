"use client"

export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full bg-background border-t border-border px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-primary mb-4">Credit Pro</h3>
            <p className="text-foreground/60 text-sm">
              Exclusive membership for ambitious individuals.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Apply
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-foreground/50">
            © {currentYear} Credit Pro. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6">
            {["X", "Instagram", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors"
              >
                {social[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
