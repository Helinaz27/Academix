import React from 'react';

// Function to calculate the percentage
const calculatePercentage = (count, total) => {
 return (count / total) * 100;
};

// Component for the circle progress bar
const CircleProgress = ({ percentage, color }) => {
 const r = 70;
 const circ = 2 * Math.PI * r;
 const strokePct = ((100 - percentage) * circ) / 100;

 return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? color : ""}
      strokeWidth={"2rem"}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    ></circle>
 );
};

// Component for displaying the percentage text
const PercentageText = ({ percentage, position }) => {
 return (
    <text
      x={position.x}
      y="50%"
      dominantBaseline="central"
      textAnchor={position.anchor}
      fontSize={"1.5em"}
    >
      {percentage.toFixed(0)}%
    </text>
 );
};

// Main component to display the progress circle
const ProgressCircle = ({ femaleCount, maleCount, femaleColor, maleColor }) => {
 // Calculate the total count
 const totalCount = femaleCount + maleCount;

 // Calculate the percentages
 const femalePct = calculatePercentage(femaleCount, totalCount);
 const malePct = calculatePercentage(maleCount, totalCount);

 return (
    <div>
      <svg width={200} height={200}>
        <g transform={`rotate(-90 100 100)`}>
          <CircleProgress color={femaleColor} />
          {/* <CircleProgress color={femaleColor} percentage={femalePct} /> */}
          <CircleProgress color={maleColor} percentage={malePct} />
        </g>
        <PercentageText percentage={femalePct} position={{ x: '90%', anchor: 'end' }} />
        <PercentageText percentage={malePct} position={{ x: '10%', anchor: 'start' }} />
      </svg>
    </div>
 );
};

export default ProgressCircle;
