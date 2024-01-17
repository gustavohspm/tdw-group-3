/////////////////////////////
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { keyframes, css } from "styled-components";

const scaleAnimation = keyframes`
  from { transform: scale(0.5); }
  to { transform: scale(1); }
`;

const StyledLevel = styled.h6`
  font-size: 14px;
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
  const sum = data.reduce((carry, current) => carry + current, 0);
  let startAngle = 0;

  return data.map((slice, sliceIndex) => {
    const angle = (slice / sum) * 360;
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

// function getSustainabilityConcept(score) {
//   if (score < 4) return "Razoável";
//   if (score < 6) return "Bom";
//   if (score < 8) return "Ótimo";
//   if (score < 12) return "Excelente";
//   return "Leafeel";
// }

function getSustainabilityConcept(score) {
  if (score < 4)
    return {
      concept: "Razoável",
      conceptText:
        "Produtos com este conceito começam a trilhar o caminho da sustentabilidade. Eles podem usar uma quantidade mínima de materiais orgânicos, reduzindo o uso de pesticidas e produtos químicos que poluem o solo e a água, em comparação com uma peça de roupa comum. Além disso, eles podem ter algumas medidas de comércio justo, garantindo melhores condições de trabalho para os trabalhadores.",
    };

  if (score < 6)
    return {
      concept: "Bom",
      conceptText:
        "Produtos classificados como 'Bom' vão além, usando uma maior proporção de materiais orgânicos e aderindo a mais práticas de comércio justo. Isso significa que eles têm um impacto ambiental menor e promovem melhores condições de trabalho do que as roupas comuns. Além disso, eles podem começar a implementar práticas para reduzir o impacto ambiental, como o uso eficiente de recursos, diminuindo a pegada de carbono.",
    };

  if (score < 8)
    return {
      concept: "Ótimo",
      conceptText:
        "Produtos com este conceito estão fazendo grandes avanços na sustentabilidade. Eles usam uma grande quantidade de materiais orgânicos, reduzindo ainda mais o uso de produtos químicos prejudiciais. Eles seguem rigorosas práticas de comércio justo, garantindo salários justos e condições de trabalho seguras. Além disso, eles têm medidas significativas para minimizar o impacto ambiental e podem começar a considerar o bem-estar animal em suas práticas, evitando o uso de produtos de origem animal ou garantindo que sejam obtidos de maneira ética.",
    };

  if (score < 12)
    return {
      concept: "Excelente",
      conceptText:
        "Produtos classificados como 'Excelente' estão na vanguarda da sustentabilidade. Eles usam predominantemente materiais orgânicos, minimizando o impacto ambiental e melhorando a saúde do solo. Eles seguem as melhores práticas de comércio justo, garantindo que todos os trabalhadores em sua cadeia de suprimentos sejam tratados de maneira justa e ética. Além disso, eles consideram o bem-estar animal e têm boas condições de trabalho em suas cadeias de suprimentos, garantindo que todos os envolvidos na produção de suas roupas sejam tratados com dignidade e respeito.",
    };

  return {
    concept: "Leafeel",
    conceptText:
      "Produtos com o conceito 'Leafeel' são os mais sustentáveis. Eles usam quase exclusivamente materiais orgânicos, minimizando o uso de produtos químicos e promovendo a saúde do solo. Eles aderem estritamente às práticas de comércio justo, garantindo que todos os trabalhadores sejam tratados de maneira justa e ética. Eles minimizam ao máximo o impacto ambiental, reduzindo a pegada de carbono e o uso de recursos. Além disso, eles priorizam o bem-estar animal e garantem boas condições de trabalho em toda a sua cadeia de suprimentos. Comparado a uma peça de roupa comum, que pode contribuir para a poluição do solo e da água, ter uma grande pegada de carbono e ser produzida em condições de trabalho precárias, o impacto ambiental de um produto 'Leafeel' é significativamente menor.",
  };
}

function PieGraphics({ sustainableData, size }) {
  const [data, setData] = useState([]);
  const [colors, setColors] = useState([]);
  const [score, setScore] = useState(0);

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
      const length = array.length - 1;
      const color = array[length]?.colorSection;
      newData.push(array.length);
      newColors.push(color);
      totalScore += array.length;
      setScore(totalScore);
    });
    setData(newData);
    setColors(newColors);
  }, [sustainableData]);

  return (
    <div
      className={`d-flex text-center align-items-center justify-content-center ${
        size >= 200 ? "flex-column" : ""
      }`}
      style={{ marginRight: "-16px" }}
    >
      <div className="col-md-6 col-sm-12 p-0">
        <StyledSvg width={size} height={size} viewBox="0 0 200 200">
          <Pie data={data} colors={colors} size={size} />
        </StyledSvg>
      </div>
      {size < 200 ? (
        <div className="col-md-6 col-sm-12 p-0 ms-2">
          <StyledLevel className="mt-2">
            {getSustainabilityConcept(score).concept}
          </StyledLevel>
        </div>
      ) : (
        <div className="col-md-6 col-sm-12 p-0">
          <StyledLevel className="m-4">
            {getSustainabilityConcept(score).conceptText}
          </StyledLevel>
        </div>
      )}
    </div>

    // <div
    //   className="d-flex text-center align-items-center justify-content-center"
    //   style={{ marginRight: "-16px" }}
    // >
    //   <div className="col-md-6 col-sm-12 p-0">
    //     <StyledSvg width={size} height={size} viewBox="0 0 200 200">
    //       <Pie data={data} colors={colors} size={size} />
    //     </StyledSvg>
    //   </div>
    //   { size < 200 ? (
    //     <div className="col-md-6 col-sm-12 p-0 ms-2">
    //       <StyledLevel className="mt-2">
    //         {getSustainabilityConcept(score).concept}
    //       </StyledLevel>
    //     </div>
    //   ) : (
    //     <div className="col-md-6 col-sm-12 p-0 ms-2">
    //     <StyledLevel className="mt-2">
    //       {getSustainabilityConcept(score).conceptText}
    //     </StyledLevel>
    //   </div>
    //   )}
    // </div>
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
