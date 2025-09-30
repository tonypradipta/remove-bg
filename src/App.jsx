import { useState, useRef} from "react";
import {removeBackground } from "@imgly/background-removal";



export default function BackgroundRemover() {

  const [originalImage, setOriginalImage] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);


    const handleFileSelect = async (file) => {
        if(!file || !file.type.startsWith("image/")) {
            setError("Please select a valid image file");
            return;
        }

        setError(null);
        setProcessedImage(null);

        const reader = new FileReader();

        reader.onload = (e) => {
            if(e.target && typeof e.target.result === "string") {
                setOriginalImage(e.target.result);
            }
        };
        reader.readAsDataURL(file);

         try {
            const blob = await removeBackground(file);
            const url = URL.createObjectURL(blob);
            setProcessedImage(url);
        } catch (err) {
            setError("Failed to process image. Please try another image.");
            console.error("Background removal error:", err);
        } finally {
            setIsProcessing(false);
        }
    };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files && e.target.files[0] ? e.target.files[0] : undefined;
    handleFileSelect(file);
  };

  const downloadImage = () => {
  if (!processedImage) return;
  const link = document.createElement('a');
  link.href = "background-removed.png";
  link.download = "background-removed.png";
  link.click();
  URL.revokeObjectURL(processedImage);
  };

  const resetApp = () => {
  setOriginalImage(null);
  setProcessedImage(null);
  setIsProcessing(false);
  setError(null);
  fileInputRef.current.value = "";
  };


  return (
    <div className="min-h-screen 
    bg-gradient-to-br from-orange-950 
    via-neutral-900 to-amber-950 flex flex-col 
    items-center justify-between p-4">
      
      <div className="flex-1 flex flex-col items-center justify-center gap-12 w-full">
        <h1 className="text-7xl text-center bg-gradient-to-r text-orange-200 ">
          Background Remover
        </h1>

        <div className="w-full max-w-xl bg-gradient-to-r from-orange-900 to-amber-950 backdrop-blur-md border-border-orange-500/30 rounded-3xl p-4 sm:p-6 shadow-2xl">
          
      {!originalImage && (
          <div className="flex flex-col items-center justify-center h-96 mb-6 p-8 bg-gradient-to-b 
          from-amber-950/40 to-orange-950/50 rounded-2xl opacity-80 hover:opacity-100 hover:shadow-orange-700 
          shadow-2xl transition-all duration-400 text-center cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
       >
          <div className="text-4xl sm:text-5xl mb-4">🖼️</div>
          <div className="text-lg sm:text-xl text-orange-200 mb-2">
            Drag & drop or click to upload an image
          </div>
          <div className="text-sm sm:text-base text-orange-400">
            (Supported formats: JPG, PNG, etc.)
          </div>


          <input 
            type="file" 
            ref={fileInputRef} 
            accept="image/*" 
            onChange={handleFileInputChange} 
            className="hidden" 
          />
        </div>
      )}

            {error && <div className="text-center text-orange-400 mb-4">
            {error}
          </div>}

          {originalImage && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col items-center">
                <div className="text-orange-300 text-xl mb-2">Original</div>
                <div className="aspect-square w-full max-w-md mx-auto border-2 border-orange-600/50 rounded-2xl overflow-hidden flex items-center justify-center">
                  <img 
                    src={originalImage} 
                    alt="Original" 
                    className="object-contain w-full h-full" 
                  />
                </div>


              </div>
              <div className="flex flex-col items-center">
                  <div className="text-orange-300 text-xl mb-2">Background Removed</div>
                  <div className="aspect-square w-full max-w-md mx-auto border-2 border-orange-600/50 rounded-2xl overflow-hidden flex items-center justify-center">
                    {processedImage ? (
                      <img 
                        src={processedImage} 
                        alt="Processed" 
                        className="object-contain w-full h-full" 
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center w-full h-full text-orange-400">
                      {isProcessing ? (
                        <div className="flex items-center gap-2">
                          <div className="animate-spin w-6 h-6 border-2 border-orange-300/30 border-t-orange-100 rounded-full"></div>
                          Processing...
                        </div>
                      ) : (
                        <span> Processed image will appear here</span>
                      )}
                      </div> 
                    )}
                  </div>
                </div>
            </div>
          )}

          {originalImage && (
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center mt-2">
                  <button
                    onClick={downloadImage}
                    disabled={!processedImage}
                    className="px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-500 hover:opacity-80 text-white font-semibold rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {processedImage ? "⬇️ Download Result" : "Processing..."}
                  </button>

                  <button onClick={resetApp}
                    className="px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-500 hover:opacity-80 text-white font-semibold rounded-2xl cursor-pointer">
                    🔄 Process Another Image
                  </button>
                </div>
          )}
        </div>
      </div>

      <footer className="mt-auto pb-6 text-center">
        <div className="flex items-center justify-center gap-2 text-orange-300/80 text-sm">
          <span>Crafted with</span>
          <span className="text-orange-400 animate-pulse">❤️</span>
          <span>by</span>
          <a 
            href="https://twitter.com/tonypradiptaa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 font-semibold transition-colors duration-300 hover:underline"
          >
            @tonypradiptaa | All rights reserved.
          </a>
        </div>
      </footer>
    </div>
  );
}