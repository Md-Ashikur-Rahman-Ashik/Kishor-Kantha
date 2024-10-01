import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#323161] text-white">
      <div className="mx-auto container w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="" className="flex items-center">
              <img src="/logo.jpg" className="h-16" alt="Kishor Kantha Logo" />
            </Link>
            <span>বাংলাদেশের সর্বাধিক প্রকাশিত শিশুকিশোর মাসিক</span>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:gap-6 md:gap-8">
            <div>
              <h2 className="text-sm mb-1 font-semibold text-white">
                হাফেজ মঞ্জিল (ইবনে তাইমিয়া স্কুলের বিপরীতে)
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-1">
                  <h2 className="text-sm font-semibold text-white">
                    টমছমব্রিজ, কুমিল্লা
                  </h2>
                </li>
                <li className="">
                  <h2 className="text-sm font-semibold text-white">
                    মোবাইলঃ ০১৮৯৬৪০৩৪০৮
                  </h2>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm mb-1 font-semibold text-white uppercase">
                সাইটম্যাপ
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-1">
                  <Link to="" className="hover:underline">
                    আমাদের সম্পর্কে
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="" className="hover:underline">
                    সহযোগিতা
                  </Link>
                </li>
                <li className="">
                  <Link to="" className="hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">
            © ২০২৪{" "}
            <Link to="" className="hover:underline">
              কিশোর কণ্ঠ পাঠক ফোরাম
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link to="#" className="text-white">
              <FaFacebookF />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="#" className="text-white ms-5">
              <FaTwitter />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link to="#" className="text-white ms-5">
              <FaYoutube />
              <span className="sr-only">Youtube</span>
            </Link>
            <Link to="#" className="text-white ms-5">
              <FaInstagram />
              <span className="sr-only">Instagram</span>
            </Link>
            {/* Repeat the same pattern for the other social media icons */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
