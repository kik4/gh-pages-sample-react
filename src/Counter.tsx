import * as React from "react";

interface ICounterProps {
  start?: number;
}
interface ICounterState {
  count: number;
}

export default class Counter extends React.Component<
  ICounterProps,
  ICounterState
> {
  constructor(props: ICounterProps) {
    super(props);
    this.state = {
      count: props.start || 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <div>
        <button onClick={this.handleClick}>click!</button>
        <div>{this.state.count}</div>
      </div>
    );
  }

  private handleClick(): void {
    this.setState({
      count: this.state.count + 1
    });
  }
}
