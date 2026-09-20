

import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-10 items-center md:items-start ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          <div>
            <img src={logo} alt="Dev Stack" />

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-4 flex gap-5 text-sm font-medium">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">

            <div>
              <h3 className="mb-3 text-sm font-bold">
                PRODUCT
              </h3>

              <ul className="space-y-2 text-sm text-slate-500">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Technologies</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-bold">
                COMPANY
              </h3>

              <ul className="space-y-2 text-sm text-slate-500">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-bold">
                LEGAL
              </h3>

              <ul className="space-y-2 text-sm text-slate-500">
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-slate-400">
          © 2026 Dev Stack. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;