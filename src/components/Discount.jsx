export default function Discount() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-right space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              منذ عام 2000
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                شركة أساس الوسام
              </span>
              <br />
              للأدوات الصحية
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              نقدم مجموعة متنوعة من المنتجات الصحية عالية الجودة لتلبية كافة احتياجات عملائنا في الطائف.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://api.whatsapp.com/send/?phone=966556507642"
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-lg font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                تواصل واتساب
              </a>

              <a href="/product"
                className="group flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                تصفح المنتجات
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
            {/* Image Grid Section with Banner Style */}
            <div className="relative grid grid-cols-12 gap-6 mt-12">
              {/* Main Large Banner */}
              <div className="col-span-12 lg:col-span-8 relative h-[500px] rounded-3xl overflow-hidden group">
                <img
                  src="../../public/plumb (2).jpg"
                  alt="Main Banner"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                  <div className="absolute bottom-8 right-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">أحدث المنتجات</h3>
                    <p className="text-white/80">اكتشف مجموعتنا المتميزة</p>
                  </div>
                </div>
              </div>

              {/* Side Banners */}
              <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-6">
                <div className="relative h-[240px] rounded-3xl overflow-hidden group">
                  <img
                    src="../../public/pro5.jpg"
                    alt="Featured Product"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-6 right-6 text-white">
                      <h3 className="text-xl font-bold">منتجات مميزة</h3>
                    </div>
                  </div>
                </div>

                <div className="relative h-[240px] rounded-3xl overflow-hidden group">
                  <img
                    src="../../public/pro8.jpg"
                    alt="Special Offers"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-6 right-6 text-white">
                      <h3 className="text-xl font-bold">عروض خاصة</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Wide Banners */}
              <div className="col-span-12 lg:col-span-6 relative h-[300px] rounded-3xl overflow-hidden group">
                <img
                  src="../../public/pro9 (2).jpg"
                  alt="New Collection"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-6 right-6 text-white">
                    <h3 className="text-xl font-bold">المجموعة الجديدة</h3>
                  </div>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-6 relative h-[300px] rounded-3xl overflow-hidden group">
                <img
                  src="../../public/pro9 (1).jpg"
                  alt="Premium Products"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-6 right-6 text-white">
                    <h3 className="text-xl font-bold">منتجات فاخرة</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
