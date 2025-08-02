import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Email: <a href="mailto:contactorbexa@gmail.com" className="underline">contactorbexa@gmail.com</a></p>
          <p>Phone: <a href="tel:+917889276476" className="">+91 7889276476</a></p>
          <p>Address: Remote, India</p>
        </div>

        {/* Social Media */}
        <div className="">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.instagram.com/_orbexa_/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
           
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About Orbexa</h3>
          <p>Empowering developers through easy-to-understand coding content and projects.</p>
          <p className="mt-2">© {new Date().getFullYear()} Orbexa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
