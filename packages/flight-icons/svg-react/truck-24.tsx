import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconTruck24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M0 4.75A2.75 2.75 0 012.75 2h11.5A2.75 2.75 0 0117 4.75V6h1.245c.74 0 1.447.297 1.965.825l3.004 3.067A2.75 2.75 0 0124 11.817v3.433A1.75 1.75 0 0122.25 17h-1.014a3 3 0 11-4.472 0H7.236a3 3 0 11-4.472 0H1.75A1.75 1.75 0 010 15.25V4.75zm15.5 0c0-.69-.56-1.25-1.25-1.25H2.75c-.69 0-1.25.56-1.25 1.25v10.5c0 .138.112.25.25.25H15.5V4.75zM17 15.5v-8h1.245c.336 0 .658.135.893.375l3.005 3.067c.229.233.357.547.357.874v3.434a.25.25 0 01-.25.25H17zm-12 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM17.5 19a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
