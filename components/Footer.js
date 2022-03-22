import styled from '../styles/footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Hr from './Hr';

export default function Footer() {
	return (
		<footer className={styled.footer}>
			<Hr />
			<div className={styled.firma}>
				<div className={styled.div}>
					<p>Janskun Lanka ja Ompelupaja</p>
					<div className={styled.imagediv}>
						<Link href="https://www.facebook.com/Janskunlanka">
							<Image
								src="/images/icons/fb_icon.png"
								height={40}
								width={40}
								alt="fb link"
								className={styled.icon}
							/>
						</Link>
						<Link href={'https://www.instagram.com/janskunlanka/?hl=fi'}>
							<Image
								src="/images/icons/insta_icon.png"
								height={40}
								width={40}
								alt="instagram link"
								className={styled.icon}
							/>
						</Link>
					</div>
				</div>
				<div className={styled.div}>
					<p>Hämeentie 2 Puistolinna</p>
					<p>30100 Forssa</p>
					<p>Avoinna ma-pe 10-18, la 9-14</p>
				</div>

				<div className={styled.div}>
					<p>janskunompelupaja@gmail.com</p>
					<p>Puhelin: 050 361 5575</p>
				</div>
			</div>
			<div className={styled.contentful}>
				<p>Powered by</p>
				<Link href={'https://www.contentful.com'}>
					<Image
						src={'/images/logo/contentful.png'}
						width={150}
						height={30}
						alt="Powered by Contentful"
						className={styled.icon}
					/>
				</Link>
			</div>
		</footer>
	);
}
