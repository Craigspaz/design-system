import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconArrowUpRight24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M18.943 5.463a.748.748 0 00-.161-.242l-.002-.001-.001-.002A.748.748 0 0018.25 5h-9.5a.75.75 0 000 1.5h7.69L5.22 17.72a.75.75 0 101.06 1.06L17.5 7.56v7.69a.75.75 0 001.5 0v-9.5a.747.747 0 00-.057-.287z"
                />
            </svg>
        );
    }
);
