import "./styles.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      min: "",
      max: "",
      result: 0
    };
  }
  minHandleChange = (e) => {
    const minNum = Number(e.target.value);
    this.setState({ min: minNum });
  };

  maxHandleChange = (e) => {
    const maxNum = Number(e.target.value);
    this.setState({ max: maxNum });
  };
  generate = () => {
    const { max, min } = this.state;
    if (!(isNaN(min) && isNaN(max)) && min < max) {
      // if its number
      let num = Math.floor(Math.random() * (max - min + 1) + min);
      this.setState({ result: num });
    } else {
      alert("invalid");
    }
  };
  clear = () => {
    this.setState({ min: "", max: "", result: 0 });
  };

  render() {
    return (
      <div className="container">
        <div className="box-result">{this.state.result}</div>

        <p>
          <label className="lbl">
            Lower Limit
            <input value={this.state.min} onChange={this.minHandleChange} />
          </label>
        </p>
        <label>
          Upper Limit
          <input value={this.state.max} onChange={this.maxHandleChange} />
        </label>
        <p>
          <button onClick={this.generate} className="btn">
            Generate
          </button>
          <button onClick={this.clear} className="btn-1">
            Clear
          </button>
        </p>
      </div>
    );
  }
}

export default App;
