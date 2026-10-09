import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight, Check, Compass, Mountain, Users } from 'lucide-react'
import { CONTACT, STATS, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Sarau Luxury — Moments that bring us together',
  description: 'Rancang outing, gathering, dan team building bersama Sarau Luxury. Pengalaman yang dirancang untuk mendekatkan tim, sejak 2018.',
  alternates: { canonical: SITE_URL },
}
const photo = (id: string) => `https://lh3.googleusercontent.com/d/${id}`
const experiences = [
  { title: 'Company gathering', text: 'Jeda dari rutinitas. Ruang untuk terhubung kembali.', image: '1lrnK9HRhjD0W-8uPDPQLWkGHBnEWmnQN', icon: Users },
  { title: 'Outdoor adventure', text: 'Petualangan baru, cerita yang dibawa pulang bersama.', image: '1e0Tuw7vsNhRpJv0dD09zkF-F6qjQgUXN', icon: Mountain },
  { title: 'Team building', text: 'Temukan kekuatan tim lewat pengalaman bermakna.', image: '1IVOSqzmigs7hd6bGF34SASET2Kcf8-lq', icon: Compass },
]
const packages = [
  { name: 'Silver', price: '525.000', subtitle: 'A little escape, a lasting connection.', features: ['Penginapan 2 hari 1 malam', '3× makan & 2× coffee break', 'Fun games & game master', 'Pemandu & dokumentasi'] },
  { name: 'Gold', price: '675.000', subtitle: 'More adventure. More shared stories.', features: ['Semua fasilitas Gathering Silver', 'Pilihan rafting atau paintball', 'Snack & kelapa muda', 'Aktivitas bersama pemandu'] },
  { name: 'Platinum', price: '925.000', subtitle: 'The complete team experience.', features: ['Penginapan & konsumsi', 'Rafting / paintball & team building', 'Bus pulang-pergi 2 hari 1 malam', 'Dokumentasi kegiatan'] },
]
export default function HomePage() {
 return <div className="editorial-home">
  <section className="sl-hero">
   <Image src={photo('1e0Tuw7vsNhRpJv0dD09zkF-F6qjQgUXN')} alt="Petualangan outing bersama Sarau Luxury" fill priority unoptimized sizes="100vw" className="sl-hero-image" />
   <div className="sl-hero-shade" />
   <div className="sl-hero-content sl-wrap">
    <span className="sl-eyebrow light"><span /> THOUGHTFULLY CURATED EXPERIENCES</span>
    <h1>Great moments.<br />Even better <em>together.</em></h1>
    <p>Dari perjalanan singkat hingga perayaan besar.<br className="desktop-break" /> Kami merancang pengalaman yang mendekatkan tim Anda.</p>
    <div className="sl-actions"><Link href="/packages" className="sl-button sl-button-light">Temukan pengalaman Anda <ArrowUpRight size={18}/></Link><Link href="/gallery" className="sl-text-link light">Lihat cerita kami <ArrowRight size={17}/></Link></div>
   </div>
   <div className="sl-hero-bottom sl-wrap"><span>OUTING · GATHERING · TEAM BUILDING</span><a href="#experiences">SCROLL TO EXPLORE ↓</a></div>
  </section>
  <section className="sl-proof sl-wrap" aria-label="Pengalaman Sarau Luxury"><p>Small details.<br/><em>Extraordinary memories.</em></p><div><strong>{STATS.totalEvents}+</strong><span>Event terselenggara</span></div><div><strong>{STATS.totalClients}+</strong><span>Klien perusahaan</span></div><div><strong>2018</strong><span>Awal perjalanan kami</span></div></section>
  <section id="experiences" className="sl-section sl-wrap">
   <div className="sl-section-head"><div><span className="sl-eyebrow">01 / THE EXPERIENCES</span><h2>Bukan sekadar acara.<br/><em>Sebuah cerita bersama.</em></h2></div><div className="sl-intro"><p>Setiap tim punya cerita berbeda. Kami membantu Anda menciptakan momen yang terasa tepat, dari konsep hingga detail terakhir.</p><Link href="/services" className="sl-text-link">Eksplorasi semua layanan <ArrowUpRight size={18}/></Link></div></div>
   <div className="sl-experiences">{experiences.map((x,i)=><Link href="/services" className="sl-experience" key={x.title}><div className="sl-photo"><Image src={photo(x.image)} alt={x.title + ' bersama Sarau Luxury'} fill unoptimized sizes="(max-width: 700px) 100vw, 33vw"/><span className="sl-photo-number">0{i+1}</span><span className="sl-photo-arrow"><ArrowUpRight size={22}/></span></div><div className="sl-card-title"><h3>{x.title}</h3><x.icon size={20}/></div><p>{x.text}</p></Link>)}</div>
  </section>
  <section className="sl-story"><div className="sl-story-photo"><Image src={photo('19Z0PLEUY2THTrafQ_NTJezJhfEZYF_V8')} alt="Peserta menikmati aktivitas outbound bersama" fill unoptimized sizes="(max-width: 700px) 100vw, 50vw"/><span className="sl-photo-label">REAL PEOPLE. REAL CONNECTIONS.</span></div><div className="sl-story-copy"><span className="sl-eyebrow light">THE SARAU WAY</span><h2>Anda menikmati<br/>momennya.<br/><em>Kami urus detailnya.</em></h2><p>Venue, transportasi, aktivitas, hingga dokumentasi. Satu tim yang mendampingi Anda agar setiap bagian acara berjalan selaras.</p><div className="sl-story-points"><span><Check size={17}/> Konsep sesuai kebutuhan tim</span><span><Check size={17}/> Pendampingan dari awal hingga akhir</span><span><Check size={17}/> Rencana dan fasilitas yang transparan</span></div><Link href="/about" className="sl-text-link light">Kenali Sarau Luxury <ArrowUpRight size={18}/></Link></div></section>
  <section className="sl-section sl-wrap"><div className="sl-section-head"><div><span className="sl-eyebrow">02 / YOUR NEXT GETAWAY</span><h2>Pilih awal dari<br/><em>cerita berikutnya.</em></h2></div><div className="sl-intro"><p>Paket gathering 2 hari 1 malam untuk minimal 20 peserta. Pilih pengalaman yang sesuai dengan tim Anda.</p><Link href="/packages" className="sl-text-link">Bandingkan fasilitas lengkap <ArrowUpRight size={18}/></Link></div></div><div className="sl-packages">{packages.map((x,i)=><article className={`sl-package ${i===1?'featured':''}`} key={x.name}><div className="sl-package-top"><span>GATHERING COLLECTION</span>{i===1&&<span className="sl-recommended">PILIHAN SARAU</span>}</div><h3>{x.name}</h3><p>{x.subtitle}</p><div className="sl-price"><span>Mulai dari</span><strong><small>Rp</small> {x.price}</strong><span>/ orang</span></div><ul>{x.features.map(f=><li key={f}><Check size={16}/>{f}</li>)}</ul><Link href="/booking" className={`sl-button ${i===1?'sl-button-light':'sl-button-outline'}`}>Rencanakan {x.name} <ArrowUpRight size={18}/></Link></article>)}</div><p className="sl-package-note">Harga dan ketersediaan dikonfirmasi berdasarkan tanggal, lokasi, dan kebutuhan acara Anda.</p></section>
  <section className="sl-process sl-wrap"><span className="sl-eyebrow">03 / EFFORTLESS FROM THE START</span><div className="sl-process-grid"><h2>Dari ide menjadi<br/><em>kenangan.</em></h2>{[{n:'01',t:'Ceritakan rencana Anda',d:'Bagikan tujuan acara, jumlah peserta, tanggal, dan anggaran.'},{n:'02',t:'Kami susun pengalamannya',d:'Diskusikan konsep, pilihan venue, dan rangkaian kegiatan bersama tim kami.'},{n:'03',t:'Hadir. Nikmati. Terhubung.',d:'Tim Sarau mendampingi pelaksanaan, Anda fokus menikmati kebersamaan.'}].map(x=><div key={x.n}><span className="sl-step">{x.n}</span><h3>{x.t}</h3><p>{x.d}</p></div>)}</div></section>
  <section className="sl-final"><span className="sl-eyebrow">LET’S MAKE SOMETHING MEMORABLE</span><h2>Tim yang hebat layak mendapat<br/><em>pengalaman yang istimewa.</em></h2><p>Mulai dengan sebuah percakapan. Kami bantu merancang sisanya.</p><a className="sl-button sl-button-dark" href={`https://wa.me/${CONTACT.phone1Wa}?text=${encodeURIComponent('Halo Sarau Luxury, saya ingin konsultasi rencana acara perusahaan.')}`} target="_blank" rel="noopener noreferrer">Konsultasi acara Anda <ArrowUpRight size={18}/></a><span className="sl-final-note">Tanpa biaya konsultasi · Dirancang untuk tim Anda</span></section>
 </div>
}
