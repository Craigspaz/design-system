import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconGateway16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M3.537 5.354c.415-1.153.971-2.12 1.695-2.794C5.938 1.903 6.83 1.5 8 1.5c1.251 0 2.188.46 2.921 1.21.752.768 1.31 1.865 1.71 3.146.802 2.566.901 5.638.862 7.563-.013.594-.508 1.081-1.16 1.081H3.668c-.653 0-1.148-.487-1.16-1.083-.012-.545-.012-1.189.012-1.89a.75.75 0 10-1.499-.053 35.678 35.678 0 00-.013 1.974C1.038 14.916 2.256 16 3.668 16h8.665c1.41 0 2.63-1.082 2.66-2.55.04-1.968-.054-5.238-.93-8.041-.438-1.404-1.09-2.747-2.07-3.749C10.994.64 9.677 0 8 0 6.439 0 5.185.554 4.21 1.462c-.96.893-1.622 2.1-2.084 3.384a.75.75 0 101.411.508z" />
                    <path d="M6.22 4.47a.75.75 0 011.06 0l3.25 3.25.008.008a.75.75 0 01-.008 1.052l-3.25 3.25a.75.75 0 01-1.06-1.06L8.19 9H1a.75.75 0 010-1.5h7.19L6.22 5.53a.75.75 0 010-1.06z" />
                </g>
            </svg>
        );
    }
);
