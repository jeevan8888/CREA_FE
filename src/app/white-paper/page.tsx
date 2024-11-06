import React from 'react';
import { Button } from '@/components/ui/button';
import { FaFileAlt } from 'react-icons/fa';
import StepProgress from './StepProgress';

function WhitePage() {
    const steps = [
        { title: 'Phase 1:Foundation', dateRange: '(August-October)', description: ['Objective: Establish a solid foundation for the project by developing an investor website and securing seed funding.' , 'Key Activities:', 'Investor Website Development: Finalize investor website development, including all necessary features and functionality.', 'Marketing and Outreach: Launch marketing campaigns to attract potential investors and raise awareness of the project.', 'Fundraising: Secure seed funding through private investors or seed rounds.', 'Create a Team: Assemble a core team of developers, designers, and marketers.'] },
        { title: 'Phase 2: Platform Development', dateRange: '(August-October)', description: ['Objective: Develop core features of the Creative Catalyst platform, including the CREA token, DAO, and grant system.', 'Key Activities:', 'Development of Smart Contracts: Develop and implement smart contracts for the CREA token, DAO projects, and grant distribution mechanisms.', 'Platform Development: Build the frontend and backend infrastructure for the Creative Catalyst platform, including user registration, project submission, and voting features.', 'Token Distribution: Conduct an initial coin offering (ICO) to distribute CREA tokens to investors and early adopters.'] },
        { title: 'Phase 3: Platform Launch and  Community Building', dateRange: '(January-April)', description: ['Objective: Launch the beta version of the Creative Catalyst platform and build an active community of creators, investors, and supporters.', 'Main Events:', 'Beta Launch: Launch the beta version of the Creative Catalyst platform, allowing users to test and provide feedback.', 'Community Engagement: Actively engage with the community through social media, forums, and events to foster a strong and supportive environment.', 'Project Funding: Begin accepting project proposals and funding creative projects through CREA token and DAO.'] },
        { title: 'Phase 4: Platform Expansion and  Growth', dateRange: '(April-August)', description: ['Objective: Expand the functionality and reach of the platform, attract a wider audience, and establish Creative Catalyst as the leading platform for creative projects.', 'Key Events:', 'Public Launch: Launch the public version of the Creative Catalyst platform, making it available to all users.', 'Partnership Development: Secure partnerships with creative organizations, festivals, galleries, and other stakeholders.', 'Developing New Features: Introduce new features and functionality to enhance the capabilities of the platform, such as NFT integration, collaboration tools, and educational resources.', 'Marketing and Promotion: Conduct ongoing marketing campaigns to promote the platform and attract new users.'] },
        { title: 'Phase 5: Ecosystem  Expansion and Sustainability', dateRange: '(September - ongoing)', description: ['Objective: Ensure long-term sustainability and growth by expanding the ecosystem, fostering innovation, and supporting global creative initiatives.', 'Key Focus Areas:', 'Global Outreach: Expand CREA’s presence internationally by collaborating with creative communities and influencers worldwide.', 'Sustainability Initiatives: Develop strategies to support sustainable practices within the creative industry, promoting green technologies and eco-friendly projects.', "Continuous Improvement: Establish a feedback loop to capture user input and continuously refine the platform's features and services to better meet community needs.", 'Innovation and Research: Invest in continuous research and development to stay at the forefront of technological advances and creative methodologies.'] },
    ];

    return (
        <section className="max-w-screen-2xl mx-auto p-6">
            <h1 className="text-[88px] font-bold text-white text-center">
                THE <span className="text-pink-700">WHITEPAPER</span>
            </h1>
            <div className="text-center my-6">
                <Button size="lg" className="bg-[#d9d9d9] rounded-2xl text-black font-bold text-4xl hover:bg-[#bfbfbf]">
                    <FaFileAlt className="mr-2" size={80} aria-hidden="true" />
                    Download
                </Button>
            </div>
            <h1 className="text-[88px] font-bold text-white text-center">
                THE <span className="text-pink-700">ROADMAP</span>
            </h1>
            <StepProgress steps={steps} />
        </section>
    );
}

export default WhitePage;