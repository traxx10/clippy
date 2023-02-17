import type { LinksFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

import homeStyles from '~/styles/home.css';

const IndexPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        <div className="section-container mb-40 pt-16">
          <img src="images/logo.svg" alt="" className="mx-auto my-16" />
          <h3>A history of everything you copy</h3>
          <p className="section-text mb-10 text-2xl text-grayishBlue">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>

          {/* Button Container */}
          <div className="button-container">
            <Link
              className="p-4 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
              to="#"
            >
              Download for IOS
            </Link>

            <Link
              className="p-4 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
              to="#"
            >
              Download for Mac
            </Link>
          </div>
        </div>
      </section>

      {/* Snippets Section */}
      <section id="snippets">
        <div className="section-container my-20">
          <h3>Keep track of your snippets</h3>
          <p className="section-content mb-24 text-xl">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <div className="section-container my-20">
          <div className="relative flex flex-col md:flex-row md:space-x-32">
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src="images/image-computer.png"
                alt=""
                className="md:absolute top-0 right-[50%]"
              />
            </div>

            {/* Items Container */}
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:mb-60 md:text-left md:pl-16 md:w-1/2">
              {/* Item 1 */}
              <div>
                <h5>Quick Search</h5>
                <p className="max-w-md mx-auto text-grayishBlue">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>

              {/* Item 2 */}
              <div>
                <h5>IClound Sync</h5>
                <p className="max-w-md mx-auto text-grayishBlue">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>

              {/* Item 3 */}
              <div>
                <h5>Completely History</h5>
                <p className="max-w-md mx-auto text-grayishBlue">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Anywhere Section */}
      <section id="access">
        <div className="section-container my-20">
          <h3>Access Clipboard Anywhere</h3>

          <p className="section-content mb-24 text-xl">
            Whether you're on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <img src="images/image-devices.png" alt="" className="mx-auto"></img>
        </div>
      </section>

      {/* Supercharge Section */}
      <section id="supercharge">
        <div className="section-container my-20">
          <h3>Supercharge your workflow</h3>
          <p className="section-content mb-16 text-xl">
            We've got the tools to boost your productivity.
          </p>

          {/* Items Container */}
          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            {/* Item 1 */}
            <div className="flex flex-col items-center space-y-5">
              <img src="images/icon-blacklist.svg" alt="" className="mb-6" />
              <h5>Create Blacklists</h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center space-y-5">
              <img src="images/icon-text.svg" alt="" className="mb-6" />
              <h5>Plain Text Snippets</h5>
              <p className="max-w-md text-grayishBlue">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center space-y-5">
              <img src="images/icon-preview.svg" alt="" className="mb-6" />
              <h5>Sneak Preview</h5>
              <p className="max-w-md text-grayishBlue">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section id="references">
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
          <img src="images/logo-google.png" alt="" />
          <img src="images/logo-ibm.png" alt="" />
          <img src="images/logo-microsoft.png" alt="" />
          <img src="images/logo-hp.png" alt="" />
          <img src="images/logo-vector-graphics.png" alt="" />
        </div>
      </section>

      {/* Bototm CTA Section */}
      <section id="bottom">
        <div className="section-container my-20">
          <h3>Clipboard for IOS and MacOS</h3>
          <p className="section-content mb-10 text-xl">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>

          {/* Button Container */}
          <div className="button-container">
            <Link
              className="p-4 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
              to="#"
            >
              Download for IOS
            </Link>

            <Link
              className="p-4 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
              to="#"
            >
              Download for Mac
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 py-4">
        <div className="section-container">
          <div className="flex flex-col items center justify-between md:flex-row">
            {/* Image */}
            <img
              src="images/logo.svg"
              alt=""
              className="h-20 object-contain mb-4 md:mb-0"
            />

            {/* Container for Menus & Socials */}
            <div className="flex flex-col items-center justify-between flex-1 mb-10 text-grayishBlue space-y-6 md:flex-row md:mb-0 md:space-y-0">
              {/* Menus */}
              <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                {/* Menu 1 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <Link to="#" className="hover:text-strongCyan">
                      FAQs
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="hover:text-strongCyan">
                      Contact Us
                    </Link>
                  </div>
                </div>

                {/* Menu 2 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <Link to="#" className="hover:text-strongCyan">
                      Privacy Policy
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="hover:text-strongCyan">
                      Press Kit
                    </Link>
                  </div>
                </div>

                {/* Menu 3 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <Link to="#" className="hover:text-strongCyan">
                      Install Guide
                    </Link>
                  </div>
                </div>
              </div>

              {/* <!-- Social Icons --> */}
              <div className="flex justify-between w-32 py-1">
                <Link to="#">
                  <img
                    src="images/icon-facebook.svg"
                    alt=""
                    className="duration-200 ficon"
                  />
                </Link>
                <Link to="#">
                  <img
                    src="images/icon-twitter.svg"
                    alt=""
                    className="duration-200 ficon"
                  />
                </Link>
                <Link to="#">
                  <img
                    src="images/icon-instagram.svg"
                    alt=""
                    className="duration-200 ficon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: homeStyles },
];

export default IndexPage;
