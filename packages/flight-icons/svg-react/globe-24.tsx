import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconGlobe24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm-1.673 1.647A9.506 9.506 0 002.552 11h4.747a16.673 16.673 0 013.028-8.353zm3.346 0A16.673 16.673 0 0116.701 11h4.747a9.506 9.506 0 00-7.775-8.353zM15.196 11A15.149 15.149 0 0012 2.916 15.149 15.149 0 008.804 11h6.392zm-6.427 1.5h6.462A15.16 15.16 0 0112 21.084 15.16 15.16 0 018.769 12.5zm-1.502 0H2.513c.23 4.45 3.525 8.091 7.814 8.853a16.683 16.683 0 01-3.06-8.853zm6.406 8.853a16.683 16.683 0 003.06-8.853h4.754c-.23 4.45-3.525 8.091-7.814 8.853z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
