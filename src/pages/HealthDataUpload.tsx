import React, { useState } from "react";
import { FileText, CheckCircle } from "lucide-react";

const HealthDataUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    // Simulate upload delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setUploading(false);
    setSelectedFiles([]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Upload Health Data
          </h1>
          <p className="text-gray-600 mt-2">
            Upload your medical records, test results, or health monitoring data
            for AI analysis
          </p>
        </div>

        <form onSubmit={handleUpload} className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
            <div className="text-center">
              <input
                type="file"
                multiple
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
              >
                <FileText className="h-5 w-5 mr-2" />
                Select Files
              </label>
              <p className="text-sm text-gray-500 mt-2">
                or drag and drop your files here
              </p>
            </div>
          </div>

          {selectedFiles.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Selected Files:
              </h3>
              <ul className="space-y-2">
                {selectedFiles.map((file, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {file.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            type="submit"
            disabled={selectedFiles.length === 0 || uploading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              selectedFiles.length === 0 || uploading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {uploading ? "Uploading..." : "Upload and Analyze"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HealthDataUpload;
