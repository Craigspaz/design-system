import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconZapOff16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M9.777.898A.75.75 0 008.479.255L6.473 2.533a.75.75 0 001.126.991l.155-.175-.164.814a.75.75 0 101.47.296L9.778.898z" />
                    <path
                        fillRule="evenodd"
                        d="M10.874 11.935l-3.353 3.81a.75.75 0 01-1.309-.57l.452-4.489-5.047-.912a.75.75 0 01-.43-1.234l2.946-3.347L1.22 2.28a.75.75 0 011.06-1.06l12.5 12.5a.75.75 0 11-1.06 1.06l-2.846-2.845zM5.195 6.256L3.191 8.534l4.422.8a.75.75 0 01.612.813L7.938 13l1.874-2.129-4.617-4.616z"
                        clipRule="evenodd"
                    />
                    <path d="M11.248 5.707a.75.75 0 00-.246 1.48l1.792.296-.322.367a.75.75 0 001.126.99l1.215-1.38a.75.75 0 00-.44-1.236l-3.125-.517z" />
                </g>
            </svg>
        );
    }
);
