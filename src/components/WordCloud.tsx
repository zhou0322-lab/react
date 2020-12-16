import React from "react";
import "echarts-wordcloud";
import ReactEcharts from "echarts-for-react"; // eslint-disable-line

interface WordcloudlProps {
  list: any[];
}
const Wordcloudl: React.FC<WordcloudlProps> = ({ list }) => {
  const options = {
    title: {
      text: "兴趣标签（有效转发）",
      textStyle: {
        color: "#444",
        fontSize: 14,
        fontWeight: "normal",
      },
    },
    series: [
      {
        type: "wordCloud",
        sizeRange: [10, 100],
        rotationRange: [-90, 90],
        rotationStep: 45,
        gridSize: 2,
        shape: "circle",
        // maskImage,
        drawOutOfBound: false,
        textStyle: {
          normal: {
            color: () =>
              `rgb(${[
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
              ].join()})`,
          },
          emphasis: {
            color: "red",
          },
        },
        data: list,
      },
    ],
  };
  return (
    <div>
      <ReactEcharts
        option={options}
        style={{ height: 330, width: "100%" }}
        className="react_for_echarts"
        opts={{ renderer: "svg" }}
      />
    </div>
  );
};

export default Wordcloudl;
