export default function Newsletter() {
  return (
    <section className="bg-[#E6C744] py-16 px-6 text-center">
      <h3 className="text-4xl font-bold mb-4 text-white uppercase tracking-wide max-w-4xl mx-auto">
        JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
      </h3>
      <p className="mb-8 text-white text-xl">Type your email down below and be young wild generation</p>
      <div className="flex max-w-md mx-auto relative">
        <input
          type="email"
          placeholder="Add your email here"
          className="w-full px-4 py-3 rounded-md text-gray-700 pr-24"
        />
        <button className="absolute right-1 top-1 bottom-1 bg-black text-white px-6 py-2 rounded-md uppercase font-medium text-sm">
          SEND
        </button>
      </div>
    </section>
  )
}
