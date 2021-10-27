import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCodepenColor24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill="#000">
                    <path d="M6.368 11.023v1.954L7.828 12l-1.46-.977zM11.414 9.6V6.874L6.833 9.93l2.046 1.368L11.414 9.6zM17.163 9.93L12.58 6.874V9.6l2.535 1.698 2.047-1.368zM6.833 14.074l4.581 3.052V14.4l-2.535-1.698-2.046 1.372zM12.581 14.4v2.726l4.582-3.052-2.047-1.372-2.535 1.698zM12 10.619L9.93 12 12 13.381 14.065 12 12 10.619z" />
                    <path d="M12 1C5.926 1 1 5.926 1 12s4.926 11 11 11 11-4.926 11-11S18.074 1 12 1zm6.8 13.074c0 .028 0 .052-.005.075 0 .01-.004.018-.004.023-.005.019-.005.033-.01.051-.004.01-.004.019-.009.028l-.014.042-.014.028c-.005.014-.014.028-.018.037-.005.01-.01.019-.019.028-.01.014-.014.023-.023.037a.097.097 0 01-.019.024c-.01.009-.018.023-.028.032l-.023.023c-.01.01-.023.019-.033.028-.009.005-.018.014-.027.019-.005 0-.005.005-.01.01l-6.223 4.148a.592.592 0 01-.651 0L5.45 14.563c-.004 0-.004-.005-.01-.01-.008-.004-.018-.014-.027-.018-.01-.01-.023-.019-.033-.028l-.023-.023c-.01-.01-.018-.019-.028-.033-.004-.01-.014-.018-.018-.023a.102.102 0 01-.024-.037.097.097 0 00-.018-.028c-.01-.014-.014-.028-.019-.037l-.014-.028-.014-.042c-.004-.01-.004-.019-.01-.028a.167.167 0 01-.008-.051c0-.01-.005-.019-.005-.024-.005-.023-.005-.05-.005-.074V9.935c0-.028 0-.051.005-.075 0-.009.005-.018.005-.023.004-.018.004-.032.009-.051.005-.01.005-.019.01-.028l.013-.042.014-.028c.005-.014.014-.028.019-.037a.097.097 0 01.018-.028l.024-.037c.004-.01.014-.019.018-.023.01-.01.019-.023.028-.033l.023-.023c.01-.01.024-.019.033-.028.01-.005.019-.014.028-.019.005 0 .005-.004.01-.009l6.218-4.144a.584.584 0 01.646 0l6.219 4.144c.005 0 .005.005.01.01.008.004.018.013.027.018.01.01.023.019.033.028l.023.023c.01.01.018.019.028.033.01.01.014.018.018.023.01.01.019.023.024.037.004.01.009.019.018.028a.14.14 0 01.019.037l.014.028.014.042c.004.01.004.019.01.028.004.014.008.033.008.051 0 .01.005.019.005.023.005.024.005.052.005.075v4.14h.009z" />
                    <path d="M17.633 12.977v-1.954L16.166 12l1.465.977z" />
                </g>
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M18.8 14.074c0 .028 0 .052-.005.075 0 .01-.004.018-.004.023-.005.019-.005.033-.01.051-.004.01-.004.019-.009.028l-.014.042-.014.028c-.005.014-.014.028-.018.037a.096.096 0 01-.02.028l-.022.037c-.005.01-.014.019-.019.024-.01.009-.018.023-.028.032l-.023.023c-.01.01-.023.019-.033.028-.009.005-.018.014-.027.019-.005 0-.005.005-.01.01l-6.223 4.148a.593.593 0 01-.651 0L5.45 14.563c-.005 0-.005-.005-.01-.01-.008-.004-.018-.014-.027-.018-.01-.01-.023-.019-.033-.028l-.023-.023c-.01-.01-.018-.019-.028-.033a.1.1 0 00-.018-.023.102.102 0 01-.024-.037c-.004-.01-.009-.019-.018-.028-.01-.014-.014-.028-.019-.037l-.014-.028-.014-.042c-.004-.01-.004-.019-.01-.028a.168.168 0 01-.008-.051c0-.01-.005-.019-.005-.024-.005-.023-.005-.05-.005-.074V9.935c0-.028 0-.051.005-.075 0-.009.005-.018.005-.023.004-.018.004-.032.009-.051.005-.01.005-.019.01-.028l.013-.042.014-.028c.005-.014.014-.028.019-.037.004-.01.009-.018.018-.028l.024-.037a.101.101 0 01.018-.023c.01-.01.019-.023.028-.033l.023-.023c.01-.01.024-.019.033-.028.01-.005.019-.014.028-.019.004 0 .004-.004.01-.009l6.218-4.144a.584.584 0 01.646 0l6.219 4.144c.005 0 .005.005.01.01.008.004.018.013.027.018.01.01.023.019.033.028l.023.023c.01.01.018.019.028.033.01.01.014.018.018.023a.1.1 0 01.024.037c.004.01.009.019.018.028.01.014.014.023.019.037l.014.028.014.042c.004.01.004.019.01.028.004.014.008.033.008.051 0 .01.005.019.005.023.005.024.005.052.005.075v4.14h.009zM6.367 12.977v-1.954L7.829 12l-1.46.977zm5.047-6.103V9.6l-2.535 1.698L6.833 9.93l4.581-3.056zm1.167 0l4.582 3.056-2.047 1.368L12.581 9.6V6.874zm-1.167 10.252l-4.581-3.052 2.046-1.372 2.535 1.698v2.726zm1.167 0V14.4l2.535-1.698 2.047 1.372-4.582 3.052zM9.931 12L12 10.618 14.065 12 12 13.38 9.93 12zm7.701-.977v1.954L16.167 12l1.465-.977z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
