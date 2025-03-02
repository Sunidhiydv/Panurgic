import React from 'react'

export default function Services() {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

<section id="new-features" class="py-8 bg-white sm:py-10 lg:py-16">
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
        Investment Advisory and portfolio management </h2>
      <p class="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
        Enhance your economy with advanced features
      </p>
    </div>
    <div
      class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
      <div class="md:p-8 lg:p-14 flex flex-col justify-center items-center md:border-t">
        <div class="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
          <i class="fa-solid fa-chart-column text-3xl text-gray-900"></i>
        </div>
        <h3 class="mt-12 text-xl font-bold text-gray-900">Mutual Fund</h3>
        <p class="mt-5 text-base text-gray-600">                Access expert recommendations tailored to your risk appetite and financial goals. Maximize returns with strategic mutual fund investments.

          </p>
      </div>

      {/* <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
        <div class="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
          <i class="fa-solid fa-truck-fast text-3xl text-gray-900"></i>
        </div>
        <h3 class="mt-12 text-xl font-bold text-gray-900">Fast Integration</h3>
        <p class="mt-5 text-base text-gray-600">Seamlessly integrate with your existing tools and systems for a smooth
          workflow experience.</p>
      </div> */}

      {/* <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
        <div class="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
          <i class="fa-solid fa-shield text-3xl text-gray-900"></i>
        </div>
        <h3 class="mt-12 text-xl font-bold text-gray-900">Security First</h3>
        <p class="mt-5 text-base text-gray-600">Ensure the safety of your data with top-notch security features. Your
          privacy is our priority.</p>
      </div> */}

      {/* <div class="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
        <div class="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
          <i class="fa-solid fa-cloud text-3xl text-gray-900"></i>
        </div>
        <h3 class="mt-12 text-xl font-bold text-gray-900">Cloud Integration</h3>
        <p class="mt-5 text-base text-gray-600">Access your data from anywhere with seamless cloud integration. Work
          without boundaries.</p>
      </div> */}

      <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
        <div class="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
          <i class="fa-solid fa-pen-nib text-3xl text-gray-900"></i>
        </div>
        <h3 class="mt-12 text-xl font-bold text-gray-900">Will writing</h3>
        <p class="mt-5 text-base text-gray-600">                Secure your legacy with professional guidance on drafting wills and estate planning.

          </p>
      </div>

      <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
        <div class="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
          <i class="fa-solid fa-bolt text-3xl text-gray-900"></i>
        </div>
        <h3 class="mt-12 text-xl font-bold text-gray-900">Equity management</h3>
        <p class="mt-5 text-base text-gray-600">                Manage your equity investments effectively with data-driven insights and expert advice.

          </p>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
