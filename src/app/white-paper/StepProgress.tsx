import React from 'react';
import PropTypes from 'prop-types';
import { MdDateRange } from 'react-icons/md';
import { prototype } from 'events';

function Step({ title, dateRange, description }: { title: string; dateRange: string; description: Array<string> }) {
    return (
        <li className="relative flex items-start space-x-4 text-white">
            <span className="absolute -left-[77px] top-[-10] rounded-full bg-white h-[62px] w-[62px]" aria-hidden="true" />
            <div className="grid grid-cols-3">
                <div className='mr-[84px]'>
                    <p className="text-[40px] font-[700] font-sans leading-[50px] tracking-[-3px] col-span-1">{title}</p>
                    <p className="text-[32px] font-[300] font-sans leading-[50px] tracking-[-3px] col-span-1">{dateRange}</p>
                </div>
                {/* <p className="text-[20px] font-[300] leading-[25px] col-span-2">{description}</p> */}
                <ul className="shrink-0 text-[20px] font-[300] leading-[25px] col-span-2">
                    {description.map((data, index) => (
                        <li key={index} className='list-disc'>
                            {data}
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
}

Step.propTypes = {
    title: PropTypes.string.isRequired,
    dateRange: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
};

interface Step {
    title: string;
    dateRange: string;
    description: Array<string>;
}

function StepProgress({ steps }: { steps: Step[] }) {
    return (
        <div className="max-w-screen-2xl mx-auto p-6 relative">
            <div className="relative">
                <div className="absolute -left-12 top-1 w-1 bg-gray-200 h-[1100px]"></div>
                <ol className="relative z-10 flex flex-col space-y-8 text-sm font-medium text-gray-500">
                    {steps.map((step, index) => (
                        <Step key={index} title={step.title} dateRange={step.dateRange} description={step.description} />
                    ))}
                </ol>
            </div>
        </div>
    );
}

StepProgress.propTypes = {
    steps: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            dateRange: PropTypes.string.isRequired,
            description: PropTypes.array.isRequired,
        })
    ).isRequired,
};

export default StepProgress;
