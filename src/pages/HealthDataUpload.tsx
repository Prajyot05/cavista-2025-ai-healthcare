import axios from "axios";
import { useState } from "react";

const HealthDataUpload = () => {
  const [symptoms, setSymptoms] = useState<string>();
  const [prediction, setPrediction] = useState<string>("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Implement submit function
    const res = await axios.post(
      "https://healthai-cjgo.onrender.com/process",
      symptoms?.toString(),
      {
        headers: {
          "Content-Type": "text/plain",
        },
      }
    );
    setPrediction(res.data.symptom_vector);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Enter Symptoms</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg">
            <div className="text-center">
              <input
                type="text"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="Enter your symptoms"
                className="w-full h-full py-2 px-2"
              />
            </div>
          </div>
          <div className="py-4">
            {prediction && (
              <h5 className="text-6lx">Predicted Disease: {prediction}</h5>
            )}
          </div>
          <button
            type="submit"
            className={`w-[50%] mx-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HealthDataUpload;
