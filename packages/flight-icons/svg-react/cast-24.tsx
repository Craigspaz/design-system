import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCast24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M3.75 3A2.75 2.75 0 001 5.75V8a.75.75 0 001.5 0V5.75c0-.69.56-1.25 1.25-1.25h16.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H14a.75.75 0 000 1.5h6.25A2.75 2.75 0 0023 18.25V5.75A2.75 2.75 0 0020.25 3H3.75z" />
                    <path d="M1.833 11.005a.75.75 0 10-.166 1.49 8.873 8.873 0 017.838 7.838.75.75 0 101.49-.166 10.373 10.373 0 00-9.162-9.162zM1.9 15.345a.75.75 0 00-.3 1.47A4.596 4.596 0 015.185 20.4a.75.75 0 001.47-.3A6.096 6.096 0 001.9 15.345z" />
                </g>
            </svg>
        );
    }
);
