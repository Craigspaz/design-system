import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconTriangle24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M10.658 2.366a2.651 2.651 0 012.684 0c.407.239.745.581.984.99l.002.004 8.315 14.46a2.86 2.86 0 01.008 2.758 2.757 2.757 0 01-.976 1.03c-.41.25-.877.386-1.357.392H3.682a2.653 2.653 0 01-1.357-.393 2.757 2.757 0 01-.975-1.029 2.86 2.86 0 01.007-2.758l.006-.01 8.31-14.45.001-.004a2.75 2.75 0 01.984-.99zm.313 1.744v.001L2.665 18.552a1.36 1.36 0 000 1.306c.108.198.262.36.443.47.18.11.382.169.586.172h16.61c.204-.003.406-.061.586-.172.181-.11.335-.272.444-.47a1.361 1.361 0 00-.001-1.306L13.03 4.112l-.001-.002a1.25 1.25 0 00-.446-.45 1.151 1.151 0 00-1.166 0 1.25 1.25 0 00-.446.45z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
