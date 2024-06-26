import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconInfracost24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M6 2h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4zm1.5 5.74a.24.24 0 01.24-.24h.3a.24.24 0 01.24.24v2.52a.24.24 0 01-.24.24h-.3a.24.24 0 01-.24-.24V7.74zm1.35-.24a.24.24 0 00-.24.24v2.52c0 .133.107.24.24.24h.3a.24.24 0 00.24-.24V7.74a.24.24 0 00-.24-.24h-.3zm.87.24a.24.24 0 01.24-.24h.3a.24.24 0 01.24.24v2.76h-.54a.24.24 0 01-.24-.24V7.74zm.78 2.76l3-3c1.44 0 3 1.155 3 3 0 1.232-.005 2.678-.01 3.892a729.4 729.4 0 00-.005 2.108H13.5V12c0-.54-.465-1.5-1.485-1.5H10.5zm0 0v5.76a.24.24 0 01-.24.24h-.3a.24.24 0 01-.24-.24v-4.781c0-.127.05-.25.14-.34l.64-.639zm-3 3.199c0-.127.05-.25.14-.34l.538-.537a.06.06 0 01.102.043v3.395a.24.24 0 01-.24.24h-.3a.24.24 0 01-.24-.24v-2.561zm1.11-1.11c0-.128.05-.25.14-.34l.537-.537a.06.06 0 01.103.043v4.505a.24.24 0 01-.24.24h-.3a.24.24 0 01-.24-.24v-3.671z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
