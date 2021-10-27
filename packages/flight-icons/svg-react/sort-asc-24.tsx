import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconSortAsc24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M16.963 3.057a.748.748 0 01.817.163l4 4a.75.75 0 01-1.06 1.06L18 5.56v8.19a.75.75 0 01-1.5 0V5.56l-2.72 2.72a.75.75 0 11-1.06-1.06l4-4a.748.748 0 01.243-.163zM3.75 14.5a.75.75 0 010-1.5h9.5a.75.75 0 010 1.5h-9.5zM3 17.75c0 .414.336.75.75.75h16.5a.75.75 0 000-1.5H3.75a.75.75 0 00-.75.75zM3.75 10.5a.75.75 0 010-1.5h5.5a.75.75 0 010 1.5h-5.5zM3 5.75c0 .414.336.75.75.75h3.5a.75.75 0 000-1.5h-3.5a.75.75 0 00-.75.75z" />
                </g>
            </svg>
        );
    }
);
