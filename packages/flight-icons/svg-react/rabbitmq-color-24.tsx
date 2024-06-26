import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconRabbitmqColor24 = forwardRef<SVGSVGElement, IconProps>(
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
                    fill="#F60"
                    d="M20.487 10.05h-6.15a.558.558 0 01-.558-.557V3.107a.858.858 0 00-.86-.857h-2.194a.858.858 0 00-.86.857v6.347a.6.6 0 01-.597.599l-2.015.01a.6.6 0 01-.604-.6l.013-6.355a.858.858 0 00-.86-.858H3.61a.858.858 0 00-.859.857v17.882c0 .42.342.761.763.761h16.974c.422 0 .763-.34.763-.76V10.81c0-.42-.341-.76-.763-.76zm-2.884 6.714c0 .55-.448.997-1 .997h-1.735c-.552 0-1-.446-1-.997v-1.728c0-.551.448-.997 1-.997h1.735c.552 0 1 .446 1 .997v1.728z"
                />
            </svg>
        );
    }
);
