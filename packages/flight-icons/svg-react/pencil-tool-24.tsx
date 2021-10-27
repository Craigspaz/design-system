import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconPencilTool24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M18.945 4.884a2.75 2.75 0 00-3.89 0L6.05 13.89A4.75 4.75 0 005 15.484l-1.695 4.238a.75.75 0 00.975.974l4.237-1.695a4.75 4.75 0 001.595-1.051l9.005-9.005a2.75 2.75 0 000-3.89l-.171-.17zm-2.829 1.06a1.25 1.25 0 011.768 0l.171.172a1.25 1.25 0 010 1.768l-.555.555L15.56 6.5l.556-.555zM14.5 7.562L7.11 14.95a3.25 3.25 0 00-.719 1.091l-1.045 2.613 2.613-1.045c.409-.164.78-.409 1.091-.72L16.44 9.5 14.5 7.56z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
