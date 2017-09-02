import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Equation from '../../equation'
import EquationWrapper from '../../../storybook/equation-wrapper'

storiesOf('block', module)
    .addDecorator((story) => (
        <EquationWrapper>{story()}</EquationWrapper>
    ))
    .add('Simple', () => (
        <Equation evaluate>(10+3)*(2+5)</Equation>
    ))
    .add('Implied mult. alignment', () => (
        <Equation evaluate>5 (2+5)</Equation>
    ))
    .add('Tall above', () => (
        <Equation evaluate>(1/2/3/4)</Equation>
    ))
    .add('Tall below', () => (
        <Equation evaluate>(1/(2/(3/(4))))</Equation>
    ))
    .add('Nested', () => (
        <Equation evaluate>((((1))/((2))))</Equation>
    ))