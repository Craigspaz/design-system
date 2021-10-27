import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconShieldX16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M10.78 4.72a.75.75 0 010 1.06L9.06 7.5l1.72 1.72a.75.75 0 11-1.06 1.06L8 8.56l-1.72 1.72a.75.75 0 11-1.06-1.06L6.94 7.5 5.22 5.78a.75.75 0 011.06-1.06L8 6.44l1.72-1.72a.75.75 0 011.06 0z" />
                    <path
                        fillRule="evenodd"
                        d="M7.26.213a2.25 2.25 0 011.48 0l4.75 1.653A2.25 2.25 0 0115 3.991v4.01c0 2.048-1.181 3.747-2.45 4.991-1.282 1.255-2.757 2.15-3.573 2.598a2.024 2.024 0 01-1.954 0c-.816-.447-2.291-1.342-3.572-2.598C2.18 11.748 1 10.05 1 8V3.991c0-.957.606-1.81 1.51-2.125L7.26.213zm.986 1.417a.75.75 0 00-.493 0l-4.75 1.653a.75.75 0 00-.503.708v4.01c0 1.455.847 2.79 2 3.92 1.142 1.118 2.483 1.937 3.244 2.353.163.09.35.09.512 0 .761-.416 2.102-1.235 3.244-2.353 1.153-1.13 2-2.465 2-3.92V3.99a.75.75 0 00-.504-.708L8.246 1.63z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
