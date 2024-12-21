import { motion } from "framer-motion";

export default function Companies() {
  const companies = [
    {
      name: "Kohler",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGonSR7FQZVrg/company-logo_200_200/company-logo_200_200/0/1631300663351",
      link: "https://www.kohler.com"
    },
    {
      name: "American Standard",
      logo: "https://www.americanstandard-us.com/-/media/project/sites/lixil/us/american-standard-us/logo/as-logo.svg",
      link: "https://www.americanstandard-us.com"
    },
    {
      name: "Toto",
      logo: "https://www.totousa.com/images/toto-2020/logo.svg",
      link: "https://www.totousa.com"
    },
    {
      name: "Grohe",
      logo: "https://do5nkkzntcenb.cloudfront.net/Project/Sites/Lixil/shared/Common/logogrohe.svg",
      link: "https://www.grohe.com"
    },
    {
      name: "Delta",
      logo: "https://www.deltafaucet.com/themes/custom/delta_theme/logo.svg",
      link: "https://www.deltafaucet.com"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-2xl font-bold leading-8 text-gray-900 mb-4">
            أشهر الشركات و الماركات العالمية
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            نفتخر بتقديم منتجات من أفضل العلامات التجارية العالمية في مجال الأدوات الصحية
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {companies.map((company, index) => (
            <motion.a
              key={company.name}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-24 flex items-center justify-center p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-12 w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
