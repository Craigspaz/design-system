import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconOpenid16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M7.438 3.71v10.014l1.797-.838V2.84l-1.797.87zM3.845 9.913c0-1.262 1.387-2.324 3.278-2.649v-1.13C4.23 6.48 2.048 8.04 2.048 9.913c0 1.94 2.343 3.544 5.39 3.811v-1.116c-2.05-.255-3.593-1.365-3.593-2.695zM9.55 6.134v1.13c.705.121 1.34.344 1.859.641l-.974.545 3.475.749-.248-2.552-.923.515c-.86-.516-1.96-.88-3.188-1.028z" />
                </g>
            </svg>
        );
    }
);
