import React, { useState } from 'react';

const ImageWithFallback = ({ 
  src, 
  alt, 
  fallbackSrc = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
  className = '',
  ...props 
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    if (currentSrc !== fallbackSrc && !hasError) {
      // First error - try fallback
      setCurrentSrc(fallbackSrc);
      setHasError(false);
    } else {
      // Fallback also failed - use SVG placeholder
      setHasError(true);
      setCurrentSrc('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMjUgNzVIMTc1VjEyNUgxMjVWNzVaIiBmaWxsPSIjREREREREIi8+CjxwYXRoIGQ9Ik0xMzggMTAwTDE1MCA4OEwxNjIgMTAwTDE1MCA4OEwxMzggMTAwWiIgZmlsbD0iIzk5OTk5OSIvPgo8dGV4dCB4PSIxNTAiIHk9IjE0NSIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIj5SZWNpcGUgSW1hZ2U8L3RleHQ+Cjwvc3ZnPgo=');
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`${className} ${isLoading ? 'loading' : ''} ${hasError ? 'error' : ''}`}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};

export default ImageWithFallback; 