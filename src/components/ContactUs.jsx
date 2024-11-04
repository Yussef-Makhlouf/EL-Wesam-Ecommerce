import { FooterWithPaymentLogosAndSocialMedia } from "./Footer";
import Navbar1 from "./Navbar";

export default function Example() {
  return (
    <div>
      <Navbar1 />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        
        <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
          {/* Logo */}
          <img
            alt="Logo"
            src="./../public/Wessam.jpg"
            className="mx-auto h-32 rounded-full shadow-lg"
          />
          
          {/* Main Content */}
          <figure className="mt-10 space-y-6">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                في قلب مدينة الطائف، نُقدم لكم أفضل الحلول لاحتياجاتكم من الأدوات الصحية و السباكة. نعمل بشغف لنقدم لعملائنا مجموعة متنوعة من المنتجات ذات الجودة العالية، مع التركيز على الابتكار والتصميم العصري.
              </p>
              <p className="mt-4">
                نسعى دائمًا لتلبية احتياجاتكم وتوفير تجربة تسوق مريحة وممتعة. سواء كنتم تبحثون عن أدوات جديدة لمشاريعكم المنزلية أو ترغبون في تحديث أنظمة السباكة لديكم، فإننا هنا لخدمتكم.
              </p>
              <p className="mt-4">
                أساس الوسام هو المكان الذي يجمع بين الجودة، الثقة، والأسعار المنافسة. انضموا إلينا واكتشفوا الفرق!
              </p>
            </blockquote>
          </figure>

          {/* Call-to-Action Button */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://api.whatsapp.com/send/?phone=966556507642"
              className="px-6 py-3 text-white bg-green-700 rounded-full text-lg font-medium hover:bg-green-600 transition-colors duration-300"
            >
              تواصل معنا whatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-100 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">من نحن</h2>
          <p className="mt-4 text-lg text-gray-700">
            نحن فريق مكرس لتقديم أفضل الأدوات الصحية وحلول السباكة. مع سنوات من الخبرة، نضع جودة المنتج وراحة العميل كأولوية.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">خدماتنا</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h3 className="text-xl font-semibold">توريد الأدوات الصحية</h3>
              <p className="mt-4 text-gray-600">أفضل الأدوات الصحية الحديثة لكل احتياجاتك المنزلية.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h3 className="text-xl font-semibold">حلول السباكة المتكاملة</h3>
              <p className="mt-4 text-gray-600">حلول شاملة لتحديث وصيانة أنظمة السباكة.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h3 className="text-xl font-semibold">خدمة ما بعد البيع</h3>
              <p className="mt-4 text-gray-600">دعم فني موثوق وخدمة ما بعد البيع متميزة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">آراء عملائنا</h2>
          <div className="mt-10 space-y-8">
            <blockquote className="text-lg text-gray-700">
              "خدمة رائعة ومنتجات عالية الجودة! أساس الوسام هو المكان المناسب لجميع احتياجات السباكة."
            </blockquote>
            <blockquote className="text-lg text-gray-700">
              "فريق محترف وسريع الاستجابة. أنصح الجميع بالتعامل معهم."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">تواصل معنا</h2>
          <form className="mt-10 space-y-6">
            <input
              type="text"
              placeholder="اسمك"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
            <textarea
              placeholder="رسالتك"
              className="w-full px-4 py-2 border border-gray-300 rounded h-32"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 text-white bg-indigo-600 rounded-full text-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
            >
              أرسل الرسالة
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <FooterWithPaymentLogosAndSocialMedia />
    </div>
  );
}
