# 🏥 Smart Patient Monitoring and Management System

A web-based patient management application designed to simplify medicine scheduling, medication reminders, and basic patient information sharing between patients and their guardians.

## 📌 About the Project

The **Smart Patient Monitoring and Management System** is a web development project developed to make basic patient care and medication management more convenient.

The application provides separate interfaces for patients and guardians. Guardians can generate a unique Patient ID, schedule medicines, and view available patient location and weather information. Patients can use their Patient ID to access their medicine schedules, receive timely reminders, and update their medication status.

The project aims to demonstrate how simple web technologies can be used to support everyday healthcare management.

## ✨ Features

### 👨‍👩‍👧 Guardian Panel
- **Patient ID Generation:** Generates a unique ID for identifying a patient within the application.
- **Medicine Scheduling:** Allows guardians to add medicine names and their scheduled timings.
- **Medication Tracking:** Displays the medication schedule and its current status.
- **Weather Information:** Retrieves current temperature and humidity information using patient location data.
- **Data Access:** Uses browser local storage to save and retrieve medicine schedules.

### 🧑‍⚕️ Patient Panel
- **Patient Connection:** Allows patients to access their medicine schedule using their Patient ID.
- **Medicine Reminders:** Checks scheduled medicine timings.
- **Voice Notifications:** Uses browser text-to-speech functionality to announce medicine reminders.
- **Visual Alerts:** Displays a visual screen alert when a medicine reminder is triggered.
- **Medication Status:** Allows patients to mark medicines as taken.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure of the web application |
| CSS3 | Styling and layout |
| JavaScript | Application logic and interactive features |
| Browser Local Storage | Storing medicine schedules and patient location |
| Geolocation API | Accessing the patient's location |
| Open-Meteo API | Fetching weather information |
| Web Speech API | Voice-based medicine reminders |

## 📂 Project Structure

```text
smart-patient-system/
│
├── index.html       # Main landing page
├── guardian.html    # Guardian dashboard
├── patient.html     # Patient dashboard
├── style.css        # Application styling
├── script.js        # JavaScript functionality
└── README.md        # Project documentation
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites
- A modern web browser (Google Chrome recommended).
- A code editor such as Visual Studio Code.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mansichhimwal/smart-patient-system.git
```

2. Navigate to the project folder:

```bash
cd smart-patient-system
```

3. Open the folder in Visual Studio Code.

4. Run the application using the Live Server extension or another local web server.

5. Open `index.html` in your browser.

## 📖 How to Use

1. Open the main application page.
2. Select the **Guardian Panel**.
3. Generate a Patient ID.
4. Enter the medicine name and scheduled time.
5. Select the **Patient Panel**.
6. Enter the generated Patient ID and connect.
7. Enable the alarm to receive voice-based medicine reminders.
8. Mark the medicine as taken after taking it.

**Note:** The current prototype uses browser local storage. Patient and guardian data are accessible within the same browser and website origin; this version does not provide cloud-based synchronization between separate devices.

## 🔮 Future Improvements

The project can be extended with the following features:

- Database integration for secure and persistent patient records.
- Real-time synchronization between patient and guardian devices.
- User authentication and role-based access.
- Emergency alerts and notifications.
- Integration with IoT-based health monitoring devices.
- Tracking additional health parameters such as heart rate, body temperature, and blood oxygen levels.
- Improved dashboard with patient health history and reports.

## ⚠️ Project Disclaimer

This project is an academic web development prototype intended for educational and demonstration purposes. It is not a certified medical monitoring system and should not replace professional medical advice or emergency healthcare services.

## 👩‍💻 Developer

**Mansi Chhimwal**

BCA Student | Aspiring Data Analyst & Technology Enthusiast

- GitHub: [@mansichhimwal](https://github.com/mansichhimwal)
- Project Repository: [Smart Patient Monitoring and Management System](https://github.com/mansichhimwal/smart-patient-system)

---

⭐ If you find this project interesting, consider giving the repository a star!
