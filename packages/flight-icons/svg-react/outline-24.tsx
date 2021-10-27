import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconOutline24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M6.5 5.75A.75.75 0 017.25 5h.01a.75.75 0 010 1.5h-.01a.75.75 0 01-.75-.75zM7.25 9a.75.75 0 000 1.5h.01a.75.75 0 000-1.5h-.01zM6.5 13.75a.75.75 0 01.75-.75h.01a.75.75 0 010 1.5h-.01a.75.75 0 01-.75-.75zM7.25 17a.75.75 0 000 1.5h.01a.75.75 0 000-1.5h-.01zM9.5 9.75a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zM10.25 5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zM9.5 13.75a.75.75 0 01.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75zM10.25 17a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" />
                    <path
                        fillRule="evenodd"
                        d="M3 3.75A2.75 2.75 0 015.75 1h12.5A2.75 2.75 0 0121 3.75v16.5A2.75 2.75 0 0118.25 23H5.75A2.75 2.75 0 013 20.25V3.75zM5.75 2.5c-.69 0-1.25.56-1.25 1.25v16.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V3.75c0-.69-.56-1.25-1.25-1.25H5.75z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
