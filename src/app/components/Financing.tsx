import Image from "next/image";

export default function Financing() {
  return (
    <div className="bg-white flex flex-row gap-20 p-16">
      <h1 className="text-3xl w-1/3 font-bold text-gray-900 mb-4">
        Financing Simplified.
      </h1>

      <div className="w-1/3">
        <p className="text-xl font-bold">EMI starting at just ₹3,299/month</p>
        <p className="mt-4">
          Only the best financing partners for you. Pre-approved loans at just
          12% per annum. Offline financing accepted too.
        </p>
        <p className="mt-4 font-semibold">There, we sorted it out for you.</p>
        <button className="mt-4 bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
          Calculate EMI →
        </button>
      </div>
      <div className="w-1/3">
        <p className="text-xl font-bold">Now take it slow with Split and Pay</p>
        <p className="mt-4">
          Split the amount and pay. You choose the split amount. You call the
          shots.
        </p>
        <div className="mt-4">
          <Image
            width={500}
            height={500}
            src="https://cdn.olaelectric.com/ev-discovery-platform/New-Homepage/split_payright_new.webp"
            alt="Phone display"
          />
        </div>
      </div>
    </div>
  );
}
