export default function Companies() {
  return (
      <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            أشهر الشركات و الماركات العالميه 
              </h2>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                  <img
                      alt="Kohler"
                      src="https://media.licdn.com/dms/image/v2/C4D0BAQGonSR7FQZVrg/company-logo_200_200/company-logo_200_200/0/1631300663351?e=2147483647&v=beta&t=GTM-dosX4Lz7qGgNhmghuzybeF1kC9eaQiSF9jnz2QI"
                      width={188}
                      height={48}
                      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
                  />
                  <img
                      alt="American Standard"
                      src="https://www.americanstandard-us.com/-/media/project/sites/lixil/us/american-standard-us/logo/as-logo.svg?h=27&la=en-US&w=231&hash=09A93B177E60531DB3726FAB58A170BB"
                      width={158}
                      height={48}
                      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  />
                  <img
                      alt="Toto"
                      src="https://www.totousa.com/images/toto-2020/logo.svg"
                      width={158}
                      height={48}
                      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  />
                  <img
                      alt="Grohe"
                      src="https://do5nkkzntcenb.cloudfront.net/Project/Sites/Lixil/shared/Common/logogrohe.svg?la=en-US"
                      width={158}
                      height={48}
                      className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                  />
                  <img
                      alt="Delta"
                      src="https://www.deltafaucet.com/themes/custom/delta_theme/logo.svg"
                      width={158}
                      height={48}
                      className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                  />
              </div>
          </div>
      </div>
  );
}
