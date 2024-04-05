# DynamicSVG Component

The `DynamicSVG` is a specialized React component designed for fetching, dynamically manipulating, and rendering SVG images. It provides the flexibility to modify SVG attributes such as `fill`, `stroke`, `width`, and `height` based on the props it receives. The modified SVG is then embedded directly into an image element through a base64 data URL and optimized using Next.js's `Image` component for efficient loading and rendering.

## Props

- **`filePath`**: String (Required) - The URL path to the SVG file.
- **`size`**: Number (Optional, default = 24) - Specifies the width and height for the SVG element and its container.
- **`color`**: String (Optional) - The color value (e.g., '#FF0000', 'red') to apply to the SVG's `fill` and `stroke` attributes, excluding elements explicitly set to 'none'.

## Example Usage

Below is an example demonstrating how to use the `DynamicSVG` component within a React application:

```jsx
import DynamicSVG from './DynamicSVG'; // Adjust the import path based on your file structure

const MyComponent = () => {
  return (
    <div>
      <DynamicSVG 
        filePath="https://example.com/path/to/your.svg" 
        size={48} 
        color="#00FF00" 
      />
    </div>
  );
}

```

## Installation
For now just copy the `dynamic_svg` folder from `components` into your project and import it like the example above.