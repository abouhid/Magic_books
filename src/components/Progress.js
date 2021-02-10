import React from "react"

const Progress = () => (
  <div className="status">
    <div>
      <svg className="circular-chart" viewBox="0 0 36 36">
        <path
          x="50%"
          y="50%"
          className="circle-shadow"
          stroke="100"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          key="80"
          x="50%"
          y="50%"
          className="circle"
          strokeDasharray={"80, 100"}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
    </div>
    <div className="progress-status">
      <p className="percent-complete">80%</p>
      <span className="completed">completed</span>
    </div>
  </div>
)

export default Progress
