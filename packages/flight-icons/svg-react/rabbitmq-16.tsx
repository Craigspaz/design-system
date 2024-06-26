import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconRabbitmq16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    d="M13.734 6.75H9.58a.368.368 0 01-.378-.357V2.299c0-.303-.26-.549-.58-.549H7.137c-.32 0-.58.246-.58.55v4.068c0 .211-.18.383-.404.384l-1.362.006a.395.395 0 01-.407-.384L4.393 2.3c0-.304-.26-.55-.58-.55H2.33c-.321 0-.581.246-.581.55v11.462c0 .27.23.488.515.488h11.47a.502.502 0 00.515-.488V7.237c0-.269-.23-.487-.516-.487zm-1.948 4.304c0 .353-.303.64-.676.64H9.938c-.373 0-.676-.287-.676-.64V9.946c0-.353.303-.64.676-.64h1.172c.373 0 .676.287.676.64v1.108z"
                />
            </svg>
        );
    }
);
