import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Charts = async () => {
  return (
    <>
      <div className="flex flex-col gap-10 bg-green-100 p-20">
        <div className="flex flex-row gap-10">
          <div className="">
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Ola S1 Air" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Ola S1 Air</SelectItem>
                <SelectItem value="Ola S1 Pro">Ola S1 Pro</SelectItem>
                <SelectItem value="Ola S1 X 2kWh">Ola S1 X 2kWh</SelectItem>
                <SelectItem value="Ola S1 X 3kWh">Ola S1 X 3kWh</SelectItem>
                <SelectItem value="Ola S1 X 4kWh">Ola S1 X 4kWh</SelectItem>
                <SelectItem value="Ola S1 X +">Ola S1 X +</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="">
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Ola S1 Air" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Haryana">Haryana</SelectItem>
                <SelectItem value="Bihar">Bihar</SelectItem>
                <SelectItem value="Karnataka">Karnataka</SelectItem>
                <SelectItem value="TamilNadu">Tamil Nadu</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <h1 className="text-6xl w-1/2">Buying an EV is money in the bank.</h1>
        <div className=" rounded-lg w-1/2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Dont believe us? Calculate for yourself.
          </h2>

          <div className="flex justify-left mb-4">
            <div>
              <p className="text-3xl font-bold text-green-600">₹26,772</p>
              <p className="text-gray-600">Annual Savings</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600">₹2,231</p>
              <p className="text-gray-600">Monthly Savings</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            *The estimated total monthly cost includes EMI, maintenance, and
            running expenses calculated for the price of S1 X(2kWh). Based on
            electricity and fuel prices in Bangalore as of August 2023, with a
            daily distance of 30 kms.
          </p>

          <button className="text-green-600 font-semibold flex items-center">
            Talk to our Experts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default Charts;
