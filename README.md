----

# Worktales

 Survytics is a user-friendly survey creation platform, allowing surveyors to effortlessly design surveys with yes/no questions and allowing users to vote, like, dislike, comment and report on particular surveys. 

- [client site](https://survytics-client.web.app)
- [server site](https://survytics-server.vercel.app/health)

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Features

1. **Payment Intregation:**
   - I've used stripe for payment gateway. Any logged in user can become a pro member after successful payment. And only pro members have the permission to add comments.
   
2. **JWT web token:**
   - For sensitive data like admin dashboard and surveyor dashboard I've implemented JWT token on backend.
   
3. **Role base user management:**
   - There are mainly four roles in this website. A user, pro user, surveyor and admin. All the them have their unique access to this website.
   
4. **Admin accessibility:**
   - Admin has the access to allow surveys to be on the website and on every unpublish survey admin can send a feedback message to the surveyor.
   
5. **Default user accessibility:**
   - User can report a specific survey, they can like or dislike a survey. The reports of users are visible to the surveyor in his dashboard as feedback in the modal.
   
6. **Dashboard:**
   - Role-based user dashboard for Admin and Surveyors.
   


## Screenshots

#### Home Page
![Home Page](https://raw.githubusercontent.com/justJubair/survytics-client/main/src/assets/readmeAssets/HomePage.png)

---
#### How it works
![How it works](https://raw.githubusercontent.com/justJubair/survytics-client/main/src/assets/readmeAssets/HowItWorks.png)

---
#### Survey Page
![Services](https://raw.githubusercontent.com/justJubair/survytics-client/main/src/assets/readmeAssets/SurveyPage.png)

---
#### Survey Details
![Survey Details](https://raw.githubusercontent.com/justJubair/survytics-client/main/src/assets/readmeAssets/SurveyDetails.png)

---
#### Admin Dashboard
![Admin dashboard](https://raw.githubusercontent.com/justJubair/survytics-client/main/src/assets/readmeAssets/AdminDashboard01.png)

---
#### Manage Surveys
![Manage Surveys](https://raw.githubusercontent.com/justJubair/survytics-client/main/src/assets/readmeAssets/AdminDashboard02.png)

---
#### Survey Results
![Survey Results](https://raw.githubusercontent.com/justJubair/survytics-client/main/src/assets/readmeAssets/AdminDashboard03.png)

---
#### Payment Gateway
![Payment Gateway](https://raw.githubusercontent.com/justJubair/survytics-client/main/src/assets/readmeAssets/PaymentGateway.png)

---
#### FAQ 
![FAQ section](https://raw.githubusercontent.com/justJubair/survytics-client/main/src/assets/readmeAssets/FAQ.png)




## Getting Started

To get started with the project, follow the steps below:

### Dependencies

Make sure you have the following dependencies installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/justJubair/survytics-client.git
   ```

2. Navigate to the project directory:

   ```bash
   cd survytics-client
   ```

3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```
4. Update the .env.local file with your own firebase and stripe credentials.

```env
VITE_APIKEY=Your_Credentials
VITE_AUTHDOMAIN=Your_Credentials
VITE_PROJECTID=Your_Credentials
VITE_STORAGEBUCKET=Your_Credentials
VITE_MESSAGINGSENDERID=Your_Credentials
VITE_APPID=Your_Credentials

VITE_STRIPE_KEY=Your_stripe_public_key
```

### Usage

1. Start the development server:

   ```bash
   npm run dev
   # or
   yarn run dev
   ```

2. Open the application in your browser: [http://localhost:5173](http://localhost:5173)

## Contributing

If you'd like to contribute to the project, please follow the steps below:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.


## Acknowledgements

- [React.js](https://react.dev)
- [TailwindCSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com)
- [Recharts](https://recharts.org)
- [Swiper](https://swiperjs.com/get-started#initialize-swiper)
- [Stripe](https://stripe.com)