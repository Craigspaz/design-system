import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconLineChartUp24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M1 4.75A2.75 2.75 0 013.75 2h16.5A2.75 2.75 0 0123 4.75v14.5A2.75 2.75 0 0120.25 22H3.75A2.75 2.75 0 011 19.25v-2.236V4.75zm1.5 12.644v1.856c0 .69.56 1.25 1.25 1.25H8v-.75a.75.75 0 011.5 0v.75h5v-.75a.75.75 0 011.5 0v.75h4.25c.69 0 1.25-.56 1.25-1.25V4.75c0-.69-.56-1.25-1.25-1.25H3.75c-.69 0-1.25.56-1.25 1.25v10.822l6.074-4.19a.746.746 0 01.721-.072l4.304 1.722 2.163-5.047-1.554.699a.75.75 0 01-.616-1.368l3.192-1.436a.75.75 0 01.992.376l1.436 3.192a.75.75 0 01-1.368.615l-.687-1.526-2.463 5.747a.75.75 0 01-.973.413l-4.626-1.851L2.5 17.394z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
