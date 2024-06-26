import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconJwt24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = useMemo(
            () =>
                title
                    ? 'title-' + Math.random().toString(36).substr(2, 9)
                    : undefined,
            [title]
        );
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
                    <path d="M13.54 1.75v5.514L12 9.377l-1.54-2.111v2.624l-2.486-.82L4.708 4.62l2.506-1.824 3.245 4.469V1.75h3.081zM10.46 22.25v-5.514l-3.246 4.468-2.506-1.824 3.266-4.448 2.486-.82v2.624L12 14.624l1.54 2.111v5.515h-3.08zM13.54 16.735l3.246 4.47 2.506-1.825-3.266-4.448 5.258 1.701.966-2.931L16.99 12l-2.506.8 1.541 2.132-2.485-.82v2.623z" />
                    <path d="M7.974 9.069L2.715 7.367l-.965 2.931L7.009 12l2.506-.8L7.974 9.07zM16.991 12l5.259-1.702-.966-2.931-5.258 1.701 3.266-4.448-2.506-1.824-3.246 4.469v2.624l2.486-.82-1.54 2.131 2.505.8zM1.75 13.701L7.009 12l2.506.8-1.541 2.131-5.259 1.702-.965-2.931z" />
                </g>
            </svg>
        );
    }
);
