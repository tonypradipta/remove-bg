# 🖼️ Background Remover

A lightweight web application for removing image backgrounds directly from the browser. Built with **React**, **Vite**, **Tailwind CSS**, and **@imgly/background-removal**.

The application provides a simple workflow: upload an image, process it with background-removal technology, preview the original and processed result, then start another image-processing session.

## ✨ Features

- 🖼️ **Image Upload** — Select an image from your device.
- 🖱️ **Drag & Drop** — Drop an image directly into the upload area.
- ✂️ **Automatic Background Removal** — Process images with `@imgly/background-removal`.
- 🔍 **Before & After Preview** — Compare the original image with the processed result.
- ⬇️ **Download Result UI** — Provides a download action after processing.
- 🔄 **Process Another Image** — Reset the workspace and process a new image.
- 📱 **Responsive Interface** — Designed for desktop and smaller screens.
- 🎨 **Modern UI** — Orange/amber gradient theme with Tailwind CSS.

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| [React](https://react.dev/) | User interface |
| [Vite](https://vite.dev/) | Development server and build tool |
| [Tailwind CSS](https://tailwindcss.com/) | Styling and responsive UI |
| [@imgly/background-removal](https://github.com/imgly/background-removal-js) | Client-side background removal |
| ESLint | Code quality and linting |

## 🔄 How It Works

```text
┌─────────────────────┐
│   Select / Drop      │
│      Image           │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Read image in the    │
│ browser              │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ @imgly/background-   │
│ removal processing   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Original vs Result   │
│      Preview         │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Download / Process   │
│ another image       │
└─────────────────────┘
```

## 📁 Project Structure

```text
remove-bg/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx          # Main background-removal interface
│   ├── index.css        # Global styles
│   └── main.jsx         # React entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- **Node.js** 18+ recommended
- **npm** 9+ recommended

### 1. Clone the repository

```bash
git clone https://github.com/tonypradipta/remove-bg.git
cd remove-bg
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser.

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## 🧩 Main Components

### `src/App.jsx`

The main application component handles:

- Image selection through file input
- Drag-and-drop image upload
- Image preview using `FileReader`
- Background removal processing
- Processing state and error handling
- Processed image preview
- Resetting the application state

### Background Removal

The project uses:

```js
import { removeBackground } from "@imgly/background-removal";
```

The selected image is passed directly to the background-removal library, and the resulting `Blob` is converted into a browser object URL for previewing.

## 🌐 Browser-Based Processing

This project is designed around client-side image processing rather than a custom backend API.

That makes the application simple to deploy as a static frontend and avoids the need to build a dedicated image-processing server.

> **Note:** Background-removal processing can require significant browser resources depending on the image and device.

## 🎯 Use Cases

This project can be useful for:

- Product photography
- Profile pictures
- Social media content
- E-commerce images
- Marketing materials
- Quick image preparation
- Learning client-side image processing with React

## ⚠️ Current Limitations

The current implementation is intentionally lightweight. Before using it as a production-grade image editor, consider improving:

- Download handling and generated file export
- Loading/progress state management
- Large-image memory management
- Image size and file-type validation
- More detailed processing errors
- Image quality/export options
- Multiple image processing
- Better accessibility and keyboard interactions
- Automatic cleanup of generated object URLs

## 🔮 Future Improvements

- [ ] Improve download/export functionality
- [ ] Add image size validation
- [ ] Add processing progress indicator
- [ ] Add before/after comparison slider
- [ ] Add background color replacement
- [ ] Add custom background image support
- [ ] Add image cropping and resizing
- [ ] Support batch background removal
- [ ] Add dark/light theme
- [ ] Add PWA support
- [ ] Add automated tests

## 🧪 Development

Run linting before committing changes:

```bash
npm run lint
```

Create a production build to verify the application:

```bash
npm run build
```

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make your changes.
4. Run linting and build checks.
5. Commit your changes:
   ```bash
   git commit -m "feat: add your feature"
   ```
6. Push the branch and open a Pull Request.

## 📄 License

No explicit license file is currently included in the repository. If this project is intended for public reuse, consider adding a license such as MIT.

## 👨‍💻 Author

**Tony Pradipta**

- GitHub: [@tonypradipta](https://github.com/tonypradipta)
- Project: [remove-bg](https://github.com/tonypradipta/remove-bg)

---

<p align="center">
  Built with ❤️ using React, Vite, and Tailwind CSS.
</p>
