import React, { forwardRef } from 'react';

type SvgrMockProps = React.HTMLAttributes<HTMLSpanElement>;

const SvgrMock = forwardRef<HTMLSpanElement, SvgrMockProps>((props, ref) => (
    <span ref={ref} {...props} />
));

export const ReactComponent = SvgrMock;
export default SvgrMock;