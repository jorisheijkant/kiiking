export const languages = {
	et: 'Eesti',
	en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'et';

export const ui = {
	en: {
		'nav.home': 'Home',
		'nav.contact': 'Contact',
		'nav.facebook': 'Follow us on Facebook',
		'contact.text': 'You can contact us through',
	},
	et: {
		'nav.home': 'Avaleht',
		'nav.contact': 'Kontakt',
		'nav.facebook': 'Jälgi meid Facebookis',
		'contact.text': 'Võite meiega ühendust võtta aadressil',
	},
} satisfies Record<Lang, Record<string, string>>;

export function useTranslations(lang: Lang) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}

export function getLocalePath(targetLang: Lang, currentPath: string) {
	const withoutLocale = currentPath.replace(/^\/(en)/, '') || '/';
	if (targetLang === defaultLang) return withoutLocale;
	return `/${targetLang}${withoutLocale === '/' ? '/' : withoutLocale}`;
}
