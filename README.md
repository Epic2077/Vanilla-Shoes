# Vanilla Shoes: A Modern E-Commerce Application

**Vanilla Shoes** is a responsive and feature-rich e-commerce application designed for sneaker enthusiasts. This project combines a sleek, mobile-friendly UI with robust functionality, showcasing high-quality sneakers while offering a seamless shopping experience.

Whether you're browsing, checking out, or managing orders, Vanilla Shoes ensures that every interaction is user-centric, visually engaging, and intuitive.

<div align="center"> <img src="./src/assets/screenshots/Screen Shot 2024-11-15 at 01.12.22.png" width="250px"/> <img src="./src/assets/screenshots/Screen Shot 2024-11-15 at 01.12.52.png" width="250px"/> <img src="./src/assets/screenshots/Screen Shot 2024-11-23 at 01.11.43.png" width="250px"/> </div>

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Built With](#built-with)
- [Installation](#installation)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

---

## 🎯 About the Project

The **Vanilla Shoes** e-commerce platform is built for showcasing premium sneakers in a dynamic, user-friendly manner. The app focuses on simplicity, speed, and clarity to provide an enjoyable shopping experience. With key features like order management, a modular UI, and brand filtering, this app stands out as a clean and efficient solution for e-commerce needs.

---

## ✨ Features

- **Onboarding Flow**: An interactive onboarding experience introduces users to the brand and its values.
- **Dynamic Filtering**: Browse products by brand or category with smooth navigation between pages.
- **Order Management**: Easily review and manage orders, including real-time shipping status updates.
- **API Integration**: Fetch product and user data dynamically from a custom back-end.
- **Mobile View Only**: Works only on a mobile view port at the moment.
- **User Friendly**: Very user friendly interface.
- **Simple and Clean UI**: Focused on creating a welcoming and user-friendly interface.

---

## 🛠️ Built With

![JS](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) ![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)

- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **Tailwind CSS**
- **Vite**
- **[Figma](https://www.figma.com/design/ku0eN6V3Qga0p9rmboXPcC/shoe-exercise?node-id=0-1&t=GPeKBtALkxkTluEY-1)**
- **Custom Components (via `El` Utility Function)**

This project relies on a modular approach, leveraging reusable components to create UI elements and manage state.

---

## 🚀 Installation

To set up this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Epic2077/Vanilla-Shoes.git
   cd Vanilla-Shoes
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the App**:
   Use a development server to serve the app locally. You may use a server of your choice, such as `lite-server`, `live-server`, `webpack dev server`, or as I use `vite`
   ```bash
   npm run dev
   ```
4. **Install Back-end**:
   The back-end of the website is stored in another repo called [Vanilla-Shoes-Back-End](https://github.com/Epic2077/Vanilla-Shoes-Back-End). It contains the api and JSON needed for the project to be fetched using `JSON-server`.

   ```bash
    git clone https://github.com/Epic2077/Vanilla-Shoes-Back-End.git
    cd Vanilla-Shoes-Back-End
   ```

   Then install the dependencies.

   ```bash
    npm install
   ```

   Now you can start the `JSON-server`.

   ```bash
    npm start
   ```

   **Make Sure the local address of your server and `JSON-server` is different!**

---

## 🤝 Contributing

Contributions are welcome! Follow these steps to get involved:

1. Fork the project
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

---

## 👏 Acknowledgments

- Special thanks to the open-source community for the tools and resources that inspired this project.
- Thanks to [Maktab Sharif](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://maktabsharif.ir/&ved=2ahUKEwinmq3kzc-JAxU_hv0HHRmTJzgQFnoECBoQAQ&usg=AOvVaw0Zpog7mWc26mxQ5yxC_XN3) for helping me overcome the challenges of becoming a Front-End developer.
