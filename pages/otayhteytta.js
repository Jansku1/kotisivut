import Head from 'next/head';
import Otsikko from '../components/Otsikko';
import styled from '../styles/otayhteytta.module.css';

export default function otayhteytta() {
	return (
		<div>
			<Head>
				<title>Tule käymään</title>
			</Head>
			<Otsikko otsikko={'Tule käymään'} />
			<div className={styled.container}>
				<div className={styled.kartta}>
					<iframe
						className={styled.iframe}
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d578.4219811806428!2d23.62510481810463!3d60.814797058561545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468e9cb5cbe3d14d%3A0x796cd85e4e618328!2sH%C3%A4meentie%202%2C%2030100%20Forssa!5e0!3m2!1sfi!2sfi!4v1645623716186!5m2!1sfi!2sfi"
						allowfullscreen=""
					/>
				</div>
			</div>
		</div>
	);
}
