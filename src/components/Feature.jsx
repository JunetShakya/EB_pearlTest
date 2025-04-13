import React from "react";

const Features = () => {
  const features = [
    {
      title: "Access up to $100,000",
      desc: "We fund each invoice once approved and collect payment to optimise your cash flow.*",
    },
    {
      title: "You choose invoices to get paid",
      desc: "Self-serve online portal available 24/7 or connect from your CRM or invoicing platform.",
    },
    {
      title: "Simple pricing",
      desc: "Only pay for what you use, if you don’t need us, there are no costs.",
    },
    {
      title: "Fast approval",
      desc: "Get approved in minutes with minimal paperwork.",
    },
    {
      title: "Seamless integrations",
      desc: "Connect your invoicing tools or accounting software easily.",
    },
    {
      title: "Real-time tracking",
      desc: "Monitor your invoice funding and payments in real time.",
    },
  ];

  return (
    <section className='text-center py-16 px-4 bg-white text-gray-900'>
      <h2 className='text-3xl font-bold mb-2'>Outsource payment collection</h2>
      <p className='text-gray-500 mb-10'>
        Faster and flexible access to cash flow from one or all your invoices.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {features.map((feat, idx) => (
          <div
            key={idx}
            className='bg-white p-6 shadow-sm rounded-lg hover:shadow-md transition'>
            <div className='text-pink-500 text-3xl mb-4'>🌐</div>
            <h3 className='text-lg font-semibold mb-2'>{feat.title}</h3>
            <p className='text-gray-600 text-sm'>{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
