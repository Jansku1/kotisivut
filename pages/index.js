import Head from 'next/head';
import styled from '../styles/ctabtn.module.css';
import Slider from '../components/Slider';
import KumppanitSlider from '../components/KumppanitSlider';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Janskun Lanka</title>
				<meta
					name="description"
					content="Myös laaja valikoima ALE-lankoja! Lisäksi palveluihimme kuuluu korjausompelu, alihankintaompelu, sekä Vistan pesulan noutopiste. Tervetuloa paikan päälle!"
				/>
				<meta
					name="keywords"
					conntent="Jansku, ompelimo, langat, Forssa, myymälä, lanka, käsityö, lankavalikoima, vetoketjun vaihto, lahkeiden lyhennys, Janskun,koukut , puikot,Forssa, onpelutarvikkeet "
				/>
				<meta name="robots" content="index,follow" />
			</Head>
			<div>
				<Slider />
				<div className={styled.btncontainer}>
					<Link href="/langat">
						<button className={styled.btn}>
							<span>Tutustu lanka valikoimaamme</span>
						</button>
					</Link>
				</div>
				<KumppanitSlider />
			</div>
		</div>
	);
}
