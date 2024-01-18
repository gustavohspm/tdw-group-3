/////////////////////////////
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

const scaleAnimation = keyframes`
  from { transform: scale(0.5); }
  to { transform: scale(1); }
`;

const StyledLevel = styled.p`
  font-size: 16px;
  font-family: "Century Gothic", sans-serif;
  color: var(--black-palette-color);
`;

function getAnglePoint(startAngle, endAngle, radius, x, y) {
  var x1, y1, x2, y2;

  x1 = x + radius * Math.cos((Math.PI * startAngle) / 180);
  y1 = y + radius * Math.sin((Math.PI * startAngle) / 180);
  x2 = x + radius * Math.cos((Math.PI * endAngle) / 180);
  y2 = y + radius * Math.sin((Math.PI * endAngle) / 180);

  return { x1, y1, x2, y2 };
}

function Slice({ x1, y1, x2, y2, color, delay, animate }) {
  const sliceAnimation = keyframes`
    0% { transform: scale(0.5) rotate(0deg); }
    100% { transform: scale(1) rotate(360deg); }
  `;
  const AnimatedPath = styled.path`
    fill: ${color};
    transform-origin: center;
    ${animate &&
    css`
      animation: ${sliceAnimation} 0.6s ease-out ${delay}s both;
    `}
  `;

  return (
    <AnimatedPath d={`M100,100 L${x1},${y1} A100,100 0 0,1 ${x2},${y2} Z`} />
  );
}

Slice.propTypes = {
  x1: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  animate: PropTypes.bool.isRequired,
};

function Pie({ data, colors, size }) {
  let sum = data.reduce((carry, current) => carry + current, 0);
  let segments = data.length;
  let startAngle = 0;
  let normalizedData = data.map(value => (value / sum) * 100);
 
  return normalizedData.map((slice, sliceIndex) => {
   const angle = (slice / 100) * 360;
   const sliceColor = colors[sliceIndex % colors.length];
   const { x1, y1, x2, y2 } = getAnglePoint(
     startAngle,
     startAngle + angle,
     100,
     100,
     100
   );
   startAngle += angle;
 
   return (
     <Slice
       key={sliceIndex}
       x1={x1}
       y1={y1}
       x2={x2}
       y2={y2}
       color={sliceColor}
       delay={sliceIndex * 0.1}
       animate={size >= 200}
     />
   );
  });
 }

function getSustainabilityConcept(score) {
  console.log(score);
  if (score < 4)
    return {
      concept: "Razoável",
      conceptText:
        "Produtos com este conceito, 'Razoável' começam a trilhar o caminho da sustentabilidade, usando uma quantidade mínima de materiais orgânicos e implementando algumas medidas de comércio justo. Isso reduz o uso de pesticidas e produtos químicos que poluem o solo e a água, em comparação com uma peça de roupa comum.",
    };

  if (score < 6)
    return {
      concept: "Bom",
      conceptText:
        "Produtos classificados como 'Bom' vão além, usando uma maior proporção de materiais orgânicos e aderindo a mais práticas de comércio justo. Isso significa que eles têm um impacto ambiental menor e promovem melhores condições de trabalho do que as roupas comuns.",
    };

  if (score < 8)
    return {
      concept: "Ótimo",
      conceptText:
        "Produtos com conceito 'Ótimo' estão fazendo grandes avanços na sustentabilidade. Eles usam uma grande quantidade de materiais orgânicos, seguem rigorosas práticas de comércio justo e têm medidas significativas para minimizar o impacto ambiental.",
    };

  if (score < 12)
    return {
      concept: "Excelente",
      conceptText:
        "Produtos classificados como 'Excelente' estão na vanguarda da sustentabilidade. Eles usam predominantemente materiais orgânicos, seguem as melhores práticas de comércio justo e consideram o bem-estar animal.",
    };

  return {
    concept: "Leafeel",
    conceptText:
      "Produtos com o conceito 'Leafeel' são os mais sustentáveis. Eles usam quase exclusivamente materiais orgânicos, aderem estritamente às práticas de comércio justo, minimizam ao máximo o impacto ambiental e priorizam o bem-estar animal. Comparado a uma peça de roupa comum, o impacto ambiental de um produto 'Leafeel' é significativamente menor.",
  };
}

function PieGraphics({ sustainableData, size }) {
  const [data, setData] = useState([]);
  const [colors, setColors] = useState([]);
  const [score, setScore] = useState(0);

  const StyledDiv = styled.div`
    background-color: ${(props) => props.color || 'transparent'};
    width: ${size}px;
    height: ${size}px;
    padding: 0.2rem;
    border-radius: 50%;
    transform-origin: 50% 50%;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      ${size < 200 && "transform: scale(1.2) rotate(45deg);"}
    }
  `;

  const StyledSvg = styled.svg`
    display: inline-block;
    vertical-align: middle;
    transform-origin: 50% 50%;
    animation: ${scaleAnimation} 0.6s;
    padding: 0.2rem;
    border-radius: 50%;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      ${size < 200 && "transform: scale(1.2) rotate(45deg);"}
    }
  `;

  useEffect(() => {
    const newData = [];
    const newColors = [];
    let totalScore = 0;
    Object.keys(sustainableData).forEach((key) => {
      const array = sustainableData[key];
      const length = array.length;
      const color = length > 0 ? array[length - 1].colorSection : null;
      newData.push(length);
      newColors.push(color);
      totalScore += length;
    });
    setData(newData);
    setScore(totalScore);
    setColors(newColors);
  }, [sustainableData]);

  return (
    <div
      className={`d-flex text-center align-items-center justify-content-center ${
        size >= 200 ? "flex-column" : ""
      }`}
      style={{ marginRight: "-16px" }}
    >
      <div className="col-md-6 col-sm-12 p-0  d-flex align-items-center justify-content-center">
        {colors.length === 1 ? (
          <StyledDiv color={colors[0]} />
        ) : (
          <StyledSvg width={size} height={size} viewBox="0 0 200 200">
            <Pie data={data} colors={colors} size={size} />
          </StyledSvg>
        )}
      </div>
      {size < 200 ? (
        <div className="col-md-12 col-sm-6 p-0 ms-2 d-flex align-items-center">
          <StyledLevel className="mt-2">
            {getSustainabilityConcept(score).concept}
          </StyledLevel>
        </div>
      ) : (
        <div className="col-md-12 col-sm-6 p-0">
          <StyledLevel className="m-4">
            {getSustainabilityConcept(score).conceptText}
          </StyledLevel>
          <StyledLevel>
            Para saber mais clique <Link to={"/FAQs"}>AQUI</Link>
          </StyledLevel>
        </div>
      )}
    </div>
  );
}

PieGraphics.propTypes = {
  sustainableData: PropTypes.shape({
    organic: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({ colorSection: PropTypes.string }),
      ])
    ),
    fairtrade: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({ colorSection: PropTypes.string }),
      ])
    ),
    resources: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({ colorSection: PropTypes.string }),
      ])
    ),
    animalwelfare: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({ colorSection: PropTypes.string }),
      ])
    ),
    workconditions: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({ colorSection: PropTypes.string }),
      ])
    ),
  }),
  size: PropTypes.number,
};

PieGraphics.propTypes = {
  x1: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  animate: PropTypes.bool.isRequired,
};

PieGraphics.defaultProps = {
  sustainableData: {
    organic: [],
    fairtrade: [],
    resources: [],
    animalwelfare: [],
    workconditions: [],
    size: 200,
  },
};

export default PieGraphics;
///////////////////////
