// Resume data extracted from resume.json

export interface Role {
	id: string;
	position: string;
	period: string;
	description: string;
}

export interface Experience {
	id: string;
	company: string;
	position: string;
	location: string;
	period: string;
	website: string;
	description: string;
	roles: Role[];
}

export interface Project {
	id: string;
	name: string;
	period: string;
	website: string;
	description: string;
}

export interface Skill {
	id: string;
	name: string;
	keywords: string[];
}

export interface Language {
	id: string;
	language: string;
	fluency: string;
}

export const summary =
	'Software Engineer with 5+ years of experience, currently serving as Principal Engineer, leading technical decisions and building scalable web and mobile applications in remote, async-first environments, with strong full-stack expertise and a proactive ownership mindset to deliver high-impact, user-centric, and globally scalable solutions.';

export const basics = {
	name: 'Rizal Suryawan',
	headline: 'Software Engineer',
	email: 'rizalsuryawan86@gmail.com',
	phone: '+6285813095235',
	location: 'Indonesia',
	website: 'https://rizal.deno.dev/',
	linkedin: 'https://www.linkedin.com/in/rizal-suryawan/'
};

export const experience: Experience[] = [
	{
		id: 'netpolitan',
		company: 'PT Netpolitan Cipta Cakrabuana',
		position: 'Full-Stack Developer',
		location: 'Indonesia, Tangerang',
		period: 'October 2025 - Present',
		website: 'https://www.netpolitanteam.com/',
		description: '',
		roles: [
			{
				id: 'netpolitan-fullstack',
				position: 'Full-Stack Developer',
				period: 'October 2025 - Present',
				description:
					'Led end-to-end development of AI-powered features for an LMS platform across web and mobile applications. Designed and implemented system prompts to ensure consistent, context-aware, and reliable AI agent behavior. Built and integrated APIs with LLM (OpenAI) to enable intelligent automation and conversational experiences. Developed AI-powered recommendation systems to enhance user engagement and personalization. Implemented AI agent capabilities with function calling to enable dynamic interaction with backend services and tools. Engineered scalable backend services to support seamless communication between frontend, mobile apps, and AI systems.'
			}
		]
	},
	{
		id: 'changemakr',
		company: 'CHANGEMAKR ASIA',
		position: '',
		location: 'Singapore',
		period: 'May 2025 - Present',
		website: 'https://changemakr.asia/',
		description:
			'Developed responsive and user-friendly interfaces with consistent UI/UX across platforms. Collaborated with backend teams to integrate APIs and enhance overall user experience.',
		roles: [
			{
				id: 'changemakr-principal',
				position: 'Principal Engineer',
				period: 'February 2026 - Present',
				description:
					'Lead technical direction and architecture for scalable web and mobile applications in a remote, async-first environment. Drive end-to-end development while ensuring performance, maintainability, and high-quality user experience. Collaborate across teams and improve engineering efficiency through best practices, internal tools, and clear documentation.'
			},
			{
				id: 'changemakr-fullstack',
				position: 'Full Stack Engineer',
				period: 'August 2025 - January 2026',
				description:
					'Built and maintained scalable web applications across frontend and backend systems. Delivered features aligned with product requirements while optimizing performance and reliability.'
			},
			{
				id: 'changemakr-frontend',
				position: 'Frontend Engineer',
				period: 'May 2025 - August 2025',
				description:
					'Developed responsive and user-friendly interfaces with consistent UI/UX across platforms. Collaborated with backend teams to integrate APIs and enhance overall user experience.'
			}
		]
	},
	{
		id: 'telexindo',
		company: 'PT TELEXINDO BIZMART',
		position: 'Application Developer',
		location: 'Indonesia, Jakarta',
		period: 'February 2022 - July 2025',
		website: 'https://telexindo.com/',
		description:
			'Developed and maintained scalable web and mobile applications. Collaborated with cross-functional teams to ensure consistent UI/UX. Optimized performance and improved application reliability. Contributed to internal tools, standards, and technical documentation. Provided technical support and resolved issues efficiently.',
		roles: []
	}
];

export const projects: Project[] = [
	{
		id: 'agent-client-sdk',
		name: 'Agent Client SDK',
		period: '2026',
		website: 'https://www.npmjs.com/package/@rizal_ncc/agent-client',
		description:
			'Agent Client SDK is a developer-focused library that enables seamless integration of intelligent AI agents into applications, supporting contextual chatbots, function calling, personalized learning assistance, and smart search capabilities for delivering relevant and dynamic user interactions.'
	},
	{
		id: 'ai-agent-service',
		name: 'AI Agent Service',
		period: '2025',
		website: 'https://ncc.bawana.com/',
		description:
			'Building AI Agent Service on BAWANA LMS is an intelligent platform that enables the creation of contextual AI chatbots, featuring a Learning Assistant with function calling integration, an AI Mentor that guides users through course materials based on their learning context, and an AI Smart Search that delivers highly relevant results from user queries.'
	},
	{
		id: 'bawana-mobile',
		name: 'Bawana Mobile Learning',
		period: '2025',
		website: '',
		description:
			'Bawana Mobile Learning is an AI-integrated learning platform that enhances user experience through intelligent assistance, personalized learning support, and contextual interactions.'
	},
	{
		id: 'blue-card',
		name: 'Blue Card Mobile App / Kartu Biru',
		period: '2026',
		website: '',
		description:
			'Application for recording the results of fishermen, fish ponds, crafts, profits and so on which are recorded using blockchain technology.'
	},
	{
		id: 'climafund',
		name: 'ClimaFund',
		period: '2025',
		website: 'https://climafund.co/',
		description:
			'ClimaFund is a user-friendly web platform that bridges technology and sustainability by leveraging Google Earth Engine to transform complex satellite data into intuitive visualizations, empowering coastal restoration through effective mangrove monitoring and comprehensive environmental indicator tracking.'
	},
	{
		id: 'quiz-app',
		name: 'Quiz Mobile App Assessment',
		period: '2024',
		website: '',
		description:
			'Quiz Mobile App Assessment is a quiz-based mobile application developed specifically for PT Telexindo Bizmart employees. It serves as a knowledge assessment tool and an interactive learning tool, offering a lighter, more engaging, and accessible approach.'
	},
	{
		id: 'attendance-app',
		name: 'Mobile Attendance App',
		period: '2024',
		website: '',
		description:
			'Mobile Attendance App is an internal mobile application developed for PT Telexindo Bizmart employees to support the daily attendance process in a faster, more efficient, and integrated manner.'
	},
	{
		id: 'e-recruitment',
		name: 'Telexindo e-Recruitment',
		period: '2023',
		website: 'https://recruitment.telexindo.com/',
		description:
			'The Telexindo e-Recruitment Platform is a web-based application designed to digitize the recruitment process at PT Telexindo Bizmart. It allows candidates to easily register while providing the HR team with quick access to review and manage applications.'
	},
	{
		id: 'icca',
		name: 'ICCA (Indonesia Contact Center Association)',
		period: '2022',
		website: 'https://icca.co.id/',
		description:
			'The ICCA website is the official digital interface for the Indonesia Contact Center Association—an association that advances the role of contact centers in supporting the economy, culture, and society in Indonesia and Southeast Asia.'
	},
	{
		id: 'telexindo-profile',
		name: 'Telexindo Company Profile',
		period: '2022',
		website: 'https://telexindo.com/',
		description:
			'Create a custom PHP-based WordPress theme for a company profile landing page.'
	}
];

export const skills: Skill[] = [
	{
		id: 'ai-llm',
		name: 'AI & LLM Integration',
		keywords: ['OpenAI API', 'Prompt Engineering', 'AI Agents', 'Function Calling']
	},
	{
		id: 'fullstack',
		name: 'Full-Stack Development',
		keywords: [
			'React.js',
			'CodeIgniter',
			'Django',
			'Golang (Echo)',
			'REST API',
			'MVC',
			'Web Development',
			'Alpine.js',
			'Node.js',
			'Express.js',
			'NestJS',
			'FastAPI',
			'WordPress'
		]
	},
	{
		id: 'mobile',
		name: 'Mobile Development',
		keywords: [
			'Flutter',
			'Bloc',
			'Provider',
			'Cross-platform',
			'Mobile UI',
			'REST Integration'
		]
	}
];

export const languages: Language[] = [
	{
		id: 'id',
		language: 'Indonesian',
		fluency: 'Native'
	},
	{
		id: 'en',
		language: 'English',
		fluency: 'Professional Working Proficiency'
	}
];
