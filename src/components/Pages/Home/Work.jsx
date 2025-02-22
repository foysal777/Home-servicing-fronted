import { FaClipboardList, FaCheckCircle, FaStar } from "react-icons/fa";

const steps = [
  {
    icon: <FaClipboardList className="text-3xl text-white" />,
    title: "Post a Service",
    description:
      "After you post a job, our matching system identifies and alerts relevant Provider, who can then express interest in your job.",
  },
  {
    icon: <FaCheckCircle className="text-3xl text-white" />,
    title: "Getting Booked & Job done",
    description:
      "After you post a job, our matching system identifies and alerts relevant Provider, who can then express interest in your job.",
  },
  {
    icon: <FaStar className="text-3xl text-white" />,
    title: "Get Review & Get Leads",
    description:
      "After you post a job, our matching system identifies and alerts relevant Provider, who can then express interest in your job.",
  },
];

export default function TruelysellWorkflow() {
  return (
    <div className="p-20">
    <div className="bg-black text-white p-10 px-4 rounded-2xl">
      <h2 className="text-center text-3xl font-bold mb-2">
        How <span className="text-green-400">Truelysell</span>
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Works</span>
      </h2>
      <p className="text-center text-gray-300 mb-6">
        Each listing is designed to be clear and concise, providing customers
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>


  );
}
