export default function Discount() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg text-right">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              شركة أساس الوسام للأدوات الصحية
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              نقدم مجموعة متنوعة من المنتجات الصحية عالية الجودة لتلبية كافة احتياجات عملائنا في الطائف.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative placeholder grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 bg-gray-300">
                        <a
                          href="#"
                          className="h-full w-full flex items-center justify-center text-gray-500 text-center"
                        >
                          Placeholder 1
                        </a>
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg bg-gray-300">
                        <a
                          href="#"
                          className="h-full w-full flex items-center justify-center text-gray-500 text-center"
                        >
                          Placeholder 2
                        </a>
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg bg-gray-300">
                        <a
                          href="#"
                          className="h-full w-full flex items-center justify-center text-gray-500 text-center"
                        >
                          Placeholder 3
                        </a>
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg bg-gray-300">
                        <a
                          href="#"
                          className="h-full w-full flex items-center justify-center text-gray-500 text-center"
                        >
                          Placeholder 4
                        </a>
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg bg-gray-300">
                        <a
                          href="#"
                          className="h-full w-full flex items-center justify-center text-gray-500 text-center"
                        >
                          Placeholder 5
                        </a>
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg bg-gray-300">
                        <a
                          href="#"
                          className="h-full w-full flex items-center justify-center text-gray-500 text-center"
                        >
                          Placeholder 6
                        </a>
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg bg-gray-300">
                        <a
                          href="#"
                          className="h-full w-full flex items-center justify-center text-gray-500 text-center"
                        >
                          Placeholder 7
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                اكتشف المجموعة
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
