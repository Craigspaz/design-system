import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconImage16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M5.5 3a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-1 2.5a1 1 0 112 0 1 1 0 01-2 0z" />
                    <path d="M0 2.25A2.25 2.25 0 012.25 0h11.5A2.25 2.25 0 0116 2.25v11.5A2.25 2.25 0 0113.75 16H2.25A2.25 2.25 0 010 13.75V2.25zm14.5 0v5.94l-1.835-1.836a1.75 1.75 0 00-2.335-.125L1.5 13.336V2.25a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75zm-.75 12.25H2.446l8.825-7.103a.25.25 0 01.333.018l2.896 2.896v3.439a.75.75 0 01-.75.75z" />
                </g>
            </svg>
        );
    }
);
