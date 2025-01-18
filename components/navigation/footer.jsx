import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#240046] text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            {/* Product Section */}
            <div>
              <h3 className="text-base font-medium text-white">Product</h3>
              <ul className="mt-4 text-sm text-gray-300">
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-white transition-all duration-300"
                  >
                    Features
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-white transition-all duration-300"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-white transition-all duration-300"
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-white transition-all duration-300"
                  >
                    Outputs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Integrations Section */}
            <div className="mt-10 md:mt-0">
              <h3 className="text-base font-medium text-white">Integrations</h3>
              <ul className="mt-4 text-sm text-gray-300">
                <li>
                  <Link
                    href=""
                    className="hover:text-white transition-all duration-300"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-white transition-all duration-300"
                  >
                    Instagram
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-white transition-all duration-300"
                  >
                    Twitter
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-white transition-all duration-300"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-8">
            {/* Resources Section */}
            <div>
              <h3 className="text-base font-medium text-white">Resources</h3>
              <ul className="mt-4 text-sm text-gray-300">
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-white transition-all duration-300"
                  >
                    Blogs
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-white transition-all duration-300"
                  >
                    Articles
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-white transition-all duration-300"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="mt-10 md:mt-0">
              <h3 className="text-base font-medium text-white">Company</h3>
              <ul className="mt-4 text-sm text-gray-300">
                <li>
                  <Link
                    href=""
                    className="hover:text-white transition-all duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-white transition-all duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-white transition-all duration-300"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <span className="block text-sm text-gray-300 mt-8">
          © {new Date().getFullYear()} MonetaMind Inc.💗 All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
