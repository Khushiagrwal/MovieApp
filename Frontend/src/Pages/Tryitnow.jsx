import React, { useEffect, useState } from 'react';
import { fabric } from 'fabric';
import io from 'socket.io-client';
import "../../public/Css/style.css";
import { useNavigate } from 'react-router-dom';
import  Header from '../Component/Header';


const socket = io('http://localhost:8080'); // Corrected server URL

function Tryitnow() {
  const navigate=useNavigate();
  const [canvas, setCanvas] = useState(null);
  const [isDrawingMode, setIsDrawingMode] = useState(false);
  const [isEraserMode, setIsEraserMode] = useState(false);
  const [isProUser, setIsProUser] = useState(false);

  useEffect(() => {
    const newCanvas = new fabric.Canvas('c');
    setCanvas(newCanvas);

    // Set initial brush properties
    newCanvas.freeDrawingBrush.color = 'black';
    newCanvas.freeDrawingBrush.width = 2;

    // Event listener to capture drawing actions
    newCanvas.on('path:created', (event) => {
      const pathData = event.path.toJSON();
      socket.emit('drawing', pathData); // Emit drawing data to the server
    });

    return () => {
      // Cleanup code to avoid memory leaks
      newCanvas.dispose();
    };
  }, []);

  const handleToggleDrawingMode = () => {
    setIsDrawingMode(prevMode => !prevMode);
    setIsEraserMode(false);

    if (canvas) {
      canvas.isDrawingMode = !canvas.isDrawingMode;
    }
  };

  const handleClearCanvas = () => {
    if (canvas) {
      canvas.clear();
    }
  };

  const handleColorChange = (e) => {
    if (canvas && !isEraserMode) {
      canvas.freeDrawingBrush.color = e.target.value;
    }
  };

  const handleBrushSizeChange = (e) => {
    if (canvas) {
      canvas.freeDrawingBrush.width = parseInt(e.target.value, 10);
    }
  };

  const handleDrawShape = (shapeType) => {
    if (canvas) {
      let shape;
      switch (shapeType) {
        case 'rectangle':
          shape = new fabric.Rect({
            width: 100,
            height: 50,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 2,
            left: 50,
            top: 50
          });
          break;
        case 'circle':
          shape = new fabric.Circle({
            radius: 30,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 2,
            left: 100,
            top: 100
          });
          break;
        default:
          break;
      }
      canvas.add(shape);
    }
  };

  const handleToggleEraserMode = () => {
    setIsEraserMode(prevMode => !prevMode);
    setIsDrawingMode(false);

    if (canvas) {
      canvas.isDrawingMode = false;

      if (!isEraserMode) {
        canvas.freeDrawingBrush.color = canvas.backgroundColor;
      } else {
        canvas.freeDrawingBrush.color = 'black';
      }
    }
  };

  const handleUpgradeToPro = () => {
    // Here you can implement logic for handling the purchase,
    // such as integrating with a payment gateway and updating user's pro status
    setIsProUser(true); // For demonstration purpose, setting user as pro
    navigate('/upgrade');
  }; 
  return (

    <div className="canvas-container">
      <Header/>
      <h1>CANVAS DRAWING</h1>
      <div className="canvas-controls">
        <button onClick={handleToggleDrawingMode}>
          {isDrawingMode ? 'Cancel drawing mode' : 'Enter drawing mode'}
        </button>
        <button onClick={handleToggleEraserMode}>
          {isEraserMode ? 'Exit eraser mode' : 'Enter eraser mode'}
        </button>
        <input type="color" onChange={handleColorChange} />
        <input type="range" min="1" max="50" onChange={handleBrushSizeChange} />
        <button onClick={() => handleDrawShape('rectangle')}>Draw Rectangle</button>
        <button onClick={() => handleDrawShape('circle')}>Draw Circle</button>
        <button id="clear-canvas" className="hidden" onClick={handleClearCanvas}>
          Clear Canvas
        </button>
        {!isProUser && (
        <div className="pro-upgrade">
          <button onClick={handleUpgradeToPro}>Upgrade to Pro</button>
          {/* Add additional information about pro features */}
          <p>Unlock additional features with the Pro version!</p>
        </div>
      )}
      </div>
      <canvas id="c" width="800" height="600"></canvas>
      {/* <Footer/>  */}
    </div>
  );
}

export default Tryitnow;
