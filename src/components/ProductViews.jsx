const features = [
  { name: "المنشأ", description: "تم تصميمه بواسطة أساس الوسام للأدوات الصحية والسباكة" },
  { name: "المواد", description: "مصنوع من مواد عالية الجودة تشمل النحاس والصلب المطلي لمقاومة التآكل" },
  { name: "الدقه", description: 'تم تصميمه بواسطة أساس الوسام للأدوات الصحية والسباكة' },	
  { name: "اللمسات النهائية", description: "مصقول بعناية ومزود بطلاء للحماية من الصدأ" },
  { name: "التضمينات", description: "مجموعة مكونة من خرطوم المياه وجهاز التحكم في التدفق" },
  { name: "ملاحظات", description: "مصنوع من خامات طبيعية، قد تختلف الحبوب والألوان مع كل قطعة." },
];

export default function ProductViews() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            منتجات أساس الوسام
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Content Section */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              تقدم شركة أساس الوسام بالطائف مجموعة مميزة من الأدوات الصحية والسباكة، حيث تمتاز منتجاتنا بتصميمات عملية وجودة عالية.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="bg-blue-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <dt className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {feature.name}
                  </dt>
                  <dd className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            <img
              src="../../public/pro8.jpg"
              alt="أداة صحية"
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 col-span-2 h-64 w-full object-cover"
            />
            <img
              src="../../public/pro1.png"
              alt="تصميم عملي"
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-48 w-full object-cover"
            />
            <img
              src="../../public/pro9 (2).jpg"
              alt="منتجات السباكة"
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-48 w-full object-cover"
            />
            <img
              src="../../public/pro5.jpg"
              alt="خامات متينة"
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 col-span-2 h-64 w-full object-cover"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">+1000</div>
            <div className="text-gray-600">منتج متنوع</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
            <div className="text-gray-600">سنة خبرة</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">رضا العملاء</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">دعم فني</div>
          </div>
        </div>
      </div>
    </div>
  );
}
