import type { SiteContent } from '../../types';

export const OfficialStoreLinks = ({ stores }: { stores: SiteContent['stores'] }) => {
 const available = Object.entries(stores).filter(([,v]) => v.enabled && /^https:\/\//.test(v.url));
 if (!available.length) return null;
 return <section id="toko-resmi" className="stores-section"><div className="stores-section__heading"><h2>Temukan Narwasita.</h2><p>Berbelanja melalui kanal resmi kami.</p></div><div className="stores-section__links">{available.map(([name, config]) => <a key={name} href={config.url} target="_blank" rel="noopener noreferrer"><span>{name === 'tiktok' ? 'TikTok Shop' : name.charAt(0).toUpperCase() + name.slice(1)}</span><span aria-hidden="true">↗</span></a>)}</div></section>;
};