import React from "react";

const prescriptions = [
  {
    id: 1,
    name: "Paracetamol",
    dosage: "500mg",
    frequency: "Twice a day",
    duration: "5 days",
  },
  {
    id: 2,
    name: "Ibuprofen",
    dosage: "200mg",
    frequency: "Once a day",
    duration: "7 days",
  },
  {
    id: 3,
    name: "Amoxicillin",
    dosage: "250mg",
    frequency: "Thrice a day",
    duration: "10 days",
  },
];

const Prescriptions = () => {
  return (
    <div className="bg-blue-200 w-full rounded-xl p-4">
      <h2 className="font-bold text-xl mb-4">Prescriptions</h2>
      <ul className="space-y-4">
        {prescriptions.map((prescription) => (
          <li
            key={prescription.id}
            className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          >
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <p className="font-bold text-lg">{prescription.name}</p>
              <p className="text-md">
                <strong>Dosage:</strong> {prescription.dosage}
              </p>
              <p className="text-md">
                <strong>Frequency:</strong> {prescription.frequency}
              </p>
              <p className="text-md">
                <strong>Duration:</strong> {prescription.duration}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Prescriptions;
