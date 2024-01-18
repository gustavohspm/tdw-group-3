import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { keyframes, css } from "styled-components";
import PieGraphics from "./PieGraphics";

const scaleAnimation = keyframes`
  from { transform: scale(0.5); }
  to { transform: scale(1); }
`;

const StyledLevel = styled.p`
  font-size: 14px;
  font-family: "Century Gothic", sans-serif;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    ${props => props.size < 200 && "transform: scale(1.2) rotate(45deg);"}
  }
`;

function AveragePieGraphics({ sustainableDataList, size }) {
  const [averageData, setAverageData] = useState([]);
  const [averageColors, setAverageColors] = useState([]);

  useEffect(() => {
    const totalData = [];
    let totalColors = [];

    sustainableDataList.forEach(sustainableData => {
      const data = [];
      const colors = [];
      Object.keys(sustainableData).forEach(key => {
        const array = sustainableData[key];
        if (array && array.length > 0) {
          const length = array.length;
          const color = array[length - 1].colorSection;
          data.push(length);
          if (color) {
            colors.push(color);
          }
        }
      });
      totalData.push(data);
      totalColors.push(colors);
    });

    const averageData = totalData[0].map((_, i) => totalData.reduce((total, data) => total + data[i], 0) / totalData.length);
    const averageColors = totalColors[0].map((_, i) => {
      const colorCounts = {};
      totalColors.forEach(colors => {
        const color = colors[i];
        colorCounts[color] = (colorCounts[color] || 0) + 1;
      });
      return Object.keys(colorCounts).reduce((a, b) => colorCounts[a] > colorCounts[b] ? a : b);
    });

    setAverageData(averageData);
    setAverageColors(averageColors);
  }, [sustainableDataList]);

  return (
    <PieGraphics sustainableData={averageData.map((length, i) => ({ length, colorSection: averageColors[i] }))} size={size} />
  );
}

AveragePieGraphics.propTypes = {
  sustainableDataList: PropTypes.arrayOf(PropTypes.object).isRequired,
  size: PropTypes.number.isRequired,
};

export default AveragePieGraphics;