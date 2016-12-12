import React, {Component} from 'react';
import Algorithm from '../../components/algorithm.jsx';

class greatestCommonDivisor extends Component {
  render() {
    return (
      <div>
        <Algorithm
          name='Greatest common divisor (gcd)'
          description='In mathematics, the greatest common divisor (gcd) of two or more integers, when at least one of them is not zero, is the largest positive integer that divides the numbers without a remainder. For example, the GCD of 8 and 12 is 4. The greatest common divisor is also known as the greatest common factor (gcf), highest common factor (hcf), greatest common measure (gcm), or highest common divisor. '
          moreLink='https://en.wikipedia.org/wiki/Greatest_common_divisor'
          gistId='' />
      </div>
    );
  }
}

export default greatestCommonDivisor;