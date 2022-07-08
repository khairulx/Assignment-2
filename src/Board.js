import React from 'react';
import Square from './Square';

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={ this.props.squares[i] }
        onClick={() => { this.props.onClick(i); }}
        disabled={ this.props.disabled }
      />);
  }

  renderColumns(i) { 
    return (
      this.props.squares.slice(i*this.props.size, (i+1)*this.props.size)
        .map((v,j) =>
          {
            return (
              <td key={i*this.props.size+j}>
                { this.renderSquare(i*this.props.size+j) }
              </td>
            )
          }
        )
    );
  }

  renderRows() { 
    return this.props.squares
      .filter((v, i) => { return i%this.props.size === 0; }) 
      .map((v, i) => { 
        return (
          <tr key={i}>
            {this.renderColumns(i)}
          </tr>
        );
      })
  }

  render() {
    return (
        <table>
          <tbody>
            { this.renderRows() }
          </tbody>
        </table>
    );
  }
}

export default Board;
