import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Svg, { G, Circle, Line, Rect, Text as SvgText } from "react-native-svg";
import Theme from "../../res/Theme";

const BarChart = ({
  containerHeight = 300,
  backgroundColor = Theme.light.white,
  axisColor = Theme.light.disabled,
  circleRadius = 4,
  axisWidth = 2,
  axisFontSize = 12,
  barWidth = 20,
  barChartData = [
    { day: "Mon", value: 20 },
    { day: "Tue", value: 70 },
    { day: "Wed", value: 30 },
    { day: "Thur", value: 90 },
    { day: "Fri", value: 80 },
    { day: "Sat", value: 60 },
    { day: "Sun", value: 20 },
  ],
}) => {
  const windowWidth = Dimensions.get("window").width;
  const marginBotton_for_x_axis = 50;
  const marginLeft_for_y_axis = 50;
  const padding_from_screen = 20;

  const x_axis_x1_point = marginLeft_for_y_axis;
  const x_axis_y1_point = containerHeight - marginBotton_for_x_axis;
  const x_axis_x2_point = windowWidth - padding_from_screen - 40;
  const x_axis_y2_point = x_axis_y1_point;

  const y_axis_x1_point = marginLeft_for_y_axis;
  const y_axis_y1_point = padding_from_screen;
  const y_axis_x2_point = marginLeft_for_y_axis;
  const y_axis_y2_point = containerHeight - marginBotton_for_x_axis;

  const [yAxisData, setYAxisData] = useState([]);

  const minValue = 0;
  const maxValue = Math.max.apply(
    Math,
    barChartData?.map((item) => item.value)
  );

  const gapBetweenYaxisValues = (maxValue - minValue) / 4;

  useEffect(() => {
    const newLabels = Array.from({ length: 6 }).map(
      (_, index) => minValue + index * gapBetweenYaxisValues
    );
    setYAxisData(newLabels);
  }, []);

  const Render_x_axis = () => {
    return (
      <G key="x-axis">
        <Circle
          cx={x_axis_x1_point}
          cy={x_axis_y1_point}
          fill={axisColor}
          r={circleRadius}
        />
        <Circle
          cx={x_axis_x2_point}
          cy={x_axis_y2_point}
          fill={axisColor}
          r={circleRadius}
        />
        <Line
          x1={x_axis_x1_point}
          y1={x_axis_y1_point}
          x2={x_axis_x2_point}
          y2={x_axis_y2_point}
          strokeWidth={axisWidth}
          stroke={axisColor}
        />
      </G>
    );
  };

  const Render_x_axis_tick_labels = () => {
    const x_axis_width =
      windowWidth - padding_from_screen - 40 - marginLeft_for_y_axis;
    const gap_between_x_axis_ticks = x_axis_width / (barChartData.length + 1);
    return barChartData.map((item, index) => {
      const x_point_for_x_axis_ticks =
        gap_between_x_axis_ticks +
        x_axis_x1_point +
        gap_between_x_axis_ticks * index;
      return (
        <G key={`x-axis ticks and labels ${index}`}>
          <Line
            x1={x_point_for_x_axis_ticks}
            y1={x_axis_y1_point}
            x2={x_point_for_x_axis_ticks}
            y2={x_axis_y1_point + 10}
            strokeWidth={axisWidth}
            stroke={axisColor}
          />
          <SvgText
            x={x_point_for_x_axis_ticks}
            y={x_axis_y1_point + 10 + axisFontSize}
            textAnchor="middle"
            fontSize={axisFontSize}
            fill={Theme.light.secondary}
          >
            {item.day}
          </SvgText>
        </G>
      );
    });
  };

  const Render_y_axis_tick_labels = () => {
    const y_axis_height =
      containerHeight - padding_from_screen - marginBotton_for_x_axis;
    const gap_between_y_axis_ticks = y_axis_height / yAxisData.length;
    return yAxisData.map((item, index) => {
      const y_point_for_y_axis_ticks =
        y_axis_y2_point - gap_between_y_axis_ticks * index;
      return (
        <G key={`y-axis ticks and labels ${index}`}>
          <Line
            x1={y_axis_x2_point}
            y1={y_point_for_y_axis_ticks}
            x2={y_axis_x2_point - 10}
            y2={y_point_for_y_axis_ticks}
            strokeWidth={axisWidth}
            stroke={axisColor}
          />
          <SvgText
            x={y_axis_x2_point - 10 - 5}
            y={y_point_for_y_axis_ticks + axisFontSize / 3}
            textAnchor="end"
            fontSize={axisFontSize}
          >
            {item}
          </SvgText>
        </G>
      );
    });
  };

  const Render_y_axis = () => {
    return (
      <G key="y-axis">
        <Circle
          cx={y_axis_x1_point}
          cy={y_axis_y1_point}
          fill={axisColor}
          r={circleRadius}
        />
        <Line
          x1={y_axis_x1_point}
          y1={y_axis_y1_point}
          x2={y_axis_x2_point}
          y2={y_axis_y2_point}
          strokeWidth={axisWidth}
          stroke={axisColor}
        />
      </G>
    );
  };

  const RenderBarChart = () => {
    const x_axis_width =
      windowWidth - padding_from_screen - 40 - marginLeft_for_y_axis;
    const gap_between_x_axis_ticks = x_axis_width / (barChartData.length + 1);

    const y_axis_height =
      containerHeight - padding_from_screen - marginBotton_for_x_axis;
    const gap_between_y_axis_ticks = y_axis_height / (yAxisData.length - 1);

    return barChartData?.map((item, index) => {
      const x_point_for_x_axis_ticks =
        gap_between_x_axis_ticks +
        x_axis_x1_point +
        gap_between_x_axis_ticks * index;

      let height =
        (item.value * gap_between_y_axis_ticks) / gapBetweenYaxisValues;
      return (
        <G key={`Bar Chart ${index}`}>
          <Rect
            x={x_point_for_x_axis_ticks - barWidth / 2}
            y={x_axis_y1_point}
            height={-height}
            width={barWidth}
            fill={Theme.light.secondary}
          />
        </G>
      );
    });
  };

  return (
    <View
      style={[
        styles.container,
        { height: containerHeight, marginVertical: 20 },
      ]}
    >
      <Svg height={"100%"} width={"100%"}>
        <Render_x_axis />
        <Render_x_axis_tick_labels />
        <Render_y_axis />
        <Render_y_axis_tick_labels />
        <RenderBarChart />
      </Svg>
    </View>
  );
};

export default BarChart;

const styles = StyleSheet.create({
  container: {},
});
