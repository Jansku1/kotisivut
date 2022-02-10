import Link from 'next/link';
import Image from 'next/image';
import KauppaKortti from '../../components/KauppaKortti';
import styled from '../../styles/tuote.module.css';

export const getServerSideProps = async ({ params }) => {
	const res = await fetch(`${process.env.SERVER_URL}/api/langat/${params.id}`);
	const data = await res.json();
	return {
		props: {
			lanka: data
		}
	};
};

export default function TuoteTiedot({ lanka }) {
	return (
		<article className={styled.article}>
			<div className={styled.vasen}>
				<h2>{lanka.title}</h2>
				<Image src={lanka.img} width={400} height={400} alt={lanka.name} />
				<p>{lanka.desc}</p>
			</div>
			<div className={styled.oikea}>
				<p>Tuotetiedot</p>
				{lanka.explanation.map((rivi, index) => {
					return <p key={index}>{rivi}</p>;
				})}
				<p>Hinte: {lanka.price}€</p>
				{lanka.supply.map((tuote, index) => {
					return <KauppaKortti key={index} tuote={tuote} hinta={lanka.price} />;
				})}
			</div>
			<Link href="/osta">
				<button>Siirry maksamaan</button>
			</Link>
		</article>
	);
}
