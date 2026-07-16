Markdown

# 🌟 Next.js Random Quote Generator

A modern, fast, and beautifully designed web application that generates inspiring quotes. Built with the latest React ecosystem and powered by RapidAPI.

## ✨ Features

- **Instant Generation:** Get random quotes seamlessly using an external API.
- **Modern UI/UX:** Styled with the brand new Tailwind CSS v4 and Radix UI primitives.
- **State Management:** Fully optimized data flow using Redux Toolkit.
- **Responsive Design:** Works perfectly across all devices.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router & Turbopack)
- **Library:** React 19
- **Styling:** Tailwind CSS v4, `tw-animate-css`
- **State Management:** Redux Toolkit (`react-redux`)
- **Components:** Radix UI (`@radix-ui/react-dialog`, `tooltip`, etc.), Lucide Icons
- **Data Fetching:** Custom API integration (via RapidAPI)

## 🚀 Getting Started

To run this project locally, follow these simple steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone [https://github.com/your-username/booster-homework.git](https://github.com/your-username/booster-homework.git)

    Navigate into the project directory:
    Bash

    cd Queto-app

    Install the required dependencies:
    Bash

    npm install
   ```

🔐 Environment Setup (Important)

This project requires a RapidAPI key to fetch quotes successfully. For security reasons, the original API keys are not included in this repository. You must set up your own environment variables.

    Create a file named .env.local in the root directory of your project.

    Add the following exact keys to your .env.local file:
    Code snippet

    NEXT_PUBLIC_QUOTE_API="[https://get-quotes-api.p.rapidapi.com/random](https://get-quotes-api.p.rapidapi.com/random)"
    NEXT_PUBLIC_QUOTE_KEY="your_rapidapi_key_here"

    (Note: Replace "your_rapidapi_key_here" with your own API key. You can get a free key by creating an account on RapidAPI and subscribing to the Quote Generator API).

Run the Application

Start the development server with Turbopack for ultra-fast compilation:
Bash

npm run dev

Open http://localhost:3000 in your browser to see the app in action!

👨‍💻 Author

faran ataei

    GitHub: @faran-ataei

    LinkedIn: https://www.linkedin.com/in/faran-ataei/
