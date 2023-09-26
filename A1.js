const hospital = {
    name: "Reddoor Hospital",
    patients: [
        {
            id: "99001",
            fullName: "Emily Johnson",
            dateOfBirth: "10/03/1985",
            symptoms: ["fever", "cough"]
        },
        {
            id: "99002",
            fullName: "Michael Williams",
            dateOfBirth: "03/21/1959",
            symptoms: ["headache", "fatigue"]
        },
        {
            id: "99003",
            fullName: "Michael Williams",
            dateOfBirth: "12/29/1972",
            symptoms: ["stomachache", "diarrhea"]
        }
    ]
};

console.log(hospital);
console.log(hospital.name);

// Accessing individual patients and their properties
console.log("Patient 1:");
console.log("ID:", hospital.patients[0].id);
console.log("Full Name:", hospital.patients[0].fullName);
console.log("Date of Birth:", hospital.patients[0].dateOfBirth);
console.log("Symptoms:", hospital.patients[0].symptoms.join(", "));

console.log("Patient 2:");
console.log("ID:", hospital.patients[1].id);
console.log("Full Name:", hospital.patients[1].fullName);
console.log("Date of Birth:", hospital.patients[1].dateOfBirth);
console.log("Symptoms:", hospital.patients[1].symptoms.join(", "));

console.log("Patient 3:");
console.log("ID:", hospital.patients[2].id);
console.log("Full Name:", hospital.patients[2].fullName);
console.log("Date of Birth:", hospital.patients[2].dateOfBirth);
console.log("Symptoms:", hospital.patients[2].symptoms.join(", "));



function showPatients(hospital) {
    let str = "<h1>" + hospital.name + "</h1>";
  
    hospital.patients.forEach((patient) => {
      str += "<h2>" + patient.fullName + ', ' + patient.dateOfBirth + "</h2>";
      str += "<ul>";
  
      patient.symptoms.forEach((symptom) => {
        str += "<li>" + symptom + "</li>";
      });
  
      str += "</ul>";
    });
  
    return str;
  }
  
  console.log(showPatients(hospital));

  // Execute the showPatients function with the hospital data structure
const patientInfo = showPatients(hospital);

  // Log the return value to the console
console.log(patientInfo);


  
function getPatient(patientRecords) {
    const randomIndex = Math.floor(Math.random() * patientRecords.length);
    return patientRecords[randomIndex].id;
  }
  
  // Execute the getPatient function with the patient records array
  const randomPatientID = getPatient(hospital.patients);
  
  // Log the random patient ID to the console
  console.log("Random Patient ID:", randomPatientID);
  
  
  
  
  
  
  

  
  
  
  
  
  
