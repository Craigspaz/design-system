import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconFilterFill16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M8 0a8 8 0 100 16A8 8 0 008 0zM4.25 5a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zm1.5 2.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm.5 3.25A.75.75 0 017 10h2a.75.75 0 010 1.5H7a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
