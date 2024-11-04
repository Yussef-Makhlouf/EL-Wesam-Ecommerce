const features = [
  { name: "المنشأ", description: "تم تصميمه بواسطة أساس الوسام للأدوات الصحية والسباكة" },
  { name: "المواد", description: "مصنوع من مواد عالية الجودة تشمل النحاس والصلب المطلي لمقاومة التآكل" },
  { name: "الأبعاد", description: '7.5 سم × 15 سم × 5 سم' },
  { name: "اللمسات النهائية", description: "مصقول بعناية ومزود بطلاء للحماية من الصدأ" },
  { name: "التضمينات", description: "مجموعة مكونة من خرطوم المياه وجهاز التحكم في التدفق" },
  { name: "ملاحظات", description: "مصنوع من خامات طبيعية، قد تختلف الحبوب والألوان مع كل قطعة." },
];

export default function ProductViews() {
  return (
    <div className="bg-white" dir="rtl">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            مواصفات منتجات أساس الوسام
          </h2>
          <p className="mt-4 text-gray-500">
            تقدم شركة أساس الوسام بالطائف مجموعة مميزة من الأدوات الصحية والسباكة، حيث تمتاز منتجاتنا بتصميمات عملية وجودة عالية. نحن نوفر منتجات تلبي احتياجات جميع العملاء، من تجهيزات الحمامات الفاخرة إلى أدوات السباكة المتينة التي تضمن كفاءة استخدام وتوفير استهلاك المياه. جميع منتجاتنا مصنوعة من خامات مختارة بعناية لضمان متانة فائقة وشمولية في الاستخدام اليومي، مما يضمن رضا العملاء وتجربة استخدام مريحة.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            alt="أداة صحية من أساس الوسام ذات جودة عالية."
            src="https://via.placeholder.com/300"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="تصميم عملي للأدوات الصحية من أساس الوسام."
            src="https://via.placeholder.com/300"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="منتجات السباكة المصممة بعناية من أساس الوسام."
            src="https://via.placeholder.com/300"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="خامات متينة لأدوات السباكة من أساس الوسام."
            src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-04.jpg"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
