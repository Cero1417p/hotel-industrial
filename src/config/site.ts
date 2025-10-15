export interface ContactInfo {
    email: string;
    phone: string;
    address: string;
}

export interface SocialLinks {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    tiktok: string;
}

export interface SiteConfig {
    name: string;
    description: string;
    url: string;
    contact: ContactInfo;
    social: SocialLinks;
}

export const siteConfig: SiteConfig = {
    name: 'Hostal Industrial',
    description: 'Somos una empresa dedicada a hacer cosas increíbles.',
    url: 'https://www.hostalindustrial.com',
    contact: {
        email: 'hostalindustrial.info@gmail.com',
        phone: '974173399',
        address: 'Av. Industrial N° 755 Cajamarca, Peru',
    },
    social: {
        facebook: 'https://www.facebook.com/share/1BACZ1iKbM/',
        twitter: 'https://twitter.com/miempresa',
        instagram: 'https://instagram.com/miempresa',
        linkedin: 'https://linkedin.com/company/miempresa',
        tiktok: 'https://tiktok.com/@hostal_induatrial',
    },
};