import React, {Component} from 'react';
import Algorithm from '../../components/algorithm.jsx';

class leastCommonMultiple extends Component {
  render() {
    return (
      <div>
        <Algorithm
          name='Least common multiple'
          description='In arithmetic and number theory, the least common multiple, lowest common multiple, or smallest common multiple of two integers a and b, usually denoted by LCM(a, b), is the smallest positive integer that is divisible by both a and b. Since division of integers by zero is undefined, this definition has meaning only if a and b are both different from zero. However, some authors define lcm(a,0) as 0 for all a, which is the result of taking the lcm to be the least upper bound in the lattice of divisibility. The LCM is familiar from elementary-school arithmetic as the "lowest common denominator" (LCD) that must be determined before fractions can be added, subtracted or compared. The LCM of more than two integers is also well-defined: it is the smallest positive integer that is divisible by each of them. '
          moreLink='https://en.wikipedia.org/wiki/Least_common_multiple'
          gistId='525d6d825ce6a73c405ff6c60b08e4ce' />
      </div>
    );
  }
}

export default leastCommonMultiple;