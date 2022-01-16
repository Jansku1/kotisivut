import Head from 'next/head';
import Otsikko from '../components/Otsikko';
import Image from 'next/image';
import styled from '../styles/esittelyjapalvelut.module.css';

export default function ompelupalvelut() {
	return (
		<div>
			<Head>
				<title>Ompelupalvelut</title>
			</Head>
			<Otsikko otsikko={'Ompelupalvelut'} />
			<article className={styled.article}>
				<div className={styled.div}>
					<Image src="/images/muut/ompelukuva.jpg" width={619} height={429} alt="ompelukuva" />
				</div>
				<div className={styled.div}>
					<p className={styled.paragraf}>
						Teen kaikenlaiset korjausompelut ammattitaidolla. Käytössäni on useita ompelukoneita, jotka
						mahdollistavat myös paksumpien kankaiden ompelun, kuten sohvatyynyt. Teen myös korjausompelua.
					</p>
					<p className={styled.paragraf}>
						Tyypillisimpiä korjausompelutöitä ovat lahkeiden lyhennykset, vetoketjun vaihdot takkeihin sekä
						housuihin, verhojen ompelut ja lyhennykset sekä erilaiset tilaustyöt.
					</p>
					<p className={styled.paragraf}>Esimerkkihintoja</p>
					<ul>
						<li className={styled.li}>Lahkeiden lyhennykset alkaen 12 €</li>
						<li className={styled.li}>Vetoketjun vaihto alkaen 25 €</li>
						<li className={styled.li}>Verhojen lyhennykset alkaen 12 € /verho</li>
					</ul>
				</div>
			</article>
		</div>
	);
}
