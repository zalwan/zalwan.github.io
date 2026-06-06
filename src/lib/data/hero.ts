import { summary, basics } from './resume';

export const profileData = {
	badge: basics.headline,
	heading: "Hello! I'm",
	fullName: basics.name,
	description: summary,
	image: {
		src: '/img/hero-img.webp',
		alt: `${basics.name} portrait`
	}
};

export const contactLinks = [
	{
		text: 'Chat on WhatsApp',
		url: 'https://wa.me/6285813095235?text=Hi%20Rizal,%20I%20found%20your%20web%20and%20would%20like%20to%20connect!'
	}
];

export const socialMediaLinks = [
	{ id: 'github', label: 'GitHub', url: 'https://github.com/zalwan' },
	{ id: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/rizal-suryawan' },
	{ id: 'youtube', label: 'YouTube', url: 'https://youtube.com/@rizalsuryawan86' }
];
